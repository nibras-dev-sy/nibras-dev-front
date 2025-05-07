/**
 * This script generates OpenGraph images for the website
 * Run with: node scripts/generate-og-images.js
 */

const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage, registerFont } = require('canvas');

// Create the directory if it doesn't exist
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Register fonts
registerFont('fonts/Inter-Bold.ttf', { family: 'Inter', weight: 'bold' });
registerFont('fonts/Inter-Regular.ttf', { family: 'Inter', weight: 'normal' });

// Create a canvas for OG images (1200 x 630 is the recommended size)
const width = 1200;
const height = 630;

async function generateHomeOgImage() {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#1e40af'); // blue-800
  gradient.addColorStop(1, '#312e81'); // indigo-900
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add grid pattern
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 1;
  
  // Draw vertical lines
  for (let x = 0; x < width; x += 30) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  
  // Draw horizontal lines
  for (let y = 0; y < height; y += 30) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Add logo
  try {
    const logo = await loadImage(path.join(publicDir, 'logo2.png'));
    const logoWidth = 120;
    const logoHeight = 120;
    ctx.drawImage(logo, 100, 100, logoWidth, logoHeight);
  } catch (error) {
    console.log('Logo not found, skipping...');
  }

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 64px Inter';
  ctx.fillText('Nibras Dev', 100, 320);
  
  ctx.font = 'bold 42px Inter';
  ctx.fillText('Web & Mobile Development', 100, 390);
  
  ctx.font = '32px Inter';
  ctx.fillText('Transform Your Ideas Into Digital Reality', 100, 460);

  // Add decorative elements
  ctx.fillStyle = 'rgba(59, 130, 246, 0.5)'; // blue-500 with opacity
  ctx.beginPath();
  ctx.arc(width - 200, height - 200, 150, 0, 2 * Math.PI);
  ctx.fill();
  
  ctx.fillStyle = 'rgba(99, 102, 241, 0.5)'; // indigo-500 with opacity
  ctx.beginPath();
  ctx.arc(width - 300, 150, 100, 0, 2 * Math.PI);
  ctx.fill();

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
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#1e40af'); // blue-800
  gradient.addColorStop(1, '#1e3a8a'); // blue-900
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add pattern
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  for (let i = 0; i < width; i += 40) {
    for (let j = 0; j < height; j += 40) {
      ctx.fillRect(i, j, 2, 2);
    }
  }

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 64px Inter';
  ctx.fillText('Our Services', 100, 250);
  
  ctx.font = '36px Inter';
  ctx.fillText('Web Development | Mobile Apps | E-Commerce', 100, 330);
  ctx.fillText('Custom Software | UI/UX Design', 100, 380);

  // Add decorative elements
  ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
  ctx.beginPath();
  ctx.arc(width - 200, 200, 150, 0, 2 * Math.PI);
  ctx.fill();

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(publicDir, 'og-services.jpg'), buffer);
  console.log('Generated og-services.jpg');
}

async function generateAboutOgImage() {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#1e3a8a'); // blue-900
  gradient.addColorStop(1, '#0f172a'); // slate-900
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add pattern
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 2;
  for (let i = 0; i < width; i += 100) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.stroke();
  }

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 64px Inter';
  ctx.fillText('About Nibras Dev', 100, 250);
  
  ctx.font = '36px Inter';
  ctx.fillText('Our Story, Mission & Values', 100, 330);
  ctx.fillText('Meet the team behind exceptional digital solutions', 100, 380);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(publicDir, 'og-about.jpg'), buffer);
  console.log('Generated og-about.jpg');
}

async function generateContactOgImage() {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#1e40af'); // blue-800
  gradient.addColorStop(1, '#0f172a'); // slate-900
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 64px Inter';
  ctx.fillText('Contact Us', 100, 250);
  
  ctx.font = '36px Inter';
  ctx.fillText('Get in touch for your next project', 100, 330);
  ctx.fillText('We\'re here to help transform your ideas into reality', 100, 380);

  // Add decorative elements - contact icons
  ctx.fillStyle = '#3b82f6'; // blue-500
  ctx.beginPath();
  ctx.arc(width - 200, height - 200, 50, 0, 2 * Math.PI);
  ctx.fill();
  
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px Inter';
  ctx.fillText('@', width - 215, height - 185);
  
  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(publicDir, 'og-contact.jpg'), buffer);
  console.log('Generated og-contact.jpg');
}

// Run the generators
async function generateAll() {
  try {
    await generateHomeOgImage();
    await generateServiceOgImage();
    await generateAboutOgImage();
    await generateContactOgImage();
    console.log('All OpenGraph images generated');
  } catch (error) {
    console.error('Error generating OpenGraph images:', error);
  }
}

generateAll(); 