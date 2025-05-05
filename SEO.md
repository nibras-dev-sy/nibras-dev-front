# SEO Implementation Guide

## Sitemap

The project uses Next.js 13+ Metadata API to automatically generate a sitemap.xml. The configuration is in `app/sitemap.ts`.

### Environment Variables

To configure the site URL, add to your environment:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Verifying the Sitemap

1. Run `npm run verify-sitemap` to check that all URLs in your sitemap are accessible.
2. This script tests each URL and reports any issues.

## OpenGraph Images

The project includes a script to generate OpenGraph images for social sharing.

1. Run `npm run generate-og-images` to create the images.
2. The images will be saved in the `public` directory.

## Additional SEO Features

- **Structured Data**: JSON-LD schema for Organization, Website, and Services
- **Metadata API**: Next.js Metadata API implementation for all pages
- **Robots.txt**: Auto-generated robots.txt file
- **Multilingual SEO**: Proper hreflang tags and language alternates
- **Semantic HTML**: Improved heading structure and ARIA attributes 