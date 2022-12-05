<script>
    import ecosystem from "$lib/images/hydro-ecosystem.svg";
	//chains
	import eth from "$lib/images/blockchains/eth.svg";
	import bsc from "$lib/images/blockchains/bsc.svg";
	import matic from "$lib/images/blockchains/matic.svg";
	import csc from "$lib/images/blockchains/csc.svg";
	import movr from "$lib/images/blockchains/movr.svg";
	//products
	import aegir from "$lib/images/logos/Aegir-Wallet.svg";
	import swap from "$lib/images/logos/Hydro-Swap.svg";
	import keres from "$lib/images/logos/Keresverse.svg";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Tech Hydro" content="Hydro Tech" />
</svelte:head>

<section>
	<div class="multiple-containers">
		<div class="half">
			<div class="chains">
				<a href="https://etherscan.io/token/0x946112efab61c3636cbd52de2e1392d7a75a6f01"><img src={eth} alt="eth-logo" /></a>
				<a href="https://bscscan.com/token/0xf3DBB49999B25c9D6641a9423C7ad84168D00071"><img src={bsc} alt="bsc-logo" /></a>
				<a href="https://polygonscan.com/address/0x946112efab61c3636cbd52de2e1392d7a75a6f01"><img src={matic} alt="matic-logo" /></a>
				<a href="https://www.coinex.net/address/0x946112efaB61C3636CBD52DE2E1392D7A75A6f01#code"><img src={csc} alt="csc-logo" /></a>
				<a href="https://moonriver.moonscan.io/address/0x946112efab61c3636cbd52de2e1392d7a75a6f01#code"><img src={movr} alt="csc-logo" /></a>
		</div>
		</div>

		<div class="half" id="second">
			<div class="products">
				<a href="https://keresverse.org"><img src={keres} alt="keres-logo" /></a>
			</div>
			<div class="products">
				<a href="https://play.google.com/store/apps/details?id=com.aegirwallet&hl=en_US&gl=US"><img src={aegir} alt="aegir-logo" /></a>
			</div>
			<div class="products">
				<a href="https://hydroswap.org"><img src={swap} alt="swap-logo" /></a>
			</div>
		</div>
	</div>

    <div class="multiple-containers">
		<div class="one-quarter">
			<div class="title">Meet Hydro</div>
			<div class="information">
				The Hydro protocols are available to use on multiple networks. 
                All of our protocols and dApps are powered by Hydro tokens.
				<br><br>
				Hydro has a total supply of 111,111,111 which was elected by its community. 
                The distribution between chains is handled by our bridge that swaps your tokens between chains. 
                Once the swap from one chain to another is complete you are free to enjoy the benefits of your chosen network.
				<br><br>
				All of the Hydro tokens that are consumed by a Smart Contract will evaporate, 
                hence the supply will continously decrease over time.
			</div>
		</div>

		<div class="three-quarter">
			<img src={ecosystem} alt="hydro-ecosystem" />
		</div>
		</div>
</section>

<style>
	.multiple-containers {
		display: flex;
		flex-direction: row;
		width: var(--container-width-desktop);
	}

    .half {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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

    .one-quarter {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 35rem;
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
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 50rem;
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

    .three-quarter img {
		width: 600px;
	}

	.half img {
		height: 50px;
	}

    .chains {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

    .chains a{
		margin: 20px;
	}

	.products {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.products img {
		height: 35px;
		margin: 10px;
	}
</style>
