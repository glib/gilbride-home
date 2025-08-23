#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: npm run create-post "Post Title" [draft]');
  console.log('Examples:');
  console.log('  npm run create-post "My New Blog Post"        # Creates published post');
  console.log('  npm run create-post "My New Blog Post" draft  # Creates draft post');
  process.exit(1);
}

const title = args[0];
const isDraft = args[1] === 'draft';
const slug = title.toLowerCase()
  .replace(/[^\w ]+/g, '')
  .replace(/ +/g, '-');

const today = new Date().toISOString().split('T')[0];

// Create directories
const blogDir = isDraft ? 'src/content/blog/drafts' : 'src/content/blog';
const imagesDir = `src/images/${slug}`;

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log(`📁 Created image directory: ${imagesDir}`);
}

// Create the markdown file
const frontmatter = `---
title: "${title}"
description: "Add your post description here"
pubDate: ${today}
tags: ["add", "your", "tags"]
# youtubeId: "VIDEO_ID"  # Uncomment and add YouTube video ID if needed
# heroImage: "../../../images/${slug}/hero.jpg"  # Uncomment and add hero image
---

## Your First Heading

Write your blog post content here.

## Adding Images

To add images to this post:

1. Add your images to: \`${imagesDir}/\`
2. Reference them in markdown: \`![Alt text](../../../images/${slug}/image-name.jpg)\`
3. Use descriptive filenames: \`mountain-bike-components.jpg\` instead of \`IMG_001.jpg\`

## Image Best Practices

- **Hero images**: Name as \`hero.jpg\` and uncomment the heroImage line above
- **Inline images**: Use descriptive filenames like \`gear-comparison.jpg\`
- **Alt text**: Always include descriptive alt text for accessibility
- **Captions**: Use *italics* below images for captions

Remember to:
- Optimize images before adding (recommended: 1200-1600px width)
- Use descriptive alt text for accessibility
- Keep filenames descriptive and web-friendly
`;

const filePath = `${blogDir}/${slug}.md`;

if (fs.existsSync(filePath)) {
  console.error(`❌ Post already exists: ${filePath}`);
  process.exit(1);
}

fs.writeFileSync(filePath, frontmatter);

console.log('');
console.log(`✅ Blog post created successfully!`);
console.log('');
console.log(`📄 Post: ${filePath}`);
console.log(`📁 Images: ${imagesDir}/`);
console.log('');
console.log('Next steps:');
console.log('1. Add your images to the images directory');
console.log('2. Update the frontmatter (description, tags, heroImage)');
console.log('3. Write your content');
console.log('4. If draft, use `npm run publish-post ${slug}` when ready to publish');
console.log('');