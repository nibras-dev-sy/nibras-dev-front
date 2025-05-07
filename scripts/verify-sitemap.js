/**
 * This script verifies the sitemap URLs by attempting to access them
 * Run with: node scripts/verify-sitemap.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { promisify } = require('util');
const { parse } = require('fast-xml-parser');

const readFile = promisify(fs.readFile);

// Function to fetch a URL and check status
async function checkUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    
    const req = client.get(url, (res) => {
      const statusCode = res.statusCode;
      resolve({
        url,
        status: statusCode,
        ok: statusCode >= 200 && statusCode < 400
      });
    });
    
    req.on('error', (err) => {
      resolve({
        url,
        status: 0,
        ok: false,
        error: err.message
      });
    });
    
    // Set a timeout of 10 seconds
    req.setTimeout(10000, () => {
      req.abort();
      resolve({
        url,
        status: 0,
        ok: false,
        error: 'Request timed out'
      });
    });
  });
}

async function verifySitemap() {
  try {
    // Read sitemap.xml
    let sitemapPath;
    if (fs.existsSync(path.join(process.cwd(), 'public', 'sitemap.xml'))) {
      sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    } else if (fs.existsSync(path.join(process.cwd(), '.next', 'server', 'app', 'sitemap.xml'))){
      sitemapPath = path.join(process.cwd(), '.next', 'server', 'app', 'sitemap.xml');
    } else {
      throw new Error('sitemap.xml not found. Please build the app first using "npm run build"');
    }
    
    const sitemapXml = await readFile(sitemapPath, 'utf8');
    
    // Parse XML
    const result = parse(sitemapXml, { ignoreAttributes: false });
    if (!result.urlset || !result.urlset.url) {
      throw new Error('Invalid sitemap format');
    }
    
    // Extract URLs
    const urls = Array.isArray(result.urlset.url) 
      ? result.urlset.url.map(u => u.loc) 
      : [result.urlset.url.loc];
    
    console.log(`Found ${urls.length} URLs in sitemap`);
    
    // Test each URL
    const results = [];
    for (const url of urls) {
      console.log(`Checking ${url}...`);
      const result = await checkUrl(url);
      results.push(result);
    }
    
    // Print report
    console.log('\nSitemap Verification Report:');
    console.log('============================');
    
    const successful = results.filter(r => r.ok);
    const failed = results.filter(r => !r.ok);
    
    console.log(`Total URLs: ${results.length}`);
    console.log(`Successful: ${successful.length}`);
    console.log(`Failed: ${failed.length}`);
    
    if (failed.length > 0) {
      console.log('\nFailed URLs:');
      failed.forEach(result => {
        console.log(`- ${result.url} (Status: ${result.status}${result.error ? `, Error: ${result.error}` : ''})`);
      });
    }
    
    return failed.length === 0;
  } catch (error) {
    console.error('Error verifying sitemap:', error.message);
    return false;
  }
}

// Run the verification
verifySitemap()
  .then(success => {
    if (success) {
      console.log('\nSitemap verification completed successfully!');
      process.exit(0);
    } else {
      console.log('\nSitemap verification completed with errors.');
      process.exit(1);
    }
  })
  .catch(err => {
    console.error('Unhandled error:', err);
    process.exit(1);
  }); 