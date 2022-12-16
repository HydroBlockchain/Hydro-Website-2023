<script>
// @ts-nocheck
import Header from "./Header.svelte";
import Footer from "./Footer.svelte";
import "./styles.scss";
import {
    onMount
} from "svelte";
import {
    state
} from "$lib/stores/store";
import Preloader from "$lib/components/Preloader.svelte";

let ready
    onMount(() => {
        ready = true
    });

    $: {
        if (ready) {
            setInterval(() => {
                state.set({loading: false})
            }, 1000)
        }
    }
</script>

<div class="app-wrapper">
    <div class="app">
        <Header />
        <main>
            <slot />
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

    .app-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
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
