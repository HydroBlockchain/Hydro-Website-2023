<script>
import Partners from "$lib/components/exchange/partners.svelte";
import Exchanges from "$lib/components/exchange/exchanges.svelte";
import Featured from "$lib/components/exchange/featured.svelte";
import HydroChart from "$lib/components/exchange/HydroChart.svelte";
    import HydroInfo from "$lib/components/exchange/HydroInfo.svelte";
</script>

<svelte:head>
    <title>Exchanges & Partners</title>
    <meta name="Exchanges & Partners" content="Project Hydro Exchanges & Partners" />
</svelte:head>

<section>
    <div class="multiple-containers" id="mobile-fix">
        <HydroChart/>
        <HydroInfo/>
    </div>
        <div class="multiple-containers-alt">
            <Partners />
            <Exchanges />
        </div>
        <Featured />
        </section>

<style>
</style>
