<script lang="ts">
  import Badge from '$lib/components/badge.svelte';
  import TagList from '../about/TagList.svelte';

  export let title: string;
  export let reverse: boolean | undefined = false;
  export let tags: { name: string; color: string }[] | undefined = [];
</script>

<article
  class="flex {reverse
    ? 'md:flex-row-reverse'
    : 'md:flex-row'} flex-col w-full gap-8 items-center justify-around max-w-screen-xl"
>
  <slot name="image" />
  <div class="flex flex-col text-sm justify-around h-full">
    <h2
      id={title.replace(' ', '-').toLowerCase()}
      class="text-lg font-bold md:text-start text-center"
    >
      {title}
    </h2>
    <slot name="description" />
  </div>
  <TagList mono={false} {tags}></TagList>
</article>
