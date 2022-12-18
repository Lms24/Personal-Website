<script lang="ts">
  import H1 from '$lib/components/h1.svelte';
  import TextLink from '$lib/components/text-link.svelte';
  import type { BlogPost } from '$lib/data/blog-post';
  import type { PageData } from './$types';
  type BlogPageData = {
    blogposts: BlogPost[];
  };
  export let data: PageData;
</script>

<div class="p-4 prose max-w-none flex-col justify-center items-center w-full">
  <h1>Blog</h1>

  <p>Sometimes I like to rant about things...</p>

  <ul class="list-none">
    {#each data.blogposts as post}
      <li>
        <h2 class="mb-0.5">
          <TextLink href={`/blog/${post.slug}`}>
            {post.meta.title}
          </TextLink>
        </h2>
        <span class="text-sm">Published {post.meta.date.toLocaleDateString()}</span>
      </li>
    {/each}
  </ul>
</div>
