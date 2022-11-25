<script lang="ts">
  import Badge from '$lib/components/badge.svelte';

  export let title: string;
  export let reverse: boolean | undefined = false;
  export let tags: { name: string; color: string }[] | undefined = [];
</script>

<article
  class="flex {reverse
    ? 'md:flex-row-reverse'
    : 'md:flex-row'} flex-col w-full gap-4 items-center justify-around"
>
  <slot name="image" />
  <div class="flex flex-col text-sm justify-around h-full">
    <h2 class="text-lg font-bold md:text-start text-center">{title}</h2>
    <slot name="description" />
  </div>
  <div class="flex flex-row flex-wrap w-fit gap-2 justify-center items-center">
    {#each tags || [] as tag}
      <Badge color={tag.color}>
        <span class="text-xs text-black">{tag.name}</span>
      </Badge>
    {/each}
  </div>
</article>
