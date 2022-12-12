import { writable } from "svelte/store";

//Exported medium data
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