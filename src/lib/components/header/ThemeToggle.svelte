<script lang="ts">
// @ts-nocheck
import Sun from "$lib/images/icons/sun.svg"
import Moon from "$lib/images/icons/moon.svg"
import { onMount } from 'svelte';

  const STORAGE_KEY = 'theme';
  const DARK_PREFERENCE = '(prefers-color-scheme: dark)';

  const THEMES = {
    DARK: 'dark',
    LIGHT: 'light',
  };

  const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

  const toggleTheme = () => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      // clear storage
      localStorage.removeItem(STORAGE_KEY);
    } else {
      // store opposite of preference
      localStorage.setItem(STORAGE_KEY, prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK);
    }

    applyTheme();
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

  onMount(() => {
    applyTheme();
    window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme);
  });
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="themeDiv" checked={currentTheme !== THEMES.DARK} on:click={toggleTheme}>
	{#if THEMES.DARK}
    <img src={Moon} alt="bitcoin" id="themeToggle" />
	{:else}
    <img src={Sun} alt="bitcoin" id="themeToggle" />
	{/if}
</div> 

<style>
.themeDiv{
    width: 100px;
    margin-bottom: 3px;
}
#themeToggle{
    width: 32px;
    height: 32px;
}
</style>