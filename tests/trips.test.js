const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "core/trips.js"), "utf8");

function loadTrips(initial = {}, failWrites = false) {
  const values = new Map(Object.entries(initial));
  const localStorage = {
    getItem(key) { return values.has(key) ? values.get(key) : null; },
    setItem(key, value) { if (failWrites) throw new Error("full"); values.set(key, String(value)); }
  };
  const context = { window: { localStorage }, Set, Object, JSON };
  vm.createContext(context);
  vm.runInContext(source, context);
  return { api: context.window.TRAVEL_TRIPS, values };
}

test("行程状态按目的地独立保存且可修改", () => {
  const { api } = loadTrips();
  const ids = ["jp", "us", "kr"];
  assert.equal(api.getStatus("jp", ids), "unknown");
  assert.equal(api.setStatus("jp", "not-yet", ids), true);
  assert.equal(api.setStatus("us", "visited", ids), true);
  assert.equal(api.getStatus("jp", ids), "not-yet");
  assert.equal(api.getStatus("us", ids), "visited");
  api.setStatus("jp", "visited", ids);
  assert.equal(api.getStatus("jp", ids), "visited");
});

test("行程状态可清除并过滤失效目的地", () => {
  const key = "yujianWorld.trips.v1";
  const { api, values } = loadTrips({ [key]: JSON.stringify({ destinations: { jp: "visited", removed: "visited", us: "bad" } }) });
  assert.deepEqual({ ...api.getAll(["jp", "us"]) }, { jp: "visited" });
  api.clearStatus("jp", ["jp", "us"]);
  assert.equal(api.getStatus("jp", ["jp", "us"]), "unknown");
  assert.deepEqual(JSON.parse(values.get(key)).destinations, {});
});

test("损坏或不可写存储安全回退", () => {
  const key = "yujianWorld.trips.v1";
  assert.equal(loadTrips({ [key]: "{" }).api.getStatus("jp", ["jp"]), "unknown");
  assert.equal(loadTrips({}, true).api.setStatus("jp", "visited", ["jp"]), false);
  assert.equal(loadTrips().api.setStatus("unknown-id", "visited", ["jp"]), false);
});
