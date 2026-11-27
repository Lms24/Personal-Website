<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    /** Makes the title a link */
    href?: string;
    /** Secondary line under the title, e.g. venue or company */
    meta?: string;
    /** Right-aligned mono text, e.g. a date */
    aside?: string;
    /** Optional description below the title */
    children?: Snippet;
  }

  let { title, href, meta, aside, children }: Props = $props();

  let external = $derived(href?.startsWith('http'));
</script>

<article class="row">
  <div class="main">
    <h3>
      {#if href}
        <!-- Internal hrefs are passed in already resolve()d by the caller -->
        <!-- eslint-disable svelte/no-navigation-without-resolve -->
        <a
          {href}
          target={external ? '_blank' : undefined}
          rel={external ? 'external noopener' : undefined}
        >
          {title}
        </a>
        <!-- eslint-enable svelte/no-navigation-without-resolve -->
      {:else}
        {title}
      {/if}
    </h3>
    {#if meta}<p class="meta">{meta}</p>{/if}
    {#if children}<div class="desc">{@render children()}</div>{/if}
  </div>
  {#if aside}<span class="aside">{aside}</span>{/if}
</article>

<style>
  .row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: baseline;
    gap: 16px;
    padding-block: 12px;
    border-bottom: 1px solid var(--line);
  }
  .row:first-child {
    padding-top: 0;
  }
  .row:last-child {
    border-bottom: 0;
  }
  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
  h3 a {
    transition: color 150ms ease;
  }
  h3 a:hover {
    color: var(--accent);
  }
  .meta {
    margin: 0;
    color: var(--muted);
    font-size: 14px;
  }
  .desc {
    margin-top: 6px;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.6;
    max-width: 62ch;
  }
  .desc :global(ul) {
    margin: 0;
    padding-left: 1.1em;
    list-style: disc;
    display: grid;
    gap: 2px;
  }
  .desc :global(ul li::marker) {
    color: var(--line);
  }
  .desc :global(p) {
    margin: 0;
  }
  .aside {
    font-family: var(--font-mono);
    font-size: 12.5px;
    color: var(--muted);
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }
  @media (max-width: 520px) {
    .row {
      grid-template-columns: 1fr;
      gap: 0;
    }
    .aside {
      grid-row: 1;
    }
  }
</style>
