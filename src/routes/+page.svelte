<script>
	//logos
	import drop from "$lib/images/white-drop.svg";
	//exchanges
	import coinex from "$lib/images/exchanges/coinex.svg";
	import bithumb from "$lib/images/exchanges/bithumb.svg";
	import mercatox from "$lib/images/exchanges/mercatox.svg";
	import latoken from "$lib/images/exchanges/latoken.svg";
	import buyucoin from "$lib/images/exchanges/buyucoin.svg";
	//partners
	import bloceducare from "$lib/images/partners/bloceducare.png";
	import ethernity from "$lib/images/partners/ethernity.png";
	import sparkpoint from "$lib/images/partners/sparkpoint.png";
	import vulkania from "$lib/images/partners/vulkania.svg";
	import opendefi from "$lib/images/partners/opendefi.png";
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

			<div class="one-quarter">Introduction</div>

			<div class="three-quarter">
				<div class="title">Roadmap</div>
				<div class="information">
					<div class="roadmap">
					<div class="kvartal">Q1</div>
					<div class="kvartal">Q2</div>
					<div class="kvartal">Q3</div>
					<div class="kvartal">Q4</div>
				</div>
			</div>
			</div>
		</div>

		<div class="full">
			<div class="tagline">Multi-chain protocols securing the web3 reality.</div>
		</div>

	<div class="multiple-containers-2">
		<div class="half">
			<div class="title">Partners</div>
			<div class="partners">
				<a href="https://www.blocedu.care/"><img src={bloceducare} alt="bloceducare" /></a>
				<a href="https://vulkania.io/coins/hydro"><img src={vulkania} alt="vulkania" /></a>
				<a href="https://sparkpoint.io/"><img src={sparkpoint} alt="sparkpoint" /></a>
			</div>
			<div class="partners">
				<a href="https://opendefi.finance/"><img src={opendefi} alt="OpenDeFi" /></a>
				<a href="https://ethernity.live/"><img src={ethernity} alt="Ethernity" /></a>
			</div>
		</div>

		<div class="half" id="second">
			<div class="title">Exchanges</div>
			<div class="exchanges">
				<a href="https://coinex.com"><img src={coinex} alt="Coinex" /></a>
				<a href="https://www.bitglobal.com/en-us/spot/trade?q=HYDRO-USDT"><img src={bithumb} alt="Bithumb" /></a>
				<a href="https://mercatox.com/exchange/HYDRO/BTC"><img src={mercatox} alt="Mercatox" /></a>
			</div>
			<div class="exchanges">
				<a href="https://latoken.com/exchange/HYDRO_USDT"><img src={latoken} alt="LAtoken" /></a>
				<a href="https://trade.buyucoin.com/trade/HYDRO-INR"><img src={buyucoin} alt="BuyUcoin" /></a>
			</div>
		</div>
	</div>

	<div class="full">
		<div class="tagline">Multi-chain protocols securing the web3 reality.</div>
	</div>

</section>

<style>
	.tagline{
		margin-top: 2rem;
	}

	.half {
		height: var(--container-height-mini);
	}

	.three-quarter, .one-quarter {
		height: var(--container-height-small);
	}

	.title{
		font-size: var(--font-size-large);
		color: var(--title-color);
	}

	.full img {
		width: 128px;
		margin-top: 2rem;
	}

	.half img {
		height: 50px;
	}

	.multiple-containers {
		display: flex;
		flex-direction: row;
		width: var(--container-width-desktop);
	}

	.multiple-containers-2 {
		display: flex;
		flex-direction: row;
		width: var(--container-width-desktop);
	}

	.exchanges {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.exchanges img{
		width: 128px;
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
		width: 128px auto;
		margin: 20px;
	}
</style>
