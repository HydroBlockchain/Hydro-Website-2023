<script>
  import HeroCard from "$lib/components/landing/HeroCard.svelte";
  import InfoWidget from "$lib/components/landing/InfoWidget.svelte";
  import MediumCards from "$lib/components/landing/MediumCards.svelte";
  import BlockchainAnimation from "$lib/components/landing/BlockchainAnimation.svelte";
</script>

<svelte:head>
  <title>Project Hydro</title>
  <meta name="Project Hydro" content="Project Hydro Web3 Architects" />
</svelte:head>

<section>
  <HeroCard />
  <div class="multiple-containers">
    <InfoWidget />
    <MediumCards />
  </div>
  <BlockchainAnimation />
</section>
