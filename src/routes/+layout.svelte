<script>
    // @ts-nocheck
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import "./styles.scss";
    import { onMount } from "svelte";
    import { state } from "$lib/stores/store";
    import Preloader from "$lib/components/preloader.svelte";

    let ready;
    onMount(() => {
        ready = true;
    });
    //If we're mounted we wait x (3 second) amount of time to make sure fonts etc is ready. Looks good as well.
    $: {
        if (ready) {
            setInterval(() => {
                state.set({ loading: false });
            }, 1000);
        }
    }
</script>
<!--Loading screen with animated logo-->
{#if $state.loading}
    <Preloader />
{/if}

<div class="app-wrapper">
    <div class="app">
        <Header />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 20px;
    }
</style>
