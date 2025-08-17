# Tech & Trails Astro Blog

A modern, clean blog template built with Astro.js for tech professionals who love mountain biking.

## Features

- **Clean Design**: Light background with dark text using Inter and Manrope fonts
- **Responsive Layout**: Works great on all devices
- **Tag Filtering**: Filter posts by category tags
- **GitHub Comments**: Uses Giscus for GitHub-based commenting
- **SEO Optimized**: Proper meta tags and Open Graph support
- **TypeScript Support**: Full TypeScript integration
- **MDX Support**: Write posts in Markdown or MDX

## Setup

1. Clone this repository
2. Install dependencies: `npm install`
3. Update the Giscus configuration in `BaseLayout.astro`:
   - Replace `YOUR_GITHUB_USERNAME/YOUR_REPO_NAME` with your repository
   - Get your repo ID and category ID from [giscus.app](https://giscus.app)
4. Add your posts to `src/content/blog/`
5. Update the site URL in `astro.config.mjs`

## Writing Posts

Create new posts in `src/content/blog/` with the following frontmatter:

```yaml
---
title: "Your Post Title"
description: "A brief description of your post"
pubDate: 2024-01-15
heroImage: "/images/your-image.jpg" # optional
tags: ["tag1", "tag2"] # optional
---
```

## Customization

- Colors and styling can be customized in `tailwind.config.mjs`
- Fonts are loaded from Google Fonts in `BaseLayout.astro`
- Navigation and site branding can be updated in the layout files

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Deployment

This template works with any static hosting service that supports Node.js builds (Netlify, Vercel, GitHub Pages, etc.).

Built with ❤️ for developers who love both code and trails.
