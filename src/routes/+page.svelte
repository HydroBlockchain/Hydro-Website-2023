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
	<meta name="description" content="Svelte demo app" />
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
		<div class="container-first">
			<div class="title">Partners</div>
			<div class="chains" />
		</div>

		<div class="container-second">
			<div class="title">Exchanges</div>
			<div class="chains">
				<a href="https://coinex.com"><img src={csc} alt="Coinex" /></a>
			</div>
		</div>
	</div>
</section>

<style>
	.container {
		display: flex;
		justify-content: center;
		width: 85rem;
		height: 30rem;
		border-radius: 5px;
		position: relative;
		z-index: 1;
		background: inherit;
		overflow: hidden;
		margin-bottom: 30px;
		margin-top: 20px;
		animation: fadeIn 2.5s;
	}

	.container:before {
		content: "";
		position: absolute;
		background: inherit;
		z-index: -1;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
		filter: blur(10px);
		margin: -20px;
	}

	.container-first {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 42.5rem;
		height: 10rem;
		border-radius: 5px;
		position: relative;
		z-index: 1;
		background: inherit;
		overflow: hidden;
		margin-bottom: 30px;
		margin-left: 0;
		margin-right: 15px;
		color: #fff;
		animation: fadeIn 2.5s;
	}

	.container-first:before {
		content: "";
		position: absolute;
		background: inherit;
		z-index: -1;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
		filter: blur(10px);
		margin: -20px;
	}

	.container-second {
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 42.5rem;
		height: 10rem;
		border-radius: 5px;
		position: relative;
		z-index: 1;
		background: inherit;
		overflow: hidden;
		margin-bottom: 30px;
		margin-left: 15px;
		color: #fff;
		animation: fadeIn 2.5s;
	}

	.container-second:before {
		content: "";
		position: absolute;
		background: inherit;
		z-index: -1;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
		filter: blur(10px);
		margin: -20px;
	}

	.container-third {
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 20rem;
		height: 30rem;
		border-radius: 5px;
		position: relative;
		z-index: 1;
		background: inherit;
		overflow: hidden;
		margin-bottom: 30px;
		margin-left: 0;
		margin-right: 15px;
		color: #fff;
		animation: fadeIn 2.5s;
	}

	.container-third:before {
		content: "";
		position: absolute;
		background: inherit;
		z-index: -1;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
		filter: blur(10px);
		margin: -20px;
	}

	.container-fourth {
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 65rem;
		height: 30rem;
		border-radius: 5px;
		position: relative;
		z-index: 1;
		background: inherit;
		overflow: hidden;
		margin-bottom: 30px;
		margin-left: 15px;
		color: #fff;
		animation: fadeIn 2.5s;
	}

	.container-fourth:before {
		content: "";
		position: absolute;
		background: inherit;
		z-index: -1;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
		filter: blur(10px);
		margin: -20px;
	}

	.container img {
		width: 256px;
	}

	.container-first img {
		height: 50px;
		margin: 10px;
	}

	.container-second img {
		height: 50px;
		margin: 10px;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.multiple-containers {
		display: flex;
		flex-direction: row;
		width: 85rem;
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
</style>
