// Seventeen Syllables of Debugging — a haiku about debugging, 5-7-5.
// The program writes the haiku to <output>/entry.txt for the sealed scorer.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lines = [
  "Talking to the duck,",
  "it stares back, silent, yellow,",
  "I see it: line nine.",
];
const haiku = lines.join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), haiku, "utf8");
console.log(haiku);
