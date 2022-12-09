<script>
    //components
    import HydroSwap from "$lib/components/tech/hydroswap-tile.svelte";
    import Keresverse from "$lib/components/tech/keresverse.svelte";
    import Ecosystem from "$lib/components/tech/ecosystem-tile.svelte";
    import MeetHydro from "$lib/components/tech/meet-hydro.svelte";
    import Blockchains from "$lib/components/tech/blockchains.svelte";
    import Aegir from "$lib/components/tech/aegir.svelte";
</script>

<svelte:head>
    <title>Technology</title>
    <meta name="Tech" content="Tech" />
</svelte:head>

<section>
    <div class="multiple-containers">
        <MeetHydro />
        <Ecosystem />
    </div>
    <div class="multiple-containers">
        <Keresverse />
        <HydroSwap />
    </div>
    <div class="multiple-containers">
        <Blockchains />
        <Aegir />
    </div>
</section>

<style>
</style>
