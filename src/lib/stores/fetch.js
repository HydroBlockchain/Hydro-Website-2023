import { getStakedData } from "$lib/stores/staked";
import { getMediumData } from "$lib/stores/medium";
import { getPriceData } from "$lib/stores/price";
import { getGithubData } from "$lib/stores/github";

export const fetchData = () => {
    getStakedData()
    getMediumData()
    getPriceData()
    getGithubData()
}
setInterval(fetchData, 1800000);
