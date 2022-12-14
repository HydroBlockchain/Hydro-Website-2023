import { writable } from "svelte/store";

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