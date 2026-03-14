import { BlogPost } from '@prisma/client';
import { Article } from '@/types';

// Function to estimate read time based on word count
function estimateReadTime(text: string): number {
  const wordsPerMinute = 200; // Average reading speed
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function formatBlogPostToArticle(post: BlogPost): Article {
  const authorInitials = post.author
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  const readTime = estimateReadTime(post.content);

  // Assuming the first tag is the category, or a default if no tags
  const category = post.tags.length > 0 ? post.tags[0] : 'General';

  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.content.substring(0, 150) + '...', // Using a substring of content as excerpt
    category: category,
    author: post.author,
    authorInitials: authorInitials,
    readTime: readTime,
    date: post.publishedAt?.toISOString() || post.createdAt.toISOString(),
    tags: post.tags,
  };
}