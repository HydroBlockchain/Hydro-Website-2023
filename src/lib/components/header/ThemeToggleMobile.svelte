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
          // clear storage & reload to read in svgs
          localStorage.removeItem(STORAGE_KEY);
        } else {
          // store opposite of preference & reload to read in svgs
          localStorage.setItem(STORAGE_KEY, prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK);
          
        }
        applyTheme();
        window.location.reload()
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
<a id="header-link" data-sveltekit-reload checked={currentTheme !==THEMES.DARK} on:click={toggleTheme}>
    {#if currentTheme === THEMES.DARK}
      <svg id="themeToggle" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M31.588 15.048l-3.88-3.879V5.651c0-.751-.613-1.365-1.364-1.365h-5.512l-3.88-3.88a1.321 1.321 0 0 0-1.906 0l-3.88 3.886H5.649c-.75 0-1.365.614-1.365 1.365v5.512L.404 15.05a1.327 1.327 0 0 0 0 1.906l3.886 3.88v5.511c0 .752.614 1.365 1.365 1.365h5.512l3.879 3.88c.51.509 1.326.58 1.907 0l3.88-3.88h5.511c.751 0 1.365-.613 1.365-1.365v-5.512l3.88-3.879a1.333 1.333 0 0 0 0-1.907zm-6.126 4.291a1.345 1.345 0 0 0-.411.954v4.767h-4.767c-.34 0-.68.137-.954.411L16 28.802l-3.338-3.337a1.345 1.345 0 0 0-.953-.412H6.94v-4.767c0-.34-.137-.68-.411-.954l-3.33-3.33 3.336-3.337c.275-.275.412-.614.412-.954V6.944h4.767c.34 0 .68-.137.954-.412l3.33-3.33 3.338 3.337c.274.274.614.411.953.411h4.768v4.768c0 .34.137.679.41.953l3.332 3.33-3.338 3.338z"
            fill="var(--svg-color)" />
        <path
            d="M16 8.354c-4.16 0-7.55 3.383-7.55 7.55 0 4.16 3.383 7.55 7.55 7.55a7.553 7.553 0 0 0 7.549-7.55c0-4.167-3.39-7.55-7.55-7.55zm0 12.415a4.876 4.876 0 0 1-4.873-4.872 4.872 4.872 0 0 1 9.744 0A4.88 4.88 0 0 1 16 20.77z"
            fill="var(--svg-color)" /></svg>
      {:else}
    <svg id="themeToggle" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M16 16c0-6.137 4.464-11.232 10.322-12.215A15.928 15.928 0 0 0 16 0C7.178 0 0 7.178 0 16c0 8.823 7.178 16 16 16 3.93 0 7.534-1.425 10.322-3.785C20.464 27.232 16 22.137 16 16zm0 12.903C8.885 28.903 3.097 23.115 3.097 16S8.885 3.097 16 3.097c1.098 0 2.185.141 3.235.414a15.487 15.487 0 0 0-2.626 22.54 15.513 15.513 0 0 0 2.626 2.438c-1.05.273-2.137.414-3.235.414z"
          fill="var(--svg-color)" /></svg>
      {/if}
    </a>
</div>

<style>
    #themeToggle {
        width: auto;
        margin-top: 2px;
        margin-bottom: 2px;
        height: 28px;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) {

        #themeToggle {
            height: 32px;
        }

        #header-link {
            background-color: var(--transparent);
        }
}
</style>