import { rawPostsToPosts } from '$lib/data/blog-post';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const blogposts = await fetch('/api/posts');
  const json = await blogposts.json();

  return { blogposts: rawPostsToPosts(json) };
};
