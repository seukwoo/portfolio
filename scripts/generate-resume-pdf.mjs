// Builds public/docs/resume.pdf from the /resume/print page, so the PDF always matches the site content.
// Usage: pnpm resume:pdf   (runs `next build` first, then this script)
// Needs Google Chrome installed locally (override the path with CHROME_PATH).
import { spawn } from "node:child_process";
import { mkdir, writeFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "public/docs/resume.pdf");
const APP_PORT = 4319;
const DEBUG_PORT = 9349;
const CHROME =
  process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function waitFor(url, label) {
  for (let i = 0; i < 120; i++) {
    try {
      if ((await fetch(url)).ok) return;
    } catch {}
    await sleep(250);
  }
  throw new Error(`${label} did not start: ${url}`);
}

const profileDir = path.join(os.tmpdir(), "resume-pdf-chrome");
const app = spawn(path.join(ROOT, "node_modules/.bin/next"), ["start", "-p", String(APP_PORT)], {
  cwd: ROOT,
  stdio: "ignore",
  detached: true,
});
const chrome = spawn(
  CHROME,
  ["--headless=new", `--remote-debugging-port=${DEBUG_PORT}`, `--user-data-dir=${profileDir}`, "--no-first-run", "about:blank"],
  { stdio: "ignore", detached: true },
);
const stop = () => {
  for (const p of [app, chrome]) {
    try {
      process.kill(-p.pid);
    } catch {}
  }
};

try {
  await waitFor(`http://localhost:${APP_PORT}/resume/print`, "next start");
  await waitFor(`http://127.0.0.1:${DEBUG_PORT}/json/version`, "Chrome");

  const tab = await (await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new?about:blank`, { method: "PUT" })).json();
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener("open", r, { once: true }));
  let id = 0;
  const pending = new Map();
  const events = [];
  ws.addEventListener("message", (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) {
      pending.get(m.id)(m);
      pending.delete(m.id);
    } else events.push(m);
  });
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const i = ++id;
      pending.set(i, (m) => (m.error ? reject(new Error(m.error.message)) : resolve(m.result)));
      ws.send(JSON.stringify({ id: i, method, params }));
    });

  await send("Page.enable");
  // Light theme, no motion, print media — the PDF never depends on the visitor's settings.
  await send("Emulation.setEmulatedMedia", {
    media: "print",
    features: [
      { name: "prefers-color-scheme", value: "light" },
      { name: "prefers-reduced-motion", value: "reduce" },
    ],
  });
  await send("Page.navigate", { url: `http://localhost:${APP_PORT}/resume/print` });
  for (let t = 0; t < 100 && !events.some((e) => e.method === "Page.loadEventFired"); t++) await sleep(100);
  await send("Runtime.evaluate", { expression: "document.fonts.ready.then(() => true)", awaitPromise: true });

  const { data } = await send("Page.printToPDF", {
    paperWidth: 8.27, // A4
    paperHeight: 11.69,
    marginTop: 0.55,
    marginBottom: 0.55,
    marginLeft: 0.6,
    marginRight: 0.6,
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: "<span></span>",
    footerTemplate:
      '<div style="width:100%;font-size:8px;color:#888;text-align:center"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
  });
  await mkdir(path.dirname(OUT), { recursive: true });
  await writeFile(OUT, Buffer.from(data, "base64"));
  ws.close();
  console.log(`Wrote ${path.relative(ROOT, OUT)}`);
} finally {
  stop();
  // Chrome may still be flushing its profile for a moment after being killed.
  await rm(profileDir, { recursive: true, force: true, maxRetries: 10, retryDelay: 200 }).catch(() => {});
}
