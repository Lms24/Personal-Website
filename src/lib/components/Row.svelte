<script lang="ts">
  export let title: string;
  /** Makes the title a link */
  export let href: string | undefined = undefined;
  /** Secondary line under the title, e.g. venue or company */
  export let meta: string | undefined = undefined;
  /** Right-aligned mono text, e.g. a date */
  export let aside: string | undefined = undefined;

  $: external = href?.startsWith('http');
</script>

<article class="row">
  <div class="main">
    <h3>
      {#if href}
        <a {href} target={external ? '_blank' : undefined} rel={external ? 'noopener' : undefined}
          >{title}</a
        >
      {:else}
        {title}
      {/if}
    </h3>
    {#if meta}<p class="meta">{meta}</p>{/if}
    {#if $$slots.default}<div class="desc"><slot /></div>{/if}
    {#if $$slots.links}<div class="links"><slot name="links" /></div>{/if}
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
  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 18px;
    margin-top: 8px;
    font-family: var(--font-mono);
    font-size: 12.5px;
  }
  .links :global(a) {
    color: var(--muted);
    transition: color 150ms ease;
  }
  .links :global(a:hover) {
    color: var(--accent);
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
