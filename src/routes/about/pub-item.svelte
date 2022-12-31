<script lang="ts">
  export let title: string;
  export let url: string;
  export let type: 'paper' | 'talk' | 'blog' | 'other';
</script>

<a href={url}>
  <article
    class="flex flex-row items-center bg-white shadow-lg w-full max-w-screen-xl rounded-lg hover:scale-[101%] transition-transform
    dark:bg-gray-700 dark:shadow-gray-900"
  >
    {#if type === 'paper'}
      <img
        class="p-4 hidden md:block"
        src="https://img.icons8.com/material-outlined/48/null/literature--v1.png"
        alt="Publication Icon"
      />
    {:else if type === 'talk'}
      <img
        class="p-4 hidden md:block"
        src="https://img.icons8.com/material-outlined/48/null/micro.png"
        alt="Talk Icon"
      />
    {:else if type === 'blog'}
      <img
        class="p-4 hidden md:block"
        src="https://img.icons8.com/material-outlined/48/null/spiral-bound-booklet.png"
        alt="Blog post Icon"
      />
    {/if}

    <div class="flex flex-col gap-1 p-4">
      <h3 class="text-lg font-bold italic">{title}</h3>
      <slot />
    </div>
  </article>
</a>
