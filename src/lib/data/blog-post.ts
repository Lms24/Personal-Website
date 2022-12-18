export type RawBlogPostMetadata = {
  title: string;
  date: string;
};

export type RawBlogPost = {
  meta: RawBlogPostMetadata;
  slug: string;
};

export type BlogPostMetadata = Omit<RawBlogPostMetadata, 'date'> & {
  date: Date;
};

export type BlogPost = Omit<RawBlogPost, 'meta'> & {
  meta: BlogPostMetadata;
  slug: string;
};

export function rawPostsToPosts(rawPosts: RawBlogPost[]): BlogPost[] {
  return rawPosts.map((rawPost) => {
    return {
      ...rawPost,
      meta: {
        ...rawPost.meta,
        date: new Date(rawPost.meta.date)
      }
    };
  });
}
