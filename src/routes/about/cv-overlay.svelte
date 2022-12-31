<script lang="ts">
  import { fade } from 'svelte/transition';

  export let company: string;
  export let timeFrame: string | undefined = undefined;
  export let overlay: Boolean = true;
</script>

{#if overlay}
  <div
    class="absolute bottom-0 top-0 left-0 right-0 z-10  p-8 rounded-lg flex flex-row 
           justify-center items-center bg-white opacity-95
           gap-8 group
           dark:bg-gray-700 dark:shadow-gray-900 dark:shadow-lg"
    transition:fade={{ duration: 200 }}
  >
    <div class="dummy hidden md:inline  w-[36px]" />

    <div class="flex flex-col gap-2 items-center">
      <h3 class="text-2xl font-bold">
        {company}
      </h3>
      {#if timeFrame}
        <span class="text-xs">{timeFrame}</span>
      {/if}
    </div>

    <icon
      class="hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity duration-150"
    >
      <img
        class="inline dark:hidden"
        src="https://img.icons8.com/material-outlined/36/null/visible--v1.png"
        alt="Click for more details"
      />
      <img
        class="hidden dark:inline"
        src="https://img.icons8.com/material-outlined/36/ffffff/visible--v1.png"
        alt="Click for more details"
      />
    </icon>
  </div>
{/if}
