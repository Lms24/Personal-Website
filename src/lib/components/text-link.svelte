<script lang="ts">
  export let href: string;
</script>

<a
  {href}
  class="py-1 px-2 hover:text-orange-400 hover:bg-gray-200 hover:bg-opacity-30 rounded-xl transition-all duration-300 cursor-pointer"
  ><slot /></a
>
