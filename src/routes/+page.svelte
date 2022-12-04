<script>
	//logos
	import drop from "$lib/images/white-drop.svg";
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
	//exchanges
	import coinex from "$lib/images/exchanges/coinex-logo.svg";
	import bithumb from "$lib/images/exchanges/bithumb.svg";
	import mercatox from "$lib/images/exchanges/mercatox.svg";
	import latoken from "$lib/images/exchanges/latoken.svg";
	import buyucoin from "$lib/images/exchanges/buyucoin.svg";
	//partners
	import bloceducare from "$lib/images/partners/bloceducare.svg";
	import ethernity from "$lib/images/partners/ethernity.svg";
	import sparkpoint from "$lib/images/partners/sparkpoint.svg";
	import vulkania from "$lib/images/partners/vulkania.svg";
	import opendefi from "$lib/images/partners/opendefi.svg";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Project Hydro" content="Project Hydro" />
</svelte:head>

<section>
	<div class="full">
		<img src={drop} alt="hydro-logo" />
		<div class="tagline">Multi-chain protocols securing the web3 reality.</div>
	</div>

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
				<a href="https://play.google.com/store/apps/details?id=com.aegirwallet&hl=en_US&gl=US"><img src={aegir} alt="aegir-logo" /></a>
				<a href="https://hydroswap.org"><img src={swap} alt="swap-logo" /></a>
				<a href="https://keresverse.org"><img src={keres} alt="keres-logo" /></a>
			</div>
		</div>
	</div>

	<div class="multiple-containers">
		<div class="one-quarter">
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

		<div class="full">
			<div class="information">
				<div class="title">Roadmap 2023</div>
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
				<a href="https://www.blocedu.care/"><img src={bloceducare} alt="bloceducare" /></a>
				<a href="https://vulkania.io/coins/hydro"><img src={vulkania} alt="vulkania" /></a>
				<a href="https://sparkpoint.io/"><img src={sparkpoint} alt="sparkpoint" /></a>
				<a href="https://opendefi.finance/"><img src={opendefi} alt="OpenDeFi" /></a>
				<a href="https://ethernity.live/"><img src={ethernity} alt="Ethernity" /></a>
			</div>
		</div>

		<div class="half" id="second">
			<div class="title">Exchanges</div>
			<div class="chains">
				<a href="https://coinex.com"><img src={coinex} alt="Coinex" /></a>
				<a href="https://www.bitglobal.com/en-us/spot/trade?q=HYDRO-USDT"><img src={bithumb} alt="Bithumb" /></a>
				<a href="https://mercatox.com/exchange/HYDRO/BTC"><img src={mercatox} alt="Mercatox" /></a>
				<a href="https://latoken.com/exchange/HYDRO_USDT"><img src={latoken} alt="LAtoken" /></a>
				<a href="https://trade.buyucoin.com/trade/HYDRO-INR"><img src={buyucoin} alt="BuyUcoin" /></a>
			</div>
		</div>
	</div>
</section>

<style>
	.full {
		display: flex;
		flex-direction: column;
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

	.tagline{
		margin-top: 2rem;
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
		align-items: center;
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

	.three-quarter img {
		width: 600px;
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

	.chains a{
		margin: 20px;
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
