# Image Handling Guidelines

This document outlines the best practices for handling images in the Work From Loam blog.

## Image Organization

### Directory Structure
```
src/
  images/
    post-slug-name/
      hero.jpg          # Main hero image for the post
      descriptive-name.jpg
      another-image.jpg
```

### Benefits
- **Organization**: Each post's images are contained in their own folder
- **Optimization**: Astro automatically optimizes all images in `src/`
- **Performance**: Images are processed, compressed, and served efficiently
- **Maintainability**: Easy to find and manage images for specific posts

## Creating New Posts

### Using the Script (Recommended)
```bash
# Create a draft post
npm run create-post "My New Blog Post" draft

# Create a published post
npm run create-post "My New Blog Post"
```

This automatically:
- Creates the markdown file with proper frontmatter
- Creates the corresponding image directory
- Includes helpful templates and reminders

### Manual Creation
1. Create post directory: `src/images/post-slug-name/`
2. Add images with descriptive names
3. Reference in markdown using relative paths

## Image Types and Usage

### Hero Images
- **Filename**: `hero.jpg` (or `.png`, `.webp`)
- **Size**: Recommended 1200-1600px width
- **Usage**: Add to frontmatter:
  ```yaml
  heroImage: "../../../images/post-slug-name/hero.jpg"
  ```

### Inline Images
- **Filenames**: Use descriptive names like `mountain-bike-components.jpg`
- **Alt Text**: Always include descriptive alt text
- **Markdown Syntax**:
  ```markdown
  ![Descriptive alt text](../../../images/post-slug-name/image-name.jpg)
  *Optional caption in italics*
  ```

## Schema Support

The content collection schema supports:
- **Local images**: `../../../images/post-slug-name/hero.jpg` (optimized by Astro)
- **External URLs**: `https://example.com/image.jpg` (for stock photos, etc.)

## Best Practices

### Before Adding Images
1. **Optimize**: Resize to appropriate dimensions (1200-1600px width for hero images)
2. **Compress**: Use tools like ImageOptim, TinyPNG, or similar
3. **Format**: Use modern formats (WebP, AVIF) when possible, fallback to JPG/PNG

### Naming Conventions
- **Good**: `mountain-bike-suspension-setup.jpg`
- **Bad**: `IMG_20240823_001.jpg`
- **Good**: `profile-racing-cranks-polished-steel.jpg`
- **Bad**: `DSC001.jpg`

### Accessibility
- Always include descriptive alt text
- For decorative images, use empty alt: `![](path/to/image.jpg)`
- Use captions to provide additional context

### Performance
- Keep file sizes reasonable (< 500KB for most images)
- Use appropriate dimensions (don't use 4K images for thumbnails)
- Leverage Astro's automatic optimization

## File Paths

### In Content Collections (Frontmatter)
```yaml
# For drafts in src/content/blog/drafts/
heroImage: "../../../images/post-slug/hero.jpg"

# For published posts in src/content/blog/
heroImage: "../../images/post-slug/hero.jpg"
```

### In Markdown Content
```markdown
# For drafts
![Alt text](../../../images/post-slug/image-name.jpg)

# For published posts  
![Alt text](../../images/post-slug/image-name.jpg)
```

## Examples

### Complete Post Setup
1. **Create post**: `npm run create-post "Bike Maintenance Tips" draft`
2. **Add images**: Place in `src/images/bike-maintenance-tips/`
3. **Update frontmatter**:
   ```yaml
   title: "Bike Maintenance Tips"
   heroImage: "../../../images/bike-maintenance-tips/hero.jpg"
   ```
4. **Reference in content**:
   ```markdown
   ![Cleaning bike chain with proper tools](../../../images/bike-maintenance-tips/chain-cleaning-tools.jpg)
   *Essential tools for proper chain maintenance*
   ```

This system ensures optimal performance, maintainability, and follows modern web development best practices.