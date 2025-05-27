<script lang="ts">
  import HardFacts from './HardFacts.svelte';

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
    if (!expanded) {
      overlay = !overlay;
    }
  }
</script>

<article
  class="flex flex-col w-full max-w-screen-xl
  bg-white p-8 rounded-lg shadow-sm gap-4
  dark:bg-gray-700 dark:shadow-gray-900
   transition-all duration-200"
  on:click={toggleOverlay}
  on:keypress={toggleOverlay}
>
  <div class="flex flex-col md:flex-row gap-4">
    <div class="min-w-[12rem] items-stretch">
      <HardFacts {url} {company} {timeFrame} {position} {location} />
    </div>

    <div class="pl-4">
      <slot />
    </div>
  </div>

  {#if languages}
    <languages tags={languages} />
  {/if}
</article>
