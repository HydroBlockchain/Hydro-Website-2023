<script lang="ts">
//Components
import Medium from "$lib/components/landing/medium.svelte";
import Introduction from "$lib/components/landing/pricewidget.svelte";
import Hero from "$lib/components/landing/hero.svelte";
import Submarine from "$lib/components/landing/Submarine.svelte";
</script>

<svelte:head>
  <title>Project Hydro</title>
  <meta name="Project Hydro" content="Project Hydro Web3 Architects" />
</svelte:head>

<section>
  <Hero />
  <div class="multiple-containers">
    <Introduction />
    <Medium />
  </div>
  <Submarine/>
</section>