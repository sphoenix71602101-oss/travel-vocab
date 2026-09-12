const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const manifest = JSON.parse(read("manifest.webmanifest"));
const html = read("index.html");
const app = read("app.js");
const serviceWorker = read("sw.js");

function pngDimensions(relativePath) {
  const buffer = fs.readFileSync(path.join(root, relativePath));
  assert.equal(buffer.toString("ascii", 1, 4), "PNG", `${relativePath} 不是 PNG`);
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

test("Manifest 包含可安装 PWA 所需配置", () => {
  assert.equal(manifest.name, "旅行单词 · 日语 / 英语");
  assert.equal(manifest.short_name, "旅行单词");
  assert.equal(manifest.id, "./");
  assert.equal(manifest.start_url, "./");
  assert.equal(manifest.scope, "./");
  assert.equal(manifest.display, "standalone");
  assert.equal(manifest.theme_color, "#f5f9ff");
  assert.equal(manifest.background_color, "#f5f9ff");
});

test("Manifest 图标路径稳定且尺寸正确", () => {
  const expected = new Map([
    ["icons/icon-192.png", 192],
    ["icons/icon-512.png", 512],
    ["icons/icon-maskable-512.png", 512]
  ]);
  assert.deepEqual(new Set(manifest.icons.map((icon) => icon.src)), new Set(expected.keys()));
  for (const icon of manifest.icons) {
    assert.doesNotMatch(icon.src, /^\//);
    const size = expected.get(icon.src);
    assert.deepEqual(pngDimensions(icon.src), { width: size, height: size });
  }
  assert.deepEqual(pngDimensions("icons/apple-touch-icon.png"), { width: 180, height: 180 });
  assert.equal(manifest.icons.find((icon) => icon.src === "icons/icon-maskable-512.png").purpose, "maskable");
});

test("页面使用相对路径接入 Manifest、图标和 Service Worker", () => {
  assert.match(html, /rel="manifest" href="manifest\.webmanifest"/);
  assert.match(html, /rel="apple-touch-icon" href="icons\/apple-touch-icon\.png"/);
  assert.doesNotMatch(html, /(?:src|href)="\//);
  assert.match(app, /serviceWorker\.register\("\.\/sw\.js", \{ scope: "\.\/" \}\)/);
});

test("安装提示按平台能力显示并在已安装后隐藏", () => {
  assert.match(app, /addEventListener\("beforeinstallprompt"/);
  assert.match(app, /event\.preventDefault\(\)/);
  assert.match(app, /deferredInstallPrompt\.prompt\(\)/);
  assert.match(app, /addEventListener\("appinstalled"/);
  assert.match(app, /\(display-mode: standalone\)/);
  assert.match(app, /window\.navigator\.standalone === true/);
  assert.match(app, /添加到主屏幕/);
  assert.match(app, /travelVocab\.installHintDismissed\.v1/);
});

test("Service Worker 仅预缓存核心应用壳", () => {
  const shellMatch = serviceWorker.match(/const APP_SHELL = \[([\s\S]*?)\];/);
  assert.ok(shellMatch, "找不到 APP_SHELL 清单");
  const shell = shellMatch[1];
  for (const asset of [
    "index.html", "styles.css", "data.js", "app.js", "manifest.webmanifest",
    "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png",
    "icons/apple-touch-icon.png"
  ]) {
    assert.match(shell, new RegExp(asset.replace(/[.]/g, "\\.")), `缺少 ${asset}`);
  }
  assert.doesNotMatch(shell, /audio\//);
  assert.doesNotMatch(shell, /\.mp3/i);
});

test("Service Worker 绕过音频并安全清理旧版本缓存", () => {
  assert.match(serviceWorker, /const CACHE_NAME = `\$\{CACHE_PREFIX\}v[1-9][0-9]*`/);
  assert.match(serviceWorker, /requestUrl\.href\.startsWith\(audioRootUrl\)\) return/);
  assert.doesNotMatch(serviceWorker, /skipWaiting/);
  assert.match(serviceWorker, /name\.startsWith\(CACHE_PREFIX\) && name !== CACHE_NAME/);
  assert.match(serviceWorker, /self\.clients\.claim\(\)/);
});
