<script>
  import HydroChart from "$lib/components/exchange/HydroChart.svelte";
  import HydroInfo from "$lib/components/exchange/HydroInfo.svelte";
  import ExchangesCard from "$lib/components/exchange/ExchangesCard.svelte";
  import PartnersCard from "$lib/components/exchange/PartnersCard.svelte";
  import FeaturedOn from "$lib/components/exchange/FeaturedOn.svelte";
</script>

<svelte:head>
  <title>Markets & Partners</title>
  <meta
    name="Exchanges & Partners"
    content="Project Hydro Exchanges & Partners"
  />
</svelte:head>

<section>
  <div class="multiple-containers" id="mobile-fix">
    <HydroChart />
    <HydroInfo />
  </div>
  <div class="multiple-containers-alt">
    <PartnersCard />
    <ExchangesCard />
  </div>
  <FeaturedOn />
</section>
