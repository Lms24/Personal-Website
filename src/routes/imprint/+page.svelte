<script lang="ts">
  import Section from '#lib/components/Section.svelte';
</script>

<svelte:head>
  <title>Imprint · Lukas Stracke</title>
</svelte:head>

<div class="page-intro"><h1 class="page-title">Imprint</h1></div>

<Section label="Details">
  <dl>
    <dt class="label">Responsible for content</dt>
    <dd>Lukas Stracke</dd>
    <dt class="label">Address</dt>
    <dd>1220 Vienna, Austria</dd>
  </dl>
</Section>

<style>
  dl {
    display: grid;
    grid-template-columns: 220px minmax(0, 1fr);
    align-items: baseline;
    gap: 8px 16px;
    margin: 0;
  }
  dd {
    margin: 0;
  }
  @media (max-width: 760px) {
    dl {
      grid-template-columns: 1fr;
      gap: 0;
    }
    dd {
      margin-bottom: 12px;
    }
  }
</style>
