<script>
    //Components
    import Medium from "$lib/components/landing/medium.svelte";
    import Introduction from "$lib/components/landing/introduction.svelte";
    import Roadmap from "$lib/components/landing/roadmap.svelte";
    import Hero from "$lib/components/landing/hero.svelte";
    import Partners from "$lib/components/landing/partners.svelte";
    import Exchanges from "$lib/components/landing/exchanges.svelte";
    import Featured from "$lib/components/landing/featured.svelte";
</script>

<svelte:head>
    <title>Home</title>
    <meta name="Project Hydro" content="Project Hydro" />
</svelte:head>

<section>
    <Hero />
    <div class="multiple-containers">
        <Introduction />
        <Medium />
    </div>
    <Roadmap />
    <div class="multiple-containers-2">
        <Partners />
        <Exchanges />
    </div>
    <Featured />
</section>

<style>
</style>
