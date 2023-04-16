<script lang="ts">
  export let href: string;
  export let bold: boolean | undefined = true;
  export let neutralLink: boolean | undefined = false;
  export let active: boolean | undefined = false;
  export let linkColor: string | undefined = 'text-orange-700 dark:text-orange-500';
</script>

<a
  {href}
  class="{neutralLink ? 'text-black dark:text-white' : linkColor} hover:text-orange-400 dark:hover:text-orange-500 hover:bg-gray-200 hover:bg-opacity-30 hover:m-[-.25rem] hover:p-1 rounded-xl transition-all duration-300 cursor-pointer {bold &&
    'font-bold'} inline-flex flex-col justify-center items-center duration-200 {active && 'underline underline-offset-8 !text-orange-400 !dark:text-orange-500'}"
  ><span><slot /></span>
</a>
