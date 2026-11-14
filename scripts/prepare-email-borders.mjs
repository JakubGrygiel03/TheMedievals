/**
 * Knock out the black field on the Codex Manesse borders and export
 * email-sized slices.
 *
 * Sources (measured):
 * - bc0c…  horizontal band, flush to the top
 * - __3_…  horizontal band, floating
 * - __1_…  full rectangular frame
 * - __2_…  left and right vines only
 */
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const srcDir =
  "C:/Users/jakub_ljffyij/.cursor/projects/c-Users-jakub-ljffyij-Desktop-projekty-cursor-TheMedievals/assets";
const outDir = join(process.cwd(), "public/email");
mkdirSync(outDir, { recursive: true });

const files = {
  band: join(srcDir, "Codex_Manesse_Heinrich_von_Breslau-bc0c5752-7403-4f6e-a305-bdcf93a22ac6.png"),
  floating: join(srcDir, "Codex_Manesse_Heinrich_von_Breslau__3_-d11ff8e6-1632-4c79-90a7-52092fb6d811.png"),
  frame: join(srcDir, "Codex_Manesse_Heinrich_von_Breslau__1_-9dd81c24-4897-4556-a1c2-82225b7c5d5a.png"),
  sides: join(srcDir, "Codex_Manesse_Heinrich_von_Breslau__2_-f5d6d3fb-0f06-4c40-a00c-f3716a8f0a31.png"),
};

function knockout(data) {
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    if (max < 36 || (max < 52 && max - min < 16)) data[i + 3] = 0;
  }
}

async function load(file) {
  const { data, info } = await sharp(file)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  knockout(data);
  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  }).png();
}

function inkBox(data, width, height) {
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * 4 + 3] > 24) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  return {
    left: Math.max(0, minX - 2),
    top: Math.max(0, minY - 2),
    width: Math.min(width, maxX - minX + 5),
    height: Math.min(height, maxY - minY + 5),
  };
}

async function trimmedPng(file) {
  const { data, info } = await sharp(file)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  knockout(data);
  const box = inkBox(data, info.width, info.height);
  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .extract(box)
    .png();
}

async function writeResized(pipeline, dest, width) {
  const buf = await pipeline.toBuffer();
  const out = await sharp(buf).resize({ width }).png().toFile(dest);
  console.log(dest.split(/[/\\]/).pop(), out.width, out.height);
}

const band = await trimmedPng(files.band);
await writeResized(band, join(outDir, "border-top.png"), 640);
const bandBuf = await band.clone().toBuffer();
const flipped = await sharp(bandBuf).flip().resize({ width: 640 }).png().toFile(join(outDir, "border-bottom.png"));
console.log("border-bottom.png", flipped.width, flipped.height);

const floating = await trimmedPng(files.floating);
await writeResized(floating, join(outDir, "border-floating.png"), 520);

const { data, info } = await sharp(files.sides)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
knockout(data);
const left = { left: 8, top: 6, width: 48, height: info.height - 12 };
const right = { left: info.width - 56, top: 6, width: 48, height: info.height - 12 };
const raw = { width: info.width, height: info.height, channels: 4 };
const leftPng = sharp(data, { raw }).extract(left).png();
const rightPng = sharp(data, { raw }).extract(right).png();
await writeResized(leftPng, join(outDir, "border-left.png"), 64);
await writeResized(rightPng, join(outDir, "border-right.png"), 64);

const framePipe = await trimmedPng(files.frame);
await writeResized(framePipe, join(outDir, "border-frame.png"), 720);
