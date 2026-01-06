# Portfolio - Next.js Version

A modern, high-end personal portfolio website built with Next.js, React, and Tailwind CSS. Optimized for Vercel deployment.

## Features

- 🎨 Modern, premium UI with glassmorphic effects
- 🌓 Dark/Light theme toggle
- ✨ Smooth animations with Framer Motion
- 🎯 Particle background effects
- 📱 Fully responsive design
- ⚡ Optimized for performance with Next.js

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be deployed automatically

### Vercel Configuration

The project includes a `vercel.json` file with optimal settings for Vercel deployment.

## Project Structure

```
portfolio-me-main/
├── src/
│   ├── app/              # Next.js app router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   ├── data/             # Static data
│   ├── hooks/            # Custom hooks
│   └── lib/              # Utilities
├── public/               # Static assets
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
```

## Notes

- The build may show warnings during static generation, but the app works correctly in development and production
- All components are client-side rendered for optimal interactivity
- Theme preference is stored in localStorage

## License

MIT
