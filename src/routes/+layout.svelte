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
                state.set({
                    loading: false,
                });
            }, 1000);
        }
    }
</script>

<div class="app-wrapper">
    <div class="app">

        
        <Header />
        <main>
            <slot />
            <!--Loading screen with animated logo-->
            {#if $state.loading}
                <Preloader />
            {/if}
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
    .app-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 0;
        margin-top: 20px;
    }
</style>
