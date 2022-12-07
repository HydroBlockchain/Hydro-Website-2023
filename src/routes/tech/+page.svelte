<script>
// @ts-nocheck

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

	import jixta from "$lib/images/jixta.png"
	import vox from "$lib/images/vox1.png"
	import wex from "$lib/images/wex.svg"

	// API Call to the KVS Staking contract

  import { onMount } from "svelte";

    const apiURL = "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xf3DBB49999B25c9D6641a9423C7ad84168D00071&address=0x587DF4d33C83e0b13cA7F45f6BD1D99F0A402646&tag=latest&apikey=YKG6FZP98T89KFFPP5NS15Q5JX6QJQXJD9";
    let data = []

	onMount(async function() {
        const response = await fetch(apiURL);
        data = await response.json();
		console.log(data.result);
    });



</script>

<svelte:head>
	<title>Technology</title>
	<meta name="Tech" content="Tech" />
</svelte:head>

<section>

	<div class="multiple-containers">
		<div class="one-quarter" id="animated-border">
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

		<div class="three-quarter" id="animated-border">
			<img src={ecosystem} alt="hydro-ecosystem" id="ecosystem"/>
		</div>
		</div>

		<div class="multiple-containers">
			<div class="three-quarter" id="keresverse" style="margin-right: 15px; margin-left:0px;">
				<div class="jixta">
					<img src={vox} alt="keres-agent" id="vox"/>

					<div class="middle">
						<img src={wex} alt="keres-logo" id="wex"/>
						<img src={keres} alt="keres-logo" id="keresverse-logo"/>
						Manifest your skills to earn!
						<a href="https://keresverse.org" target="_blank" rel="noopener noreferrer" ><div class="button" id="keres-play-button">Play</div></a>
					</div>
					
					<img src={jixta} alt="keres-agent" id="jixta"/>
				</div>
			</div>
	
			<div class="one-quarter" id="animated-border" style="margin-right: 0px; margin-left:15px;">
				<div class="products" style="display:flex;flex-direction:column;">
					<a href="https://hydroswap.org" target="_blank" rel="noopener noreferrer"><img src={swap} alt="swap-logo" id="product"/></a>
					<div id="staked-div" style="color:#fff;">
						Hydro staked: <h1>{(Math.round(data.result/Math.pow(10,16))/100)}</h1>
					</div>
						
				</div>
			</div>
		</div>

	<div class="multiple-containers">
		<div class="half" id="animated-border">
			<div class="chains">
				<a href="https://add-hydro-eth.netlify.app/" target="_blank" rel="noopener noreferrer" ><img src={eth} alt="eth-logo" id="chain"/></a>
				<a href="https://add-hydro.netlify.app/" target="_blank" rel="noopener noreferrer" ><img src={bsc} alt="bsc-logo" id="chain"/></a>
				<a href="https://polygonscan.com/address/0x946112efab61c3636cbd52de2e1392d7a75a6f01" target="_blank" rel="noopener noreferrer" ><img src={matic} alt="matic-logo" id="chain"/></a>
				<a href="https://www.coinex.net/address/0x946112efaB61C3636CBD52DE2E1392D7A75A6f01#code" target="_blank" rel="noopener noreferrer" ><img src={csc} alt="csc-logo" id="chain"/></a>
				<a href="https://moonriver.moonscan.io/address/0x946112efab61c3636cbd52de2e1392d7a75a6f01#code" target="_blank" rel="noopener noreferrer" ><img src={movr} alt="csc-logo" id="chain"/></a>
		</div>
		<div class="container-footer"><p>Choose a Network to add Hydro Tokens on by clicking a logo above!</p></div>
		</div>

		<div class="half" id="animated-border" style="margin-right:0px;margin-left:15px;">
			
			<div class="products">
				<a href="https://play.google.com/store/apps/details?id=com.aegirwallet&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" ><img src={aegir} alt="aegir-logo" id="product"/></a>
			</div>
			
		</div>
	</div>

	
   
</section>

<style>
    .chains {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 2rem;
	}

    .chains a{
		margin: 20px;
	}

	.products {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.information{
		display: flex;
		justify-content: center;
		margin: 20px;
	}

</style>
