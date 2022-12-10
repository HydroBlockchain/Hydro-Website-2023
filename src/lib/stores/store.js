import { writable } from "svelte/store";

//Coingecko endpoints
const hydroEndpoint = `https://api.coingecko.com/api/v3/coins/hydro`;
const ethEndpoint = `https://api.coingecko.com/api/v3/coins/ethereum`;
const bscEndpoint = `https://api.coingecko.com/api/v3/coins/binancecoin`;
const cscEndpoint = `https://api.coingecko.com/api/v3/coins/coinex-token`;
const polyEndpoint = `https://api.coingecko.com/api/v3/coins/matic-network`;
const movrEndpoint = `https://api.coingecko.com/api/v3/coins/moonriver`;

//Bscscan endpoint
const contractAddress = import.meta.env.VITE_HYDRO_CONTRACT_ADDRESS;
const kvsAddress = import.meta.env.VITE_KVS_ADDRESS;
// const apiKey = import.meta.env.BSCSCAN_API_KEY;
const bscscanEndpoint = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=` + `${contractAddress}` + `&address=${kvsAddress}` + `&tag=latest&apikey=YKG6FZP98T89KFFPP5NS15Q5JX6QJQXJD9`;

//Medium endpoint
const mediumEndpoint = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fprojecthydro.medium.com%2Ffeed`;

//Exported Pricedata
export const priceData = writable({
    hydroPrice: 0,
    hydroChange: 0,
    hydroMC: 0,
    hydroVolume: 0,
    hydroSupply: 0,
    hydroStaked: 0,
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

//Exported medium data
export const mediumData = writable({
    mediumTitleOne: [],
    mediumLinkOne: [],
    mediumTitleTwo: [],
    mediumLinkTwo: [],
    mediumTitleThree: [],
    mediumLinkThree: [],
})

//Fetch Data
export const getData = () => {

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

    //fetch HydroData
    fetch(bscscanEndpoint)
        .then(res => {
            if (!res.ok) {
                throw Error("Could not fetch Hydro BSCscan data")
            }
            return res.json()
        })
        .then(data => {
            priceData.update(current => {
                return {
                    ...current,
                    hydroStaked: Math.round(data.result / Math.pow(10, 16)) / 100
                }
            })
        }).catch(err => console.log(err))

    //fetch Medium Data
    fetch(mediumEndpoint)
        .then(res => {
            if (!res.ok) {
                throw Error("Could not Medium data")
            }
            return res.json()
        })
        .then(data => {
            mediumData.update(current => {
                return {
                    ...current,
                    mediumTitleOne: data.items[0].title,
                    mediumLinkOne: data.items[0].link,
                    mediumTitleTwo: data.items[1].title,
                    mediumLinkTwo: data.items[1].link,
                    mediumTitleThree: data.items[2].title,
                    mediumLinkThree: data.items[2].link
                }
            })
        }).catch(err => console.log(err))


}

//Set interval of 1min and fetch data
setInterval(getData, 60000)
getData()

