<script>
// @ts-nocheck
import {
    onMount
} from "svelte";
import swap from "$lib/images/logos/Hydro-Swap.svg";
// API Call to the KVS Staking contract
const apiURL = "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xf3DBB49999B25c9D6641a9423C7ad84168D00071&address=0x587DF4d33C83e0b13cA7F45f6BD1D99F0A402646&tag=latest&apikey=YKG6FZP98T89KFFPP5NS15Q5JX6QJQXJD9";
let data = []

onMount(async function() {
    const response = await fetch(apiURL);
    data = await response.json();
    await checkConnection();
    await getPrice();
});

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
let coin = "hydro";
let coinData;
let price = {};
let mcap;
let totalVol;
async function getPrice() {
    const endpoint = url + `coins/${coin}`;
    const response = await fetch(endpoint);
    if (response) {
        console.log("price query success")
        coinData = await response.json();
        price = coinData.market_data.current_price.usd;
        mcap = coinData.market_data.market_cap.usd;
        totalVol = coinData.market_data.total_volume.usd;
        return;
    } else {
        console.log("Price query error");
    }
}
</script>

<div class="one-quarter" id="animated-border">
    <img src={swap} alt="swap-logo" id="product"/>
    <div class="hydroswap">
        <div class="hydro-dashboard">
            <div class="dashboard-slot" id="price">Price: {(price)} <h6>USD</h6></div>
            <div class="dashboard-slot" id="marketcap">Marketcap: {(mcap)} <h6>USD</h6></div>
            <div class="dashboard-slot" id="volume">Vol 24/7: {(totalVol)} <h6>USD</h6></div>
            <div class="dashboard-slot" id="staked"> Staked: {(Math.round(data.result/Math.pow(10,16))/100)} <h6>HYDRO</h6></div>
        </div>
        <div class="button-row">
            <a href="https://hydroswap.org" target="_blank" rel="noopener noreferrer">
                <div class="button" id="hydroswap-buttons">Swap</div></a>
            <a href="https://hydroswap.org/pools" target="_blank" rel="noopener noreferrer">
                <div class="button" id="hydroswap-buttons">Stake</div></a>
        </div>
    </div>
    <div class="cg-credit"><a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">Price from Coingecko</a></div>
</div>

<style>
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

#product {
    margin-top: 5rem;
    margin-bottom: 0rem;
}

.button-row {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 2rem;
}

#hydroswap-buttons {
    width: 100px;
    margin: 1rem;
}
</style>
