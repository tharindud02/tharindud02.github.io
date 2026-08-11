import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDir = path.resolve("source-images");
const targetDir = path.resolve("src/assets/images");

const jobs = [
  { file: "portfolio.jpg", out: "portfolio.webp", width: 720, quality: 78 },
  { file: "placeholder.jpg", out: "placeholder.webp", width: 800, quality: 75 },
  { file: "59355f751c1e3698cc6360b1a7390094.jpg", out: "poap.webp", width: 800, quality: 75 },
  { file: "tlt.png", out: "tlt.webp", width: 800, quality: 75 },
  { file: "newsz.png", out: "newsz.webp", width: 800, quality: 75 },
  { file: "furgonetka.png", out: "furgonetka.webp", width: 800, quality: 75 },
  { file: "kamuda.jpg", out: "kamuda.webp", width: 800, quality: 75 },
  { file: "essex.jpg", out: "essex.webp", width: 800, quality: 75 },
  { file: "seofulham.jpg", out: "seofulham.webp", width: 800, quality: 75 },
  { file: "chattybunny.png", out: "chattybunny.webp", width: 800, quality: 75 },
  { file: "chcarrental.png", out: "chcarrental.webp", width: 800, quality: 75 },
  { file: "avatar_old.jpg", out: "avatar-fallback.webp", width: 480, quality: 75 },
];

await fs.mkdir(targetDir, { recursive: true });

for (const job of jobs) {
  const input = path.join(sourceDir, job.file);
  const output = path.join(targetDir, job.out);

  try {
    await fs.access(input);
  } catch {
    console.warn(`Skipping missing source: ${job.file}`);
    continue;
  }

  await sharp(input)
    .rotate()
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality })
    .toFile(output);

  const stats = await fs.stat(output);
  console.log(`Wrote ${job.out} (${Math.round(stats.size / 1024)} KB)`);
}

console.log("Image optimization complete.");
