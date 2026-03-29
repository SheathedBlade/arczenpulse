# ARC Studio

My personal website/portfolio showcasing my experience and work, as well as stuff about me.

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 8
- **Routing:** TanStack Router v1
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Phosphor Icons
- **Background:** Custom Three.js canvas with Perlin noise topology

## Design System

### Color Theme: Sakura

I personally love the Japanese color palette, so there is a day and night theme with colors inspired by parchment and sakura (day) and deep plum hues (night).

### Typography

- **Headings:** Jost (sans-serif, geometric)
- **Body:** Zen Maru Gothic (friendly, readable)
- **Mono:** DM Mono (technical labels, metadata)

## Project Structure

```
src/
├── components/
│   ├── canvas/        # Three.js background
│   ├── effects/       # Visual effects (topography)
│   ├── layout/        # Page sections
│   └── ui/            # Reusable UI components
├── data/              # Static data
├── routes/            # TanStack Router file-based routes
├── styles/            # Global CSS, fonts, theme
└── main.tsx           # App entry point
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

Primary domain: `arczenpulse.dev`
Secondary domain `arczenpulse.com` redirects to `.dev` (301 permanent).

## Accessibility

- Skip to main content link
- Focus management in modals
- Keyboard navigation support
- Respects `prefers-reduced-motion`
- ARIA labels on interactive elements
- Screen-reader announcements for external links

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ output
- CSS custom properties & Nesting
- No polyfills for legacy browsers

## License

### Code

The source code in this repository is licensed under the **MIT License**. You are free to use, modify, and distribute the code for any purpose, with attribution, with the following condition:

- You must put a link somewhere back to this repo or my [website](arczenpulse.dev).

See [LICENSE](LICENSE) file for full terms.

### Content

All original content (including but not limited to text, images, designs, graphics, and other creative works) is protected under copyright law. All Rights Reserved © 2026 Andrew Chuah.

No part of the original content may be reproduced, distributed, or used for commercial purposes without explicit permission.
