<script>
// @ts-nocheck
import {
    onMount,
    onDestroy
} from "svelte";
import swap from "$lib/images/logos/Hydro-Swap.svg";
import item from "../../json/techlinks.json"

// API Calls to the KVS Staking contract
const apiURL = "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xf3DBB49999B25c9D6641a9423C7ad84168D00071&address=0x587DF4d33C83e0b13cA7F45f6BD1D99F0A402646&tag=latest&apikey=YKG6FZP98T89KFFPP5NS15Q5JX6QJQXJD9";
const apiURLSupply = "https://api.bscscan.com/api?module=account&action=tokenCsupply&contractaddress=0xf3DBB49999B25c9D6641a9423C7ad84168D00071&address=0x587DF4d33C83e0b13cA7F45f6BD1D99F0A402646&tag=latest&apikey=YKG6FZP98T89KFFPP5NS15Q5JX6QJQXJD9";

//Get Price data on interval
const interval = setInterval(async () => {
    getPrice();
}, 60000);

onMount(async () => {
    const response = await fetch(apiURL);
    const responseSupply = await fetch(apiURLSupply);
    data = await response.json();
    getPrice();
});

onDestroy(() => clearInterval(interval));

// Variables to Coingecko for Price feed
const url = "https://api.coingecko.com/api/v3/";
let data = []
let coin = "hydro";
let coinData;
let price = {};
let mcap;
let totalVol;
let supply;

//Get price data from Api
async function getPrice() {
    const endpoint = url + `coins/${coin}`;
    const response = await fetch(endpoint);
    if (response) {
        coinData = await response.json();
        price = coinData.market_data.current_price.usd;
        mcap = coinData.market_data.market_cap.usd;
        totalVol = coinData.market_data.total_volume.usd;
        supply = coinData.market_data.total_supply;
        return;
    } else {
        console.log("Price query error");
    }
}

//Get Price data on mount
onMount(async () => {
    getPrice();
});
</script>

<div class="one-quarter" id="animated-border">
    <img src={swap} alt="swap-logo" id="hydroswap-logo"/>
    <div class="hydroswap">
        <div class="hydro-dashboard">

            <div class="dashboard-slot" id="price">
                <div class="price">Price</div>
                <div class="currency">{(price)}
                    <div class="currency-class">USD</div>
                </div>
            </div>

            <div class="dashboard-slot" id="marketcap">
                <div class="price">Marketcap</div>
                <div class="currency">{(mcap)}
                    <div class="currency-class">USD</div>
                </div>
            </div>

            <div class="dashboard-slot" id="volume">
                <div class="price">Vol 24/7</div>
                <div class="currency">{(totalVol)}
                    <div class="currency-class">USD</div>
                </div>
            </div>

            <div class="dashboard-slot" id="staked">
                <div class="price">Staked</div>
                <div class="currency">{(Math.round(data.result/Math.pow(10,16))/100)}
                    <div class="currency-class">HYDRO</div>
                </div>
            </div>

            <div class="dashboard-slot" id="supply">
                <div class="price">Circulating Supply</div>
                <div class="currency">{(supply)}
                    <div class="currency-class">HYDRO</div>
                </div>
            </div>

        </div>
        <div class="button-row">
            <a href="{item[1].link}" target="_blank" rel="noopener noreferrer">
                <div class="button" id="hydroswap-buttons">Swap</div></a>
            <a href="{item[2].link}" target="_blank" rel="noopener noreferrer">
                <div class="button" id="hydroswap-buttons">Stake</div></a>
            <a href="{item[3].link}" target="_blank" rel="noopener noreferrer">
                <div class="button" id="hydroswap-buttons">Bridge</div></a>
        </div>
    </div>
    <div class="cg-credit"><a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">Data from Coingecko & Bscscan</a></div>
</div>

<style>
/* Hydroswap */

.currency-class {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin-left: 0.3rem;
    color: var(--text-color-alt);
}

#staked {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--text-color);
}

.hydro-dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    width: 450px;
    color: var(--text-color);
}

.dashboard-slot {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0.5rem;
    justify-content: space-between;
}

.cg-credit {
    display: flex !important;
    width: 100%;
    justify-content: flex-end;
    margin-right: 1rem !important;
    margin-bottom: 0.5rem;
    font-size: 10px;
}

.price {
    display: flex;
    justify-content: flex-start;
}

.currency {
    display: flex;
    justify-content: flex-end;
}

.one-quarter {
    margin-right: 0px;
    margin-left: 15px;
    flex-direction: column;
    justify-content: space-between;
}

.hydroswap {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#hydroswap-logo {
    margin-top: 5rem;
    margin-bottom: 0rem;
    height: 35px;
}

.button-row {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
}

#hydroswap-buttons {
    width: 100px;
    margin: 1rem;
}
</style>
