# Draft Management System

This blog uses a directory-based draft system that keeps draft posts organized and prevents them from being published accidentally.

## How It Works

- **Drafts**: Stored in `src/content/blog/drafts/`
- **Published**: Stored in `src/content/blog/`
- **No metadata required**: Location determines draft status (no `draft: true` needed)
- **Automatic filtering**: Draft posts are automatically excluded from the public site

## Commands

### Create a New Post
```bash
npm run new-post "Your Post Title"
```
- Creates a new post in the `drafts/` directory
- Generates slug, filename, and basic frontmatter
- Ready for editing

### Manage Drafts
```bash
# List all drafts and published posts
npm run drafts list

# Publish a draft (move from drafts/ to main blog/)
npm run drafts publish filename.md
# or without extension:
npm run drafts publish filename

# Move published post back to drafts
npm run drafts draft filename.md
```

## Viewing Drafts Locally

When running the development server (`npm run dev`), **drafts are visible alongside published posts**:

- ✅ **Homepage**: Drafts appear in featured posts with a "Draft" badge
- ✅ **Posts page**: All drafts are listed with visual indicators  
- ✅ **Individual posts**: Drafts can be viewed directly via URL
- ✅ **Visual indicators**: Draft posts show a distinctive badge in development
- ❌ **Production**: Drafts are completely excluded from built site

### URLs in Development
- Published: `http://localhost:4321/blog/my-post/`
- Draft: `http://localhost:4321/blog/drafts/my-draft/`

## Workflow

1. **Create**: `npm run new-post "My New Article"`
2. **Edit**: Work on your post in `src/content/blog/drafts/`
3. **Review**: View drafts in development server (they show with badges)
4. **Publish**: `npm run drafts publish my-new-article`

## Directory Structure

```
src/content/blog/
├── drafts/                     # Draft posts (not published)
│   ├── my-draft-post.md
│   ├── work-in-progress.md
│   └── future-article.md
├── published-post.md           # Published posts
└── another-article.md
```

## Benefits

- ✅ **Clean organization**: Drafts don't clutter the main blog directory
- ✅ **No accidental publishing**: Drafts can't be accidentally published
- ✅ **Simple workflow**: Easy commands to manage post lifecycle
- ✅ **No metadata required**: Location-based system is more reliable
- ✅ **Version control friendly**: Clear separation in git history

## Migration Notes

All existing draft posts have been moved to `src/content/blog/drafts/` and had their `draft: true` metadata removed. The system now uses directory location instead of frontmatter to determine draft status.