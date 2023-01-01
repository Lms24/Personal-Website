<script lang="ts">
  import { darkmode } from '$lib/stores/darkmode';

  const toggleDarkmode = () => {
    darkmode.update((value) => !value);
  };
</script>

<header
  class="flex flex-row md:gap-12 md:justify-start justify-between 
  bg-gradient-to-r
   from-[#942f36] via-[#c23917] to-[#dd993b] text-white
   dark:from-[#0e1522] dark:to-[#1e3145]"
>
  <nav class="flex gap-4 w-full  p-4 justify-around sm:justify-center md:gap-12">
    <a href="/home">Home</a>
    <a href="/about">About <span class="hidden md:inline">me</span></a>
    <a href="/portfolio">Portfolio</a>
    <a href="/blog">Blog</a>
  </nav>

  <button class="p-4 pr-8" on:click={toggleDarkmode}>
    <img
      class:hidden={!$darkmode}
      alt="Enable light mode"
      src="https://img.icons8.com/material-outlined/24/FFFFFF/sun--v1.png"
    />
    <img
      class:hidden={$darkmode}
      alt="Enable light mode"
      src="https://img.icons8.com/material-outlined/24/FFFFFF/do-not-disturb-2.png"
    />
  </button>
</header>
