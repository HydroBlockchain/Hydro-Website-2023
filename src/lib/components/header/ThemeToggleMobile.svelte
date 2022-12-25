<script lang="ts">
// @ts-nocheck
import { onMount } from 'svelte';

  const STORAGE_KEY = 'theme';
  const DARK_PREFERENCE = '(prefers-color-scheme: dark)';

  const THEMES = {
    DARK: 'dark',
    LIGHT: 'light',
  };

  const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

 export const toggleTheme = () => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      // clear storage
      localStorage.removeItem(STORAGE_KEY);
    } else {
      // store opposite of preference
      localStorage.setItem(STORAGE_KEY, prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK);
    }
    applyTheme(location.reload());
  };

  let currentTheme = '';

  const applyTheme = () => {
    const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
    currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

    if (currentTheme === THEMES.DARK) {
      document.body.classList.remove(THEMES.LIGHT);
      document.body.classList.add(THEMES.DARK);
    } else {
      document.body.classList.remove(THEMES.DARK);
      document.body.classList.add(THEMES.LIGHT);
    }
  };

  onMount( async () => {
    applyTheme();
    window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme);
  });
</script>

<div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <a id="header-link" data-sveltekit-preload-data="hover" on:click={toggleTheme}>
    <div class="theme-switch">
      <div class="theme-statement">Switch Theme</div>
      <svg id="theme-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <path d="m0 0h32v32h-32z" />
          <path
            d="m22 6c5.5228475 0 10 4.4771525 10 10s-4.4771525 10-10 10h-12c-5.5228475 0-10-4.4771525-10-10s4.4771525-10 10-10zm0 2h-12c-4.418278 0-8 3.581722-8 8 0 4.3349143 3.44783777 7.8645429 7.75082067 7.9961932l.24917933.0038068h12c4.418278 0 8-3.581722 8-8 0-4.3349143-3.4478378-7.86454287-7.7508207-7.99619318zm0 2c3.3137085 0 6 2.6862915 6 6s-2.6862915 6-6 6-6-2.6862915-6-6 2.6862915-6 6-6zm0 2c-2.209139 0-4 1.790861-4 4s1.790861 4 4 4 4-1.790861 4-4-1.790861-4-4-4z"
            fill="var(--svg-color)" fill-rule="nonzero" />
        </g>
      </svg>
    </div>
  </a>
</div>

<style>
  .theme-switch {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #theme-icon {
    width: auto;
    margin-top: 2px;
    margin-bottom: 2px;
    height: 28px;
    cursor: pointer;
  }

  .theme-statement {
    font-size: 9px;
  }

  @media only screen and (max-width: 600px) {

    #theme-icon {
      height: 32px;
    }

    #header-link {
      background-color: var(--transparent);
    }
  }
</style>