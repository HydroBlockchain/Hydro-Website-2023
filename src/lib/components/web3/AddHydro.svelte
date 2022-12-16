<script lang="ts">
// @ts-nocheck
import { onExpectedNetwork } from '$lib/stores/wallet';
const tokenAddressBsc = '0xf3DBB49999B25c9D6641a9423C7ad84168D00071';
const tokenSymbolBsc = 'Hydro';
const tokenDecimalsBsc = 18;
const tokenImageBsc = 'http://github.com/HydroBlockchain/Hydro-Brandkit-2023/blob/main/png/128px/drop/Dark-blue-drop.png?raw=true';

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
$: legend3 = 'Add Hydro Token';
</script>
{#if $onExpectedNetwork}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={addHydroBSC} disabled={!$onExpectedNetwork} class="button" id="card-background">{legend3}</div>
{/if}