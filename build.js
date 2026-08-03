/**
 * Static site -> public/ for Vercel outputDirectory.
 * Overlays root assets onto public/ (keeps verification files).
 */
const fs = require("fs");
const path = require("path");

const out = "public";
const skip = new Set([
  "public",
  "node_modules",
  ".git",
  ".vercel",
  "build.js",
  "package.json",
  "package-lock.json",
  "vercel.json",
  "DONE.md",
  "AGENTS.md",
  "CLAUDE.md",
  "README.md",
  ".env.local",
  ".gitignore",
]);

if (!fs.existsSync(out)) fs.mkdirSync(out);

for (const name of fs.readdirSync(".")) {
  if (skip.has(name) || name.startsWith(".")) continue;
  fs.cpSync(name, path.join(out, name), { recursive: true });
}

if (!fs.existsSync(path.join(out, "index.html"))) {
  console.error("build failed: public/index.html missing");
  process.exit(1);
}
console.log("build: public/ ready (" + fs.readdirSync(out).length + " entries)");