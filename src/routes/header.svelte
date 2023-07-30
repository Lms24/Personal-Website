<script lang="ts">
  import NavItem from './NavItem.svelte';

  export let activeRoute: string;
</script>

<header
  class="h-[4.5rem] flex flex-row justify-center border-b-[1px] border-gray-300 dark:border-gray-600"
>
  <nav class="w-full flex justify-center gap-10 items-center">
    <NavItem home {activeRoute} name="Home" />
    <NavItem {activeRoute} name="About" />
    <NavItem {activeRoute} name="Work" />
  </nav>
</header>

<style>
  .active {
    text-decoration: underline;
  }
</style>
