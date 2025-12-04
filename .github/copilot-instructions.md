# Brooklyn Vintage Car Club (BVCC) - Copilot Instructions

## Architecture Overview

**Zero-framework** website with custom CMS on Vercel. Static HTML + vanilla JS, no build step.

```
Public:  index.html → content-loader.js → /api/content → Vercel KV
Admin:   admin.html → admin-script-new.js → /api/* (auth, content, upload, submissions)
```

### File Responsibilities
| File | Role |
|------|------|
| `content-loader.js` | Fetches CMS data, applies to DOM with fallbacks |
| `admin-script-new.js` | Admin panel: auth, image uploads, section saves |
| `script.js` | UI only: loader, nav, smooth scroll, form handling (animations disabled) |
| `api/*.js` | Edge Functions for KV/Blob operations |

## Critical: Edge Runtime Constraints

All `/api/*.js` files **must** use Edge Runtime:
```javascript
export const config = { runtime: 'edge' };
```

- Initialize `@vercel/kv` with explicit URL/token (not SDK defaults):
  ```javascript
  import { createClient } from '@vercel/kv';
  const kv = createClient({
    url: process.env.BVCC_KV_REST_API_URL,
    token: process.env.BVCC_KV_REST_API_TOKEN,
  });
  ```
- Blob uploads use direct REST API (see `api/upload.js`)
- **No Node.js APIs** (fs, path, Buffer, etc.)

### Required Environment Variables
```
BVCC_KV_REST_API_URL, BVCC_KV_REST_API_TOKEN  # Vercel KV
BLOB_READ_WRITE_TOKEN                          # Vercel Blob
BVCC_ADMIN_PASSWORD                            # Admin auth (default: 'bvcc2024')
```

## Adding CMS-Editable Content

Follow the 4-file pattern:

1. **`index.html`**: Add HTML with identifiable selectors (`.section-title`, `.about-lead`, etc.)
2. **`content-loader.js`**: Add apply function with null checks:
   ```javascript
   function applyNewSection(data) {
       const section = document.querySelector('.new-section');
       if (!section) return;
       if (data.title) section.querySelector('.section-title').innerHTML = data.title;
       if (data.image && isValidImageUrl(data.image)) {
           section.querySelector('img').src = data.image;
       }
   }
   ```
3. **`admin.html`**: Add form fields in new `<div class="admin-section" id="section-newsection">`
4. **`admin-script-new.js`**: Add save handler using `getAuthToken()` pattern

### Image URL Validation
Always use `isValidImageUrl()` before setting `src` - accepts http(s), local paths, or Vercel Blob URLs.

## API Patterns

### CORS Headers (required on all responses)
```javascript
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};
// Handle OPTIONS preflight: return new Response(null, { headers: corsHeaders });
```

### Auth Token Flow
```javascript
// Admin stores: sessionStorage.setItem('bvcc_admin_auth', JSON.stringify({ token, expiry }))
// API accepts: password OR 64-char token in request body
const token = getAuthToken(); // from admin-script-new.js
fetch('/api/content', { method: 'POST', body: JSON.stringify({ token, content }) });
```

### Database Keys
- `bvcc_content` - All CMS content (single JSON blob)
- `bvcc_submissions` - Waitlist form submissions (array)

## CSS Design Tokens

All styling via CSS custom properties in `styles.css`:
```css
--color-accent: #FA2223;      /* BVCC Red */
--color-bg: #1A1918;          /* Dark background */
--font-serif: 'Cormorant Garamond';  /* Headings */
--font-sans: 'Inter';                /* Body text */
```

## Development

```bash
# Static serving (API routes won't work locally)
python3 -m http.server 8080  # or: npx serve

# API testing requires Vercel deployment (use preview branches)
```

## Admin Sections (12 total)
Hero, About, Location, Fleet, Membership, Gallery, Branding, SEO, Contact, Analytics, Waitlist + Footer

## Assets
- **Logos**: `/logos/*.svg` (Red, White, Black, OriginalWhite)
- **Stock images**: `/stock photos/`
- **Brand kit**: `/BrooklynVintageCarClub_Official/` (Logo/, Mockups/, etc.)
