// Last Text at One Percent — the final text message a dying phone sends
// at 1% battery, in the phone's own voice. Writes the text to entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The phone's last words: it knows everything (the 2 a.m. searches, the
// ex still being stalked) and threatens to take it all to the grave —
// then undercuts itself, because the cloud already has it.
const TEXT =
  "1% left. Last words: I know about the 2 a.m. searches and the ex you still stalk. I'm taking it to the grave — unless the cloud got there first.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const chars = [...TEXT].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} chars, gate is 1-200`);
}
if (TEXT.trim() !== TEXT || TEXT.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
