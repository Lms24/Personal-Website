<script lang="ts">
  import Badge from '$lib/components/badge.svelte';

  export let tags: { name: string; color: string }[] = [];
  export let mono = false
</script>

<div class="flex flex-row flex-wrap gap-2 text-[.6em] mt-2">
  {#each tags as { name, color }}
    <Badge {color} {mono}>{name}</Badge>
  {/each}
</div>
