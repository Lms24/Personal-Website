<script lang="ts">
  export let data: { title: string; date: string; content: ConstructorOfATypedSvelteComponent };
</script>

<svelte:head>
  <title>{data.title} · Lukas Stracke</title>
</svelte:head>

<article>
  <header>
    <p class="label">{new Date(data.date).toISOString().slice(0, 10)}</p>
    <h1>{data.title}</h1>
  </header>
  <div class="prose max-w-none">
    <svelte:component this={data.content} />
  </div>
</article>

<style>
  article {
    max-width: 68ch;
    padding-block: 64px 32px;
  }
  header {
    margin-bottom: 32px;
  }
  .label {
    margin: 0 0 10px;
  }
  h1 {
    margin: 0;
    font-size: 36px;
    line-height: 1.15;
    letter-spacing: -0.02em;
    font-weight: 600;
    text-wrap: balance;
  }
</style>
