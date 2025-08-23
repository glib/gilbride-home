#!/usr/bin/env node
/**
 * Script to manage drafts
 * Usage: 
 *   node scripts/manage-drafts.js publish <filename>    # Move from drafts to main
 *   node scripts/manage-drafts.js draft <filename>      # Move from main to drafts
 *   node scripts/manage-drafts.js list                  # List all drafts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogDir = path.join(__dirname, '../src/content/blog');
const draftsDir = path.join(blogDir, 'drafts');

const [,, command, filename] = process.argv;

function ensureMarkdownExtension(filename) {
  return filename.endsWith('.md') ? filename : `${filename}.md`;
}

function publishPost(filename) {
  const mdFilename = ensureMarkdownExtension(filename);
  const draftPath = path.join(draftsDir, mdFilename);
  const publishPath = path.join(blogDir, mdFilename);
  
  if (!fs.existsSync(draftPath)) {
    console.error(`❌ Draft not found: ${mdFilename}`);
    process.exit(1);
  }
  
  if (fs.existsSync(publishPath)) {
    console.error(`❌ Published post already exists: ${mdFilename}`);
    process.exit(1);
  }
  
  fs.renameSync(draftPath, publishPath);
  console.log(`✅ Published: ${mdFilename}`);
}

function draftPost(filename) {
  const mdFilename = ensureMarkdownExtension(filename);
  const publishPath = path.join(blogDir, mdFilename);
  const draftPath = path.join(draftsDir, mdFilename);
  
  if (!fs.existsSync(publishPath)) {
    console.error(`❌ Published post not found: ${mdFilename}`);
    process.exit(1);
  }
  
  if (fs.existsSync(draftPath)) {
    console.error(`❌ Draft already exists: ${mdFilename}`);
    process.exit(1);
  }
  
  fs.renameSync(publishPath, draftPath);
  console.log(`✅ Moved to drafts: ${mdFilename}`);
}

function listDrafts() {
  const drafts = fs.readdirSync(draftsDir).filter(f => f.endsWith('.md'));
  const published = fs.readdirSync(blogDir).filter(f => f.endsWith('.md') && f !== 'drafts');
  
  console.log('\n📝 DRAFTS:');
  drafts.forEach(draft => console.log(`  - ${draft}`));
  
  console.log('\n✅ PUBLISHED:');
  published.forEach(post => console.log(`  - ${post}`));
  
  console.log(`\n📊 Summary: ${drafts.length} drafts, ${published.length} published`);
}

function showHelp() {
  console.log(`
📝 Draft Management Script

Usage:
  node scripts/manage-drafts.js publish <filename>   # Move draft to published
  node scripts/manage-drafts.js draft <filename>     # Move published to drafts  
  node scripts/manage-drafts.js list                 # List all posts
  
Examples:
  node scripts/manage-drafts.js publish my-post
  node scripts/manage-drafts.js draft my-post.md
  node scripts/manage-drafts.js list
`);
}

switch (command) {
  case 'publish':
    if (!filename) {
      console.error('❌ Please provide a filename');
      process.exit(1);
    }
    publishPost(filename);
    break;
    
  case 'draft':
    if (!filename) {
      console.error('❌ Please provide a filename');
      process.exit(1);
    }
    draftPost(filename);
    break;
    
  case 'list':
    listDrafts();
    break;
    
  default:
    showHelp();
}