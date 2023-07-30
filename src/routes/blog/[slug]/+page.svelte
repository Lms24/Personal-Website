<script lang="ts">
  export let data: { title: string; date: string; content: ConstructorOfATypedSvelteComponent };
</script>

<div class="flex flex-row justify-center w-full">
  <article class="prose prose-md max-w-5xl p-4 w-full dark:prose-invert prose-code:font-mono">
    <div class="text-center">
      <h1>{data.title}</h1>
    </div>
    <p class="text-sm text-center mt-0">Published: {new Date(data.date).toLocaleDateString()}</p>
    <svelte:component this={data.content} />
  </article>
</div>
