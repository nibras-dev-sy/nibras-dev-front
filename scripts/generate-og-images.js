/**
 * This script generates OpenGraph images for the website
 * Run with: node scripts/generate-og-images.js
 */

const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

// Ensure the public directory exists
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Define image specifications
const width = 1200;
const height = 630;
const padding = 60;

// Register fonts if needed
// registerFont(path.join(__dirname, '..', 'fonts', 'Inter-Bold.ttf'), { family: 'Inter', weight: 'bold' });

// Create canvas
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

async function generateHomeOgImage() {
  // Set background color
  ctx.fillStyle = '#1d4ed8'; // Blue background
  ctx.fillRect(0, 0, width, height);
  
  // Add gradient overlay
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, 'rgba(30, 58, 138, 0.8)');
  gradient.addColorStop(1, 'rgba(30, 58, 138, 0.4)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Try to load and draw logo
  try {
    const logo = await loadImage(path.join(publicDir, 'logo2.png'));
    // Draw logo scaled appropriately
    const logoWidth = 120;
    const logoHeight = 120;
    ctx.drawImage(logo, padding, padding, logoWidth, logoHeight);
  } catch (e) {
    console.error('Error loading logo:', e);
  }
  
  // Add text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 72px Arial';
  ctx.fillText('Nibras Dev', padding, padding + 200);
  
  // Add tagline
  ctx.font = '36px Arial';
  ctx.fillText('Web & Mobile Development', padding, padding + 270);
  
  // Add secondary text
  ctx.font = '28px Arial';
  ctx.fillText('Transform Your Ideas Into Digital Reality', padding, padding + 350);
  
  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(publicDir, 'og-home.jpg'), buffer);
  console.log('Generated og-home.jpg');
  
  // Create a copy for twitter
  fs.writeFileSync(path.join(publicDir, 'twitter-image.jpg'), buffer);
  console.log('Generated twitter-image.jpg');
  
  // Create a general OG image
  fs.writeFileSync(path.join(publicDir, 'og-image.jpg'), buffer);
  console.log('Generated og-image.jpg');
}

async function generateServiceOgImage() {
  // Clear canvas
  ctx.clearRect(0, 0, width, height);
  
  // Set background color
  ctx.fillStyle = '#1e40af'; // Darker blue for services
  ctx.fillRect(0, 0, width, height);
  
  // Add gradient overlay
  const gradient = ctx.createLinearGradient(width, 0, 0, height);
  gradient.addColorStop(0, 'rgba(30, 58, 138, 0.7)');
  gradient.addColorStop(1, 'rgba(30, 58, 138, 0.3)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Add text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 72px Arial';
  ctx.fillText('Our Services', padding, padding + 200);
  
  // Add tagline
  ctx.font = '36px Arial';
  ctx.fillText('Web Development & Digital Solutions', padding, padding + 270);
  
  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(publicDir, 'og-services.jpg'), buffer);
  console.log('Generated og-services.jpg');
}

// Run the generators
async function generateAll() {
  await generateHomeOgImage();
  await generateServiceOgImage();
  console.log('All OpenGraph images generated');
}

generateAll().catch(console.error); 