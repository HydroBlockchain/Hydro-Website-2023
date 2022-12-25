<script>
// @ts-nocheck
import { onMount } from 'svelte';
import { state } from "$lib/store/store";
import Header from "$lib/components/header/Header.svelte";
import Footer from "$lib/components/footer/Footer.svelte";
import Preloader from "$lib/components/Preloader.svelte";
import "./styles.scss";
// Init chains
import { initBsc } from '$lib/utils/wallet-bsc.ts';
import { initEth } from '$lib/utils/wallet-eth.ts';
import { initPoly } from "$lib/utils/wallet-poly";
import { initMovr } from "$lib/utils/wallet-movr";
import { initCsc } from "$lib/utils/wallet-csc";
//Scroll to top
import * as animateScroll from "svelte-scrollto";

let ready
onMount(() => {
    ready = true
    initBsc();
    initEth();
    initPoly();
    initMovr();
    initCsc();
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
            {#if $state.loading}
            <Preloader/>
            {/if}
            <slot />
        </main>
        <Footer />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="button" aria-label="button-to-the-top" id="to-the-top" on:click={() => animateScroll.scrollToTop()}> 
        Take me to the top!
        </a>
    </div>
</div>

<style>
    #to-the-top{
        display: none;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
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
        scroll-behavior: smooth !important;
        overflow-y: scroll !important;
        -webkit-overflow-scrolling: touch !important;
        backface-visibility: hidden !important;
        -webkit-backface-visibility: hidden !important;
        background-color: var(--bg-color) !important;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 0;
        margin-top: 1rem;
    }
</style>
