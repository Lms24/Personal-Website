<script lang="ts">
  import IconWrapper from '$lib/components/iconWrapper.svelte';
  import FaBookOpen from 'svelte-icons/fa/FaBookOpen.svelte';
  import FaPen from 'svelte-icons/fa/FaPen.svelte';
  import FaMicrophone from 'svelte-icons/fa/FaMicrophone.svelte';
  import TextLink from '$lib/components/text-link.svelte';
  import FaSlideshare from 'svelte-icons/fa/FaSlideshare.svelte';
  import FaVideo from 'svelte-icons/fa/FaVideo.svelte';
  import FaGlobe from 'svelte-icons/fa/FaGlobe.svelte';

  export let title: string;
  export let type: 'paper' | 'talk' | 'blog' | 'other';
  export let url: string | undefined = undefined;
  export let slidesUrl: string | undefined = undefined;
  export let videoUrl: string | undefined = undefined;
  export let miscUrl: string | undefined = undefined;
</script>

<article
  class="px-8 py-4 flex flex-row self-center items-center bg-white shadow-sm w-full max-w-screen-xl rounded-lg
    dark:bg-gray-700 dark:shadow-gray-900 gap-8"
>
  <IconWrapper styleClass="hidden md:flex">
    {#if type === 'paper'}
      <FaBookOpen />
    {:else if type === 'talk'}
      <FaMicrophone />
    {:else if type === 'blog'}
      <FaPen />
    {/if}
  </IconWrapper>

  <div class="flex flex-col gap-1">
    <h3 class=" font-bold">
      {#if url}
        <TextLink href={url}>{title}</TextLink>
      {:else}
        {title}
      {/if}
    </h3>
    <slot />
    {#if miscUrl || slidesUrl || videoUrl}
      <div class="flex flex-row gap-4 -ml-2">
        {#if slidesUrl}
          <TextLink href={slidesUrl} styleClass="!inline-flex !flex-row !items-center "
            ><IconWrapper styleClass="h-4"><FaSlideshare /></IconWrapper> Slides</TextLink
          >
        {/if}
        {#if videoUrl}
          <TextLink href={videoUrl} styleClass="!inline-flex !flex-row !items-center"
            ><IconWrapper styleClass="h-4"><FaVideo /></IconWrapper> Video</TextLink
          >
        {/if}
        {#if miscUrl}
          <TextLink href={miscUrl} styleClass="!inline-flex !flex-row !items-center"
            ><IconWrapper styleClass="h-4"><FaGlobe /></IconWrapper> More</TextLink
          >
        {/if}
      </div>
    {/if}
  </div>
</article>
