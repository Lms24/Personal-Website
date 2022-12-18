<script lang="ts">
  import Sentry from '$lib/components/sentry.svelte';
  import H1 from '$lib/components/h1.svelte';
  import Section from '$lib/components/section.svelte';
  import TextLink from '$lib/components/text-link.svelte';
  import WorkItem from './work-item.svelte';
</script>

<Section even={true}>
  <img
    class="rounded-full w-1/2 h-1/2 md:w-1/5 md:h-1/5 object-fill"
    src="/ls.jpg"
    alt="Lukas Stracke"
  />
  <div class="flex flex-col items-center justify-center w-full gap-4 md:gap-12 text-center">
    <H1>Lukas Stracke</H1>
    <p>
      I'm a Software Enginner with a passion for creating tools for developers
      <br />
      <span class="text-sm opacity-80"
        >SDK Engineer at <TextLink href="https://sentry.io/welcome/">Sentry.io</TextLink></span
      >
    </p>
  </div>
</Section>

<Section styleClass="md:flex-col">
  <h2>Check out some of my work:</h2>
  <div class="flex flex-col md:flex-row gap-4 md:gap-12 justify-between lg:justify-around w-full">
    <WorkItem title="Sentry SDK" description="Sentry JS SDK Maintainer">
      <Sentry />
    </WorkItem>
    <WorkItem title="Henri" description="Ambulance Shift Diary">
      <img src="/henri.png" alt="Henri Logo" />
    </WorkItem>
    <WorkItem title="JSR" description="Java Test Suite Reduction">
      <img src="/jsr.png" alt="JSR Logo" />
    </WorkItem>
  </div>
</Section>

<!-- <Section styleClass="md:flex-col">Sometimes, I like to rant about stuff:</Section> -->
