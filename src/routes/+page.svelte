<script lang="ts">
  import { resolve } from '$app/paths';
  import Row from '#lib/components/Row.svelte';
  import Section from '#lib/components/Section.svelte';
  import SocialLinks from '#lib/components/SocialLinks.svelte';
</script>

<div class="hero">
  <img class="photo" src="/ls.jpg" alt="Portrait of Lukas Stracke" width="200" height="200" />
  <div class="intro">
    <h1>Lukas Stracke</h1>
    <p class="bio">
      Software engineer at <a class="link" href="https://sentry.io/welcome/">Sentry</a>, where I
      maintain Sentry's JavaScript SDKs with my team. I build tools for developers and spend most of
      my time on SDK and library development, observability, and testing.
    </p>
    <dl>
      <dt class="label">Currently</dt>
      <dd>SDKs at Sentry</dd>
      <dt class="label">Focus</dt>
      <dd>SDKs &amp; libraries · Observability · Testing</dd>
      <dt class="label">Based in</dt>
      <dd>Vienna, Austria</dd>
      <dt class="label">Background</dt>
      <dd>MSc Computer Science, TU Graz</dd>
      <dt class="label">Elsewhere</dt>
      <dd><SocialLinks /></dd>
    </dl>
  </div>
</div>

<Section label="Experience">
  <Row
    title="Software Engineer"
    meta="Sentry · Vienna"
    aside="2022 – now"
    href="https://sentry.io/welcome/"
  >
    <ul>
      <li>
        Working on <a class="link" href="https://github.com/getsentry/sentry-javascript">
          Sentry's JavaScript SDKs
        </a>, supporting more than 15 frontend and backend frameworks.
      </li>
      <li>Own the Angular and Svelte SDKs.</li>
      <li>Drive projects such as the bundler plugins and the SDK setup wizards.</li>
      <li>Work with the open source community on GitHub, triaging issues and requests.</li>
    </ul>
  </Row>
  <Row
    title="Frontend Developer"
    meta="Prime Software · Graz"
    aside="2020 – 2021"
    href="https://www.prime-software.at/"
  >
    <ul>
      <li>Built and maintained Angular SPAs with a focus on usability and PWA standards.</li>
      <li>Architected a new SPA around extensibility, code splitting and performance.</li>
      <li>Introduced best practices in Angular development, SEO and deployment.</li>
    </ul>
  </Row>
  <Row title="Fullstack Developer" meta="Management Partners · Graz" aside="2016 – 2020">
    <ul>
      <li>Maintained and extended a Java EE application, focusing on usability and performance.</li>
      <li>Improved security, CI/CD, maintenance and code quality in the development process.</li>
      <li>Mentored developers in JavaServer Faces and MS SQL Server.</li>
    </ul>
  </Row>
  <Row title="Research Assistant" meta="TU Graz" aside="2019" href="https://www.tugraz.at">
    <p>
      Built a prototype for code similarity detection using subgraph isomorphism testing of program
      dependence graphs. This became my Bachelor's thesis.
    </p>
  </Row>
</Section>

<Section label="Education">
  <Row title="MSc Computer Science" meta="TU Graz" aside="2020 – 2022">
    <p>
      Software technology major, multimedia systems minor. Thesis on <em>
        Test Suite Reduction with Checked Coverage
      </em>, passed with distinction.
    </p>
  </Row>
  <Row title="BSc Computer Science" meta="TU Graz" aside="2016 – 2020">
    <p>Thesis on <em>Code Similarity Detection using Program Dependence Graphs</em>.</p>
  </Row>
</Section>

<Section label="Recent talks">
  <Row
    title="Tracing the Slowdown: OpenTelemetry in SvelteKit"
    meta="Svelte Summit"
    aside="2025-05"
    href={resolve('/talks#tracing-the-slowdown')}
  />
  <Row
    title="Astro for Svelte Developers"
    meta="Svienna"
    aside="2024-12"
    href={resolve('/talks#astro-for-svelte-developers')}
  />
  <Row
    title="Mutation Testing: Testing your Tests"
    meta="ViennaJS"
    aside="2024-10"
    href={resolve('/talks#mutation-testing')}
  />
  <p class="more mono"><a href={resolve('/talks')}>All talks →</a></p>
</Section>

<Section label="Writing">
  <Row
    title="Naming is hard, semantics are hard(er): Inside Sentry Conventions"
    aside="2026-11"
    href="https://blog.sentry.io/sentry-conventions/"
  />
  <Row
    title="Improving browser tracing step by step"
    aside="2025-10"
    href="https://blog.sentry.io/improving-browser-tracing-step-by-step/"
  />
  <Row
    title="SvelteKit observability just got 10x better"
    aside="2025-09"
    href="https://blog.sentry.io/sveltekit-observability-just-got-10x-better/"
  />
  <Row
    title="Mutation-testing our JavaScript SDKs"
    aside="2024-08"
    href="https://blog.sentry.io/mutation-testing-js-sdks/"
  />
  <Row
    title="Sentry for SvelteKit"
    aside="2023-05"
    href="https://blog.sentry.io/sentry-for-sveltekit/"
  />
  <Row
    title="Compiling Angular Libraries Properly in a Multi-Framework SDK Monorepo"
    aside="2022-07"
    href="https://blog.sentry.io/compiling-angular-libraries-multi-framework-sdk-monorepo/"
  />
  <Row
    title="Checked Coverage for Test Suite Reduction – Is It Worth the Effort?"
    meta="Paper · AST '22 · Best Paper Award"
    aside="2022"
    href="https://dl.acm.org/doi/abs/10.1145/3524481.3527216"
  />
  <p class="more mono">
    <a href="https://blog.sentry.io/authors/lukas-stracke/" target="_blank" rel="noopener">
      All posts on the Sentry Blog ↗
    </a>
  </p>
</Section>

<Section label="Outside work">
  <p class="plain">
    Music and guitars, aviation and flight simming, sailing, cooking, woodworking, ambulance
    service, data and politics. And yes, I'm a dog person.
  </p>
</Section>

<style>
  .hero {
    display: grid;
    grid-template-columns: var(--rail) minmax(0, 1fr);
    gap: var(--gap);
    padding-block: 64px 48px;
  }
  .photo {
    width: 100%;
    max-width: var(--rail);
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 4px;
    filter: grayscale(0.15);
  }
  .intro {
    min-width: 0;
  }
  h1 {
    margin: 0 0 18px;
    font-size: 40px;
    line-height: 1.1;
    letter-spacing: -0.02em;
    font-weight: 600;
    text-wrap: balance;
  }
  .bio {
    margin: 0;
    font-size: 17px;
    line-height: 1.65;
    max-width: 60ch;
  }
  dl {
    display: grid;
    grid-template-columns: 120px minmax(0, 1fr);
    align-items: baseline;
    gap: 8px 16px;
    margin: 28px 0 0;
    font-size: 15px;
  }
  dt {
    font-size: 11.5px;
  }
  dd {
    margin: 0;
  }
  .more {
    margin: 12px 0 0;
    font-size: 12.5px;
  }
  .more a {
    color: var(--accent);
  }
  .plain {
    margin: 0;
    color: var(--muted);
    max-width: 62ch;
  }
  @media (max-width: 760px) {
    .hero {
      grid-template-columns: 1fr;
      gap: 24px;
      padding-block: 40px 32px;
    }
    .photo {
      width: 96px;
    }
    h1 {
      font-size: 32px;
    }
    dl {
      grid-template-columns: 1fr;
      gap: 0;
    }
    dd {
      margin-bottom: 12px;
    }
  }
</style>
