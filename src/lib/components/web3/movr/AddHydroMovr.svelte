<script lang="ts">
    // @ts-nocheck
    import { onExpectedNetworkMovr } from '$lib/stores/wallet-movr';
    const tokenAddressMovr = '0x946112efaB61C3636CBD52DE2E1392D7A75A6f01';
    const tokenSymbolMovr = 'Hydro';
    const tokenDecimalsMovr = 18;
    const tokenImageMovr = 'http://raw.githubusercontent.com/HydroBlockchain/Hydro-Brandkit-2023/858e2d2a56ffdf375f4edfb51219f3abd6bab749/svg/drop/Dark-blue-drop.svg';
    
    async function addHydroPoly() {
        if (typeof window.ethereum !== 'undefined')
            try {
                const wasAdded = ethereum.request({
                    method: 'wallet_watchAsset',
                    params: {
                        type: 'ERC20',
                        options: {
                            address: tokenAddressMovr,
                            symbol: tokenSymbolMovr,
                            decimals: tokenDecimalsMovr,
                            image: tokenImageMovr
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
    {#if $onExpectedNetworkMovr}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <a on:click={addHydroPoly} disabled={!$onExpectedNetworkMovr} id="button">Add Hydro Token on Polygon Network</a>
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