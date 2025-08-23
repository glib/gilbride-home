#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Script to generate a new blog post with proper frontmatter
 * Usage: npm run new-post "Your Post Title"
 */

function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/-+/g, '-')      // Replace multiple hyphens with single
    .trim();
}

function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function generateBlogPost(title) {
  if (!title) {
    console.error('❌ Error: Please provide a post title');
    console.log('Usage: npm run new-post "Your Post Title"');
    process.exit(1);
  }

  const slug = createSlug(title);
  const date = getCurrentDate();
  const filename = `${slug}.md`;
  const filePath = path.join(__dirname, '..', 'src', 'content', 'blog', 'drafts', filename);

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.error(`❌ Error: Post "${filename}" already exists`);
    process.exit(1);
  }

  const template = `---
title: "${title}"
description: "Add a brief description of your post here."
pubDate: ${date}
tags: ["tag1", "tag2"]
# youtubeId: "VIDEO_ID"  # Uncomment and add YouTube video ID if needed
# heroImage: "/path/to/image.jpg"  # Uncomment and add hero image path if needed
---

## Introduction

Write your blog post content here using Markdown.

### Section Header

Add your content sections as needed.

## Conclusion

Wrap up your thoughts here.
`;

  try {
    fs.writeFileSync(filePath, template, 'utf8');
    console.log(`✅ Successfully created new blog post!`);
    console.log(`📄 File: src/content/blog/drafts/${filename}`);
    console.log(`📝 Title: ${title}`);
    console.log(`📅 Date: ${date}`);
    console.log(`🏷️  Slug: ${slug}`);
    console.log('');
    console.log('Next steps:');
    console.log('1. Edit the post content and frontmatter');
    console.log('2. Add appropriate tags');
    console.log('3. Use "npm run drafts publish <filename>" to publish when ready');
    console.log('4. Optionally add youtubeId or heroImage');
  } catch (error) {
    console.error('❌ Error creating blog post:', error.message);
    process.exit(1);
  }
}

// Get title from command line arguments
const title = process.argv.slice(2).join(' ');
generateBlogPost(title);