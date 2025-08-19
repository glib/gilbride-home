/**
 * Site configuration and constants
 */

export const SITE_CONFIG = {
  title: 'Work From Loam - Remote Work & Mountain Biking',
  description: 'A blog and YouTube channel about remote work in tech, game development, and mountain biking adventures.',
  author: 'Work From Loam',
} as const;

export const GISCUS_CONFIG = {
  repo: import.meta.env.GISCUS_REPO || 'YOUR_GITHUB_USERNAME/YOUR_REPO_NAME',
  repoId: import.meta.env.GISCUS_REPO_ID || 'YOUR_REPO_ID',
  category: import.meta.env.GISCUS_CATEGORY || 'General',
  categoryId: import.meta.env.GISCUS_CATEGORY_ID || 'YOUR_CATEGORY_ID',
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  theme: 'light',
  lang: 'en',
} as const;