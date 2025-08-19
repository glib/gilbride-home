# Blog Management

## Creating New Posts

To create a new blog post, use the following command:

```bash
npm run new-post "Your Post Title"
```

### What it does:
- Creates a new `.md` file in `src/content/blog/`
- Generates a URL-friendly slug from the title
- Sets up proper frontmatter with current date
- Includes a basic template to get started

### Example:
```bash
npm run new-post "Remote Work Tips for Developers"
```

This creates `src/content/blog/remote-work-tips-for-developers.md` with:
- Title: "Remote Work Tips for Developers"
- Current date
- Draft mode enabled
- Placeholder tags and content

### Next Steps:
1. Edit the generated file
2. Add appropriate tags
3. Write your content
4. Optionally add `youtubeId` or `heroImage`
5. Set `draft: false` when ready to publish

### Frontmatter Options:
- `title`: Post title (required)
- `description`: Brief post description (required)
- `pubDate`: Publication date (auto-generated)
- `draft`: Set to `false` to publish (defaults to `true`)
- `tags`: Array of tags for categorization
- `youtubeId`: YouTube video ID for embedded videos
- `heroImage`: Path to hero image for the post