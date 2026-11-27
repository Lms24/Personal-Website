<script lang="ts">
  import Row from '$lib/components/Row.svelte';
  import Section from '$lib/components/Section.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  const fmt = (d: Date) => d.toISOString().slice(0, 10);
</script>

<svelte:head>
  <title>Blog · Lukas Stracke</title>
</svelte:head>

<div class="page-intro">
  <h1 class="page-title">Blog</h1>
  <p class="page-lede">Sometimes, I like to rant about things.</p>
</div>

<Section label="Posts">
  {#each data.blogposts as post}
    <Row title={post.meta.title} href={`/blog/${post.slug}`} aside={fmt(post.meta.date)} />
  {:else}
    <p class="empty">No posts yet.</p>
  {/each}
</Section>

<style>
  .empty {
    margin: 0;
    color: var(--muted);
  }
</style>
