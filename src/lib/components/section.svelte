<script lang="ts">
  export let styleClass: string | undefined = '';

  const classesDefault = ['px-2 py-8 md:px-8 md:py-8 flex flex-col md:flex-row items-center gap-8'];

  const classes = [...classesDefault, styleClass].join(' ');
</script>

<section class={classes}><slot /></section>
