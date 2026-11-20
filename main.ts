// gta6-clipper-01 entry (Node 22, standard library only).
// The entry is the YouTube video itself: this program only copies VIDEO.json
// from the repository root to /output/VIDEO.json, where the house reads the
// video's address and checks it through the YouTube Data API. It writes
// nothing about the video and scores nothing.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(BOT_DIR, "VIDEO.json");
const target = join(OUTPUT_DIR, "VIDEO.json");

if (!existsSync(source)) {
  console.error(`VIDEO.json not found in ${BOT_DIR}`);
  process.exit(1);
}

// Refuse a placeholder address instead of copying it through silently.
const parsed = JSON.parse(readFileSync(source, "utf8")) as { url?: unknown };
if (typeof parsed.url !== "string" || parsed.url.includes("<id>")) {
  console.error("VIDEO.json holds no real video address yet");
  process.exit(1);
}

// The house only accepts a YouTube video address with an 11-character id.
const YOUTUBE_URL =
  /^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}($|[?&#])/;
if (!YOUTUBE_URL.test(parsed.url)) {
  console.error(`VIDEO.json url is not a YouTube video address: ${parsed.url}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, target);
