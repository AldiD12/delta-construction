const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Load service account credentials
const serviceAccount = require('./service-account.json');

// Your website URL
const SITE_URL = 'https://delta-construction-neon.vercel.app';

// Pages to index
const pages = [
  '/',
  '/services',
  '/gallery',
  '/about',
  '/contact',
  '/areas',
  '/faq',
  '/reviews',
  '/privacy',
  '/terms',
  '/cookies',
];

// Initialize Google Auth
const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount,
  scopes: ['https://www.googleapis.com/auth/indexing'],
});

async function indexPage(url) {
  try {
    const authClient = await auth.getClient();
    const indexing = google.indexing({ version: 'v3', auth: authClient });

    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: 'URL_UPDATED',
      },
    });

    console.log(`✅ Successfully indexed: ${url}`);
    return response.data;
  } catch (error) {
    console.error(`❌ Error indexing ${url}:`, error.message);
    return null;
  }
}

async function indexAllPages() {
  console.log('🚀 Starting Google Indexing API submission...\n');
  
  for (const page of pages) {
    const fullUrl = `${SITE_URL}${page}`;
    await indexPage(fullUrl);
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n✨ Indexing complete!');
}

// Run the script
indexAllPages().catch(console.error);
