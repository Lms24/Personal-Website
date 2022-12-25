<script lang="ts">
  export let styleClass: string | undefined = '';
  export let even: boolean = false;

  const classesEven = [
    'bg-gradient-to-r',
    'from-[#b43a42]',
    'via-[#fd481d]',
    'to-[#fcb045]',
    'dark:bg-gradient-to-r',
    'dark:from-[#52191d]',
    'dark:via-[#7a2410]',
    'dark:to-[#73501f]',
    'text-white'
  ];
  const classesOdd: string[] = [];
  const classesDefault = ['px-2 py-8 md:px-8 md:py-8 flex flex-col md:flex-row items-center gap-8'];

  const classes = [...classesDefault, ...(even ? classesEven : classesOdd), styleClass].join(' ');
</script>

<section class={classes}><slot /></section>
