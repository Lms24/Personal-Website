<script lang="ts">
  /** Text shown at the top of the left rail */
  export let label: string;
  export let id: string | undefined = undefined;
</script>

<!--
  The rail and the body are aligned on their first text baseline, so the label
  always sits on the same line as the first line of content, whatever that is.
-->
<section class="sec" {id}>
  <div class="rail">
    <h2 class="label">{label}</h2>
    <slot name="rail" />
  </div>
  <div class="body"><slot /></div>
</section>

<style>
  .sec {
    display: grid;
    grid-template-columns: var(--rail) minmax(0, 1fr);
    align-items: baseline;
    gap: var(--gap);
    padding-block: 32px;
    border-top: 1px solid var(--line);
  }
  h2 {
    margin: 0;
  }
  .rail,
  .body {
    min-width: 0;
  }
  @media (max-width: 760px) {
    .sec {
      grid-template-columns: 1fr;
      gap: 8px;
      padding-block: 24px 28px;
    }
  }
</style>
