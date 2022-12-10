import { writable } from "svelte/store";

export const priceData = writable({
    hydroPrice: 0,
    hydroChange: 0,
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
                    hydroChange: data.market_data.price_change_percentage_24h.toFixed(2)
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

    //fetch CSC Price
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


}

setInterval(getData, 60000)
getData()

