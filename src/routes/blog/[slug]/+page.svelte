<script lang="ts">
  import H1 from "$lib/components/h1.svelte";

  export let data: { title: string; date: string; content: ConstructorOfATypedSvelteComponent };
</script>

<div class="flex flex-row justify-center w-full">
  <article class="prose prose-md p-4 w-full dark:prose-invert">
    <div class="text-center">
      <H1>{data.title}</H1>
    </div>
    <p class="text-sm text-center mt-0">Published: {new Date(data.date).toLocaleDateString()}</p>
    <svelte:component this={data.content} />
  </article>
</div>
