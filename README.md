# Brooklyn Vintage Car Club (BVCC)# ANALOG — Private Drivers' Club



A premium website with custom CMS for a private vintage car club in Brooklyn, NY.A premium, minimalist website for a private drivers' club dedicated to analog performance cars from the golden era of driving (1990–2005).



![BVCC Logo](logos/Red.svg)![ANALOG Preview](https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop)



## 🔗 Live Demo## 🔗 Live Demo



**[View Live Site →](https://90s-car-club.vercel.app)****[View Live Site →](https://90s-car-club.vercel.app)**



------



## 📋 Overview## 📋 Overview



Brooklyn Vintage Car Club is an exclusive members-only collective for enthusiasts of vintage and classic performance vehicles. The website features a fully editable CMS admin panel for easy content management.ANALOG is a members-only collective for enthusiasts who appreciate the mechanical purity of 90s and early 2000s performance vehicles — before traction control, drive modes, and algorithms took over.



### Key Features:This project showcases a premium editorial design approach with:

- **Custom CMS** — Full admin panel to edit all content, images, and sections- Clean, magazine-style layouts

- **Dark editorial design** — Premium magazine-style aesthetic- Strong typographic hierarchy

- **Waitlist system** — Collect member applications with database storage- Restrained, sophisticated color palette

- **Image uploads** — Upload and manage images via Vercel Blob storage- Thoughtful micro-interactions

- **Responsive** — Optimized for desktop, tablet, and mobile

---

---

## ✨ Features

## ✨ Site Sections

### Design

| Section | Description |- **Editorial Typography** — Cormorant Garamond paired with Inter for a refined, magazine-quality feel

|---------|-------------|- **Minimalist Aesthetic** — Generous whitespace, clean grids, restrained imagery

| **Hero** | Full-screen introduction with club branding |- **Sophisticated Color Palette** — Warm off-whites, deep charcoals, muted bronze accents

| **About** | Club story and mission |- **Asymmetric Grid Layouts** — Magazine-inspired image placement

| **Location** | Brooklyn clubhouse information |

| **Fleet** | Featured vehicles and collection |### Interactions

| **Membership** | Member benefits and requirements |- **Page Loader** — Branded loading animation

| **Gallery** | Image showcase |- **Parallax Hero** — Subtle depth on scroll

| **Contact** | Contact information and hours |- **Scroll Animations** — Elements gracefully reveal as you navigate

| **Waitlist** | Member application form |- **Custom Cursor** — Magnetic hover effects (desktop)

- **Gallery Hover States** — Smooth zoom and info reveals

---- **Animated Counters** — Statistics come to life

- **Scroll Progress Indicator** — Visual reading progress

## 🛠 Tech Stack

### Sections

| Technology | Purpose || Section | Description |

|------------|---------||---------|-------------|

| HTML5 | Semantic markup || **Hero** | Full-bleed cinematic introduction with staggered text animations |

| CSS3 | Custom properties, Grid, Flexbox || **About** | Two-column editorial layout with club statistics |

| Vanilla JavaScript | Interactions and CMS functionality || **Collection** | Asymmetric gallery showcasing era-defining vehicles |

| Vercel | Hosting and Edge Functions || **Quote** | Visual breathing room with club philosophy |

| Vercel KV | Redis database for content storage || **Membership** | Requirements, benefits, and pricing |

| Vercel Blob | Image storage || **Events** | Upcoming drives and track days with status badges |

| **Contact** | Application form with elegant validation |

**No frameworks. No build step. Clean, performant code.**

---

---

## 🛠 Tech Stack

## 🔐 Admin Panel

| Technology | Purpose |

Access the admin panel at `/admin.html` to edit:|------------|---------|

- All text content across sections| HTML5 | Semantic markup |

- Hero, About, Location, Fleet, Membership images| CSS3 | Custom properties, Grid, Flexbox, Animations |

- Gallery images| Vanilla JavaScript | Interactions, scroll effects, form handling |

- Logo and branding| Google Fonts | Cormorant Garamond, Inter |

- Contact information

- SEO metadata**No frameworks. No dependencies. Just clean, performant code.**

- View waitlist submissions

---

**Default password:** `bvcc2024` (change via environment variable)

## 📱 Responsive Design

---

Fully responsive across all devices:

## 🚀 Getting Started

- **Desktop** (1200px+) — Full editorial experience with custom cursor

### Run locally- **Tablet** (768px–1199px) — Adapted grid layouts

```bash- **Mobile** (< 768px) — Touch-optimized with slide-out navigation

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
