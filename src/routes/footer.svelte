<script lang="ts">
  import { resolve } from '$app/paths';
</script>

<footer class="mono">
  <span>© Lukas Stracke, {new Date().getFullYear()}</span>
  <a href={resolve('/imprint')}>Imprint</a>
</footer>

<style>
  footer {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding-block: 24px 32px;
    margin-top: 48px;
    border-top: 1px solid var(--line);
    font-size: 12px;
    color: var(--muted);
  }
  a {
    transition: color 150ms ease;
  }
  a:hover {
    color: var(--fg);
  }
</style>
