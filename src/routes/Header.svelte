<script>
// @ts-nocheck

import Pricebanner from "$lib/components/header/pricebanner.svelte";
// import Nav from "$lib/components/header/nav.svelte";

import Menu from "$lib/components/header/menu.svelte";
import hydroLogo from "$lib/images/logo/hydro-logo.svg";
import techIcon from "$lib/images/icons/tech.svg";
import teamIcon from "$lib/images/icons/team.svg";
import faqIcon from "$lib/images/icons/faq.svg";

let openMenu = false

function handleClick() {
    openMenu = !openMenu
    document.body.classList.toggle('fixed')
}
</script>

<header>
    <Pricebanner/>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <nav>
            <div class="wrapper">
                <div class="nav-wrapper" id="animated-border">
                    <a href="/"><img src={hydroLogo} alt="hydro-drop" id="hydro-logo-2"/></a>
                    <svg on:click={handleClick} class="hamburger" width="24px" height="20px" viewBox="0 0 30 23" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Group-4" fill="var(--text-color)">
                                <rect id="Rectangle" x="0" y="0" width="30" height="2" rx="2"></rect>
                                <rect id="Rectangle-Copy-5" x="0" y="9.47368421" width="30" height="2" rx="2"></rect>
                                <rect id="Rectangle-Copy-6" x="0" y="18.9473684" width="30" height="2" rx="2"></rect>
                            </g>
                        </g>
                    </svg>

                    <div class="navigation">
                        <a sveltekit:prefetch href="/tech"><img src={techIcon} alt="hydro-drop" id="icon" /></a>
                        <a sveltekit:prefetch href="/team"><img src={teamIcon} alt="hydro-drop" id="icon" /></a>
                        <a sveltekit:prefetch href="/faq"><img src={faqIcon} alt="hydro-drop" id="icon" /></a>
                    </div>
                </div>
            </div>
        </nav>

        {#if openMenu}
        <Menu on:click|once={handleClick}/>
            {/if}

            </header>

<style lang="scss">
#logo-div {
    align-items: flex-end;
    text-align: end;
    justify-content: flex-end;
}

#icon {
    width: 32px;
    height: 32px;
}

#hydro-logo {
    width: 100px;
    height: auto;
    margin-right: 2rem;
}

#hydro-logo-2 {
    width: 100px;
    height: auto;
    margin-left: 2rem;
}

#hydro-logo-2:hover {
    opacity: 0.5;
    cursor: pointer;
}

nav {
    width: 100%;

    @media screen and (max-width: 568px) {
        position: relative;
    }
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 600px) {}
}

.nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: var(--cw-desktop);
    height: 100px;
    background-color: var(--card-background);
    color: var(--text-color);
    border-radius: 7px;
    animation: fadeIn 2s;
    transition: 250ms ease-in-out;

    @media only screen and (max-width: 1000px) {
        justify-content: space-between;
    }
}

.navigation {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;

    a {
        color: var(--nav-link-color);
        text-decoration: none;
        width: 100px;
        margin-bottom: 3px;
        transition: 250ms ease-in-out;

        &:hover {
            opacity: 0.5;
        }
    }

    @media only screen and (max-width: 1000px) {
        display: none;
    }
}

.hamburger {
    display: none;
    height: 20px;
    margin-right: 1rem;
    cursor: pointer;
    transition: 250ms ease-in-out;

    &:hover,
    :focus {
        opacity: 50%;
        transform: scale(0.8);
    }

    @media only screen and (max-width: 1000px) {
        display: block;
    }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {}
</style>
