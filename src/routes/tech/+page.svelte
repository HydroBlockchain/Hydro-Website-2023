<script>
    //components
    import HydroSwap from "$lib/components/tech/Hydroswap.svelte";
    import Keresverse from "$lib/components/tech/Keresverse.svelte";
    import Ecosystem from "$lib/components/tech/Ecosystem.svelte";
    import MeetHydro from "$lib/components/tech/Meet-hydro.svelte";
    import Blockchains from "$lib/components/tech/Blockchains.svelte";
    import Aegir from "$lib/components/tech/Aegir.svelte";
    import Protocols from "$lib/components/tech/Protocols.svelte";
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
        <Blockchains />
        <Aegir />
    </div>
    <div class="multiple-containers" id="mobile-fix">
        <Keresverse />
        <HydroSwap />
    </div>
    <Protocols/>
</section>
<style>
    @media only screen and (max-width: 600px) {
        #mobile-fix{
            flex-direction: column-reverse !important;
        }
    }
</style>
