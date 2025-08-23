/**
 * Site configuration and constants
 */

export const SITE_CONFIG = {
  title: 'Work From Loam - Remote Work & Mountain Biking',
  description: 'A blog and YouTube channel about remote work in tech, game development, and mountain biking adventures.',
  author: 'Work From Loam',
} as const;

export const GISCUS_CONFIG = {
  repo: 'glib/gilbride-home',
  repoId: 'R_kgDOPJqa6A',
  category: 'Announcements',
  categoryId: 'DIC_kwDOPJqa6M4CufxW',
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '1',
  inputPosition: 'bottom',
  theme: 'dark_dimmed',
  lang: 'en',
  loading: 'lazy',
} as const;