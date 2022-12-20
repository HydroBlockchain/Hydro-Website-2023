<script>
    //components
    import HydroSwap from "$lib/components/tech/hydroswap.svelte";
    import Keresverse from "$lib/components/tech/keresverse.svelte";
    import Ecosystem from "$lib/components/tech/ecosystem.svelte";
    import MeetHydro from "$lib/components/tech/meet-hydro.svelte";
    import Blockchains from "$lib/components/tech/blockchains.svelte";
    import Aegir from "$lib/components/tech/aegir.svelte";
    import Protocols from "$lib/components/tech/protocols.svelte";
    
</script>

<svelte:head>
    <title>Technology</title>
    <meta name="Technology" content="Project Hydro Web3 Technology" />
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

        
    <!-- svelte-ignore a11y-click-events-have-key-events -->
        
</section>
<style>
    @media only screen and (max-width: 600px) {
        #mobile-fix{
            flex-direction: column-reverse !important;
        }
    }
</style>
