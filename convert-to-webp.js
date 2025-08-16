// Run: npm install sharp
// Then: node convert-to-webp.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = './public';

const pngFiles = [
  'Gilo.png',
  'Marci.png', 
  'MarciPic.png',
  'Partner1.png',
  'Partner2.png',
  'Partner3.png',
  'Partner4.png'
];

async function convertToWebP() {
  for (const file of pngFiles) {
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(publicDir, file.replace('.png', '.webp'));
    
    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      const originalSize = fs.statSync(inputPath).size;
      const webpSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
      
      console.log(`${file} → ${file.replace('.png', '.webp')}: ${originalSize} → ${webpSize} bytes (${savings}% smaller)`);
    } catch (error) {
      console.error(`Error converting ${file}:`, error);
    }
  }
}

convertToWebP();