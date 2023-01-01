<script>
  import Footer from './footer.svelte';
  import Header from './header.svelte';
  import '../app.css';
  import { darkmode } from '$lib/stores/darkmode';
</script>

<div class:dark={$darkmode}>
  <div class="min-h-screen dark:bg-gray-800 dark:text-white relative">
    <Header />
    <main class="min-h-[calc(100vh-120px)]">
      <slot />
    </main>
    <Footer />
  </div>
</div>
