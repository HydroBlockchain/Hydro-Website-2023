<script lang="ts">
// @ts-nocheck
import hydroDrop from "$lib/images/logo/hydro-drop.svg";
import {
    onExpectedNetworkCsc
} from '$lib/stores/wallet-csc';
const tokenAddressCsc = '0x946112efaB61C3636CBD52DE2E1392D7A75A6f01';
const tokenSymbolCsc = 'Hydro';
const tokenDecimalsCsc = 18;
const tokenImageCsc = 'http://raw.githubusercontent.com/HydroBlockchain/Hydro-Brandkit-2023/858e2d2a56ffdf375f4edfb51219f3abd6bab749/svg/drop/Dark-blue-drop.svg';

async function addHydroCsc() {
    if (typeof window.ethereum !== 'undefined')
        try {
            const wasAdded = ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: tokenAddressCsc,
                        symbol: tokenSymbolCsc,
                        decimals: tokenDecimalsCsc,
                        image: tokenImageCsc
                    },
                },
            });
            if (wasAdded) {
                console.log('Adding Hydro Token!');
            } else {
                console.log('Something went wrong!');
            }
        } catch (error) {
            console.log(error);
        }
}
</script>
    {#if $onExpectedNetworkCsc}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={addHydroCsc} disabled={!$onExpectedNetworkCsc} class="button-add-hydro">
    <img src={hydroDrop} alt="hydro-drop" id="coin-ticker-logo"/><div class="text-add-hydro">Add Hydro on CSC Network</div></div>
{/if}
<style lang="scss">
</style>
