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

 export const toggleTheme = () => {
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
<div class="themeDiv" id="header-link" checked={currentTheme !== THEMES.DARK} on:click={toggleTheme}>
	{#if currentTheme === THEMES.DARK}
    <img src={Sun} alt="Sun" id="themeToggle" />
	{:else}
    <img src={Moon} alt="Moon" id="themeToggle" />
	{/if}
</div> 

<style>
.themeDiv{
    width: 100px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}
.themeDiv:hover {
    background-color: var(--button-hover) !important;
}
#themeToggle{
    width: auto;
    margin-top: 2px;
    margin-bottom: 2px;
    height: 28px;
    cursor: pointer;
}
#header-link{
    background-color: var(--card-bg-alt);
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: var(--border-radius);
}

@media only screen and (max-width: 600px) {

    .themeDiv{
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 !important;
    padding: 0 !important;
    background-color: var(--transparent) !important;
}

#themeToggle{
    height: 32px;
}

#header-link{
    background-color: var(--transparent);
}

}

@media only screen and (max-width: 768px) {

.themeDiv{
width: 100%;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
margin: 0 !important;
padding: 0 !important;
background-color: var(--transparent) !important;
}

#themeToggle{
height: 32px;
}

#header-link{
background-color: var(--transparent);
}

}

@media only screen and (max-width: 992px) {

.themeDiv{
width: 100%;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
margin: 0 !important;
padding: 0 !important;
background-color: var(--transparent) !important;
}

#themeToggle{
height: 32px;
}

#header-link{
background-color: var(--transparent);
}

}

@media only screen and (max-width: 1200px) {

.themeDiv{
width: 100%;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
margin: 0 !important;
padding: 0 !important;
background-color: var(--transparent) !important;
}

#themeToggle{
height: 32px;
}

#header-link{
background-color: var(--transparent);
}

}
</style>