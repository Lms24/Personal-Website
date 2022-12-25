<script>
  import Footer from './footer.svelte';
  import Header from './header.svelte';
  import '../app.css';
  import { darkmode } from '$lib/stores/darkmode';
</script>

<div class:dark={$darkmode}>
  <div class="darkBase min-h-screen dark:bg-gray-800 dark:text-white">
    <Header />
    <main style="flex: 1">
      <slot />
    </main>
    <Footer />
  </div>
</div>
