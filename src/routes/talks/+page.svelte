<script lang="ts">
  type Talk = {
    id: string;
    title: string;
    venue: string;
    kind: 'Conference' | 'Meetup' | 'Lightning talk';
    date: string;
    description: string;
    slides?: string;
    video?: string;
    event?: string;
    post?: string;
  };

  const talks: Talk[] = [
    {
      id: 'tracing-the-slowdown',
      title: 'Tracing the Slowdown: OpenTelemetry in SvelteKit made easy',
      venue: 'Svelte Summit',
      kind: 'Conference',
      date: '2025-05',
      description:
        'The challenges of adding OpenTelemetry tracing to SvelteKit applications, and a proposal to make observability in SvelteKit simpler, presented in front of the Svelte team.',
      slides: 'https://github.com/Lms24/25-04-tracing-the-slowdown',
      event: 'https://www.sveltesummit.com/schedule'
    },
    {
      id: 'astro-for-svelte-developers',
      title: 'Astro for Svelte Developers',
      venue: 'Svienna',
      kind: 'Meetup',
      date: '2024-12',
      description:
        'When to pick Astro or SvelteKit for your next project. Unfortunately, the recording was lost.',
      event: 'https://austria.sveltesociety.dev/meetups/2024-12-Svienna-Svelte-Society-Vienna'
    },
    {
      id: 'mutation-testing',
      title: 'Mutation Testing: Testing your Tests',
      venue: 'ViennaJS',
      kind: 'Meetup',
      date: '2024-10',
      description:
        'What mutation testing is, how to use it in JavaScript, and what I learned using it on the Sentry JS SDK codebase.',
      slides: 'https://github.com/Lms24/24-10-viennajs-mutation-testing',
      video: 'https://www.youtube.com/watch?v=Jx57AVzkZJU',
      post: 'https://blog.sentry.io/mutation-testing-js-sdks/'
    },
    {
      id: 'spotlight-3rd-party-widgets',
      title: 'Shining a Spotlight on 3rd Party Widgets',
      venue: 'React Amsterdam',
      kind: 'Meetup',
      date: '2024-02',
      description:
        "How we used the Shadow DOM API to isolate Spotlight's overlay from the host page.",
      event: 'https://guild.host/events/react-amsterdam-february-ratkci'
    },
    {
      id: 'sveltekit-sdk',
      title: 'Building an Application Monitoring SDK for SvelteKit',
      venue: 'Svienna',
      kind: 'Meetup',
      date: '2024-01',
      description:
        "How I built Sentry's SvelteKit SDK: the specific challenges, and a lot of detail on how SvelteKit works internally.",
      slides: 'https://github.com/Lms24/svienna-sveltekit-sdk-bts',
      video: 'https://www.youtube.com/watch?v=N8Hs-LVL_f8',
      event: 'https://svienna-sveltekit-sdk-bts.vercel.app/'
    },
    {
      id: 'know-your-components',
      title: 'Know your Components',
      venue: 'VueConf US',
      kind: 'Lightning talk',
      date: '2022-06',
      description:
        'How looking at the lifecycle of Vue components helps find and fix performance issues.',
      video: 'https://www.vuemastery.com/conferences/vueconf-us-2022/know-your-components/'
    }
  ];

  const years = talks.map((t) => t.date.slice(0, 4));
  const span = `${years[years.length - 1]} – ${years[0]}`;
</script>

<svelte:head>
  <title>Talks · Lukas Stracke</title>
</svelte:head>

<div class="page-intro">
  <h1 class="page-title">Talks</h1>
  <p class="page-lede">
    Sometimes I get over my fear of public speaking and give talks about Svelte, observability or
    testing. Slides and recordings are linked where they exist.
  </p>
  <figure>
    <picture>
      <source media="(min-width: 761px)" srcset="/ls-svelte-summit-1-2.jpg" />
      <img src="/ls-svelte-summit-1-1.jpg" alt="Lukas Stracke on stage at Svelte Summit 2025" />
    </picture>
    <figcaption class="mono">
      Svelte Summit 2025 · Photo by <a class="link" href="https://ermeen.com">Ermeen</a>
    </figcaption>
  </figure>
</div>

<div class="list-head label">
  <span>{talks.length} talks</span><span>{span}</span>
</div>

<ol class="talks">
  {#each talks as talk (talk.id)}
    <li class="talk" id={talk.id}>
      <div class="when">
        <time class="mono" datetime={talk.date}>{talk.date}</time>
        <span class="venue">{talk.venue}</span>
        <span class="kind">{talk.kind}</span>
      </div>
      <div class="what">
        <h2>{talk.title}</h2>
        <p>{talk.description}</p>
        <div class="links mono">
          {#if talk.slides}<a href={talk.slides} target="_blank" rel="external noopener">
              Slides ↗
            </a>{/if}
          {#if talk.video}<a href={talk.video} target="_blank" rel="external noopener">
              Video ↗
            </a>{/if}
          {#if talk.event}<a href={talk.event} target="_blank" rel="external noopener">
              Event ↗
            </a>{/if}
          {#if talk.post}<a href={talk.post} target="_blank" rel="external noopener">
              Blog post ↗
            </a>{/if}
        </div>
      </div>
    </li>
  {/each}
</ol>

<style>
  figure {
    margin: 40px 0 0;
  }
  img {
    width: 100%;
    max-height: 380px;
    object-fit: cover;
    object-position: center 60%;
    border-radius: 4px;
    display: block;
  }
  figcaption {
    margin-top: 8px;
    font-size: 11.5px;
    color: var(--muted);
  }

  .list-head {
    display: flex;
    justify-content: space-between;
    padding-block: 12px;
    border-top: 1px solid var(--line);
  }

  .talks {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .talk {
    display: grid;
    grid-template-columns: var(--rail) minmax(0, 1fr);
    align-items: baseline;
    gap: var(--gap);
    padding-block: 28px;
    border-top: 1px solid var(--line);
    scroll-margin-top: 24px;
  }
  .talk:target h2 {
    color: var(--accent);
  }
  .when {
    display: grid;
    gap: 2px;
  }
  time {
    font-size: 13px;
    font-variant-numeric: tabular-nums;
  }
  .venue {
    font-size: 15px;
  }
  .kind {
    font-size: 13px;
    color: var(--muted);
  }
  .what {
    min-width: 0;
    max-width: 62ch;
  }
  h2 {
    margin: 0;
    font-size: 19px;
    line-height: 1.4;
    font-weight: 500;
    letter-spacing: -0.01em;
    text-wrap: balance;
  }
  .what p {
    margin: 8px 0 0;
    color: var(--muted);
    line-height: 1.6;
  }
  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 20px;
    margin-top: 12px;
    font-size: 12.5px;
  }
  .links:empty {
    display: none;
  }
  .links a {
    color: var(--muted);
    transition: color 150ms ease;
  }
  .links a:hover {
    color: var(--accent);
  }

  @media (max-width: 760px) {
    figure {
      margin-top: 28px;
    }
    .talk {
      grid-template-columns: 1fr;
      gap: 10px;
      padding-block: 24px;
    }
    .when {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 10px;
      align-items: baseline;
    }
    .venue,
    .kind {
      font-size: 13px;
    }
    .venue::before,
    .kind::before {
      content: '·';
      margin-right: 10px;
      color: var(--muted);
    }
  }
</style>
