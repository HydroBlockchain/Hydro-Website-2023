import { getStakedData, getMediumData, getPriceData, getGithubData } from "$lib/stores/store";

export const fetchData = () => {
    getStakedData()
    getMediumData()
    getPriceData()
    getGithubData()
}
setInterval(fetchData, 1800000);
