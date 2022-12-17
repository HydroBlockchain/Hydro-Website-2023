<script lang="ts">
// @ts-nocheck
import { onExpectedNetworkBsc } from '$lib/stores/wallet-bsc';
const tokenAddressBsc = '0xf3DBB49999B25c9D6641a9423C7ad84168D00071';
const tokenSymbolBsc = 'Hydro';
const tokenDecimalsBsc = 18;
const tokenImageBsc = 'http://raw.githubusercontent.com/HydroBlockchain/Hydro-Brandkit-2023/858e2d2a56ffdf375f4edfb51219f3abd6bab749/svg/drop/Dark-blue-drop.svg';

async function addHydroBSC() {
    if (typeof window.ethereum !== 'undefined')
        try {
            const wasAdded = ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: tokenAddressBsc,
                        symbol: tokenSymbolBsc,
                        decimals: tokenDecimalsBsc,
                        image: tokenImageBsc
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
{#if $onExpectedNetworkBsc}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<a on:click={addHydroBSC} disabled={!$onExpectedNetworkBsc} id="button">Add Hydro Token on BSC Network</a>
{/if}
<style>
    #button {
        background-color: var(--transparent);
        display: flex;
        flex-direction: row;
        width: 150px;
        font-size: 14px;
        word-wrap: break-word;
        overflow: hidden;
        margin-top: 0.5rem;
        cursor: pointer;
    }
</style>