# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This repository contains Jacob Braswell's personal portfolio and blog website built with Next.js and deployed to GitHub Pages at `https://jocobtt.github.io`.

### Next.js Application (Root Directory)
Modern React application with TypeScript, Tailwind CSS, and static site generation configured for GitHub Pages.

**Key structure:**
- `src/app/`: Next.js App Router pages and layouts
- `src/component/`: Reusable React components (Navigation, Footer)
- `src/app/posts/`: Individual blog post components
- `public/`: Static assets (images, icons)
- `package.json`: Node.js dependencies and scripts

### Content Management
- **All content**: Built as React components for maximum flexibility and professional styling
- **Blog posts**: Individual React components in `src/app/posts/[post-name]/page.tsx`
- **Static pages**: About, Resume, Connect pages as React components
- **Assets**: Static images and icons in `public/img/`

## Development Commands

### Next.js Application
```bash
# Start development server with Turbopack
npm run dev

# Build for production (static export)
npm run build

# Start production server (for testing)
npm start

# Run linting
npm run lint
```

### Adding New Blog Posts
When creating new blog posts:
1. Create new directory: `src/app/posts/[post-slug]/`
2. Add `page.tsx` component with content and styling
3. Update home page posts array in `src/app/page.tsx` to include the new post

## Deployment

The site automatically deploys to GitHub Pages via GitHub Actions (`.github/workflows/build.yml`) when changes are pushed to the `main` branch. The workflow:
1. Sets up Node.js environment
2. Installs dependencies with `npm ci`
3. Builds Next.js app with static export
4. Deploys static files from `out/` to GitHub Pages

## Configuration

### Next.js Configuration
- **Static export**: Configured for GitHub Pages hosting
- **Image optimization**: Disabled for static hosting
- **Trailing slashes**: Enabled for better compatibility
- **ESLint**: Disabled during builds (configure as needed)

### Content Approach
- All content built as React components for maximum styling control and interactivity
- Blog posts are individual page components with professional layouts
- Home page contains static array of posts that can be easily updated