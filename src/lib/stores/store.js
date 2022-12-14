import {writable} from "svelte/store";

export const state = writable({
    loading: true
})

//BSCSCAN 
const contractAddress = '0xf3DBB49999B25c9D6641a9423C7ad84168D00071'
const kvsAddress = '0x587DF4d33C83e0b13cA7F45f6BD1D99F0A402646'
const apiKey = `4GFGZEQ234QU14UHKQJZ9GDIFSGXJ5KKF9`;
const bscscanEndpoint = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=` + `${contractAddress}` + `&address=${kvsAddress}` + `&tag=latest&apikey=${apiKey}`;

export const stakedData = writable({
    hydroStaked: 0
})

export const getStakedData = () => {

    fetch(bscscanEndpoint)
        .then(res => {
            if (!res.ok) {
                throw Error("Could not fetch Hydro BSCscan data")
            }
            return res.json()
        })
        .then(data => {
            stakedData.update(current => {
                return {
                    ...current,
                    hydroStaked: Math.round(data.result / Math.pow(10, 16)) / 100
                }
            })
        }).catch(err => console.log(err))

}
setInterval(getStakedData, 1800000);
getStakedData();

//COINGECKO
const hydroEndpoint = `https://api.coingecko.com/api/v3/coins/hydro`;
const ethEndpoint = `https://api.coingecko.com/api/v3/coins/ethereum`;
const bscEndpoint = `https://api.coingecko.com/api/v3/coins/binancecoin`;
const cscEndpoint = `https://api.coingecko.com/api/v3/coins/coinex-token`;
const polyEndpoint = `https://api.coingecko.com/api/v3/coins/matic-network`;
const movrEndpoint = `https://api.coingecko.com/api/v3/coins/moonriver`;

//Exported Pricedata
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
    movrChange: 0
})

//Fetch Data
export const getPriceData = () => {

    //fetch Hydro Price
    fetch(hydroEndpoint)
        .then(res => {
            if (!res.ok) {
                throw Error("Could not fetch hydro")
            }
            return res.json()
        })
        .then(data => {
            priceData.update(current => {
                return {
                    ...current,
                    hydroPrice: data.market_data.current_price.usd,
                    hydroChange: data.market_data.price_change_percentage_24h.toFixed(2),
                    hydroMC: data.market_data.market_cap.usd,
                    hydroVolume: data.market_data.total_volume.usd,
                    hydroSupply: data.market_data.total_supply
                }
            })
        }).catch(err => console.log(err))

    //fetch ETH Price
    fetch(ethEndpoint)
        .then(res => {
            if (!res.ok) {
                throw Error("Could not fetch ethereum")
            }
            return res.json()
        })
        .then(data => {
            priceData.update(current => {
                return {
                    ...current,
                    ethPrice: data.market_data.current_price.usd.toFixed(2),
                    ethChange: data.market_data.price_change_percentage_24h.toFixed(2)
                }
            })
        }).catch(err => console.log(err))

    //fetch BSC Price
    fetch(bscEndpoint)
        .then(res => {
            if (!res.ok) {
                throw Error("Could not fetch bsc")
            }
            return res.json()
        })
        .then(data => {
            priceData.update(current => {
                return {
                    ...current,
                    bscPrice: data.market_data.current_price.usd.toFixed(2),
                    bscChange: data.market_data.price_change_percentage_24h.toFixed(2)
                }
            })
        }).catch(err => console.log(err))

    //fetch Poly Price
    fetch(polyEndpoint)
        .then(res => {
            if (!res.ok) {
                throw Error("Could not fetch Polygon")
            }
            return res.json()
        })
        .then(data => {
            priceData.update(current => {
                return {
                    ...current,
                    polyPrice: data.market_data.current_price.usd,
                    polyChange: data.market_data.price_change_percentage_24h.toFixed(2)
                }
            })
        }).catch(err => console.log(err))

    //fetch CSC Price
    fetch(cscEndpoint)
        .then(res => {
            if (!res.ok) {
                throw Error("Could not fetch Coinex")
            }
            return res.json()
        })
        .then(data => {
            priceData.update(current => {
                return {
                    ...current,
                    cscPrice: data.market_data.current_price.usd,
                    cscChange: data.market_data.price_change_percentage_24h.toFixed(2)
                }
            })
        }).catch(err => console.log(err))

    //fetch MOVR Price
    fetch(movrEndpoint)
        .then(res => {
            if (!res.ok) {
                throw Error("Could not fetch Moonriver")
            }
            return res.json()
        })
        .then(data => {
            priceData.update(current => {
                return {
                    ...current,
                    movrPrice: data.market_data.current_price.usd,
                    movrChange: data.market_data.price_change_percentage_24h.toFixed(2)
                }
            })
        }).catch(err => console.log(err))

}

//Set interval of 1min for price data and fetch data
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

//GITHUB
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
})

export const getGithubData = () => {

    //Fetch Hydroswap commits
    fetch(githubEndpointHydroswap)
        .then(res => {
            if (!res.ok) {
                throw Error("Could not fetch Hydroswap Github data")
            }
            return res.json()
        })
        .then(data => {
            githubData.update(current => {
                return {
                    ...current,
                    usernameSwap: data.author.login,
                    commitMsgSwap: data.commit.message,
                    avatarSwap: data.author.avatar_url,
                    urlSwap: data.html_url
                }
            })
        }).catch(err => console.log(err))

        //Fetch Aegir commits
        fetch(githubEndpointAegir)
        .then(res => {
            if (!res.ok) {
                throw Error("Could not fetch Hydroswap Github data")
            }
            return res.json()
        })
        .then(data => {
            githubData.update(current => {
                return {
                    ...current,
                    usernameAegir: data.author.login,
                    commitMsgAegir: data.commit.message,
                    avatarAegir: data.author.avatar_url,
                    urlAegir: data.html_url
                }
            })
        }).catch(err => console.log(err))

}

setInterval(getGithubData, 1800000);
getGithubData();

