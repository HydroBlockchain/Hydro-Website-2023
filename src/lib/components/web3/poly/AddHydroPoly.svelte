<script lang="ts">
    // @ts-nocheck
    import { onExpectedNetworkPoly } from '$lib/stores/wallet-poly';
    const tokenAddressPoly = '0x946112efaB61C3636CBD52DE2E1392D7A75A6f01';
    const tokenSymbolPoly = 'Hydro';
    const tokenDecimalsPoly = 18;
    const tokenImagePoly = 'http://raw.githubusercontent.com/HydroBlockchain/Hydro-Brandkit-2023/858e2d2a56ffdf375f4edfb51219f3abd6bab749/svg/drop/Dark-blue-drop.svg';
    
    async function addHydroPoly() {
        if (typeof window.ethereum !== 'undefined')
            try {
                const wasAdded = ethereum.request({
                    method: 'wallet_watchAsset',
                    params: {
                        type: 'ERC20',
                        options: {
                            address: tokenAddressPoly,
                            symbol: tokenSymbolPoly,
                            decimals: tokenDecimalsPoly,
                            image: tokenImagePoly
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
    {#if $onExpectedNetworkPoly}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <a on:click={addHydroPoly} disabled={!$onExpectedNetworkPoly} id="button">Add Hydro Token on Polygon Network</a>
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