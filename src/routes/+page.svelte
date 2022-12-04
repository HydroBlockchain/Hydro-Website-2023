<script>
	import drop from "$lib/images/white-drop.svg";
	import eth from "$lib/images/blockchains/eth.svg";
	import bsc from "$lib/images/blockchains/bsc.svg";
	import matic from "$lib/images/blockchains/matic.svg";
	import csc from "$lib/images/blockchains/csc.svg";
	import aegir from "$lib/images/logos/Aegir-Wallet.svg";
	import swap from "$lib/images/logos/Hydro-Swap.svg";
	import keres from "$lib/images/logos/Keresverse.svg";
	import coinex from "$lib/images/exchanges/coinex-logo.svg";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Project Hydro" content="Project Hydro" />
</svelte:head>

<section>
	<div class="full">
		<img src={drop} alt="hydro-logo" />
	</div>

	<div class="multiple-containers">
		<div class="half">
			<div class="chains">
				<a href="https://etherscan.io"><img src={eth} alt="eth-logo" /></a>
				<a href="https://bscscan.com"><img src={bsc} alt="bsc-logo" /></a>
				<a href="https://polygonscan.com"><img src={matic} alt="matic-logo" /></a>
				<a href="https://coinex.net"><img src={csc} alt="csc-logo" /></a>
			</div>
		</div>

		<div class="half" id="second">
			<div class="products">
				<a href="https://aegirwallet.org"><img src={aegir} alt="aegir-logo" /></a>
				<a href="https://hydroswap.org"><img src={swap} alt="swap-logo" /></a>
				<a href="https://keresverse.org"><img src={keres} alt="keres-logo" /></a>
			</div>
		</div>
	</div>

	<div class="full">
		<div class="information">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
			enim ad minim veniam, quis nostrud exercitation ullamco laboris
			nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
			in reprehenderit in voluptate velit esse cillum dolore eu fugiat
			nulla pariatur. Excepteur sint occaecat cupidatat non proident,
			sunt in culpa qui officia deserunt mollit anim id est laborum.
		</div>
	</div>

	<div class="multiple-containers">
		<div class="one-quarter">
			<div class="title">Info</div>
			<div class="information">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat
				nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</div>
		</div>

		<div class="three-quarter">
			<div class="title">Roadmap</div>
			<div class="roadmap">
			<div class="kvartal">Q1</div>
			<div class="kvartal">Q2</div>
			<div class="kvartal">Q3</div>
			<div class="kvartal">Q4</div>
		</div>
		</div>
	</div>

	<div class="multiple-containers">
		<div class="half">
			<div class="title">Partners</div>
			<div class="partners">
				<a href="https://coinex.com"><img src={aegir} alt="aegir-logo" /></a>
				<a href="https://hydroswap.org"><img src={swap} alt="swap-logo" /></a>
				<a href="https://keresverse.org"><img src={keres} alt="keres-logo" /></a>
			</div>
		</div>

		<div class="half" id="second">
			<div class="title">Exchanges</div>
			<div class="chains">
				<a href="https://coinex.com"><img src={coinex} alt="Coinex" /></a>
			</div>
		</div>
	</div>
</section>

<style>
	.full {
		display: flex;
		justify-content: center;
		align-items: center;
		width: var(--container-width-desktop);
		height: var(--container-height-large);
		border-radius: var(--border-radius);
		color: var(--text-color);
		position: relative;
		z-index: 1;
		background: inherit;
		overflow: hidden;
		margin-bottom: 30px;
		animation: fadeIn 2.5s;
	}

	.full:before {
		content: "";
		position: absolute;
		background: inherit;
		z-index: -1;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: inset 0 0 2000px var(--card-background);
		filter: blur(10px);
		margin: -20px;
	}

	.half {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 42.5rem;
		height: var(--container-height-small);
		border-radius: var(--border-radius);
		position: relative;
		z-index: 1;
		background: inherit;
		overflow: hidden;
		margin-bottom: 30px;
		margin-left: 0;
		margin-right: 15px;
		color: var(--text-color);
		animation: fadeIn 2.5s;
	}

	.half:before {
		content: "";
		position: absolute;
		background: inherit;
		z-index: -1;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: inset 0 0 2000px var(--card-background);
		filter: blur(10px);
		margin: -20px;
	}

	#second {
		margin-right: 0px;
		margin-left: 15px;
	}

	.one-quarter {
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 20rem;
		height: var(--container-height-large);
		border-radius: var(--border-radius);
		position: relative;
		z-index: 1;
		background: inherit;
		overflow: hidden;
		margin-bottom: 30px;
		margin-left: 0;
		margin-right: 15px;
		color: var(--text-color);
		animation: fadeIn 2.5s;
	}

	.one-quarter:before {
		content: "";
		position: absolute;
		background: inherit;
		z-index: -1;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: inset 0 0 2000px var(--card-background);
		filter: blur(10px);
		margin: -20px;
	}

	.three-quarter {
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 65rem;
		height: var(--container-height-large);
		border-radius: var(--border-radius);
		position: relative;
		z-index: 1;
		background: inherit;
		overflow: hidden;
		margin-bottom: 30px;
		margin-left: 15px;
		color: var(--text-color);
		animation: fadeIn 2.5s;
	}

	.three-quarter:before {
		content: "";
		position: absolute;
		background: inherit;
		z-index: -1;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: inset 0 0 2000px var(--card-background);
		filter: blur(10px);
		margin: -20px;
	}

	.full img {
		width: 256px;
	}

	.half img {
		height: 50px;
		margin: 10px;
	}

	.multiple-containers {
		display: flex;
		flex-direction: row;
		width: var(--container-width-desktop);
	}

	.chains {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.products {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.products img {
		height: 25px;
		margin: 10px;
	}

	.title {
		display: flex;
		justify-content: center;
	}

	.information{
		display: flex;
		justify-content: center;
		margin: 20px;
	}

	.roadmap{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.kvartal{
		display: flex;
		justify-content: center;
		margin: 20px;
	}

	.partners {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.partners img {
		height: 25px;
		margin: 10px;
	}
</style>
