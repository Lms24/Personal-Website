import { fetchAllBlogPosts } from '#lib/server/index.ts';

export const GET = async () => {
  const allPosts = await fetchAllBlogPosts();

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });

  return Response.json(sortedPosts);
};
