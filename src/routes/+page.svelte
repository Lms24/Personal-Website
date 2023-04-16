<script lang="ts">
  import Separator from '../lib/components/Separator.svelte';

  import H1 from '$lib/components/h1.svelte';
  import Section from '$lib/components/section.svelte';
  import TextLink from '$lib/components/text-link.svelte';
  import H2 from '$lib/components/h2.svelte';
  import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
  import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
  import IconWrapper from '$lib/components/iconWrapper.svelte';
  import WorkItem from '$lib/components/work-item.svelte';
  import Sentry from '$lib/components/sentry.svelte';
</script>

<Section styleClass="min-h-[40vh] items-center justify-center">
  <img class="rounded-full w-52 h-52 object-fill" src="/ls.jpg" alt="Lukas Stracke" />
  <div class="flex flex-col items-center justify-center text-center ">
    <p>Hi, I am </p>
    <H1>Lukas Stracke</H1>
    <p class="mt-2 md:mt-6">
      Welcome to my website! I'm a software engineer from Austria, currently working at <TextLink
        href="https://sentry.io/welcome/">Sentry.io</TextLink
      >. <br />Let's connect!
    </p>
    <div class="mt-4 md:mt-8 flex flex-row gap-4 md:gap-12 items-center">
      <TextLink neutralLink href="https://twitter.com/lukasstracke">
        <IconWrapper>
          <FaTwitter />
        </IconWrapper>
      </TextLink>
      <TextLink neutralLink href="https://github.com/Lms24">
        <IconWrapper>
          <FaGithub />
        </IconWrapper>
      </TextLink>
      <TextLink neutralLink href="https://www.linkedin.com/in/lukas-stracke/">
        <IconWrapper>
          <FaLinkedin />
        </IconWrapper>
      </TextLink>
    </div>
  </div>
</Section>

<Separator />

<Section styleClass="md:flex-col">
  <H2>I'm currently...</H2>
  <ul class="list-none list-inside">
    <li>
      ...working on the <TextLink href="https://github.com/getsentry/sentry-javascript>"
        >Sentry JavaScript SDKs</TextLink
      >
    </li>
    <li>
      ...maintaining my side project <TextLink href="https://henri.live">Henri</TextLink>
    </li>
    <li>
      ...excited about <TextLink href="https://svelte.dev/">Svelte</TextLink>
      and <TextLink href="https://kit.svelte.dev/">SvelteKit</TextLink>!
    </li>
  </ul>
</Section>

<Separator />

<!-- <Section styleClass="md:flex-col gap-4">
  <h3>Click <TextLink href="/about">here</TextLink> for CV, my life story and stuff </h3>
  <h3>Check out what I <TextLink href="/work">shipped</TextLink> and contributed to</h3>
  <h3>If you have nothing better to do, read my <TextLink href="/blog">blog</TextLink></h3>
</Section> -->

<Section styleClass="md:flex-col">
  <h2>Check out some of my work:</h2>
  <div class="flex flex-col md:flex-row gap-4 md:gap-12 justify-between lg:justify-around w-full max-w-screen-xl">
    <WorkItem title="Sentry SDKs" description="Sentry JS SDK Maintainer">
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
