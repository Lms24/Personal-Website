<script lang="ts">
  import IconWrapper from '$lib/components/iconWrapper.svelte';
  import FaBookOpen from 'svelte-icons/fa/FaBookOpen.svelte';
  import FaPen from 'svelte-icons/fa/FaPen.svelte';
  import FaMicrophone from 'svelte-icons/fa/FaMicrophone.svelte';
  import TextLink from '$lib/components/text-link.svelte';
  export let title: string;
  export let url: string;
  export let type: 'paper' | 'talk' | 'blog' | 'other';
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
    <h3><TextLink href={url}>{title}</TextLink></h3>
    <slot />
  </div>
</article>
