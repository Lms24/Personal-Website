<script>
  import H1 from '$lib/components/h1.svelte';
  import Section from '$lib/components/section.svelte';
  import Sentry from '$lib/components/sentry.svelte';
</script>

<Section>
  <article class="flex flex-row w-full">
    <Sentry />
    <div class="flex flex-col">
      <h1>Sentry JS SDKs</h1>
      <p>
        Sentry is an error and performance monitoring service that puts developers first. Sentry
        tries to gather everything developers need to know about why their application crashed or is
        slow.
      </p>
      <p>
        Sentry's SDKs are the gateway to this service. Everyone who wants to use Sentry needs to add
        an SDK to their application. I maintain Sentry's JavaScript SDKs which overall includes 15
        SDKs for all populat frontend and backend SDKs based on JavaScript.
      </p>
    </div>
  </article>
</Section>
