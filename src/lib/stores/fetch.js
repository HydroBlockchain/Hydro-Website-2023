import { getStakedData } from "$lib/stores/staked";
import { getMediumData } from "$lib/stores/medium";
import { getPriceData } from "$lib/stores/price";

export const fetchData = () => {
    getStakedData()
    getMediumData()
    getPriceData()
}

fetchData()