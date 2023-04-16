<script lang=ts>
  import Footer from './footer.svelte';
  import Header from './header.svelte';
  import '../app.css';
  import { darkmode } from '$lib/stores/darkmode';
  import { browser } from '$app/environment';
  import { onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import { navigating, page } from '$app/stores';

  const setDarkMode = (dark: boolean) => {
    if (dark) {
      document.querySelector('body')?.classList.add('bg-gray-800', 'text-white');
      document.querySelector('body')?.classList.remove('bg-gray-50', 'text-black');
    } else {
      document.querySelector('body')?.classList.remove('bg-gray-800', 'text-white');
      document.querySelector('body')?.classList.add('bg-gray-50', 'text-black');
    }
  }

  const unsub = darkmode.subscribe((dark) => {
    browser && setDarkMode(dark);
  });

  onDestroy(() => {
    unsub();
  });

  let activeRoute: string;
  $: activeRoute = $page.route.id?.split('/')[1];

</script>

<div class:dark={$darkmode}>
  <div class="min-h-screen relative px-4">
    <Header {activeRoute}/>
    <main class="min-h-[calc(100vh-120px)]">
      <slot />
    </main>
    <Footer />
  </div>
</div>
