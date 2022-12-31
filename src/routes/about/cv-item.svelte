<script lang="ts">
  import CvOverlay from './cv-overlay.svelte';

  import Badge from '$lib/components/badge.svelte';
  import TextLink from '$lib/components/text-link.svelte';

  export let company: string;
  export let url: string | undefined = undefined;
  export let timeFrame: string | undefined = undefined;
  export let position: string;
  export let location: string | undefined = undefined;

  export let languages: { name: string; color: string }[] | undefined = undefined;

  let expanded = false;
  let overlay = true;

  function toggle() {
    expanded = !expanded;
  }

  function toggleOverlay() {
    overlay = !overlay;
  }
</script>

<article
  class="flex flex-col md:flex-row w-full max-w-screen-xl bg-white p-8 rounded-lg shadow-md gap-8
  dark:bg-gray-700 dark:shadow-gray-900 relative cursor-pointer hover:scale-[101%] transition-all duration-200"
  on:click={toggleOverlay}
  on:keypress={toggleOverlay}
>
  <CvOverlay {overlay} {company} {timeFrame} />

  <div class="flex md:min-w-[14em] md:max-w-[14em] md:block">
    <div>
      {#if url !== undefined}
        <h3>
          <TextLink href={url}><span class="font-bold text-lg">{company}</span></TextLink>
        </h3>
      {:else}
        <h3><span class="font-bold text-lg">{company}</span></h3>
      {/if}
      <span class="whitespace-nowrap">{position}</span><br />
      {#if timeFrame}
        <span class="whitespace-nowrap text-xs">{timeFrame}</span>
      {/if}
      {#if location}
        <br /><span class="whitespace-nowrap text-xs">{location}</span>
      {/if}

      {#if languages}
        <div class="hidden md:flex flex-row flex-wrap gap-2 text-[.6em] mt-2">
          {#each languages as { name, color }}
            <Badge {color}>{name}</Badge>
          {/each}
        </div>
      {/if}
    </div>
    <div
      class="flex w-full justify-end items-center md:hidden cursor-pointer"
      on:click={toggle}
      on:keypress={toggle}
    >
      <img
        src="https://img.icons8.com/material-outlined/24/null/expand-arrow--v1.png"
        alt="Click for more details"
      />
    </div>
  </div>
  <div class="{expanded ? 'block' : 'hidden'} md:flex transition-all">
    <slot />
    {#if languages}
      <div class="md:hidden flex flex-row flex-wrap gap-2 text-[.6em] mt-2">
        {#each languages as { name, color }}
          <Badge {color}>{name}</Badge>
        {/each}
      </div>
    {/if}
  </div>
</article>
