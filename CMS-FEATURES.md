# BVCC Admin Panel - CMS Features

## ✅ What's Now Available in Your Admin Panel

### 🎨 **Hero Section Management**
- **Background Image Upload**: Upload custom hero background images or paste URL
- **Live Preview**: See your image before saving
- **Automatic Application**: Hero background updates on live site instantly
- **Recommended**: 1920x1080px landscape images

### 🚗 **Fleet Car Management** (4 Cars)
Each car slot includes:
- **Car Name** (e.g., "2002 BMW E39 M5")
- **Description** (brief text about the car)
- **Image Upload**: Upload car photos or paste image URL
- **Live Gallery**: Cars appear in fleet gallery on website automatically

### 📸 **Image Upload System**
- **Direct Upload**: Click "Upload Image" to select files from computer
- **URL Option**: Paste image URLs if you prefer
- **Real-time Preview**: Images show immediately in admin panel
- **Vercel Blob Storage**: Images hosted on professional CDN

### 📝 **Text Content Management**
All sections fully editable:
- ✅ Hero section (tag, title, subtitle)
- ✅ About section (title, paragraphs)
- ✅ Location section (title, description)
- ✅ Fleet section (title, intro, details, note)
- ✅ Membership section (title, lead)

### 📊 **Waitlist Management**
- View all submissions
- Export to CSV spreadsheet
- Clear submissions
- Real-time submission count

## 🎯 How to Use Image Upload

### Hero Background:
1. Go to "Hero Section" in admin
2. Click "Upload New Image" button
3. Select image (or paste URL in text field below)
4. Image appears in preview
5. Click "Save Changes"
6. **Hero background updates on live website!**

### Fleet Cars:
1. Go to "Fleet" section in admin
2. Scroll to "Featured Cars"
3. For each car (1-4):
   - Enter car name (e.g., "1999 Porsche 996 GT3")
   - Enter description
   - Click "Upload Image" or paste URL
   - Preview shows immediately
4. Click "Save Changes"
5. **Cars appear in fleet gallery on live website!**

## 🔧 Technical Details

### Image Upload API
- **Endpoint**: `/api/upload`
- **Method**: POST with FormData
- **Storage**: Vercel Blob (professional CDN)
- **Format**: Accepts all image types (jpg, png, webp, etc.)

### Edge Runtime Compatible
- ✅ No Node.js dependencies
- ✅ Direct REST API calls
- ✅ Fast serverless execution
- ✅ Works on Vercel Edge Network

## 💡 Pro Tips

1. **Image Sizes**:
   - Hero: 1920x1080px or larger (landscape)
   - Cars: 800x600px minimum (landscape preferred)

2. **File Sizes**:
   - Keep under 2MB for fast loading
   - Use JPG for photos, PNG for graphics

3. **Image Quality**:
   - High-resolution professional photos recommended
   - Automotive photography with good lighting
   - Match BVCC aesthetic (industrial, minimal, professional)

4. **Two Upload Methods**:
   - **Upload Button**: Best for local files
   - **Paste URL**: Best for images already online (Unsplash, Adobe Stock, etc.)

## 🚀 What Makes This a Real CMS

✅ **Database-Backed**: All changes saved to Vercel KV
✅ **Image Management**: Upload, preview, store images
✅ **Live Updates**: Changes apply to website instantly
✅ **No Coding Required**: Client can manage everything
✅ **Professional Storage**: Vercel CDN for fast image delivery
✅ **Data Export**: Export waitlist to CSV
✅ **Secure**: Password-protected admin access

## 📋 Next Steps You Can Add

Want even more features? Consider:
- [ ] Image gallery manager (add/remove multiple images)
- [ ] Blog post system
- [ ] Event management
- [ ] Member profiles
- [ ] Video uploads
- [ ] SEO meta tags editor
- [ ] Custom page builder

---

**Your admin panel is now a full-featured CMS comparable to Webflow!** 🎉
