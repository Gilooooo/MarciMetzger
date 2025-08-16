// Run: npm install sharp
// Then: node optimize-images.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = './public';
const outputDir = './public/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const pngFiles = [
  'Gilo.png',
  'Marci.png', 
  'MarciPic.png',
  'Partner1.png',
  'Partner2.png',
  'Partner3.png',
  'Partner4.png'
];

async function optimizeImages() {
  for (const file of pngFiles) {
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(outputDir, file);
    
    try {
      await sharp(inputPath)
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(outputPath);
      
      const originalSize = fs.statSync(inputPath).size;
      const optimizedSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      
      console.log(`${file}: ${originalSize} → ${optimizedSize} bytes (${savings}% smaller)`);
    } catch (error) {
      console.error(`Error optimizing ${file}:`, error);
    }
  }
}

optimizeImages();