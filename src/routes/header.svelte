<script lang="ts">
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';

  export let activeRoute: string;

  const items = [
    { name: 'About', href: '/', route: '' },
    { name: 'Work', href: '/work', route: 'work' },
    { name: 'Talks', href: '/talks', route: 'talks' }
  ];
</script>

<header>
  <a class="id mono" href="/">lukas stracke</a>
  <div class="right">
    <nav aria-label="Main">
      <ul>
        {#each items as item}
          <li>
            <a
              href={item.href}
              class:on={activeRoute === item.route}
              aria-current={activeRoute === item.route ? 'page' : undefined}>{item.name}</a
            >
          </li>
        {/each}
      </ul>
    </nav>
    <ThemeToggle />
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px 24px;
    padding-block: 22px;
    border-bottom: 1px solid var(--line);
    font-size: 14px;
  }
  .id {
    font-size: 13px;
  }
  .right {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 24px;
  }
  nav a {
    color: var(--muted);
    transition: color 150ms ease;
  }
  nav a:hover,
  nav a.on {
    color: var(--fg);
  }
</style>
