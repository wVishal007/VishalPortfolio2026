#!/usr/bin/env node
import sharp from "sharp";
import fs from "fs";
import path from "path";

const ASSETS_DIR = path.resolve("src/assets");

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath, fileList);
    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

async function optimizeImage(filePath) {
  const stats = fs.statSync(filePath);
  const sizeKB = stats.size / 1024;

  // Skip small files
  if (sizeKB < 100) {
    console.log(`  ↷ Skip ${filePath} (${sizeKB.toFixed(0)} KB)`);
    return;
  }

  const relPath = path.relative(ASSETS_DIR, filePath);
  let maxWidth = 1280;
  let palette = 256;

  // Portrait - smaller max width
  if (relPath.includes("mypic") && relPath.includes(".png")) {
    maxWidth = 600;
    palette = 256;
  }
  // Certificate images - smaller
  else if (relPath.includes("certification-images")) {
    maxWidth = 800;
    palette = 256;
  }
  // Project screenshots / hackathon wins
  else if (relPath.includes("project") || relPath.includes("hackathon-wins")) {
    maxWidth = 1280;
    palette = 256;
  }

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    if (metadata.width && metadata.width <= maxWidth && sizeKB < 300) {
      console.log(`  ↷ Skip ${filePath} (${metadata.width}px, ${sizeKB.toFixed(0)} KB)`);
      return;
    }

    const pipeline = sharp(filePath);

    if (metadata.width && metadata.width > maxWidth) {
      pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }

    // For PNGs with many colors (screenshots), use palette quantization
    // For portraits/photos, keep as RGB
    const isScreenshot = relPath.includes("project") || relPath.includes("hackathon-wins") || relPath.includes("certification-images");
    if (isScreenshot && path.extname(filePath).toLowerCase() === ".png") {
      pipeline.png({ palette: true, colors: palette, compressionLevel: 9 });
    } else if (path.extname(filePath).toLowerCase() === ".png") {
      pipeline.png({ compressionLevel: 9 });
    } else if (/\.(jpg|jpeg)$/i.test(filePath)) {
      pipeline.jpeg({ quality: 82, mozjpeg: true });
    }

    await pipeline.toFile(filePath + ".tmp");
    fs.renameSync(filePath + ".tmp", filePath);

    const newStats = fs.statSync(filePath);
    const newSizeKB = newStats.size / 1024;
    const saved = ((sizeKB - newSizeKB) / sizeKB * 100).toFixed(1);
    console.log(`  ✓ ${filePath}: ${sizeKB.toFixed(0)} KB → ${newSizeKB.toFixed(0)} KB (-${saved}%)`);
  } catch (err) {
    console.error(`  ✗ Failed ${filePath}:`, err.message);
    if (fs.existsSync(filePath + ".tmp")) fs.unlinkSync(filePath + ".tmp");
  }
}

async function main() {
  console.log("Optimizing images in", ASSETS_DIR, "...");
  const files = walk(ASSETS_DIR);
  console.log(`Found ${files.length} images\n`);

  for (const file of files) {
    await optimizeImage(file);
  }

  console.log("\nDone.");
}

main();