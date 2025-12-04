# Brooklyn Vintage Car Club (BVCC)# Brooklyn Vintage Car Club (BVCC)# ANALOG — Private Drivers' Club



A premium website with custom CMS for a private vintage car club in Brooklyn, NY.



![BVCC Logo](logos/Red.svg)A premium website with custom CMS for a private vintage car club in Brooklyn, NY.A premium, minimalist website for a private drivers' club dedicated to analog performance cars from the golden era of driving (1990–2005).



## 🔗 Live Site



**[brooklynvintagecarclub.com →](https://brooklynvintagecarclub.com/)**![BVCC Logo](logos/Red.svg)![ANALOG Preview](https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop)



---



## 📋 Overview## 🔗 Live Demo## 🔗 Live Demo



Brooklyn Vintage Car Club is an exclusive members-only collective for enthusiasts of vintage and classic performance vehicles. The website features a fully editable CMS admin panel for easy content management.



### Key Features:**[View Live Site →](https://90s-car-club.vercel.app)****[View Live Site →](https://90s-car-club.vercel.app)**

- **Custom CMS** — Full admin panel to edit all content, images, and sections

- **Dark editorial design** — Premium magazine-style aesthetic

- **Waitlist system** — Collect member applications with database storage

- **Image uploads** — Upload and manage images via Vercel Blob storage------

- **Responsive** — Optimized for desktop, tablet, and mobile



---

## 📋 Overview## 📋 Overview

## ✨ Site Sections



| Section | Description |

|---------|-------------|Brooklyn Vintage Car Club is an exclusive members-only collective for enthusiasts of vintage and classic performance vehicles. The website features a fully editable CMS admin panel for easy content management.ANALOG is a members-only collective for enthusiasts who appreciate the mechanical purity of 90s and early 2000s performance vehicles — before traction control, drive modes, and algorithms took over.

| **Hero** | Full-screen introduction with club branding |

| **About** | Club story and mission |

| **Location** | Brooklyn clubhouse information |

| **Fleet** | Featured vehicles and collection |### Key Features:This project showcases a premium editorial design approach with:

| **Membership** | Member benefits and requirements |

| **Gallery** | Image showcase |- **Custom CMS** — Full admin panel to edit all content, images, and sections- Clean, magazine-style layouts

| **Contact** | Contact information and hours |

| **Waitlist** | Member application form |- **Dark editorial design** — Premium magazine-style aesthetic- Strong typographic hierarchy



---- **Waitlist system** — Collect member applications with database storage- Restrained, sophisticated color palette



## 🛠 Tech Stack- **Image uploads** — Upload and manage images via Vercel Blob storage- Thoughtful micro-interactions



| Technology | Purpose |- **Responsive** — Optimized for desktop, tablet, and mobile

|------------|---------|

| HTML5 | Semantic markup |---

| CSS3 | Custom properties, Grid, Flexbox |

| Vanilla JavaScript | Interactions and CMS functionality |---

| Vercel | Hosting and Edge Functions |

| Vercel KV | Redis database for content storage |## ✨ Features

| Vercel Blob | Image storage |

## ✨ Site Sections

**No frameworks. No build step. Clean, performant code.**

### Design

---

| Section | Description |- **Editorial Typography** — Cormorant Garamond paired with Inter for a refined, magazine-quality feel

## 🔐 Admin Panel

|---------|-------------|- **Minimalist Aesthetic** — Generous whitespace, clean grids, restrained imagery

Access the admin panel at `/admin.html` to edit:

- All text content across sections| **Hero** | Full-screen introduction with club branding |- **Sophisticated Color Palette** — Warm off-whites, deep charcoals, muted bronze accents

- Hero, About, Location, Fleet, Membership images

- Gallery images| **About** | Club story and mission |- **Asymmetric Grid Layouts** — Magazine-inspired image placement

- Logo and branding

- Contact information| **Location** | Brooklyn clubhouse information |

- SEO metadata

- View waitlist submissions| **Fleet** | Featured vehicles and collection |### Interactions



**Default password:** `bvcc2024` (change via environment variable)| **Membership** | Member benefits and requirements |- **Page Loader** — Branded loading animation



---| **Gallery** | Image showcase |- **Parallax Hero** — Subtle depth on scroll



## 🚀 Getting Started| **Contact** | Contact information and hours |- **Scroll Animations** — Elements gracefully reveal as you navigate



### Run locally| **Waitlist** | Member application form |- **Custom Cursor** — Magnetic hover effects (desktop)

```bash

# Using Python- **Gallery Hover States** — Smooth zoom and info reveals

python3 -m http.server 8080

---- **Animated Counters** — Statistics come to life

# Using Node.js

npx serve- **Scroll Progress Indicator** — Visual reading progress

```

## 🛠 Tech Stack

Then visit `http://localhost:8080`

### Sections

> **Note:** API routes (content saving, image uploads) only work when deployed to Vercel.

| Technology | Purpose || Section | Description |

---

|------------|---------||---------|-------------|

## ⚙️ Environment Variables

| HTML5 | Semantic markup || **Hero** | Full-bleed cinematic introduction with staggered text animations |

Set these in Vercel project settings:

| CSS3 | Custom properties, Grid, Flexbox || **About** | Two-column editorial layout with club statistics |

```

BVCC_KV_REST_API_URL     # Vercel KV REST endpoint| Vanilla JavaScript | Interactions and CMS functionality || **Collection** | Asymmetric gallery showcasing era-defining vehicles |

BVCC_KV_REST_API_TOKEN   # Vercel KV auth token  

BLOB_READ_WRITE_TOKEN    # Vercel Blob storage token| Vercel | Hosting and Edge Functions || **Quote** | Visual breathing room with club philosophy |

BVCC_ADMIN_PASSWORD      # Admin login password

```| Vercel KV | Redis database for content storage || **Membership** | Requirements, benefits, and pricing |



---| Vercel Blob | Image storage || **Events** | Upcoming drives and track days with status badges |



## 📁 Project Structure| **Contact** | Application form with elegant validation |



```**No frameworks. No build step. Clean, performant code.**

BVCC/

├── index.html           # Public website---

├── admin.html           # Admin panel

├── styles.css           # All styling---

├── script.js            # UI interactions

├── content-loader.js    # CMS content fetching## 🛠 Tech Stack

├── admin-script-new.js  # Admin panel functionality

├── api/## 🔐 Admin Panel

│   ├── auth.js          # Authentication

│   ├── content.js       # Content CRUD| Technology | Purpose |

│   ├── upload.js        # Image uploads

│   └── submissions.js   # Waitlist submissionsAccess the admin panel at `/admin.html` to edit:|------------|---------|

├── logos/               # SVG logos

└── stock photos/        # Default images- All text content across sections| HTML5 | Semantic markup |

```

- Hero, About, Location, Fleet, Membership images| CSS3 | Custom properties, Grid, Flexbox, Animations |

---

- Gallery images| Vanilla JavaScript | Interactions, scroll effects, form handling |

## 🎨 Design System

- Logo and branding| Google Fonts | Cormorant Garamond, Inter |

### Colors

```css- Contact information

--color-bg: #1A1918;          /* Dark background */

--color-accent: #FA2223;      /* BVCC Red */- SEO metadata**No frameworks. No dependencies. Just clean, performant code.**

--color-text: #FAFAF8;        /* Light text */

```- View waitlist submissions



### Typography---

```css

--font-serif: 'Cormorant Garamond';  /* Headings */**Default password:** `bvcc2024` (change via environment variable)

--font-sans: 'Inter';                /* Body text */

```## 📱 Responsive Design



------



## 📄 LicenseFully responsive across all devices:



This project is proprietary to Brooklyn Vintage Car Club.## 🚀 Getting Started



---- **Desktop** (1200px+) — Full editorial experience with custom cursor



<p align="center">### Run locally- **Tablet** (768px–1199px) — Adapted grid layouts

  <strong>Brooklyn Vintage Car Club</strong><br>

  <em>Where classics come to life.</em>```bash- **Mobile** (< 768px) — Touch-optimized with slide-out navigation

</p>

# Using Python

python3 -m http.server 8080---



# Using Node.js## 🚀 Getting Started

npx serve

```### Clone the repository

```bash

Then visit `http://localhost:8080`git clone https://github.com/eltahawyomar001-eng/90sCarClub.git

cd 90sCarClub

> **Note:** API routes (content saving, image uploads) only work when deployed to Vercel.```



---### Run locally

Simply open `index.html` in your browser, or use a local server:

## ⚙️ Environment Variables

```bash

Set these in Vercel project settings:# Using Python

python3 -m http.server 8080

```

BVCC_KV_REST_API_URL     # Vercel KV REST endpoint# Using Node.js

BVCC_KV_REST_API_TOKEN   # Vercel KV auth token  npx serve

BLOB_READ_WRITE_TOKEN    # Vercel Blob storage token```

BVCC_ADMIN_PASSWORD      # Admin login password

```Then visit `http://localhost:8080`



------



## 📁 Project Structure## 📁 Project Structure



``````

BVCC/90sCarClub/

├── index.html           # Public website├── index.html      # Main HTML structure

├── admin.html           # Admin panel├── styles.css      # Complete styling with CSS custom properties

├── styles.css           # All styling├── script.js       # Animations and interactions

├── script.js            # UI interactions└── README.md       # Documentation

├── content-loader.js    # CMS content fetching```

├── admin-script-new.js  # Admin panel functionality

├── api/---

│   ├── auth.js          # Authentication

│   ├── content.js       # Content CRUD## 🎨 Design System

│   ├── upload.js        # Image uploads

│   └── submissions.js   # Waitlist submissions### Colors

├── logos/               # SVG logos```css

└── stock photos/        # Default images--color-bg: #FAFAF8;          /* Primary background */

```--color-bg-alt: #F2F1EE;      /* Secondary background */

--color-bg-dark: #1A1918;     /* Dark sections */

-----color-text: #1A1918;        /* Primary text */

--color-text-muted: #6B6966;  /* Secondary text */

## 🎨 Design System--color-accent: #8B7355;      /* Bronze accent */

```

### Colors

```css### Typography

--color-bg: #1A1918;          /* Dark background */```css

--color-accent: #FA2223;      /* BVCC Red */--font-serif: 'Cormorant Garamond', Georgia, serif;

--color-text: #FAFAF8;        /* Light text */--font-sans: 'Inter', -apple-system, sans-serif;

``````



### Typography### Type Scale

```cssFluid typography using `clamp()` for seamless scaling across devices.

--font-serif: 'Cormorant Garamond';  /* Headings */

--font-sans: 'Inter';                /* Body text */---

```

## 📄 License

---

This project is available for personal and commercial use.

## 📄 License

---

This project is proprietary to Brooklyn Vintage Car Club.

## 👤 Author

---

**Omar Eltahawy**

<p align="center">

  <strong>Brooklyn Vintage Car Club</strong><br>- GitHub: [@eltahawyomar001-eng](https://github.com/eltahawyomar001-eng)

  <em>Where classics come to life.</em>

</p>---


<p align="center">
  <em>For those who remember when driving meant something.</em>
</p>
