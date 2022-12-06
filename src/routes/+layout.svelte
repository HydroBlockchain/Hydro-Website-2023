<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	import {onMount} from "svelte";
    import {state} from "$lib/stores/store.js";
    import LoadingScreen from "$lib/components/loadingscreen.svelte";

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

<!--preloader-->
{#if $state.loading}
    <LoadingScreen/>
{/if}

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<div class="app-wrapper">
	<coingecko-coin-price-marquee-widget  coin-ids="hydro,ethereum,coinex-token,moonriver,matic-network,binancecoin" currency="usd" background-color="var(--transparent)" locale="en" font-color="#ffffff"></coingecko-coin-price-marquee-widget>

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

