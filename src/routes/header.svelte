<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import NavItem from '../lib/components/NavItem.svelte';

  export let activeRoute: string;
</script>

<header
  class="h-[4.5rem] flex flex-row justify-center border-b-[1px] border-gray-300 dark:border-gray-600"
>
  <Nav>
    <NavItem home {activeRoute} name="Home" />
    <NavItem {activeRoute} name="About" />
    <NavItem {activeRoute} name="Work" />
  </Nav>
</header>
