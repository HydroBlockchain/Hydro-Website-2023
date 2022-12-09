<script>
// @ts-nocheck

import Header from "./Header.svelte";
import Footer from "./Footer.svelte";
import "./styles.css";
import {
    onMount
} from "svelte";
import {
    state
} from "$lib/stores/store.js";
import LoadingScreen from "$lib/components/loadingscreen.svelte";
import Pricebanner from "$lib/components/pricebanner.svelte";

let ready;

onMount(() => {
    ready = true;
});

$: {
    if (ready) {
        setInterval(() => {
            state.set({
                loading: false
            });
        }, 1000);
    }
}
</script>

<!--preloader-->
{#if $state.loading}
<LoadingScreen />
{/if}

<div class="app-wrapper">
    <Pricebanner />
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
