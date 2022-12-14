<script>
    //Components
    import Medium from "$lib/components/landing/medium.svelte";
    import Introduction from "$lib/components/landing/pricewidget.svelte";
    import Roadmap from "$lib/components/landing/roadmap.svelte";
    import Hero from "$lib/components/landing/hero.svelte";
    import Partners from "$lib/components/landing/partners.svelte";
    import Exchanges from "$lib/components/landing/exchanges.svelte";
    import Featured from "$lib/components/landing/featured.svelte";
</script>

<svelte:head>
    <title>Home</title>
    <meta name="Project Hydro" content="Project Hydro Website" />
</svelte:head>

<section>
    <Hero />
    <div class="multiple-containers">
        <Introduction />
        <Medium />
    </div>
    <Roadmap />
    <div class="multiple-containers-alt">
        <Partners />
        <Exchanges />
    </div>
    <Featured />
</section>

<style>
    
.multiple-containers,
.multiple-containers-alt {
	display: flex;
	flex-direction: row;
	width: var(--cw-desktop);
}
    /* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 600px) {

    .multiple-containers-alt {
		display: flex;
		flex-direction: column-reverse !important;
	}


}
</style>
