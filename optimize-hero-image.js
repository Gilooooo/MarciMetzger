// Run: npm install sharp
// Then: node optimize-hero-image.js

const sharp = require('sharp');

async function optimizeHeroImage() {
  // Create mobile version (smaller, compressed)
  await sharp('./public/Gilo.png')
    .resize(800, 600, { fit: 'cover' })
    .webp({ quality: 70 })
    .toFile('./public/Gilo-mobile.webp');

  // Create desktop version (better quality)
  await sharp('./public/Gilo.png')
    .resize(1920, 1080, { fit: 'cover' })
    .webp({ quality: 80 })
    .toFile('./public/Gilo-desktop.webp');

  console.log('Hero images optimized!');
}

optimizeHeroImage();