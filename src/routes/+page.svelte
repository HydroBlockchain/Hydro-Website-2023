<script>
// @ts-nocheck
//imports
import {
    onMount
} from "svelte";
//logos
import drop from "$lib/images/ticker-logo/white-drop.svg";
//exchanges
import coinex from "$lib/images/exchanges/coinex.svg";
import bithumb from "$lib/images/exchanges/bithumb.svg";
import mercatox from "$lib/images/exchanges/mercatox.svg";
import latoken from "$lib/images/exchanges/latoken.svg";
import buyucoin from "$lib/images/exchanges/buyucoin.svg";
//partners
import bloceducare from "$lib/images/partners/bloceducare.svg";
import ethernity from "$lib/images/partners/ethernity.svg";
import sparkpoint from "$lib/images/partners/sparkpoint.png";
import vulkania from "$lib/images/partners/vulkania.svg";
//partners
import cointelegraph from "$lib/images/featured-on/cointelegraph.svg";
import coinmarketcap from "$lib/images/featured-on/coinmarketcap.svg";
import coingecko from "$lib/images/featured-on/coingecko.svg";

//API Call to Medium
const apiURL = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fprojecthydro.medium.com%2Ffeed";
let data = []

onMount(async function() {
    const response = await fetch(apiURL);
    data = await response.json();
    getData()
});

//Get the latest Article
let blogTitle = [];
let blogLink = [];
let blogTitleSecond = [];
let blogLinkSecond = [];
let blogTitleThird = [];
let blogLinkThird = [];
async function getData() {
    const response = await fetch(apiURL);
    if (response) {
        data = await response.json();
        blogTitle = data.items[0].title;
        blogLink = data.items[0].link;
        blogTitleSecond = data.items[1].title;
        blogLinkSecond = data.items[1].link;
        blogTitleThird = data.items[2].title;
        blogLinkThird = data.items[2].link;
    } else {
        console.log("Blog query error");
    }
}
</script>

<svelte:head>
    <title>Home</title>
    <meta name="Project Hydro" content="Project Hydro" />
    </svelte:head>

    <section>
        <div class="full" id="animated-border">
            <img src={drop} alt="hydro-logo" id="hydro-drop"/>
            <div class="tagline">Multi-chain protocols securing the web3 reality.</div>
        </div>

        <div class="multiple-containers">
            <div class="one-quarter" id="animated-border">Introduction</div>
            <div class="three-quarter" id="animated-border">
                <div class="blog-posts">
                    <div class="latest">Lastest Hydro Blog Post</div>
                    <div class="blog-title"><a href ="{(blogLink)}" target="_blank" rel="noopener noreferrer"> {(blogTitle)} </a></div>
                    <div class="blog-title"><a href ="{(blogLinkSecond)}" target="_blank" rel="noopener noreferrer"> {(blogTitleSecond)} </a></div>
                    <div class="blog-title"><a href ="{(blogLinkThird)}" target="_blank" rel="noopener noreferrer"> {(blogTitleThird)} </a></div>
                </div>
            </div>
        </div>

        <div class="full" id="animated-border">
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

        <div class="multiple-containers-2">
            <div class="half" id="animated-border">
                <div class="title">Partners</div>
                <div class="partners">
                    <a href="https://www.blocedu.care/" target="_blank" rel="noopener noreferrer"><img src={bloceducare} alt="bloceducare" id="partner"/></a>
                    <a href="https://vulkania.io/coins/hydro" target="_blank" rel="noopener noreferrer"><img src={vulkania} alt="vulkania" id="partner"/></a>
                </div>
                <div class="partners">
                    <a href="https://sparkpoint.io/" target="_blank" rel="noopener noreferrer"><img src={sparkpoint} alt="sparkpoint" id="partner"/></a>
                    <a href="https://ethernity.live/" target="_blank" rel="noopener noreferrer"><img src={ethernity} alt="Ethernity" id="partner"/></a>
                </div>
            </div>

            <div class="half" id="animated-border" style="margin-right:0px;margin-left:15px;">
                <div class="title">Exchanges</div>
                <div class="exchanges">
                    <a href="https://coinex.com" target="_blank" rel="noopener noreferrer"><img src={coinex} alt="Coinex" id="exchange"/></a>
                    <a href="https://www.bitglobal.com/en-us/spot/trade?q=HYDRO-USDT" target="_blank" rel="noopener noreferrer"><img src={bithumb} alt="Bithumb" id="exchange"/></a>
                    <a href="https://mercatox.com/exchange/HYDRO/BTC" target="_blank" rel="noopener noreferrer"><img src={mercatox} alt="Mercatox" id="exchange"/></a>
                </div>
                <div class="exchanges">
                    <a href="https://latoken.com/exchange/HYDRO_USDT" target="_blank" rel="noopener noreferrer"><img src={latoken} alt="LAtoken" id="exchange"/></a>
                    <a href="https://trade.buyucoin.com/trade/HYDRO-INR" target="_blank" rel="noopener noreferrer"><img src={buyucoin} alt="BuyUcoin" id="exchange"/></a>
                </div>
            </div>
        </div>

        <div class="full" id="animated-border">
            <div class="title">Featured on</div>
            <div class="partners">
                <a href="https://coinmarketcap.com/currencies/hydro/" target="_blank" rel="noopener noreferrer"><img src={coinmarketcap} alt="cmc" id="featured-on"/></a>
                <a href="https://cointelegraph.com/news/identity-focused-blockchain-project-moves-to-bsc-with-reduced-token-supply" target="_blank" rel="noopener noreferrer"><img src={cointelegraph} alt="cointelegraph" id="featured-on"/></a>
                <a href="https://www.coingecko.com/en/coins/hydro" target="_blank" rel="noopener noreferrer"><img src={coingecko} alt="cg" id="featured-on"/></a>
            </div>
        </div>

    </section>

<style>
.tagline {
    margin-top: 2rem;
}

.half {
    height: var(--container-height-mini);
}

.three-quarter,
.one-quarter {
    height: var(--container-height-small);
}

.title {
    font-size: var(--font-size-large);
    color: var(--title-color);
}

.exchanges {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.roadmap {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.kvartal {
    display: flex;
    justify-content: center;
    margin: 20px;
}

.partners {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
