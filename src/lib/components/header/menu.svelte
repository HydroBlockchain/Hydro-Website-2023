<script>
// @ts-nocheck
import {
    fade
} from "svelte/transition";
import techIcon from "$lib/images/icons/tech.svg";
import teamIcon from "$lib/images/icons/team.svg";
import faqIcon from "$lib/images/icons/faq.svg";
import roadmapIcon from "$lib/images/icons/roadmap.svg";
import exchangeIcon from "$lib/images/icons/exchange.svg";
import ThemeToggle from "./ThemeToggle.svelte";
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="backdrop" on:click>
    <div class="nav-mobile-wrapper">
        <div class="navigation">

          <div class="column">
            <a data-sveltekit-preload-data="hover" id="header-link" href="/tech">
                <img src={techIcon} alt="Technology" id="icon" /></a>
            <a data-sveltekit-preload-data="hover" id="header-link" href="/team">
                <img src={teamIcon} alt="Team" id="icon" /></a>
            <a data-sveltekit-preload-data="hover" id="header-link" href="/roadmap">
                <img src={roadmapIcon} alt="faq" id="icon" /></a>
              </div>

                <div class="column">
            <a data-sveltekit-preload-data="hover" id="header-link" href="/exchanges">
                <img src={exchangeIcon} alt="faq" id="icon" /></a>
            <a data-sveltekit-preload-data="hover" id="header-link" href="/faq">
                <img src={faqIcon} alt="faq" id="icon" /></a>
                <ThemeToggle/>
              </div>

              </div>
              
              </div>

              </div>

<style>
.backdrop {
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--sidemenu-color);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.nav-mobile-wrapper {
    box-sizing: border-box;
    padding-bottom: 5rem;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    text-align: start;
}

.navigation {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
}

#icon {
    width: 50px;
    margin: 1rem;
    height: auto;
}

#header-link{
  margin: 1rem;
}

.column{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
