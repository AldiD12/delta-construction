# Google Indexing API Script

This script uses the Google Indexing API to force index your website pages in Google Search.

## Setup

1. **Install dependencies:**
   ```bash
   cd scripts
   npm install
   ```

2. **Make sure your service account is configured:**
   - The `service-account.json` file should contain your Google Cloud service account credentials
   - The service account must have the "Indexing API User" role
   - The service account email must be added as an owner in Google Search Console

## Usage

Run the indexing script:

```bash
npm run index
```

Or directly:

```bash
node index-pages.js
```

## What it does

The script will:
1. Read your service account credentials
2. Authenticate with Google Indexing API
3. Submit each page URL for indexing
4. Wait 1 second between requests to avoid rate limiting
5. Log success/failure for each page

## Pages being indexed

- Homepage (/)
- Services (/services)
- Gallery (/gallery)
- About (/about)
- Contact (/contact)
- Areas (/areas)
- FAQ (/faq)
- Reviews (/reviews)
- Privacy (/privacy)
- Terms (/terms)
- Cookies (/cookies)

## Notes

- The Google Indexing API has a quota of 200 requests per day
- Changes may take a few days to appear in Google Search
- This is more effective than waiting for Google to crawl naturally
- You can run this script whenever you update your site

## Troubleshooting

If you get authentication errors:
1. Verify your service account JSON is correct
2. Check that the service account has "Indexing API User" role
3. Ensure the service account email is added as an owner in Search Console
