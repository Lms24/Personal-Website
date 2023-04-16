<script lang="ts">
  export let color: string = 'bg-orange-400';
  export let mono = false;
  // color = 'bg-blue-100 dark:bg-blue-500';
</script>

<span class="inline-flex text-black items-center px-4 py-1 rounded-full font-medium {color} {mono ? 'font-mono' : ''}"
  ><slot /></span
>
