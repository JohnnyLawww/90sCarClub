# Brooklyn Vintage Car Club (BVCC) - Project Context

> **Last Updated:** December 3, 2025
> **Project Status:** Production Ready
> **Client Contract:** $400 (Upwork)

---

## 🎯 Project Overview

A professional website for **Brooklyn Vintage Car Club** - a private drivers' club for analog-era performance and modern classics from the 1990s and 2000s. Built with a complete CMS (Content Management System) allowing the client to edit all content without coding.

### Live URLs
- **Website:** https://90s-car-club.vercel.app
- **Admin Panel:** https://90s-car-club.vercel.app/admin.html
- **GitHub:** https://github.com/eltahawyomar001-eng/90sCarClub

### Admin Credentials
- **Password:** `bvcc2024` (default, can be changed via Vercel environment variable `BVCC_ADMIN_PASSWORD`)

---

## 🏗️ Technical Architecture

### Stack
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (no frameworks - ultra-fast)
- **Backend:** Vercel Serverless Edge Functions
- **Database:** Vercel KV (Upstash Redis)
- **Image Storage:** Vercel Blob
- **Deployment:** Vercel (auto-deploy from GitHub)
- **Domain:** brooklynvintagecarclub.com (to be connected)

### Key Design Decisions
1. **No frameworks** - Pure HTML/CSS/JS for maximum performance
2. **No SDK imports in Edge Functions** - Direct REST API calls to avoid Edge Runtime errors
3. **Server-side auth** - Password verified on server, not client-side
4. **Dynamic content loading** - CMS content loaded via API, defaults shown if API fails

---

## 📁 File Structure

```
/Car Club/
├── index.html              # Main website (391 lines)
├── admin.html              # CMS admin panel (700+ lines)
├── styles.css              # Main stylesheet (1800+ lines)
├── admin-styles-pro.css    # Admin panel styles (960+ lines)
├── script.js               # Main site JavaScript
├── content-loader.js       # Loads CMS content dynamically (395 lines)
├── admin-script-new.js     # Admin panel functionality (1100+ lines)
├── logos/                  # SVG logo files
│   ├── Red.svg            # Red logo (loader, footer)
│   ├── White.svg          # White logo (navigation)
│   ├── Black.svg
│   └── Original*.svg
├── stock photos/           # Adobe Stock images (36 files)
├── api/
│   ├── content.js         # Content CRUD API
│   ├── submissions.js     # Waitlist submissions API
│   ├── upload.js          # Image upload to Vercel Blob
│   └── auth.js            # Authentication API
└── BrooklynVintageCarClub_Official/  # Brand assets
```

---

## 🎨 Design System

### Colors
- **Primary/Accent:** `#FA2223` (BVCC Red)
- **Dark Background:** `#1A1918`
- **Text:** White on dark, dark on light sections

### Typography
- **Headings:** Cormorant Garamond (serif)
- **Body:** Inter (sans-serif)

### CSS Variables (in styles.css)
```css
--color-accent: #FA2223;
--color-bg-dark: #1A1918;
--font-serif: 'Cormorant Garamond', serif;
--font-sans: 'Inter', sans-serif;
```

---

## 🔧 CMS Features (Admin Panel)

### 10 Editable Sections:
1. **Hero Section** - Title, subtitle, background image
2. **About** - Description, philosophy text
3. **Location** - Brooklyn location details
4. **Fleet** - 8 featured cars with images, names, descriptions
5. **Membership** - Benefits, pricing philosophy
6. **Image Gallery** - Drag-drop reordering, unlimited images
7. **Branding & Design** - Logo, colors, fonts (Google Fonts)
8. **SEO Settings** - Title, description, keywords, OG image
9. **Contact & Social** - Email, phone, address, hours, social links
10. **Analytics** - View counts, waitlist stats
11. **Waitlist Submissions** - View applicants, export CSV

### Image Upload Features:
- Upload via file picker or URL paste
- **Remove buttons** on all image fields
- Stored in Vercel Blob (CDN-backed)
- Validation prevents broken/empty URLs

---

## 🔐 Authentication System

### How It Works:
1. User enters password on admin login
2. Password sent to `/api/auth` for server-side verification
3. Server checks against `BVCC_ADMIN_PASSWORD` env variable
4. Returns 64-character secure token (24-hour expiry)
5. Token stored in `sessionStorage`
6. All save operations require valid token

### To Change Password:
1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add: `BVCC_ADMIN_PASSWORD` = `your_new_password`
3. Redeploy

---

## 🐛 Known Issues & Fixes Applied

### Logo Visibility Issue
- **Problem:** Logo showed broken because database had `branding.logo = 'admin.html'` URL
- **Fix:** `content-loader.js` validates logo URLs must be actual image files (not .html)

### Social Media Preview (OG Image)
- **Problem:** LinkedIn/Facebook couldn't see OG image (loaded via JavaScript)
- **Fix:** Added static `<meta property="og:image">` tags in HTML `<head>`

### Footer Duplication
- **Problem:** `applyContactInfo` was creating new footer instead of updating existing
- **Fix:** Updated to modify existing `.footer` element

### Hero Animation
- **Problem:** Zoom animation lost when converted to CSS background-image
- **Fix:** Added `@keyframes heroZoom` animation in CSS

### Fleet Empty Images
- **Problem:** Fleet showed broken images when CMS data was empty
- **Fix:** Only replace defaults if `validCars.length > 0`

---

## 📊 Database Schema (Vercel KV)

### Key: `bvcc_content`
```javascript
{
  hero: { tag, title1, title2, subtitle, backgroundImage },
  about: { title, lead, p1, p2 },
  location: { title, lead, text },
  fleet: { 
    title, intro, details, note,
    cars: [{ name, description, image }, ...] // 8 cars
  },
  membership: { title, lead },
  gallery: ["url1", "url2", ...],
  branding: { logo, primaryColor, darkBg, headingFont, bodyFont },
  seo: { title, description, keywords, ogImage },
  contact: {
    email, phone, address, hours,
    social: { instagram, facebook, twitter, youtube, display }
  }
}
```

### Key: `bvcc_submissions`
```javascript
[
  {
    fullName, email, phone, zipCode, driveManual, ownEnthusiastCar,
    currentCar, carInterests, whyJoin, readyToJoin, costExpectation,
    usageFrequency, comments, submittedAt
  },
  ...
]
```

---

## 🚀 Deployment

### Auto-Deploy Setup:
- Connected to GitHub: `eltahawyomar001-eng/90sCarClub`
- Branch: `main`
- Every push triggers automatic Vercel deployment

### Environment Variables Required:
```
BVCC_KV_REST_API_URL=https://...
BVCC_KV_REST_API_TOKEN=...
BLOB_READ_WRITE_TOKEN=...
BVCC_ADMIN_PASSWORD=bvcc2024  (optional, for custom password)
```

---

## 📝 Common Tasks

### Add New Fleet Car:
1. Go to Admin → Fleet section
2. Fill in car name, description
3. Upload image or paste URL
4. Click "Save Changes"

### Change Website Colors:
1. Admin → Branding & Design
2. Use color pickers for Primary Color and Dark Background
3. Save - colors update site-wide via CSS variables

### Export Waitlist:
1. Admin → Waitlist Submissions
2. Click "Export CSV" button
3. Opens in Excel/Google Sheets

### Update Social Media Preview:
1. Admin → SEO Settings
2. Upload new OG Image (1200x630px recommended)
3. Save
4. **Note:** Also need to update `index.html` meta tags for social crawlers

---

## ⚠️ Important Notes

1. **OG Image Limitation:** Social media crawlers don't run JavaScript. If you change the OG image in admin, you also need to update the static `<meta property="og:image">` in `index.html`.

2. **Logo Path:** Logos must be in `/logos/` directory with simple paths (not deep nested).

3. **Image URLs:** The system validates image URLs - only accepts http/https URLs that look like actual images (contain .jpg, .png, .svg, etc. or are from blob storage).

4. **Edge Runtime:** API files use Edge Runtime. Don't import SDKs - use direct REST API calls instead.

---

## 🔄 Recent Changes (December 3, 2025)

1. ✅ Expanded fleet from 4 to 8 cars
2. ✅ Added server-side authentication
3. ✅ Fixed logo visibility issues
4. ✅ Added OG meta tags for social sharing
5. ✅ Added contact info display in footer (email, phone, address, hours)
6. ✅ Added remove buttons for all image uploads
7. ✅ Fixed hero zoom animation
8. ✅ Professional fleet gallery layout

---

## 📞 Support

If issues arise, check:
1. Browser console for JavaScript errors
2. Vercel deployment logs
3. API responses at `/api/content`
4. This documentation file

---

*This file should be read by AI assistants to understand the full project context.*
