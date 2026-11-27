<!--
  Behaviour lives in the inline script in app.html (works without client-side
  Svelte). This component is only markup + styling. Which icon shows is pure
  CSS: the moon offers dark mode, the sun offers light mode.
-->
<button type="button" class="toggle" data-theme-toggle aria-label="Toggle dark theme">
  <svg class="moon" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M13.5 9.6A5.75 5.75 0 0 1 6.4 2.5a5.75 5.75 0 1 0 7.1 7.1Z" />
  </svg>
  <svg class="sun" viewBox="0 0 16 16" aria-hidden="true">
    <circle cx="8" cy="8" r="3" />
    <path
      d="M8 1.5v1.25M8 13.25v1.25M1.5 8h1.25M13.25 8h1.25M3.4 3.4l.9.9M11.7 11.7l.9.9M3.4 12.6l.9-.9M11.7 4.3l.9-.9"
    />
  </svg>
</button>

<style>
  .toggle {
    display: inline-grid;
    place-items: center;
    width: 30px;
    height: 30px;
    margin: -6px -7px -6px 0;
    padding: 0;
    border: 0;
    border-radius: 4px;
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    transition: color 150ms ease, background-color 150ms ease;
  }
  .toggle:hover {
    color: var(--fg);
    background: var(--chip);
  }
  svg {
    width: 16px;
    height: 16px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.4;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .sun {
    display: none;
  }
  :global(:root[data-theme='dark']) .sun {
    display: block;
  }
  :global(:root[data-theme='dark']) .moon {
    display: none;
  }
  @media (prefers-color-scheme: dark) {
    :global(:root:not([data-theme='light'])) .sun {
      display: block;
    }
    :global(:root:not([data-theme='light'])) .moon {
      display: none;
    }
  }
</style>
