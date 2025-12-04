# BVCC Website: Admin Editable vs Hardcoded Content

## ✅ EDITABLE FROM ADMIN PANEL

### Hero Section
- Tag text ("Brooklyn, NY — Members Only")
- Main title line 1 & 2
- Subtitle text
- Hero background image

### About Section
- Section title
- Lead paragraph
- Main content paragraphs 1 & 2

### Location Section
- Section title
- Lead paragraph
- Additional text

### Fleet Section
- Section title ("Driver-focused machines")
- Introduction text
- Fleet list title ("Representative Fleet List")
- Fleet details/acquisition plan text
- **Car list (HTML format)** ✨ NEW
- Note text
- Featured cars (3 cars with names, descriptions, images)

### Membership Section
- Section title
- Lead paragraph

### Image Gallery
- Gallery images (upload or URL)

### Branding & Design
- Logo image
- Primary accent color
- Dark background color
- Heading font
- Body font

### SEO Settings
- Page title
- Meta description
- Keywords
- OG image

### Contact & Social
- Email address
- Phone number
- Address
- Hours
- Social media links (Instagram, Facebook, Twitter, LinkedIn)

### Waitlist Submissions
- View all submissions
- Export to CSV
- **Auto-exports to Google Sheets** ✨ NEW

---

## ❌ HARDCODED (Cannot edit from Admin Panel)

### Navigation
- Menu items (About, Location, Fleet, Membership, Join Waitlist)
- Logo in navigation

### Membership Section - Benefits List
```
- Access to the full fleet
- 150 miles per day
- Day drives and multi-day trips
- Frictionless key pickup via secure lockers
- Discreet on-site management
- Online booking system
- Access to the lounge with self-serve bar and secure storage
```

### Waitlist Form
- All form field labels and questions
- Form field options (Yes/No dropdowns, etc.)

### Footer
- Navigation links
- Copyright text
- Footer structure

### Fleet Gallery Images
- The 3 fleet gallery images (BMW, Yellow car, Red Porsche)
- These are set in HTML, not editable from admin

### Section Tags
- "About the Club"
- "Location"
- "Fleet Philosophy"
- "Membership"
- "Founding Member Waitlist"

### Page Structure
- Section order
- Layout and design elements
- Animations

---

## 🔧 TO MAKE HARDCODED ITEMS EDITABLE

If the client needs to edit any hardcoded items, we can add them to the admin panel. Common requests:

1. **Membership benefits list** - Can add admin field
2. **Footer copyright year** - Already updated to 2025
3. **Form questions** - Would require code changes
4. **Navigation items** - Would require code changes
5. **Fleet gallery images** - Can add to admin panel if needed

---

## 📝 NOTES

- All admin changes are saved to Vercel KV database
- Changes appear on the live site immediately after saving
- Images can be uploaded directly or pasted as URLs
- The car list now supports HTML formatting for flexibility
