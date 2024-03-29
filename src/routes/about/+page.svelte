<script>
  import Separator from '$lib/components/Separator.svelte';
  import Badge from '$lib/components/badge.svelte';
  import H1 from '$lib/components/h1.svelte';
  import H2 from '$lib/components/h2.svelte';
  import Section from '$lib/components/section.svelte';
  import TextLink from '$lib/components/text-link.svelte';
  import {
    ANGULAR,
    DOTNET,
    JAVA,
    JAVASCRIPT,
    JSF,
    KOTLIN,
    MSSQL,
    NODEJS,
    PYTHON,
    REACT,
    RUST,
    SVELTE,
    TYPESCRIPT,
    VUE
  } from '$lib/misc/tags';
  import CvItem from './cv-item.svelte';
  import PubItem from './pub-item.svelte';
</script>

<Section styleClass="flex flex-row">
  <div>
    <img class="rounded-full p-8" src="/ls.jpg" alt="Lukas Stracke" />
  </div>
  <div class="flex flex-col items-center w-full md:text-center gap-4">
    <H1>About Me</H1>
    <p class="mt-4">
      I'm a software engineer who loves to work with modern web technologies. I enjoy creating tools
      for developers and I've specialized in SDK development, observability and testing. I'm
      currently working at <TextLink href="https://sentry.io/welcome/">sentry.io</TextLink> where I maintain
      Sentry's 15 JavaScript SDKs together with my amazing team. Previously, I studied computer science
      at Graz University of Technology while working as a web developer on JavaEE and Angular projects.
    </p>
    <p>
      Aside from Software, you'll find me making music, flight simming and enjoying life in the
      beautiful city of Vienna. By the way, I'm a dog person!
    </p>
  </div>
</Section>

<Separator />

<Section styleClass="w-full md:flex-col justify-center items-center">
  <H2>Work Experience</H2>

  <CvItem
    company="Sentry.io"
    position="Software Engineer"
    timeFrame="Since Feb 2022"
    location="Vienna, AT"
    url="https://sentry.io/welcome/"
    languages={[JAVASCRIPT, TYPESCRIPT, ANGULAR, SVELTE, VUE, NODEJS, REACT, RUST, PYTHON]}
  >
    <ul class="list-disc">
      <li>
        Working on <TextLink href="https://github.com/getsentry/sentry-javascript"
          >Sentry's JS SDKs</TextLink
        > - We support more than 15 frontend and backend JS frameworks.
      </li>
      <li class="mt-1">
        Actively engaging with the open source community on GitHub, triaging incoming issues and
        requests.
      </li>
      <li class="mt-1">
        I own Sentry's Angular and Svelte SDKs, specializing in the respective frameworks.
      </li>
      <li class="mt-1">
        I drive and contribute to multiple projects, such as our bundler plugins and SDK setup
        wizards.
      </li>
    </ul>
  </CvItem>

  <CvItem
    company="Prime Software"
    position="Frontend Developer"
    timeFrame="Jul 2020 - Dec 2021"
    url="https://www.prime-software.at/"
    location="Graz, AT"
    languages={[ANGULAR, JAVA, DOTNET]}
  >
    <ul class="list-disc">
      <li>
        Created and maintained multiple Angular SPAs with heavy emphasis on usability and PWA
        standards.
      </li>
      <li class="mt-1">
        Planned and architected a new SPA with focus on extensibility, code splitting and
        performance.
      </li>
      <li class="mt-1">
        Introduced various best practises in Angular development, SEO and and deployment.
      </li>
    </ul>
  </CvItem>

  <CvItem
    company="Management Partners"
    position="Fullstack Developer"
    timeFrame="Oct 2016 - Feb 2020"
    location="Graz, AT"
    languages={[JAVA, JSF, MSSQL]}
  >
    <ul class="list-disc">
      <li>
        Maintained and extended a JavaEE application with a focus on usability and performance.
      </li>
      <li class="mt-1">
        Improvements of Development Process, especially regarding Security, DevOps & CI/CD, Software
        Maintenance and Code Quality
      </li>
      <li class="mt-1">Mentored and trained developers in JavaServerFaces and MS SQL Server.</li>
    </ul>
  </CvItem>

  <CvItem
    company="TU Graz"
    position="Research Assistant"
    timeFrame="Mar 2019 - Jul 2019"
    url="https://www.tugraz.at"
    location="Graz, AT"
    languages={[KOTLIN]}
  >
    <ul class="list-disc">
      <li>Research and Development in the field of Software Maintenance</li>
      <li class="mt-1">
        Implementation of a Prototype for Code Similarity Detection using Subgraph-Isomorphism
        Testing of Program Dependence Graphs
      </li>
      <li class="mt-1">
        During the Project, I wrote my Bachelor's Thesis (passed with distinction)
      </li>
    </ul>
  </CvItem>

  <H2>Education</H2>

  <CvItem
    company="TU Graz"
    position="Computer Science (Msc)"
    timeFrame="Mar 2020 - Jan 2022"
    url="https://www.tugraz.at"
    location="Graz, AT"
  >
    <ul class="list-disc">
      <li>
        Master's degree with focus on software rechnology (major) and multimedia systems (minor)
      </li>
      <li class="mt-1">
        Courses around: Compiler Construction, SW Architecture, Code Analysis, Testing
      </li>
      <li class="mt-1">
        Master's thesis: <span class="italic">Test Suite Reduction with Checked Coverage</span>
      </li>
      <li class="mt-1">
        Passed with distinction (1.0), published a conference paper based on my thesis.
      </li>
    </ul>
  </CvItem>

  <CvItem
    company="TU Graz"
    position="Computer Science (Bsc)"
    timeFrame="Oct 2016 - Feb 2020"
    url="https://www.tugraz.at"
    location="Graz, AT"
  >
    <ul class="list-disc">
      <li>Bachelor's degree with focus on broad and intensive education in computer science.</li>
      <li class="mt-1">
        Courses around: Algorithms, Software Engineering, Web, IT Security, AI & Data Science,
        Computer Graphics, Operating System Development
      </li>
      <li class="mt-1">
        Bachelor's thesis
        <span class="italic"> Code Similarity Detection using Program Dependence Graphs</span>
      </li>
    </ul>
  </CvItem>

  <CvItem company="BG G.I.B.S. Graz" position="Secondary/High School" url="https://www.gibs.at/">
    <ul class="list-disc">
      <li>International school with classes taught in English</li>
    </ul>
  </CvItem>

  <H2>Academic Publications</H2>

  <PubItem
    title="Checked Coverage for Test Suite Reduction - Is It Worth the Effort?"
    url="https://dl.acm.org/doi/abs/10.1145/3524481.3527216"
    type="paper"
  >
    Submitted and accepted at AST 22 conference. Awarded with the “Best Paper Award”. This paper is
    based on my Master's thesis. Co-authors: Roxane Koitz-Hristov, Lukas Stracke, Franz Wotawa.
  </PubItem>

  <H2>Blog Posts</H2>

  <PubItem
    title="Sentry for SvelteKit"
    url="https://blog.sentry.io/sentry-for-sveltekit/"
    type="blog"
  >
    I drove the development of Sentry's new SvelteKit SDK. This blog post announces its general
    availability and shares some details around the inner workings of the SDK.
  </PubItem>

  <PubItem
    title="Compiling Angular Libraries in a Multi-Framework SDK Monorepo"
    url="https://blog.sentry.io/2022/07/26/compiling-angular-libraries-multi-framework-sdk-monorepo/"
    type="blog"
  >
    Published on sentry.io. Blog post about overcoming the many challenges of properly compiling
    Angular libraries in a framework-agnostik monorepo containing 15 JavaScript frontend and backend
    SDK libraries.
  </PubItem>

  <H2>Talks</H2>

  <PubItem
    title="Shining a Spotlight on 3rd Party Widgets @ React Amsterdam 02/2024"
    type="talk"
    url="https://guild.host/events/react-amsterdam-february-ratkci"
  >
    <p>
      Meetup Talk at React Amsterdam about the Shadow DOM API and how we used it to isolate <TextLink
        href="https://spotlightjs.com">Spotlight's</TextLink
      > Overlay from the host page.
    </p>
  </PubItem>

  <PubItem
    title="Building an Application Monitoring SDK for SvelteKit @ Svienna 01/2024"
    url="https://www.youtube.com/watch?v=N8Hs-LVL_f8"
    type="talk"
  >
    <p>
      Meetup talk how I built Sentry's SvelteKit SDK. I shared insights into specific challenges as
      well as a lot of details on the inner workings of SvelteKit. Check out my <TextLink
        href="https://svienna-sveltekit-sdk-bts.vercel.app/">Slides.</TextLink
      >
    </p>
  </PubItem>

  <PubItem
    title="Know your Components @ VueConf 2022"
    url="https://www.vuemastery.com/conferences/vueconf-us-2022/know-your-components/"
    type="talk"
  >
    Lightning Talk on how investigating the lifecycle of Vue components helps identify and resolve
    performance issues.
  </PubItem>

  <H2>Hobbies</H2>

  <div
    class="w-full bg-white rounded-lg shadow-sm p-4 py-6 max-w-screen-xl justify-center items-center flex gap-4 flex-wrap text-xs
    dark:bg-gray-700 dark:shadow-gray-900"
  >
    <Badge>Music</Badge>
    <Badge color="bg-green-400">Guitars</Badge>
    <Badge color="bg-red-400 ">Ambulance Service</Badge>
    <Badge color="bg-gray-400">Aviation</Badge>
    <Badge color="bg-cyan-400">Flightsim</Badge>
    <Badge color="bg-blue-400">Sailing</Badge>
    <Badge color="bg-yellow-400">Cooking</Badge>
    <Badge color="bg-[sandybrown]">Woodworking</Badge>
    <Badge color="bg-sky-400">Data</Badge>
    <Badge color="bg-green-400">Politics</Badge>
  </div>
</Section>
