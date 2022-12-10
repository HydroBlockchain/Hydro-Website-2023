import { readable, writable } from "svelte/store";
import { onMount, onDestroy } from "svelte";

export const priceData = writable({
    hydroPrice: 0,
    hydroChange: 0,
    ethPrice: 0,
    ethChange: 0
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
                    hydroPrice: data.market_data.current_price.usd.toFixed(6),
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
                ethPrice: data.market_data.current_price.usd.toFixed(6),
                ethChange: data.market_data.price_change_percentage_24h.toFixed(2)
            }
        })
    }).catch(err => console.log(err))


}

setInterval(getData, 60000)
getData()

