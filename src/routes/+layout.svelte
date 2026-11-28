<script lang="ts">
  import '../app.css';
  import Footer from './footer.svelte';
  import Header from './header.svelte';
  import { page } from '$app/state';

  let { children } = $props();

  let activeRoute = $derived(page.route.id?.split('/')[1] || '');
</script>

<svelte:head>
  <title>Lukas Stracke</title>
</svelte:head>

<div class="page wrap">
  <Header {activeRoute} />
  <main>
    {@render children()}
  </main>
  <Footer />
</div>

<style>
  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  main {
    flex: 1;
  }
</style>
