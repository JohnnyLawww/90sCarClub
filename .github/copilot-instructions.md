# Brooklyn Vintage Car Club (BVCC) - Copilot Instructions

## Architecture Overview

This is a **zero-framework** website with a custom CMS, deployed on Vercel. The architecture prioritizes performance through simplicity.

### Core Data Flow
```
index.html ←→ content-loader.js ←→ /api/content.js ←→ Vercel KV (Redis)
admin.html ←→ admin-script-new.js ←→ /api/* (auth, content, upload, submissions)
```

- **Public site** (`index.html`): Static HTML enhanced by `content-loader.js` which fetches CMS data from `/api/content`
- **Admin panel** (`admin.html`): Full CMS interface powered by `admin-script-new.js`
- **API layer** (`/api/`): Vercel Edge Functions using `runtime: 'edge'` (critical constraint)

## Critical Constraints

### Edge Runtime Limitation
All `/api/*.js` files use Edge Runtime. When modifying API routes:
- Use `export const config = { runtime: 'edge' }` 
- Use `@vercel/kv` for database operations (initialized via REST URL/token, not SDK defaults)
- Use direct REST API calls for Vercel Blob uploads (see `api/upload.js` pattern)
- Avoid Node.js-specific APIs

### Environment Variables Required
```
BVCC_KV_REST_API_URL    # Vercel KV REST endpoint
BVCC_KV_REST_API_TOKEN  # Vercel KV auth token
BLOB_READ_WRITE_TOKEN   # Vercel Blob storage token
BVCC_ADMIN_PASSWORD     # Admin login (defaults to 'bvcc2024')
```

### Database Keys
- `bvcc_content` - All CMS content (JSON blob)
- `bvcc_submissions` - Waitlist form submissions

## Code Patterns

### Content Application Pattern
When adding new CMS-editable content, follow `content-loader.js` pattern:
```javascript
// 1. Fetch content in loadContent()
if (content.newSection) applyNewSection(content.newSection);

// 2. Validate before applying
function isValidImageUrl(url) { /* existing validation logic */ }

// 3. Apply with null checks and fallbacks
function applyNewSection(section) {
    const el = document.querySelector('.selector');
    if (!el) return;
    if (section.text) el.textContent = section.text;
}
```

### Auth Token Pattern
Admin operations pass session token from `sessionStorage.getItem('bvcc_admin_auth')`:
```javascript
const token = getAuthToken();
fetch('/api/content', {
    method: 'POST',
    body: JSON.stringify({ token, content })
});
```

### CSS Variables (styles.css)
All styling uses CSS custom properties in `:root`. Key tokens:
- `--color-accent: #FA2223` (BVCC Red)
- `--color-bg: #1A1918` (Dark background)
- `--font-serif: 'Cormorant Garamond'` (headings)
- `--font-sans: 'Inter'` (body text)

## File Roles

| File | Purpose |
|------|---------|
| `index.html` | Public site markup - CMS placeholders filled by content-loader |
| `admin.html` | Admin panel UI with 10 editable sections |
| `content-loader.js` | Fetches `/api/content`, applies to DOM, gracefully falls back |
| `admin-script-new.js` | Admin panel logic, image uploads, content saving |
| `script.js` | UI interactions: loader, navigation, scroll animations, form handling |
| `api/content.js` | GET/POST for CMS content (Vercel KV) |
| `api/auth.js` | Password validation, session token generation |
| `api/upload.js` | Image upload to Vercel Blob storage |

## Local Development

```bash
# No build step required. Open directly or serve static files:
python3 -m http.server 8080
# or
npx serve

# Note: API routes only work when deployed to Vercel
# For local API testing, deploy to preview branch
```

## Common Tasks

### Adding a New Editable Section
1. Add HTML structure in `index.html` with identifiable selectors
2. Add `applyNewSection()` function in `content-loader.js`
3. Add form fields in `admin.html` matching section name
4. Add save handler in `admin-script-new.js`

### Modifying API Responses
Always include CORS headers in Edge Functions:
```javascript
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};
```

## Assets

- **Logos**: `/logos/` - SVG formats (Red.svg, White.svg, Black.svg, OriginalWhite.svg)
- **Images**: `/stock photos/` - Adobe Stock images
- **Brand assets**: `/BrooklynVintageCarClub_Official/` - Full brand kit (AI, PDF, PNG, SVG)
