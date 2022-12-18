import type { RawBlogPost, RawBlogPostMetadata } from '../data/blog-post';
import path from 'path';

export async function fetchAllBlogPosts(): Promise<RawBlogPost[]> {
  const allArticleFiles = import.meta.glob('/src/routes/blog/*.md');
  const allAritcleEntries = Object.entries(allArticleFiles);

  const allArticles: RawBlogPost[] = await Promise.all(
    allAritcleEntries.map(async ([filepath, resolver]) => {
      const { metadata: meta } = (await resolver()) as { metadata: RawBlogPostMetadata };
      const slug = path.basename(filepath, '.md');
      return { meta, slug };
    })
  );

  return allArticles;
}
