<script>
  import Separator from '$lib/components/Separator.svelte';
  import H1 from '$lib/components/h1.svelte';
  import PubItem from '$lib/components/pub-item.svelte';
  import Section from '$lib/components/section.svelte';
  import TextLink from '$lib/components/text-link.svelte';
</script>

<Section styleClass="flex md:flex-col">
  <figure class="w-5/6 md:w-2/3">
    <img
      src="/ls-svelte-summit-1-1.jpg"
      alt="Lukas Stracke at Svelte Summit 2025"
      class="md:hidden rounded-lg"
    />
    <img
      src="/ls-svelte-summit-1-2.jpg"
      alt="Lukas Stracke at Svelte Summit 2025"
      class="hidden md:block rounded-lg"
    />
    <figcaption class="text-[0.5em] opacity-50">
      Picture taken at Svelte Summit 2025 by <TextLink href="https://ermeen.com">Ermeen</TextLink>.
    </figcaption>
  </figure>

  <p class="text-lg">
    Sometimes, I overcome my fear of public speaking and give talks about svelte, observability or
    testing.
  </p>
</Section>

<Separator />

<Section styleClass="md:flex-col">
  <PubItem
    title="Tracing the Slowdown: OpenTelemetry in SvelteKit made easy @ Svelte Summit 05/2025"
    type="talk"
    miscUrl="https://www.sveltesummit.com/schedule"
    slidesUrl="https://github.com/Lms24/25-04-tracing-the-slowdown"
  >
    <p>
      Talk at the Svelte Summit conference about the challenges of adding OpenTelemetry tracing to
      SvelteKit applications. Also presented a solution to simplify observability in SvelteKit in
      front of the Svelte team.
    </p>
  </PubItem>

  <PubItem
    title="Astro for Svelte Developers @ Svienna 12/2024"
    type="talk"
    miscUrl="https://austria.sveltesociety.dev/meetups/2024-12-Svienna-Svelte-Society-Vienna"
  >
    <p>
      A talk about when to use Astro or SvelteKit for your next project. Unfortunately, the
      recording was lost.
    </p>
  </PubItem>

  <PubItem
    title="Mutation Testing: Testing your Tests @ ViennaJS 10/2024"
    type="talk"
    miscUrl="https://sentry.engineering/blog/js-mutation-testing-our-sdks"
    videoUrl="https://www.youtube.com/watch?v=Jx57AVzkZJU&ab_channel=ViennaJS"
    slidesUrl="https://github.com/Lms24/24-10-viennajs-mutation-testing"
  >
    <p>
      Meetup Talk at ViennaJS about Mutation Testing and how to use it in JavaScript. Also shared my
      experience of using it in the Sentry JS SDK codebase.
    </p>
  </PubItem>

  <PubItem
    title="Shining a Spotlight on 3rd Party Widgets @ React Amsterdam 02/2024"
    type="talk"
    miscUrl="https://guild.host/events/react-amsterdam-february-ratkci"
  >
    <p>
      Meetup Talk at React Amsterdam about the Shadow DOM API and how we used it to isolate <TextLink
        href="https://spotlightjs.com">Spotlight's</TextLink
      > Overlay from the host page.
    </p>
  </PubItem>

  <PubItem
    title="Building an Application Monitoring SDK for SvelteKit @ Svienna 01/2024"
    videoUrl="https://www.youtube.com/watch?v=N8Hs-LVL_f8"
    slidesUrl="https://github.com/Lms24/svienna-sveltekit-sdk-bts"
    miscUrl="https://svienna-sveltekit-sdk-bts.vercel.app/"
    type="talk"
  >
    <p>
      Meetup talk how I built Sentry's SvelteKit SDK. I shared insights into specific challenges as
      well as a lot of details on the inner workings of SvelteKit.
    </p>
  </PubItem>

  <PubItem
    title="Know your Components @ VueConf 2022"
    videoUrl="https://www.vuemastery.com/conferences/vueconf-us-2022/know-your-components/"
    type="talk"
  >
    Lightning Talk on how investigating the lifecycle of Vue components helps identify and resolve
    performance issues.
  </PubItem>
</Section>
