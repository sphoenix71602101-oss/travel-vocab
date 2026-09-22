const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const html = read("index.html");
const app = read("app.js");
const sw = read("sw.js");
const manifest = JSON.parse(read("manifest.webmanifest"));
const sandbox = { window: {} };
vm.runInNewContext(read("core/destinations.js"), sandbox);
const destinations = sandbox.window.TRAVEL_DESTINATIONS.all;

function pngDimensions(relativePath) {
  const buffer = fs.readFileSync(path.join(root, relativePath));
  assert.equal(buffer.toString("ascii", 1, 4), "PNG");
  return [buffer.readUInt32BE(16), buffer.readUInt32BE(20)];
}

test("Manifest 保留安装所需配置和图标", () => {
  assert.equal(manifest.id, "./");
  assert.equal(manifest.start_url, "./");
  assert.equal(manifest.scope, "./");
  assert.equal(manifest.display, "standalone");
  assert.deepEqual(pngDimensions("icons/icon-192.png"), [192, 192]);
  assert.deepEqual(pngDimensions("icons/icon-512.png"), [512, 512]);
  assert.match(html, /rel="manifest" href="manifest\.webmanifest"/);
  assert.match(app, /serviceWorker\.register\("\.\/sw\.js", \{ scope: "\.\/" \}\)/);
});

test("目的地配置独立管理语言资源和主题图", () => {
  assert.equal(destinations.length, 5);
  for (const destination of destinations.filter((item) => item.status === "available")) {
    assert.ok(fs.existsSync(path.join(root, destination.resources.pack)));
    for (const resource of destination.resources.beginner) assert.ok(fs.existsSync(path.join(root, resource)));
    for (const image of Object.values(destination.hero)) assert.ok(fs.existsSync(path.join(root, image)));
    assert.ok(fs.existsSync(path.join(root, destination.flagSrc)));
  }
  assert.match(html, /src="core\/destinations\.js"/);
  assert.doesNotMatch(html, /<script src="languages\//);
  assert.match(app, /function loadLanguage\(packId\)/);
  assert.match(app, /destination\.resources\.pack/);
  assert.match(app, /destination\.resources\.beginner/);
});

test("Service Worker 仅预缓存共享外壳，语言和音频不预加载", () => {
  const shell = sw.match(/const APP_SHELL = \[([\s\S]*?)\];/)[1];
  for (const file of ["index.html", "styles.css", "app.js", "core/content-registry.js", "core/destinations.js", "core/beginner-module-registry.js", "core/emergency-card.js", "core/favorites.js"]) {
    assert.match(shell, new RegExp(`"${file.replace(/[.]/g, "\\.")}"`));
  }
  assert.doesNotMatch(shell, /languages\/|audio\/|images\/|icons\//);
  assert.match(sw, /if \(!shellUrls\.has\(requestUrl\.href\) && request\.mode !== "navigate"\) return/);
  assert.match(sw, /fetch\(request, \{ cache: "no-cache" \}\)\.then/);
  assert.match(sw, /\.catch\(async \(\) =>/);
  assert.match(sw, /self\.skipWaiting\(\)/);
  assert.match(sw, /name\.startsWith\(LEGACY_CACHE_PREFIX\)/);
  assert.match(sw, /name\.startsWith\(CACHE_PREFIX\) && name !== CACHE_NAME/);
});
