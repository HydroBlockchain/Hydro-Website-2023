import { writable } from "svelte/store";

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

export const mediumData = writable({
    mediumTitleOne: [],
    mediumLinkOne: [],
    mediumTitleTwo: [],
    mediumLinkTwo: [],
    mediumTitleThree: [],
    mediumLinkThree: [],
})

export const getData = () => {

    //fetch Hydro Price
    fetch('https://api.coingecko.com/api/v3/coins/hydro')
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
    fetch('https://api.coingecko.com/api/v3/coins/ethereum')
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
    fetch('https://api.coingecko.com/api/v3/coins/binancecoin')
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
    fetch('https://api.coingecko.com/api/v3/coins/matic-network')
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
    fetch('https://api.coingecko.com/api/v3/coins/coinex-token')
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
    fetch('https://api.coingecko.com/api/v3/coins/moonriver')
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
    fetch('https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xf3DBB49999B25c9D6641a9423C7ad84168D00071&address=0x587DF4d33C83e0b13cA7F45f6BD1D99F0A402646&tag=latest&apikey=YKG6FZP98T89KFFPP5NS15Q5JX6QJQXJD9')
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
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fprojecthydro.medium.com%2Ffeed')
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

setInterval(getData, 60000)
getData()

