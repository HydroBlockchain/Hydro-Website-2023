<script>    
    import KeresverseCard from "$lib/components/tech/KeresverseCard.svelte";
    import HydroswapCard from "$lib/components/tech/HydroswapCard.svelte";
    import NetworkTool from "$lib/components/tech/NetworkTool.svelte";
    import AegirCard from "$lib/components/tech/AegirCard.svelte";
</script>

<svelte:head>
    <title>Web3 Technology</title>
    <meta name="Technology" content="Project Hydro Web3 Technology" />
</svelte:head>

<section>
    <div class="multiple-containers" id="mobile-fix">
        <KeresverseCard/>
        <HydroswapCard/>
    </div>
    <div class="multiple-containers">
        <NetworkTool/>
        <AegirCard/>
    </div>
</section>