<script lang="ts">
  export let title: string;
  export let description: string;
</script>

<a href="/work#{title.replace(' ', '-').toLocaleLowerCase()}">
  <article
    class="bg-white border-gray-100x border-spacing-1 border-1
  rounded-xl shadow-sm p-4 text-center items-center flex flex-col
  justify-between hover:scale-[101%] transition-transform hover:cursor-pointer
  dark:bg-gray-700 dark:shadow-gray-900"
  >
    <div
      class="w-60 h-60 md:w-40 md:h-40 lg:w-60 lg:h-60 xl:w-80 xl:h-80 flex items-center justify-center"
    >
      <slot />
    </div>
    <h3 class="text-lg">{title}</h3>
    <p class="text-xs">{description}</p>
  </article>
</a>
