<script>
// @ts-nocheck
import Header from "./Header.svelte";
import Footer from "./Footer.svelte";
import "./styles.scss";
// Init chains
import { initBsc } from '$lib/stores/wallet-bsc.ts';
import { initEth } from '$lib/stores/wallet-eth.ts';
import { initPoly } from "$lib/stores/wallet-poly";
import { initMovr } from "$lib/stores/wallet-movr";
import { initCsc } from "$lib/stores/wallet-csc";
import { onMount } from 'svelte';

let ready
onMount(() => {
    ready = true
    initBsc();
    initEth();
    initPoly();
    initMovr();
    initCsc();
});
</script>

<div class="app-wrapper">
    <div class="app">
        <Header />
        <main>
            <div class="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
             </div>
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
