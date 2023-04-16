<script lang="ts">
  import { navigating } from '$app/stores';
  import IconWrapper from '$lib/components/iconWrapper.svelte';
  import TextLink from '$lib/components/text-link.svelte';
  import { darkmode } from '$lib/stores/darkmode';
  import IoIosMoon from 'svelte-icons/io/IoIosMoon.svelte'
  import IoIosSunny from 'svelte-icons/io/IoIosSunny.svelte'
  const toggleDarkmode = () => {
    darkmode.update((value) => !value);
  };

  export let activeRoute: string;
</script>

<header class="flex flex-row md:gap-12 md:justify-start justify-between border-b-[1px] border-gray-300 dark:border-gray-600">
  <nav class="flex justify-around sm:justify-center md:gap-12">
    <TextLink active={activeRoute === ''} neutralLink href="/">Home</TextLink>
  </nav>


  <nav class="flex gap-4 w-full  p-4 justify-around sm:justify-center md:gap-12">
    <TextLink active={activeRoute === 'about'} neutralLink href="/about">About</TextLink>
    <TextLink active={activeRoute === 'work'} neutralLink href="/work">Work</TextLink>
    <TextLink active={activeRoute === 'blog'} neutralLink href="/blog">Blog</TextLink>
  </nav>

  <button class="mx-[-1em] px-[1em]" on:click={toggleDarkmode}>
    {#if !$darkmode}
    <IconWrapper styleClass="w-[32px] h-[32px] hover:text-orange-400 dark:hover-orange-500">
      <IoIosMoon></IoIosMoon>
    </IconWrapper>
    {:else}
    <IconWrapper styleClass="w-[32px] h-[32px] hover:text-orange-400 dark:hover-orange-500">
      <IoIosSunny></IoIosSunny>  
    </IconWrapper>
    {/if}
  </button>

</header>

<style>
  .active {
    text-decoration: underline;
  }
</style>