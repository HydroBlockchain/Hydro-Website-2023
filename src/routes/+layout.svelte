<script>
// @ts-nocheck
import Header from "./Header.svelte";
import Footer from "./Footer.svelte";
import "./styles.scss";

import { init } from '$lib/stores/wallet-bsc.ts';
import { init2 } from '$lib/stores/wallet-eth.ts';
import { onMount } from 'svelte';

let ready
onMount(() => {
    ready = true
    init();
    init2();
});
</script>

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
