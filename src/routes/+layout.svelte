<script>
  import Footer from './footer.svelte';
  import Header from './header.svelte';
  import '../app.css';
</script>

<Header />

<main style="flex: 1">
  <slot />
</main>

<Footer />
