<script>
	import drop from "$lib/images/white-drop.svg";
	import eth from "$lib/images/blockchains/eth.svg";
	import bsc from "$lib/images/blockchains/bsc.svg";
	import matic from "$lib/images/blockchains/matic.svg";
	import csc from "$lib/images/blockchains/csc.svg";
	import aegir from "$lib/images/logos/Aegir-Wallet.svg";
	import swap from "$lib/images/logos/Hydro-Swap.svg";
	import keres from "$lib/images/logos/Keresverse.svg";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Project Hydro" content="Project Hydro" />
</svelte:head>

<section>
	<div class="container">
		<img src={drop} alt="hydro-logo" />
	</div>

	<div class="multiple-containers">
		<div class="container-first">
			<div class="chains">
				<a href="https://coinex.com"><img src={eth} alt="eth-logo" /></a>
				<a href="https://coinex.com"><img src={bsc} alt="bsc-logo" /></a>
				<a href="https://coinex.com"><img src={matic} alt="matic-logo" /></a>
				<a href="https://coinex.com"><img src={csc} alt="csc-logo" /></a>
			</div>
		</div>

		<div class="container-second">
			<div class="products">
			<a href="https://coinex.com"><img src={aegir} alt="aegir-logo" /></a>
			<a href="https://hydroswap.org"><img src={swap} alt="swap-logo" /></a>
			<a href="https://keresverse.org"><img src={keres} alt="keres-logo" /></a>
		</div>
	</div>
	</div>

	<div class="multiple-containers">
		<div class="container-third">
			<div class="title">Info</div>
		</div>

		<div class="container-fourth">
			<div class="title">Roadmap</div>
		</div>
	</div>

	<div class="multiple-containers">
		<div class="container-fifth">
			<div class="title">Partners</div>
			<div class="chains" />
		</div>

		<div class="container-sixth">
			<div class="title">Exchanges</div>
			<div class="chains">
				<a href="https://coinex.com"><img src={csc} alt="Coinex" /></a>
			</div>
		</div>
	</div>
</section>

<style>
	
</style>
