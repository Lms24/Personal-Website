<script lang="ts">
  import Section from '$lib/components/section.svelte';
  import PubItem from '../../lib/components/pub-item.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Section>
  <div class="flex flex-row items-stretch w-full text-center justify-center py-8">
    Sometimes, I like to rant about things...
  </div>
</Section>

<div class="p-4 flex flex-col gap-8">
  {#each data.blogposts as post}
    <PubItem type="blog" title={post.meta.title} url={`/blog/${post.slug}`}>
      <small>Published: {post.meta.date?.toLocaleDateString()}</small>
    </PubItem>
  {/each}
</div>
