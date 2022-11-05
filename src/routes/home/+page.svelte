<script lang="ts">
  import Section from './section.svelte';
  import TextLink from '$lib/components/text-link.svelte';
  import WorkItem from './work-item.svelte';
</script>

<Section even={true}>
  <img
    class="rounded-xl w-1/2 h-1/2 md:w-1/4 md:h-1/4 object-fill"
    src="/ls.jpg"
    alt="Lukas Stracke"
  />
  <div class="flex flex-col items-center justify-center w-full gap-4 md:gap-12 text-center">
    <h1 class="font-bold text-2xl sm:text-3xl md:text-5xl">Lukas Stracke</h1>
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
  <div class="flex flex-col md:flex-row gap-4 md:gap-12 justify-between w-full">
    <WorkItem title="Sentry SDK" description="Sentry JS SDK Maintainer">
      <svg
        class="__sntry__ css-lfbo6j e10nushx4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 44"
        ><defs
          ><style type="text/css">
            @media (prefers-color-scheme: dark) {
              path.__sntry__ {
                fill: #ffffff !important;
              }
            }
          </style></defs
        ><path
          d="M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"
          fill="#362d59"
          class="__sntry__"
        /></svg
      >
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
