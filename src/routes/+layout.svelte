<script>
// @ts-nocheck
import { onMount } from 'svelte';
import { state } from "$lib/stores/store";
import Header from "./Header.svelte";
import Footer from "./Footer.svelte";
import Preloader from "$lib/components/Preloader.svelte";
import "./styles.scss";
// Init chains
import { initBsc } from '$lib/stores/wallet-bsc.ts';
import { initEth } from '$lib/stores/wallet-eth.ts';
import { initPoly } from "$lib/stores/wallet-poly";
import { initMovr } from "$lib/stores/wallet-movr";
import { initCsc } from "$lib/stores/wallet-csc";
//Scroll to top
import upIcon from "$lib/images/icons/up.svg"
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
        <a class="button" id="to-the-top" on:click={() => animateScroll.scrollToTop()}> 
        <img src={upIcon} alt="up-icon" id="up-icon">
        </a>
    </div>
</div>

<style>
    #to-the-top{
        display: none;
    }
    #up-icon{
        width: 32px;
        height: auto;
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
