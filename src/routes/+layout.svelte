<script>
  // @ts-nocheck
  import "./styles.scss";
  import { onMount } from "svelte";
  import { state } from "$lib/store/store";
  import { initBsc } from "$lib/utils/wallet-bsc.ts";
  import { initEth } from "$lib/utils/wallet-eth.ts";
  import { initPoly } from "$lib/utils/wallet-poly";
  import { initMovr } from "$lib/utils/wallet-movr";
  import { initCsc } from "$lib/utils/wallet-csc";
  import Header from "$lib/components/header/Header.svelte";
  import Footer from "$lib/components/footer/Footer.svelte";
  import Preloader from "$lib/components/Preloader.svelte";

  let ready;
  onMount(() => {
    ready = true;
    initBsc();
    initEth();
    initPoly();
    initMovr();
    initCsc();
  });

  $: {
    if (ready) {
      setInterval(() => {
        state.set({ loading: false });
      }, 1000);
    }
  }
</script>

<div class="app-wrapper">
  <div class="app">
    <Header />
    <main>
      <div class="background">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      {#if $state.loading}
        <Preloader />
      {/if}
      <slot />
    </main>
    <Footer />
  </div>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    height: auto !important;
    margin: 0rem;
    height: -moz-available !important; /* WebKit-based browsers will ignore this. */
    height: -webkit-fill-available !important; /* Mozilla-based browsers will ignore this. */
    height: fill-available !important;
    background-color: var(--bg-color) !important;
  }

  .app-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto !important;
    width: auto !important;
    scroll-behavior: smooth !important;
    overflow-y: scroll !important;
    background-color: var(--bg-color) !important;
  }

  .app-wrapper::-webkit-scrollbar {
    display: none !important;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 600px) {
    .app-wrapper:focus-within {
      scroll-behavior: smooth !important;
      overflow-y: scroll !important;
      -webkit-overflow-scrolling: touch !important;
      backface-visibility: hidden !important;
      -webkit-backface-visibility: hidden !important;
      background-color: var(--bg-color) !important;
    }

    .app-wrapper::-webkit-scrollbar {
      display: none !important;
    }
  }
</style>
