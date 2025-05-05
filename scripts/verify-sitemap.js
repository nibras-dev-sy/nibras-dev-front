/**
 * This script verifies the sitemap URLs by attempting to access them
 * Run with: node scripts/verify-sitemap.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { parse } = require('url');

// Define base URL - change this to your production URL when testing for real
const baseUrl = 'https://nibrasdev.com';

// Function to test a URL
async function testUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.get(url, (res) => {
      const statusCode = res.statusCode;
      resolve({
        url,
        status: statusCode,
        success: statusCode >= 200 && statusCode < 400,
      });
    });

    req.on('error', (error) => {
      resolve({
        url,
        status: 'Error',
        success: false,
        message: error.message,
      });
    });

    req.end();
  });
}

// Function to read the sitemap URLs
async function verifySitemap() {
  console.log('Verifying sitemap URLs...');

  // These are the expected URLs based on your sitemap.js implementation
  const languages = ['en', 'ar'];
  const routes = ['', '/services', '/about', '/contact'];
  
  const expectedUrls = [];
  
  // Add language-specific URLs
  languages.forEach(lang => {
    routes.forEach(route => {
      const path = route === '' ? `/${lang}` : `/${lang}${route}`;
      expectedUrls.push(`${baseUrl}${path}`);
    });
  });
  
  // Add root URL
  expectedUrls.push(baseUrl);
  
  console.log(`Found ${expectedUrls.length} URLs to verify`);
  
  // Test each URL
  const results = [];
  for (const url of expectedUrls) {
    process.stdout.write(`Testing ${url}... `);
    const result = await testUrl(url);
    results.push(result);
    
    if (result.success) {
      process.stdout.write(`✅ (${result.status})\n`);
    } else {
      process.stdout.write(`❌ (${result.status})\n`);
    }
  }
  
  // Print summary
  console.log('\nSummary:');
  const successful = results.filter(r => r.success).length;
  console.log(`Successful: ${successful}/${results.length} (${Math.round(successful/results.length*100)}%)`);
  
  if (successful !== results.length) {
    console.log('\nFailed URLs:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`- ${r.url} (${r.status}${r.message ? `: ${r.message}` : ''})`);
    });
  }
}

verifySitemap().catch(console.error); 