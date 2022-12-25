<script lang="ts">
  export let data: { title: string; date: string; content: ConstructorOfATypedSvelteComponent };
</script>

<div class="flex flex-row justify-center w-full">
  <article class="prose prose-md p-4 w-full dark:prose-invert">
    <h1 class="text-center mb-0">{data.title}</h1>
    <p class="text-sm text-center mt-0">Published: {new Date(data.date).toLocaleDateString()}</p>
    <svelte:component this={data.content} />
  </article>
</div>
