<script lang="ts">
  import Section from '#lib/components/Section.svelte';
  import SentryLogo from '#lib/components/sentry.svelte';
  import {
    ANGULAR,
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
    SVELTE,
    TAILWIND,
    TYPESCRIPT,
    VITEST,
    VUE
  } from '#lib/misc/tags.ts';
  import type { Tag } from '#lib/misc/tags.ts';

  const names = (tags: Tag[]) => tags.map((t) => t.name);

  const stacks = {
    sentry: names([
      TYPESCRIPT,
      JAVASCRIPT,
      NODEJS,
      ANGULAR,
      SVELTE,
      VUE,
      JEST,
      PLAYWRIGHT,
      NX,
      LERNA
    ]),
    henri: names([ANGULAR, TYPESCRIPT, PWA, FIREBASE, NODEJS, MATERIAL, TAILWIND]),
    clifty: names([TYPESCRIPT, VITEST]),
    jsr: names([JAVA, JUNIT, HAMCREST, PIT, GRADLE])
  };
</script>

<svelte:head>
  <title>Work · Lukas Stracke</title>
</svelte:head>

<div class="page-intro">
  <h1 class="page-title">Work</h1>
  <p class="page-lede">Things I've built or maintain, at work and on the side.</p>
</div>

<div class="work">
  <Section label="Sentry JS SDKs" id="sentry-js-sdks">
    {#snippet rail()}
      <div class="tile sentry"><SentryLogo /></div>
    {/snippet}
    <div class="project">
      <p class="lead">
        The SDKs that connect JavaScript applications to Sentry's error and performance monitoring.
      </p>
      <p>
        Every Sentry user starts by adding an SDK to their app. Together with my team I maintain the
        15 JavaScript SDKs that cover the popular frontend and backend frameworks, and I own the
        Angular and Svelte SDKs.
      </p>
      <ul class="tags">
        {#each stacks.sentry as tag (tag)}<li>{tag}</li>{/each}
      </ul>
      <div class="links mono">
        <a href="https://github.com/getsentry/sentry-javascript" target="_blank" rel="noopener">
          GitHub ↗
        </a>
        <a href="https://sentry.io/welcome/" target="_blank" rel="noopener">sentry.io ↗</a>
      </div>
    </div>
  </Section>

  <Section label="Henri" id="henri">
    {#snippet rail()}
      <div class="tile"><img src="/henri.png" alt="" width="512" height="512" /></div>
    {/snippet}
    <div class="project">
      <p class="lead">
        An app for professional and volunteer EMTs and paramedics to track their shifts and calls.
      </p>
      <p>
        From that log, users get statistics about the nature of their work. Henri was started by <a
          class="link"
          href="https://markusdeutsch.at"
        >
          Markus Deutsch
        </a>, who builds the Android app. I joined to build a platform-independent progressive web
        app on Angular and Firebase.
      </p>
      <ul class="tags">
        {#each stacks.henri as tag (tag)}<li>{tag}</li>{/each}
      </ul>
      <div class="links mono">
        <a href="https://henri.live" target="_blank" rel="noopener">henri.live ↗</a>
      </div>
    </div>
  </Section>

  <Section label="Clifty" id="clifty">
    {#snippet rail()}
      <div class="tile full"><img src="/clifty-logo.png" alt="" width="1024" height="1024" /></div>
    {/snippet}
    <div class="project">
      <p class="lead">A small library for running and testing CLI applications in JavaScript.</p>
      <p>
        I wrote Clifty while looking for a good way to end-to-end test a CLI that asks for user
        input. The existing options didn't convince me, so I published my own.
      </p>
      <ul class="tags">
        {#each stacks.clifty as tag (tag)}<li>{tag}</li>{/each}
      </ul>
      <div class="links mono">
        <a href="https://github.com/lms24/clifty" target="_blank" rel="noopener">GitHub ↗</a>
        <a href="https://www.npmjs.com/package/clifty" target="_blank" rel="noopener">npm ↗</a>
      </div>
    </div>
  </Section>

  <Section label="JSR" id="jsr">
    {#snippet rail()}
      <div class="tile mark mono" aria-hidden="true">jsr</div>
    {/snippet}
    <div class="project">
      <p class="lead">
        The Java Test Suite Reduction framework finds redundant and obsolete test cases in Java test
        suites.
      </p>
      <p>
        I built JSR for my Master's thesis, which compared test suite reduction across coverage
        metrics and reduction algorithms. It's open source, and several TU Graz students have since
        extended it with new features and algorithms in their own theses.
      </p>
      <ul class="tags">
        {#each stacks.jsr as tag (tag)}<li>{tag}</li>{/each}
      </ul>
      <div class="links mono">
        <a href="https://github.com/lms24/jsr" target="_blank" rel="noopener">GitHub ↗</a>
      </div>
    </div>
  </Section>
</div>

<style>
  /* Rail: logo tile under the project name */
  .tile {
    width: 112px;
    aspect-ratio: 1;
    margin-top: 16px;
    border: 1px solid var(--line);
    border-radius: 6px;
    background: var(--chip);
    display: grid;
    place-items: center;
    overflow: hidden;
  }
  .tile img {
    width: 72%;
    height: 72%;
    object-fit: contain;
  }
  .tile.full img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .tile.sentry {
    color: var(--fg);
  }
  .tile.sentry :global(svg) {
    width: 50%;
  }
  .tile.mark {
    font-size: 26px;
    font-weight: 500;
    letter-spacing: -0.02em;
    color: var(--fg);
  }

  /* Body */
  .project {
    display: grid;
    gap: 12px;
    max-width: 62ch;
  }
  .project p {
    margin: 0;
  }
  .project p:not(.lead) {
    color: var(--muted);
    font-size: 15px;
  }
  .lead {
    font-size: 17px;
    line-height: 1.55;
    text-wrap: pretty;
  }
  .tags {
    list-style: none;
    margin: 4px 0 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .tags li {
    font-family: var(--font-mono);
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 3px;
    background: var(--chip);
    color: var(--muted);
  }
  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 20px;
    font-size: 12.5px;
  }
  .links a {
    color: var(--muted);
    transition: color 150ms ease;
  }
  .links a:hover {
    color: var(--accent);
  }

  @media (max-width: 760px) {
    /* On phones the rail turns into a compact header: tile left, name right */
    .work :global(.rail) {
      display: grid;
      grid-template-columns: 56px minmax(0, 1fr);
      column-gap: 14px;
      align-items: center;
    }
    .tile {
      width: 56px;
      margin-top: 0;
      grid-column: 1;
      grid-row: 1;
    }
    .work :global(.rail h2) {
      grid-column: 2;
      grid-row: 1;
    }
    .work :global(.sec) {
      gap: 16px;
    }
  }
</style>
