# Brooklyn Vintage Car Club - Client Testing Guide

Welcome! Your website is live and ready for testing. This guide will walk you through all the features.

---

## 🌐 Website URLs

| Page | URL |
|------|-----|
| **Main Website** | https://90s-car-club.vercel.app |
| **Admin Panel** | https://90s-car-club.vercel.app/admin.html |

---

## 🔐 Admin Login

**Password:** `bvcc2024`

> 💡 This password can be changed later in the Vercel dashboard environment variables.

---

## 📋 Testing Checklist

### 1. View the Main Website
- [ ] Open https://90s-car-club.vercel.app
- [ ] Check that the hero section displays correctly
- [ ] Scroll down to see the featured fleet (up to 8 cars)
- [ ] Check the About section
- [ ] Scroll to footer - verify contact info shows (email, phone, address, hours)
- [ ] Test the "Join the Club" button - should scroll to contact form
- [ ] Submit a test inquiry through the contact form

### 2. Login to Admin Panel
- [ ] Go to https://90s-car-club.vercel.app/admin.html
- [ ] Enter password: `bvcc2024`
- [ ] Verify you see the admin dashboard

### 3. Test Hero Section Editing
- [ ] Click on "Hero Section" tab
- [ ] Change the title text
- [ ] Change the subtitle text
- [ ] Upload a new hero background image (or click "Remove" to use default)
- [ ] Click "Save Hero Section"
- [ ] Open main website in new tab to verify changes

### 4. Test Fleet Gallery
- [ ] Click on "Featured Fleet" tab
- [ ] You can add up to 8 cars
- [ ] For each car, enter: Year, Make, Model
- [ ] Upload an image for the car
- [ ] Click "Save Fleet"
- [ ] Verify cars appear on main website

### 5. Test About Section
- [ ] Click on "About Section" tab
- [ ] Edit the title and description
- [ ] Click "Save About Section"
- [ ] Verify on main website

### 6. Test Branding
- [ ] Click on "Branding" tab
- [ ] Upload a logo (recommended: PNG with transparent background)
- [ ] Edit club name and tagline
- [ ] Upload an OG Image (for social media sharing, recommended: 1200x630px)
- [ ] Click "Save Branding"
- [ ] Check logo appears in header and footer

### 7. Test Contact Information
- [ ] Click on "Contact Info" tab
- [ ] Enter email, phone, address, and business hours
- [ ] Click "Save Contact Info"
- [ ] Verify info appears in website footer

### 8. View Form Submissions
- [ ] Click on "Submissions" tab
- [ ] You should see the test inquiry you submitted earlier
- [ ] Each submission shows: name, email, phone, message, and timestamp

---

## 🖼️ Image Recommendations

| Image | Recommended Size | Format |
|-------|------------------|--------|
| Hero Background | 1920x1080px | JPG |
| Car Images | 800x600px | JPG/PNG |
| Logo | 200x80px | PNG (transparent) |
| OG Image (social) | 1200x630px | JPG/PNG |

---

## 📱 Social Media Sharing

The website has Open Graph meta tags for beautiful social media previews.

**To test LinkedIn sharing:**
1. Go to [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
2. Enter: `https://90s-car-club.vercel.app`
3. Click "Inspect"
4. You should see a preview with your OG image

> Note: Social platforms cache previews. If you change the OG image, use the inspector tool to refresh the cache.

---

## ❓ Common Questions

### How do I remove an image?
Click the "Remove" button below any uploaded image. The website will show a default placeholder or hide the element.

### Changes not showing on website?
1. Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
2. Or open in incognito/private window

### How do I change the admin password?
Contact your developer - the password is stored securely in Vercel's environment variables.

### Can I connect my custom domain?
Yes! Once testing is complete, we can connect `brooklynvintagecarclub.com` (or any domain you own) to this website.

---

## 🐛 Found a Bug?

Please note:
1. What you were trying to do
2. What happened instead
3. Screenshot if possible

Send details to your developer.

---

## ✅ Sign-Off

Once testing is complete, please confirm:
- [ ] Hero section works as expected
- [ ] Fleet gallery displays correctly
- [ ] About section editable
- [ ] Branding (logo) working
- [ ] Contact info showing in footer
- [ ] Form submissions being captured
- [ ] Overall design approved

---

**Thank you for testing! 🚗**
