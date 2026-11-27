<script lang="ts">
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
  import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
  import BlueSkyIcon from '$lib/icons/BlueSkyIcon.svelte';
</script>

<ul>
  <li>
    <a href="https://github.com/Lms24" target="_blank" rel="noopener me"
      ><span class="ico"><FaGithub /></span>GitHub</a
    >
  </li>
  <li>
    <a href="https://bsky.app/profile/stracke.tech" target="_blank" rel="noopener me"
      ><span class="ico"><BlueSkyIcon /></span>Bluesky</a
    >
  </li>
  <li>
    <a href="https://www.linkedin.com/in/lukas-stracke/" target="_blank" rel="noopener me"
      ><span class="ico"><FaLinkedin /></span>LinkedIn</a
    >
  </li>
</ul>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 6px 20px;
  }
  a {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    transition: color 150ms ease;
  }
  a:hover {
    color: var(--accent);
  }
  .ico {
    width: 15px;
    height: 15px;
    display: inline-flex;
  }
  .ico :global(svg) {
    width: 100%;
    height: 100%;
  }
</style>
