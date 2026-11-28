<script lang="ts">
  import { resolve } from '$app/paths';
  import Row from '#lib/components/Row.svelte';
  import Section from '#lib/components/Section.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

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
  {#each data.blogposts as post (post.slug)}
    <Row
      title={post.meta.title}
      href={resolve('/blog/[slug]', { slug: post.slug })}
      aside={fmt(post.meta.date)}
    />
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
