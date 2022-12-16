<script>
// //Components
import Medium from "$lib/components/landing/Medium.svelte"
import Pricewidget from "$lib/components/landing/Pricewidget.svelte"
import Roadmap from "$lib/components/landing/Roadmap.svelte"
import Hero from "$lib/components/landing/Hero.svelte"
import Partners from "$lib/components/landing/Partners.svelte"
import Exchanges from "$lib/components/landing/Exchanges.svelte"
import Featured from "$lib/components/landing/Featured.svelte"
</script>
<svelte:head>
    <title>Home</title>
    <meta name="Project Hydro" content="Project Hydro Website" />
</svelte:head>
    <section>
        <Hero/>
        <div class="multiple-containers">
            <Pricewidget/>
            <Medium/>
        </div>
        <Roadmap/>
        <div class="multiple-containers-alt">
            <Partners/>
            <Exchanges/>
        </div>
        <Featured/>
    </section>
<style>
</style>
