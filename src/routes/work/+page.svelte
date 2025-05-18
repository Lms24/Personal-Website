<script>
  import PortfolioItem from './PortfolioItem.svelte';

  import Section from '$lib/components/section.svelte';
  import Sentry from '$lib/components/sentry.svelte';
  import TextLink from '$lib/components/text-link.svelte';
  import {
    ANGULAR,
    ECHARTS,
    FIREBASE,
    GRADLE,
    HAMCREST,
    JAVA,
    JAVASCRIPT,
    JEST,
    JUNIT,
    LERNA,
    MATERIAL,
    NODEJS,
    NX,
    PIT,
    PLAYWRIGHT,
    PWA,
    PYTHON,
    SVELTE,
    TAILWIND,
    TYPESCRIPT,
    VUE
  } from '$lib/misc/tags';
  import Separator from '$lib/components/Separator.svelte';
</script>

<Section styleClass="justify-center">
  <PortfolioItem
    title="Sentry JS SDKs"
    tags={[TYPESCRIPT, JAVASCRIPT, ANGULAR, SVELTE, NODEJS, VUE, JEST, PLAYWRIGHT, NX, LERNA]}
  >
    <Sentry slot="image" classes="flex h-48 w-48" />
    <div slot="description">
      <p>
        Sentry is an error and performance monitoring service that puts developers first. <TextLink
          href="https://sentry.io/welcome"
          bold>Sentry</TextLink
        > tries to gather everything developers need to know about why their application crashed or is
        slow.
      </p>
      <p>
        Sentry's SDKs are the gateway to this service. Everyone who wants to use Sentry needs to add
        an SDK to their application. I maintain <TextLink
          bold
          href="https://github.com/getsentry/sentry-javascript">Sentry's JavaScript SDKs</TextLink
        > which are 15 SDKs supporting all popular frontend and backend frameworks based on JavaScript.
      </p>
    </div>
  </PortfolioItem>
</Section>

<Separator></Separator>

<Section styleClass="justify-center">
  <PortfolioItem
    reverse
    title="Henri"
    tags={[ANGULAR, TYPESCRIPT, PWA, FIREBASE, NODEJS, MATERIAL, TAILWIND]}
  >
    <img slot="image" src="/henri.png" alt="Henri logo" class="flex h-52 w-52 scale-x-[-1]" />
    <div slot="description">
      <p>
        Henri is an app for professional and volunteering EMTs and paramedics to track shifts and
        calls. By keeping track of shifts and calls, <TextLink href="https://henri.live" bold
          >Henri</TextLink
        > users receive statistics about their work, allowing insights into the nature of their work
        or hobby.
      </p>
      <p>
        Henri was intially started by <TextLink bold href="https://markusdeutsch.at"
          >Markus Deutsch</TextLink
        > who builds and maintains the Android app. I joined the project to build a platform-independent
        progressive web app. It is based on Angular and relies on various Firebase (BaaS) services.
      </p>
    </div>
  </PortfolioItem>
</Section>

<Separator></Separator>

<Section styleClass="justify-center">
  <PortfolioItem title="Clifty" tags={[TYPESCRIPT]}>
    <img slot="image" src="/clifty-logo.png" alt="Henri logo" class="flex h-52 w-52 rounded-lg" />

    <div slot="description">
      <p>
        The nifty little CLI execution and testing library for JavaScript :{')'}
      </p>
      <p>
        I created <TextLink href="https://github.com/lms24/clifty" bold>Clifty</TextLink> while researching how to best e2e-test a CLI application that requires user input.
        The few options out there didn't impress me, so like any over-motivated software engineer, I decided to <TextLink href="https://www.npmjs.com/package/clifty" bold>publish my own</TextLink>.
      </p>
    </div>
  </PortfolioItem>
</Section>

<Separator></Separator>

<Section styleClass="justify-center">
  <PortfolioItem title="JSR" tags={[JAVA, JUNIT, HAMCREST, PIT, GRADLE]} reverse>
    <img slot="image" src="/jsr.png" alt="Henri logo" class="flex h-52 w-52" />

    <div slot="description">
      <p>
        JSR, short for <TextLink href="https://github.com/lms24/jsr" bold
          >Java Test Suite Reduction Framework
        </TextLink> is a tool for reducing the size of test suits in Java projects. This tool can be
        used to identify and eliminate redundant or obsolete test cases in a test suite.
      </p>
      <p>
        I created JSR while working over the course of my Master's thesis in which I explored test
        suite reduction based on various coverage metrics and reduction algorithms. As part of my
        thesis, I released JSR as an open source project and multiple TU Graz students extened it
        with new features and algorithms as part of their theses.
      </p>
    </div>
  </PortfolioItem>
</Section>
