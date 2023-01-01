<script lang="ts">
  import Section from '$lib/components/section.svelte';
  import PubItem from '../about/pub-item.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Section even
  ><div class="flex flex-row items-stretch w-full text-center justify-center py-8">
    Sometimes, I like to rant about things...
  </div></Section
>

<div class="p-4 max-w-none flex flex-col justify-center  gap-8  w-full items-stretch">
  {#each data.blogposts as post}
    <PubItem type="blog" title={post.meta.title} url={`/blog/${post.slug}`} italic={false}>
      <small>Published: {post.meta.date?.toLocaleDateString()}</small>
    </PubItem>
  {/each}
</div>
