// @ts-nocheck
import { writable } from "svelte/store";

export const state = writable({
    loading: true
});

//BSCSCAN
const contractAddress = "0xf3DBB49999B25c9D6641a9423C7ad84168D00071";
const kvsAddress = "0x587DF4d33C83e0b13cA7F45f6BD1D99F0A402646";
const apiKey = import.meta.env.VITE_BSCSCAN_API_KEY;
const bscscanEndpoint = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${kvsAddress}&tag=latest&apikey=${apiKey}`;

export const stakedData = writable({
    hydroStaked: 0
});

export const getStakedData = async () => {
    try {
        const res = await fetch(bscscanEndpoint);
        if (!res.ok) {
            throw Error("Could not fetch Hydro BSCscan data");
        }
        const data = await res.json();
        stakedData.update(current => {
            return {
                ...current,
                hydroStaked: Math.round(data.result / Math.pow(10, 16)) / 100
            };
        });
    } catch (err) {
        console.log(err);
    }
};

setInterval(getStakedData, 1800000);
getStakedData();

//Coingecko
const hydroEndpoint = `https://api.coingecko.com/api/v3/coins/hydro`;
const ethEndpoint = `https://api.coingecko.com/api/v3/coins/ethereum`;
const bscEndpoint = `https://api.coingecko.com/api/v3/coins/binancecoin`;
const cscEndpoint = `https://api.coingecko.com/api/v3/coins/coinex-token`;
const polyEndpoint = `https://api.coingecko.com/api/v3/coins/matic-network`;
const movrEndpoint = `https://api.coingecko.com/api/v3/coins/moonriver`;

const endpoints = [
    hydroEndpoint,
    ethEndpoint,
    bscEndpoint,
    cscEndpoint,
    polyEndpoint,
    movrEndpoint,
];

// Exported Pricedata
export const priceData = writable({
    hydroPrice: 0,
    hydroChange: 0,
    hydroMC: 0,
    hydroVolume: 0,
    hydroSupply: 0,
    ethPrice: 0,
    ethChange: 0,
    bscPrice: 0,
    bscChange: 0,
    polyPrice: 0,
    polyChange: 0,
    cscPrice: 0,
    cscChange: 0,
    movrPrice: 0,
    movrChange: 0,
});

const fetchPriceData = async (endpoint) => {
    try {
        const res = await fetch(endpoint);
        if (!res.ok) {
            throw Error("Could not fetch price data");
        }
        const data = await res.json();
        return data.market_data;
    } catch (err) {
        console.log(err);
    }
};

export const getPriceData = async () => {
    try {
        const data = await Promise.all(endpoints.map(fetchPriceData));

        priceData.update((current) => {
            return {
                ...current,
                hydroPrice: data[0].current_price.usd,
                hydroChange: data[0].price_change_percentage_24h.toFixed(2),
                hydroMC: data[0].market_cap.usd,
                hydroVolume: data[0].total_volume.usd,
                hydroSupply: data[0].total_supply,
                ethPrice: data[1].current_price.usd.toFixed(2),
                ethChange: data[1].price_change_percentage_24h.toFixed(2),
                bscPrice: data[2].current_price.usd.toFixed(2),
                bscChange: data[2].price_change_percentage_24h.toFixed(2),
                polyPrice: data[3].current_price.usd,
                polyChange: data[3].price_change_percentage_24h.toFixed(2),
                cscPrice: data[4].current_price.usd,
                cscChange: data[4].price_change_percentage_24h.toFixed(2),
                movrPrice: data[5].current_price.usd,
                movrChange: data[5].price_change_percentage_24h.toFixed(2),
            };
        });
    } catch (err) {
        console.log(err);
    }
};

setInterval(getPriceData, 1800000);
getPriceData();

//MEDIUM
export const mediumData = writable({
    mediumTitleOne: [],
    mediumLinkOne: [],
    mediumPubOne: [],
    mediumTitleTwo: [],
    mediumLinkTwo: [],
    mediumPubTwo: [],
    mediumTitleThree: [],
    mediumLinkThree: [],
    mediumPubThree: [],
    mediumTitleFour: [],
    mediumLinkFour: [],
    mediumPubFour: [],
    mediumTitleFive: [],
    mediumLinkFive: [],
    mediumPubFive: [],
    mediumTitleSix: [],
    mediumLinkSix: [],
    mediumPubSix: [],
})

//Medium endpoint
const mediumEndpoint = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fprojecthydro.medium.com%2Ffeed`;

//Fetch Medium Data
export const getMediumData = () => {

    fetch(mediumEndpoint)
        .then(res => {
            if (!res.ok) {
                throw Error("Could not fetch Medium data")
            }
            return res.json()
        })
        .then(data => {
            mediumData.update(current => {
                return {
                    ...current,
                    //article 1
                    mediumTitleOne: data.items[0].title,
                    mediumLinkOne: data.items[0].link,
                    mediumPubOne: data.items[0].pubDate,
                    //article 2
                    mediumTitleTwo: data.items[1].title,
                    mediumLinkTwo: data.items[1].link,
                    mediumPubTwo: data.items[1].pubDate,
                    //article 3
                    mediumTitleThree: data.items[2].title,
                    mediumLinkThree: data.items[2].link,
                    mediumPubThree: data.items[2].pubDate,
                    //article 4
                    mediumTitleFour: data.items[3].title,
                    mediumLinkFour: data.items[3].link,
                    mediumPubFour: data.items[3].pubDate,
                    //article 5
                    mediumTitleFive: data.items[4].title,
                    mediumLinkFive: data.items[4].link,
                    mediumPubFive: data.items[4].pubDate,
                    //article 6
                    mediumTitleSix: data.items[5].title,
                    mediumLinkSix: data.items[5].link,
                    mediumPubSix: data.items[5].pubDate,
                }
            })
        }).catch(err => console.log(err))

}

setInterval(getMediumData, 18000000);
getMediumData();

const githubEndpointHydroswap = "https://api.github.com/repos/HydroBlockchain/hydroswap-v2-frontend/commits/main";
const githubEndpointAegir = "https://api.github.com/repos/HydroBlockchain/aegir-wallet/commits/main";

export const githubData = writable({
    usernameSwap: null,
    commitMsgSwap: null,
    avatarSwap: null,
    urlSwap: null,
    usernameAegir: null,
    commitMsgAegir: null,
    avatarAegir: null,
    urlAegir: null
});

const fetchGithubData = (endpoint) =>
    fetch(endpoint)
        .then((res) => {
            if (!res.ok) {
                throw Error("Could not fetch Github data");
            }
            return res.json();
        })
        .then((data) => {
            return {
                username: data.author.login,
                commitMsg: data.commit.message,
                avatar: data.author.avatar_url,
                url: data.html_url,
            };
        })
        .catch((err) => console.log(err));

export const getGithubData = async () => {
    try {
        const [hydroswapData, aegirData] = await Promise.all([
            fetchGithubData(githubEndpointHydroswap),
            fetchGithubData(githubEndpointAegir),
        ]);

        githubData.update((current) => {
            return {
                ...current,
                usernameSwap: hydroswapData.username,
                commitMsgSwap: hydroswapData.commitMsg,
                avatarSwap: hydroswapData.avatar,
                urlSwap: hydroswapData.url,
                usernameAegir: aegirData.username,
                commitMsgAegir: aegirData.commitMsg,
                avatarAegir: aegirData.avatar,
                urlAegir: aegirData.url,
            };
        });
    } catch (err) {
        console.log(err);
    }
};

setInterval(getGithubData, 1800000);
getGithubData();

//Hydro Info
export const hydroInfo = writable({
    marketcapRank: 0,
    coingeckoRank: 0,
    twitterFollowers: 0,
    redditSubscribers: 0,
    telegramUsers: 0
});

export const getHydroInfo = async () => {
    try {
        const res = await fetch(
            "https://api.coingecko.com/api/v3/coins/hydro?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true"
        );
        if (!res.ok) {
            throw Error("Could not fetch Hydro Info");
        }
        const data = await res.json();
        hydroInfo.set({
            marketcapRank: data.market_cap_rank,
            coingeckoRank: data.coingecko_rank,
            twitterFollowers: data.community_data.twitter_followers,
            redditSubscribers: data.community_data.reddit_subscribers,
            telegramUsers: data.community_data.telegram_channel_user_count
        });
    } catch (err) {
        console.log(err);
    }
};

setInterval(getHydroInfo, 1800000);
getHydroInfo();
