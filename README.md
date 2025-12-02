# ANALOG — Private Drivers' Club

A premium, minimalist website for a private drivers' club dedicated to analog performance cars from the golden era of driving (1990–2005).

![ANALOG Preview](https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop)

## 🔗 Live Demo

**[View Live Site →](https://90s-car-club.vercel.app)**

---

## 📋 Overview

ANALOG is a members-only collective for enthusiasts who appreciate the mechanical purity of 90s and early 2000s performance vehicles — before traction control, drive modes, and algorithms took over.

This project showcases a premium editorial design approach with:
- Clean, magazine-style layouts
- Strong typographic hierarchy
- Restrained, sophisticated color palette
- Thoughtful micro-interactions

---

## ✨ Features

### Design
- **Editorial Typography** — Cormorant Garamond paired with Inter for a refined, magazine-quality feel
- **Minimalist Aesthetic** — Generous whitespace, clean grids, restrained imagery
- **Sophisticated Color Palette** — Warm off-whites, deep charcoals, muted bronze accents
- **Asymmetric Grid Layouts** — Magazine-inspired image placement

### Interactions
- **Page Loader** — Branded loading animation
- **Parallax Hero** — Subtle depth on scroll
- **Scroll Animations** — Elements gracefully reveal as you navigate
- **Custom Cursor** — Magnetic hover effects (desktop)
- **Gallery Hover States** — Smooth zoom and info reveals
- **Animated Counters** — Statistics come to life
- **Scroll Progress Indicator** — Visual reading progress

### Sections
| Section | Description |
|---------|-------------|
| **Hero** | Full-bleed cinematic introduction with staggered text animations |
| **About** | Two-column editorial layout with club statistics |
| **Collection** | Asymmetric gallery showcasing era-defining vehicles |
| **Quote** | Visual breathing room with club philosophy |
| **Membership** | Requirements, benefits, and pricing |
| **Events** | Upcoming drives and track days with status badges |
| **Contact** | Application form with elegant validation |

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup |
| CSS3 | Custom properties, Grid, Flexbox, Animations |
| Vanilla JavaScript | Interactions, scroll effects, form handling |
| Google Fonts | Cormorant Garamond, Inter |

**No frameworks. No dependencies. Just clean, performant code.**

---

## 📱 Responsive Design

Fully responsive across all devices:

- **Desktop** (1200px+) — Full editorial experience with custom cursor
- **Tablet** (768px–1199px) — Adapted grid layouts
- **Mobile** (< 768px) — Touch-optimized with slide-out navigation

---

## 🚀 Getting Started

### Clone the repository
```bash
git clone https://github.com/eltahawyomar001-eng/90sCarClub.git
cd 90sCarClub
```

### Run locally
Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js
npx serve
```

Then visit `http://localhost:8080`

---

## 📁 Project Structure

```
90sCarClub/
├── index.html      # Main HTML structure
├── styles.css      # Complete styling with CSS custom properties
├── script.js       # Animations and interactions
└── README.md       # Documentation
```

---

## 🎨 Design System

### Colors
```css
--color-bg: #FAFAF8;          /* Primary background */
--color-bg-alt: #F2F1EE;      /* Secondary background */
--color-bg-dark: #1A1918;     /* Dark sections */
--color-text: #1A1918;        /* Primary text */
--color-text-muted: #6B6966;  /* Secondary text */
--color-accent: #8B7355;      /* Bronze accent */
```

### Typography
```css
--font-serif: 'Cormorant Garamond', Georgia, serif;
--font-sans: 'Inter', -apple-system, sans-serif;
```

### Type Scale
Fluid typography using `clamp()` for seamless scaling across devices.

---

## 📄 License

This project is available for personal and commercial use.

---

## 👤 Author

**Omar Eltahawy**

- GitHub: [@eltahawyomar001-eng](https://github.com/eltahawyomar001-eng)

---

<p align="center">
  <em>For those who remember when driving meant something.</em>
</p>
