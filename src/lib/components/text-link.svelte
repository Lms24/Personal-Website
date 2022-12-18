<script lang="ts">
  export let href: string;
  export let bold: boolean | undefined = false;
</script>

<a
  {href}
  class="hover:text-orange-400 hover:bg-gray-200 hover:bg-opacity-30 hover:m-[-.5rem] hover:p-2 rounded-xl transition-all duration-300 cursor-pointer {bold &&
    'font-bold'}"><span><slot /></span></a
>
