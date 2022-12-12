import { writable } from "svelte/store";

const contractAddress = '0xf3DBB49999B25c9D6641a9423C7ad84168D00071'
const kvsAddress = '0x587DF4d33C83e0b13cA7F45f6BD1D99F0A402646'
const apiKey = `4GFGZEQ234QU14UHKQJZ9GDIFSGXJ5KKF9`;
const bscscanEndpoint = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=` + `${contractAddress}` + `&address=${kvsAddress}` + `&tag=latest&apikey=${apiKey}`;

export const stakedData = writable({
    hydroStaked: 0
})

export const getStakedData = () => {

    fetch(bscscanEndpoint)
        .then(res => {
            if (!res.ok) {
                throw Error("Could not fetch Hydro BSCscan data")
            }
            return res.json()
        })
        .then(data => {
            stakedData.update(current => {
                return {
                    ...current,
                    hydroStaked: Math.round(data.result / Math.pow(10, 16)) / 100
                }
            })
        }).catch(err => console.log(err))

}
setInterval(getStakedData, 1800000);
getStakedData();

  


