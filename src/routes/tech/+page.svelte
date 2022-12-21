<script>
    //components
    import HydroSwap from "$lib/components/tech/hydroswap.svelte";
    import Keresverse from "$lib/components/tech/keresverse.svelte";
    import Blockchains from "$lib/components/tech/blockchains.svelte";
    import Aegir from "$lib/components/tech/aegir.svelte";   
</script>

<svelte:head>
    <title>Web3 Technology</title>
    <meta name="Technology" content="Project Hydro Web3 Technology" />
</svelte:head>

<section>
    <div class="multiple-containers" id="mobile-fix">
        <Keresverse />
        <HydroSwap />
    </div>
    <div class="multiple-containers">
        <Blockchains />
        <Aegir />
    </div>
</section>
