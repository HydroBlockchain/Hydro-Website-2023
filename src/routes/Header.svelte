<script>
// @ts-nocheck
import Pricebanner from "$lib/components/header/pricebanner.svelte";
import Menu from "$lib/components/header/menu.svelte";
import hydroLogo from "$lib/images/logo/hydro-logo.svg";
import techIcon from "$lib/images/icons/tech.svg";
import teamIcon from "$lib/images/icons/team.svg";
import faqIcon from "$lib/images/icons/faq.svg";
    import ThemeToggle from "$lib/components/header/ThemeToggle.svelte";

let openMenu = false

function handleClick() {
    openMenu = !openMenu
    document.body.classList.toggle('fixed')
}
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<header>
    <Pricebanner/>
        <nav>
            <div class="wrapper">
                <div class="nav-wrapper" id="card-background">
                    <a href="/"><img src={hydroLogo} alt="hydro-drop" id="hydro-logo-2"/></a>
					<svg on:click={handleClick} class="hamburger" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<g><path fill="none" d="M0 0h24v24H0z"/><path d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z" fill="var(--text-color)"/></g>
					</svg>
                    <div class="navigation">
                        <ThemeToggle/>
                        <a data-sveltekit-prefetch href="/tech">
                            <img src={techIcon} alt="Technology" id="icon" /></a>
                        <a data-sveltekit-prefetch href="/team">
                            <img src={teamIcon} alt="Team" id="icon" /></a>
                        <a data-sveltekit-prefetch href="/faq">
                            <img src={faqIcon} alt="faq" id="icon" /></a>
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
    width: auto;
    height: 28px;
}

#hydro-logo {
    width: auto;
    height: 32px;
    margin-right: 2rem;
}

#hydro-logo-2 {
    width: 128px;
    height: 32px;
    margin-left: 2rem;
}

#hydro-logo-2:hover {
    opacity: 0.5;
    cursor: pointer;
}

nav {
    width: 100%;
    border-radius: var(--border-radius);

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
    transition: 250ms ease-in-out;

    @media only screen and (max-width: 1000px) {
        justify-content: space-between;
    }
}

.navigation {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;

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
    height: 32px;
    margin-right: 2rem;
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
