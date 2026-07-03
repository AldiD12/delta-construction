const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Load service account credentials
const serviceAccount = require('./service-account.json');

// Your website URL — must match EXACTLY the canonical host used everywhere else
// (sitemap.ts, robots.ts, layout metadataBase). The whole site is non-www, so
// this must be non-www too. Submitting www URLs created duplicate hosts that
// Google could not reconcile, leaving pages "not indexed".
const SITE_URL = 'https://deltaconstructionltd.co.uk';

// Pages to index — kept in sync with src/app/sitemap.ts (all 20 canonical URLs)
const pages = [
  '/',
  '/about',
  '/services',
  '/extensions',
  '/loft-conversions',
  '/roofing',
  '/kitchens-bathrooms',
  '/brickwork-pointing',
  '/carpentry',
  '/contact',
  '/gallery',
  '/reviews',
  '/faq',
  '/areas',
  '/privacy',
  '/terms',
  '/cookies',
  '/blog',
  '/blog/loft-conversion-cost-london',
  '/blog/house-extension-cost-london',
  '/blog/permitted-development-london',
  // Area (location) pages
  '/areas/west-london',
  '/areas/twickenham-richmond',
  '/areas/hounslow',
  '/areas/north-london',
  '/areas/south-west-london',
  '/areas/central-london',
  '/areas/south-east-london',
  '/areas/east-london',
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
