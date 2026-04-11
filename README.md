# ARC Studio

My personal website and portfolio — showcasing experience, work, and the craft behind the site.

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 8
- **Routing:** React Router v7
- **Styling:** Tailwind CSS 4
- **Animations:** Motion (Framer Motion)
- **Icons:** Phosphor Icons
- **Background:** D3.js animated topography canvas (global background on every page)

## Design System

### Color Theme: Sakura

A Japanese-inspired palette split into two modes:

- **Sakura Day** — parchment warmth with sakura pink accents (花見 · Hanami)
- **Sakura Night** — deep plum and rose tones for low-light viewing (夜桜 · Yozakura)

The theme switcher in the navbar toggles between them.

### Typography

- **Headings:** Jost (geometric, confident)
- **Body:** Zen Maru Gothic (warm, readable)
- **Mono / Labels:** DM Mono (technical precision)
- **Chinese typography:** WDXL Lubrifont SC (subset to 5.6KB for editorial flourishes)

## Pages

| Route                 | Page       | Description                                    |
| --------------------- | ---------- | ---------------------------------------------- |
| `/`                   | Home       | Hero portrait, identity, statement, links      |
| `/about`              | About      | Bio, philosophy, and the story behind the site |
| `/experience`         | Experience | Timeline of roles, labs, and lessons           |
| `/works`              | Works      | Featured project + mosaic grid of all work     |
| `/works/:projectId`   | Project    | Per-project detail page                        |
| `/behind-the-curtain` | The Craft  | Design decisions and technical details         |

## Project Structure

```
src/
├── assets/            # Images, fonts
├── components/
│   ├── canvas/        # Three.js hero scene (torus knot)
│   ├── effects/       # D3 topography background
│   ├── experience/    # Timeline components
│   ├── home/          # Home page section blocks
│   ├── layout/        # Navbar, footer, page wrappers
│   ├── ui/            # Reusable UI (Card, Divider, etc.)
│   └── work/          # Project cards, mosaic, hero
├── content/           # Static markdown/content
├── data/              # Projects, experience, motion variants
├── hooks/             # Custom React hooks
├── pages/             # Route-level page components
├── styles/            # Global CSS, fonts, theme tokens
└── workers/           # Web workers (topo computation)
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is configured for deployment on **Cloudflare Pages** with:

- Build command: `npm run build`
- Output directory: `dist/`
- Custom domain support with automatic HTTPS

### Redirects

Primary domain: `terystal.dev`
Secondary domain `terystal.com` redirects to `.dev` (301 permanent).

## Accessibility

- Skip to main content link
- Focus management in modals and route transitions
- Keyboard navigation support throughout
- Respects `prefers-reduced-motion` (all animations honor this)
- ARIA labels on interactive and landmark elements
- Screen-reader announcements for external links
- Semantic HTML structure with correct heading hierarchy

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ output
- CSS custom properties, nesting, and modern Tailwind features
- No polyfills for legacy browsers

## License

### Code

The source code in this repository is licensed under the **MIT License**. You are free to use, modify, and distribute the code for any purpose, with attribution, with the following condition:

- You must put a link somewhere back to this repo or my [website](terystal.dev).

See [LICENSE](LICENSE) file for full terms.

### Content

All original content (including but not limited to text, images, designs, graphics, and other creative works) is protected under copyright law. All Rights Reserved © 2026 Andrew Chuah.

No part of the original content may be reproduced, distributed, or used for commercial purposes without explicit permission.
