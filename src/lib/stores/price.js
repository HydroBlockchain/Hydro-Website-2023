import { writable } from "svelte/store";

//Coingecko endpoints
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
