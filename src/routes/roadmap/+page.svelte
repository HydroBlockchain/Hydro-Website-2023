<script>
    import Roadmap from "$lib/components/roadmap/roadmap.svelte";
</script>

<svelte:head>
    <title>Project Hydro Roadmap 2023</title>
    <meta name="Project Hydro" content="Project Hydro Web3 Architects" />
</svelte:head>

<section>
    <Roadmap/>
    <div class="full" id="card-background">
        hello
    </div>
</section>

<style>
.full{
    height: var(--ch-mini);
}
</style>
