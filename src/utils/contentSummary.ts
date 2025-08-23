/**
 * Utility functions for generating post summaries
 */

/**
 * Extracts a summary from markdown content, stopping before headings
 * @param content - The raw markdown content
 * @param maxLength - Maximum character length for the summary (default: 400)
 * @returns Trimmed markdown content suitable for preview
 */
export function extractSummary(content: string, maxLength: number = 400): string {
  if (!content) return '';
  
  // Split content into lines
  const lines = content.split('\n');
  const summaryLines: string[] = [];
  let currentLength = 0;
  let foundFirstParagraph = false;
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Skip empty lines at the beginning
    if (!foundFirstParagraph && trimmedLine === '') {
      continue;
    }
    
    // If we hit a heading after we've started collecting content, stop
    if (foundFirstParagraph && (trimmedLine.startsWith('#') || trimmedLine.startsWith('##'))) {
      break;
    }
    
    // Skip frontmatter delimiters
    if (trimmedLine === '---') {
      continue;
    }
    
    // Add the line if it fits within our length limit
    const lineLength = trimmedLine.length;
    if (currentLength + lineLength <= maxLength) {
      summaryLines.push(line);
      currentLength += lineLength + 1; // +1 for newline
      
      // Mark that we've found content
      if (trimmedLine !== '') {
        foundFirstParagraph = true;
      }
    } else {
      // If adding this line would exceed our limit, stop
      break;
    }
  }
  
  let summary = summaryLines.join('\n').trim();
  
  // If we cut off mid-sentence, try to end at a sentence boundary
  if (summary.length >= maxLength - 50) {
    const lastSentenceEnd = Math.max(
      summary.lastIndexOf('.'),
      summary.lastIndexOf('!'),
      summary.lastIndexOf('?')
    );
    
    if (lastSentenceEnd > maxLength * 0.6) {
      summary = summary.substring(0, lastSentenceEnd + 1);
    }
  }
  
  return summary;
}

/**
 * Creates a summary component from markdown content
 * @param content - The raw markdown content
 * @param maxLength - Maximum character length for the summary
 * @returns Object with summary content and whether it was truncated
 */
export function createPostSummary(content: string, maxLength: number = 400) {
  const summary = extractSummary(content, maxLength);
  const wasTruncated = summary.length < content.length;
  
  return {
    summary,
    wasTruncated
  };
}