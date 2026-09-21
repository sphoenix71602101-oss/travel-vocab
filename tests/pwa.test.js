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

function pngColorType(relativePath) {
  const buffer = fs.readFileSync(path.join(root, relativePath));
  assert.equal(buffer.toString("ascii", 12, 16), "IHDR", `${relativePath} 缺少 IHDR`);
  return buffer.readUInt8(25);
}

function assertWebp(relativePath) {
  const buffer = fs.readFileSync(path.join(root, relativePath));
  assert.equal(buffer.toString("ascii", 0, 4), "RIFF", `${relativePath} 缺少 RIFF 文件头`);
  assert.equal(buffer.toString("ascii", 8, 12), "WEBP", `${relativePath} 不是 WebP`);
}

test("Manifest 包含可安装 PWA 所需配置", () => {
  assert.equal(manifest.name, "语见世界 · 旅行语言学习");
  assert.equal(manifest.short_name, "语见世界");
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
    ["icons/icon-512.png", 512]
  ]);
  assert.deepEqual(new Set(manifest.icons.map((icon) => icon.src)), new Set(expected.keys()));
  for (const icon of manifest.icons) {
    assert.doesNotMatch(icon.src, /^\//);
    const size = expected.get(icon.src);
    assert.deepEqual(pngDimensions(icon.src), { width: size, height: size });
  }
  assert.deepEqual(pngDimensions("icons/apple-touch-icon.png"), { width: 180, height: 180 });
  assert.equal(manifest.icons.find((icon) => icon.src === "icons/icon-512.png").purpose, "any maskable");
});

test("页面使用相对路径接入 Manifest、图标和 Service Worker", () => {
  assert.match(html, /rel="manifest" href="manifest\.webmanifest"/);
  assert.match(html, /rel="apple-touch-icon" href="icons\/apple-touch-icon\.png"/);
  assert.doesNotMatch(html, /(?:src|href)="\//);
  assert.match(app, /serviceWorker\.register\("\.\/sw\.js", \{ scope: "\.\/" \}\)/);
});

test("八个旅行场景图标存在且为 256px RGBA PNG", () => {
  for (const scene of ["airport", "transport", "hotel", "food", "shopping", "directions", "basics", "emergency"]) {
    const iconPath = `icons/scenes/${scene}.png`;
    assert.deepEqual(pngDimensions(iconPath), { width: 256, height: 256 });
    assert.equal(pngColorType(iconPath), 6, `${iconPath} 必须保留 RGBA 透明通道`);
    assert.match(app, new RegExp(`${scene}: "icons/scenes/${scene}\\.png"`));
    assert.match(serviceWorker, new RegExp(`"icons/scenes/${scene}\\.png"`));
  }
});

test("四个主导航图标提供常态与加粗态透明 PNG", () => {
  for (const name of ["home", "review", "tools", "me"]) {
    for (const suffix of ["", "-active"]) {
      const iconPath = `icons/navigation/${name}${suffix}.png`;
      assert.deepEqual(pngDimensions(iconPath), { width: 256, height: 256 });
      assert.equal(pngColorType(iconPath), 6, `${iconPath} 必须保留 RGBA 透明通道`);
      assert.match(html, new RegExp(`src="${iconPath}"`));
      assert.match(serviceWorker, new RegExp(`"${iconPath}"`));
    }
  }
  assert.match(html, /icons\/navigation\/review\.png/);
  assert.doesNotMatch(html, /M20\.5 10\.5A8\.5/);
});

test("页面功能图标为 256px RGBA PNG 并进入离线缓存", () => {
  const icons = {
    review: "review",
    complete: "complete",
    exchange: "exchange",
    checklist: "checklist",
    trip: "trip-map",
    favorite: "favorite",
    randomReview: "random-review",
    emergencyCard: "emergency-card",
    translate: "translate",
    privacy: "privacy",
    install: "install",
    deleteData: "delete-data",
    warning: "warning"
  };
  for (const [key, file] of Object.entries(icons)) {
    const iconPath = `icons/ui/${file}.png`;
    assert.deepEqual(pngDimensions(iconPath), { width: 256, height: 256 });
    assert.equal(pngColorType(iconPath), 6, `${iconPath} 必须保留 RGBA 透明通道`);
    assert.match(app, new RegExp(`${key}: "icons/ui/${file}\\.png"`));
    assert.match(serviceWorker, new RegExp(`"icons/ui/${file}\\.png"`));
  }
});

test("首页目的地顶图提供响应式 WebP 并进入离线缓存", () => {
  for (const asset of [
    "images/heroes/default-mobile.webp",
    "images/heroes/default-wide.webp",
    "images/heroes/jp-mobile.webp",
    "images/heroes/jp-wide.webp",
    "images/heroes/us-mobile.webp",
    "images/heroes/us-wide.webp"
  ]) {
    assertWebp(asset);
    assert.match(app, new RegExp(asset.replace(/[.]/g, "\\.")));
    assert.match(serviceWorker, new RegExp(`"${asset.replace(/[.]/g, "\\.")}"`));
  }
  assert.match(app, /HERO_IMAGE_PATHS\[destinationId\] \|\| DEFAULT_HERO_IMAGE/);
});

test("首页学习入口插画进入离线缓存", () => {
  for (const asset of [
    "images/home-actions/learning-card.svg",
    "images/home-actions/reading-card.svg"
  ]) {
    assert.equal(fs.existsSync(path.join(root, asset)), true, `缺少 ${asset}`);
    assert.match(app, new RegExp(asset.replace(/[.]/g, "\\.")));
    assert.match(serviceWorker, new RegExp(`"${asset.replace(/[.]/g, "\\.")}"`));
  }
});

test("安装提示按平台能力显示并在已安装后隐藏", () => {
  assert.match(app, /addEventListener\("beforeinstallprompt"/);
  assert.match(app, /event\.preventDefault\(\)/);
  assert.match(app, /deferredInstallPrompt\.prompt\(\)/);
  assert.match(app, /addEventListener\("appinstalled"/);
  assert.match(app, /\(display-mode: standalone\)/);
  assert.match(app, /window\.navigator\.standalone === true/);
  assert.match(app, /添加到主屏幕/);
  assert.match(app, /yujianWorld\.installHintDismissed\.v1/);
});

test("Service Worker 仅预缓存核心应用壳", () => {
  const shellMatch = serviceWorker.match(/const APP_SHELL = \[([\s\S]*?)\];/);
  assert.ok(shellMatch, "找不到 APP_SHELL 清单");
  const shell = shellMatch[1];
  for (const asset of [
    "index.html", "styles.css", "data.js", "beginner-data.js", "english-beginner-data.js", "english-beginner-audio.js", "emergency-card.js", "app.js", "manifest.webmanifest",
    "icons/icon-192.png", "icons/icon-512.png",
    "icons/apple-touch-icon.png", "images/heroes/default-mobile.webp", "images/heroes/default-wide.webp",
    "images/heroes/jp-mobile.webp", "images/heroes/jp-wide.webp",
    "images/heroes/us-mobile.webp", "images/heroes/us-wide.webp"
  ]) {
    assert.match(shell, new RegExp(asset.replace(/[.]/g, "\\.")), `缺少 ${asset}`);
  }
  assert.doesNotMatch(shell, /audio\//);
  assert.doesNotMatch(shell, /\.mp3/i);
});

test("界面资源更新后使用新的应用壳缓存版本", () => {
  assert.match(serviceWorker, /const CACHE_NAME = `\$\{CACHE_PREFIX\}v41`/);
});

test("Service Worker 绕过音频并安全清理旧版本缓存", () => {
  assert.match(serviceWorker, /const CACHE_NAME = `\$\{CACHE_PREFIX\}v[1-9][0-9]*`/);
  assert.match(serviceWorker, /const CACHE_PREFIX = "yujian-world-shell-"/);
  assert.match(serviceWorker, /const LEGACY_CACHE_PREFIX = "travel-vocab-shell-"/);
  assert.match(serviceWorker, /requestUrl\.href\.startsWith\(audioRootUrl\)\) return/);
  assert.doesNotMatch(serviceWorker, /skipWaiting/);
  assert.match(serviceWorker, /name\.startsWith\(CACHE_PREFIX\) && name !== CACHE_NAME/);
  assert.match(serviceWorker, /name\.startsWith\(LEGACY_CACHE_PREFIX\)/);
  assert.match(serviceWorker, /self\.clients\.claim\(\)/);
});
