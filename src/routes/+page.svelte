<script lang="ts">
//Components
import Medium from "$lib/components/landing/medium.svelte";
import Introduction from "$lib/components/landing/pricewidget.svelte";
import Hero from "$lib/components/landing/hero.svelte";
</script>

<svelte:head>
    <title>Home</title>
    <meta name="Project Hydro" content="Project Hydro Web3 Architects" />
    </svelte:head>

    <section>
        <Hero />
        <div class="multiple-containers">
            <Introduction />
            <Medium />
        </div>

        <div class="full" id="card-background">

            hello

        </div>

    </section>

<style>
.full {
    height: var(--ch-mini);
}
</style>
