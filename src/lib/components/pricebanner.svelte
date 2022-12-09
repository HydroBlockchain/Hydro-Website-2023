<script>
//imports
import {
    onMount,
    onDestroy
} from "svelte";

import hydroDrop from "$lib/images/ticker-logo/blue-drop.svg";
import ethLogo from "$lib/images/ticker-logo/ethereum.svg";
import bscLogo from "$lib/images/ticker-logo/bsc.svg";
import polyLogo from "$lib/images/ticker-logo/polygon.svg";
import cscLogo from "$lib/images/ticker-logo/coinex.svg";
import movrLogo from "$lib/images/ticker-logo/moonriver.svg";

    // API Call to Coingecko for Price feed
const url = "https://api.coingecko.com/api/v3/";
let connected = false;
let data2;
async function checkConnection() {
    const endpoint = url + "ping";
    const response = await fetch(endpoint);
    if (response) {
        connected = true;
        data2 = await response.json();
        return;
    } else {
        console.log("No connection");
    }
}

//HYDRO
let coinNameHydro = "HYDRO";
let coinHydro = "hydro";
let coinDataHydro;
let priceHydro = {};
let priceChangeHydro = {};
async function getPriceDataHydro() {
    const endpoint = url + `coins/${coinHydro}`;
    const response = await fetch(endpoint);
    if (response) {
        coinDataHydro = await response.json();
        priceHydro = coinDataHydro.market_data.current_price.usd.toFixed(6);
        priceChangeHydro = coinDataHydro.market_data.price_change_percentage_24h.toFixed(2);
        return;
    } else {
        console.log("Error HYDRO");
    }
}

//ETHER
let coinNameETH = "ETH";
let coinETH = "ethereum";
let coinDataETH;
let priceETH = {};
let priceChangeETH = {};
async function getPriceDataETH() {
    const endpoint = url + `coins/${coinETH}`;
    const response = await fetch(endpoint);
    if (response) {
        coinDataETH = await response.json();
        priceETH = coinDataETH.market_data.current_price.usd;
        priceChangeETH = coinDataETH.market_data.price_change_percentage_24h.toFixed(2);
        return;
    } else {
        console.log("Error ETH");
    }
}

//BSC
let coinNameBSC = "BNB";
let coinBSC = "binancecoin";
let coinDataBSC;
let priceBSC = {};
let priceChangeBSC = {};
async function getPriceDataBSC() {
    const endpoint = url + `coins/${coinBSC}`;
    const response = await fetch(endpoint);
    if (response) {
        coinDataBSC = await response.json();
        priceBSC = coinDataBSC.market_data.current_price.usd;
        priceChangeBSC = coinDataBSC.market_data.price_change_percentage_24h.toFixed(2);
        return;
    } else {
        console.log("Error BSC");
    }
}

//POLYGON
let coinNamePOLY = "POLYGON";
let coinPOLY = "matic-network";
let coinDataPOLY;
let pricePOLY = {};
let priceChangePOLY = {};
async function getPriceDataPOLY() {
    const endpoint = url + `coins/${coinPOLY}`;
    const response = await fetch(endpoint);
    if (response) {
        coinDataPOLY = await response.json();
        pricePOLY = coinDataPOLY.market_data.current_price.usd.toFixed(6);
        priceChangePOLY = coinDataPOLY.market_data.price_change_percentage_24h.toFixed(2);
        return;
    } else {
        console.log("Error POLY");
    }
}

//CoinEx Smart Chain
let coinNameCSC = "CET";
let coinCSC = "coinex-token";
let coinDataCSC;
let priceCSC = {};
let priceChangeCSC = {};
async function getPriceDataCSC() {
    const endpoint = url + `coins/${coinCSC}`;
    const response = await fetch(endpoint);
    if (response) {
        coinDataCSC = await response.json();
        priceCSC = coinDataCSC.market_data.current_price.usd.toFixed(6);
        priceChangeCSC = coinDataCSC.market_data.price_change_percentage_24h.toFixed(2);
        return;
    } else {
        console.log("Error CSC");
    }
}

//Moonriver Chain
let coinNameMOVR = "MOVR";
let coinMOVR = "moonriver";
let coinDataMOVR;
let priceMOVR = {};
let priceChangeMOVR = {};
async function getPriceDataMOVR() {
    const endpoint = url + `coins/${coinMOVR}`;
    const response = await fetch(endpoint);
    if (response) {
        coinDataMOVR = await response.json();
        priceMOVR = coinDataMOVR.market_data.current_price.usd;
        priceChangeMOVR = coinDataMOVR.market_data.price_change_percentage_24h.toFixed(2);
        return;
    } else {
        console.log("Error MOVR");
    }
}

//Call Price Checking Functions with Interval
  const interval = setInterval(async () => {
    getPriceDataHydro();
    getPriceDataETH();
    getPriceDataBSC();
    getPriceDataPOLY();
    getPriceDataCSC();
    getPriceDataMOVR();
  }, 60000);

  onMount(async () => {
    getPriceDataHydro();
    getPriceDataETH();
    getPriceDataBSC();
    getPriceDataPOLY();
    getPriceDataCSC();
    getPriceDataMOVR();
  });

  onDestroy(() => clearInterval(interval));


</script>
<section>
    <div class="banner" id="animated-border">
        <div class="slider">
            
            <div class="slide-track">
                <a href="https://www.coingecko.com/en/coins/hydro" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="hydro-slot">
                            <div class="coin-img"><img src={hydroDrop} alt="hydro-drop" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameHydro)}</div>
                                <div class="banner-slot" id="price">Price: {(priceHydro)} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if priceChangeHydro > 0}
                                    <div class="green"> {priceChangeHydro} %</div>
                                    {:else if 0 > priceChangeHydro}
                                    <div class="red"> {priceChangeHydro} %</div>
                                    {:else}
                                    {priceChangeHydro}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://www.coingecko.com/en/coins/ethereum" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="eth-slot">
                            <div class="coin-img"><img src={ethLogo} alt="ethereum" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameETH)}</div>
                                <div class="banner-slot" id="price">Price: {(priceETH)} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if priceChangeETH > 0}
                                    <div class="green"> {priceChangeETH} %</div>
                                    {:else if 0 > priceChangeETH}
                                    <div class="red"> {priceChangeETH} %</div>
                                    {:else}
                                    {priceChangeETH}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://www.coingecko.com/en/coins/binancecoin" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="bsc-slot">
                            <div class="coin-img"><img src={bscLogo} alt="BSC" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameBSC)}</div>
                                <div class="banner-slot" id="price">Price: {(priceBSC)} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if priceChangeBSC > 0}
                                    <div class="green"> {priceChangeBSC} %</div>
                                    {:else if 0 > priceChangeBSC}
                                    <div class="red"> {priceChangeBSC} %</div>
                                    {:else}
                                    {priceChangeBSC}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://www.coingecko.com/en/coins/polygon" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="poly-slot">
                            <div class="coin-img"><img src={polyLogo} alt="polygon" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNamePOLY)}</div>
                                <div class="banner-slot" id="price">Price: {(pricePOLY)} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if priceChangePOLY > 0}
                                    <div class="green"> {priceChangePOLY} %</div>
                                    {:else if 0 > priceChangePOLY}
                                    <div class="red"> {priceChangePOLY} %</div>
                                    {:else}
                                    {priceChangePOLY}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/coinex-token" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="csc-slot">
                            <div class="coin-img"><img src={cscLogo} alt="csc" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameCSC)}</div>
                                <div class="banner-slot" id="price">Price: {(priceCSC)} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if priceChangeCSC > 0}
                                    <div class="green"> {priceChangeCSC} %</div>
                                    {:else if 0 > priceChangeCSC}
                                    <div class="red"> {priceChangeCSC} %</div>
                                    {:else}
                                    {priceChangeCSC}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/moonriver" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="movr-slot">
                            <div class="coin-img"><img src={movrLogo} alt="moonriver" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameMOVR)}</div>
                                <div class="banner-slot" id="price">Price: {(priceMOVR)} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if priceChangeMOVR > 0}
                                    <div class="green"> {priceChangeMOVR} %</div>
                                    {:else if 0 > priceChangeMOVR}
                                    <div class="red"> {priceChangeMOVR} %</div>
                                    {:else}
                                    {priceChangeMOVR}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/hydro" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="hydro-slot">
                            <div class="coin-img"><img src={hydroDrop} alt="hydro-drop" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameHydro)}</div>
                                <div class="banner-slot" id="price">Price: {(priceHydro)} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if priceChangeHydro > 0}
                                    <div class="green"> {priceChangeHydro} %</div>
                                    {:else if 0 > priceChangeHydro}
                                    <div class="red"> {priceChangeHydro} %</div>
                                    {:else}
                                    {priceChangeHydro}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/ethereum" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="eth-slot">
                            <div class="coin-img"><img src={ethLogo} alt="ethereum" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameETH)}</div>
                                <div class="banner-slot" id="price">Price: {(priceETH)} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if priceChangeETH > 0}
                                    <div class="green"> {priceChangeETH} %</div>
                                    {:else if 0 > priceChangeETH}
                                    <div class="red"> {priceChangeETH} %</div>
                                    {:else}
                                    {priceChangeETH}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/binancecoin" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="bsc-slot">
                            <div class="coin-img"><img src={bscLogo} alt="BSC" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameBSC)}</div>
                                <div class="banner-slot" id="price">Price: {(priceBSC)} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if priceChangeBSC > 0}
                                    <div class="green"> {priceChangeBSC} %</div>
                                    {:else if 0 > priceChangeBSC}
                                    <div class="red"> {priceChangeBSC} %</div>
                                    {:else}
                                    {priceChangeBSC}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/polygon" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="poly-slot">
                            <div class="coin-img"><img src={polyLogo} alt="polygon" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNamePOLY)}</div>
                                <div class="banner-slot" id="price">Price: {(pricePOLY)} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if priceChangePOLY > 0}
                                    <div class="green"> {priceChangePOLY} %</div>
                                    {:else if 0 > priceChangePOLY}
                                    <div class="red"> {priceChangePOLY} %</div>
                                    {:else}
                                    {priceChangePOLY}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/coinex-token" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="csc-slot">
                            <div class="coin-img"><img src={cscLogo} alt="csc" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameCSC)}</div>
                                <div class="banner-slot" id="price">Price: {(priceCSC)} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if priceChangeCSC > 0}
                                    <div class="green"> {priceChangeCSC} %</div>
                                    {:else if 0 > priceChangeCSC}
                                    <div class="red"> {priceChangeCSC} %</div>
                                    {:else}
                                    {priceChangeCSC}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/moonriver" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="movr-slot">
                            <div class="coin-img"><img src={movrLogo} alt="moonriver" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameMOVR)}</div>
                                <div class="banner-slot" id="price">Price: {(priceMOVR)} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if priceChangeMOVR > 0}
                                    <div class="green"> {priceChangeMOVR} %</div>
                                    {:else if 0 > priceChangeMOVR}
                                    <div class="red"> {priceChangeMOVR} %</div>
                                    {:else}
                                    {priceChangeMOVR}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/hydro" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="hydro-slot">
                            <div class="coin-img"><img src={hydroDrop} alt="hydro-drop" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameHydro)}</div>
                                <div class="banner-slot" id="price">Price: {(priceHydro)} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if priceChangeHydro > 0}
                                    <div class="green"> {priceChangeHydro} %</div>
                                    {:else if 0 > priceChangeHydro}
                                    <div class="red"> {priceChangeHydro} %</div>
                                    {:else}
                                    {priceChangeHydro}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/ethereum" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="eth-slot">
                            <div class="coin-img"><img src={ethLogo} alt="ethereum" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameETH)}</div>
                                <div class="banner-slot" id="price">Price: {(priceETH)} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if priceChangeETH > 0}
                                    <div class="green"> {priceChangeETH} %</div>
                                    {:else if 0 > priceChangeETH}
                                    <div class="red"> {priceChangeETH} %</div>
                                    {:else}
                                    {priceChangeETH}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/binancecoin" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="bsc-slot">
                            <div class="coin-img"><img src={bscLogo} alt="BSC" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameBSC)}</div>
                                <div class="banner-slot" id="price">Price: {(priceBSC)} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if priceChangeBSC > 0}
                                    <div class="green"> {priceChangeBSC} %</div>
                                    {:else if 0 > priceChangeBSC}
                                    <div class="red"> {priceChangeBSC} %</div>
                                    {:else}
                                    {priceChangeBSC}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/polygon" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="poly-slot">
                            <div class="coin-img"><img src={polyLogo} alt="polygon" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNamePOLY)}</div>
                                <div class="banner-slot" id="price">Price: {(pricePOLY)} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if priceChangePOLY > 0}
                                    <div class="green"> {priceChangePOLY} %</div>
                                    {:else if 0 > priceChangePOLY}
                                    <div class="red"> {priceChangePOLY} %</div>
                                    {:else}
                                    {priceChangePOLY}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
            </div>
        </div>

    </div>

</section>

<style>
.banner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: var(--container-width-desktop);
    height: 60px;
    border-radius: var(--border-radius);
    color: var(--text-color);
    position: relative;
    z-index: 1;
    background: inherit;
    overflow: hidden;
    margin-bottom: 20px;
    margin-top: 20px;

}

.banner:before {
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
}

.hydro-slot,
.eth-slot,
.bsc-slot,
.poly-slot,
.csc-slot,
.movr-slot {
    display: flex;
    width: 250px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.banner-slot {
    margin-left: 1rem;
    margin-right: 1rem;
    color: var(--text-color);
    font-size: 11px;

}

#volume {
    display: flex;
    flex-direction: row;
}

#name {
    display: flex;
    justify-content: flex-start;
    font-size: 11px;
}

#coin-ticker-logo {
    width: 32px;
    height: 32px;
}

.red {
    display: flex;
    margin-left: 3px;
    color: #f56a6a !important
}

.green {
    display: flex;
    margin-left: 3px;
    color: #a6ec64 !important
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-250px * 6))
    }
}

.slider {
    height: 60px;
    display: flex;
    overflow: hidden;
    position: relative;
    width: var(--container-width-desktop);
}

.slider::before,
.slider::after {
    content: "";
    height: 60px;
    position: absolute;
    width: 200px;
    z-index: 2;
}

.slider::after {
    transform: rotateZ(180deg);
}

.slide-track {
    animation: scroll 40s linear infinite;
    display: flex;
    width: calc(250px * 16);
}

.slide {
    display: flex;
    justify-content: center;
    height: 60px;
    width: 250px;
}

section {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
