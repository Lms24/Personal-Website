<script lang="ts">
  import TextLink from '$lib/components/text-link.svelte';

  export let activeRoute: string;
  export let name: string;
  export let home: boolean = false;

  let active = false;
  $: active = home ? activeRoute === '' : activeRoute.toLowerCase() === name.toLowerCase();
</script>

<TextLink {active} neutralLink href={home ? '/' : name.toLowerCase()} height="h-16"
  ><span class="px-4">{name}</span></TextLink
>
