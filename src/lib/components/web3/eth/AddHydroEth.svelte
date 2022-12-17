<script lang="ts">
    // @ts-nocheck
    import { onExpectedNetwork2 } from '$lib/stores/wallet-eth';
    const tokenAddressEth = '0x946112efaB61C3636CBD52DE2E1392D7A75A6f01';
    const tokenSymbolEth = 'Hydro';
    const tokenDecimalsEth = 18;
    const tokenImageEth = 'http://raw.githubusercontent.com/HydroBlockchain/Hydro-Brandkit-2023/858e2d2a56ffdf375f4edfb51219f3abd6bab749/svg/drop/Dark-blue-drop.svg';
    
    async function addHydroEth() {
        if (typeof window.ethereum !== 'undefined')
            try {
                const wasAdded = ethereum.request({
                    method: 'wallet_watchAsset',
                    params: {
                        type: 'ERC20',
                        options: {
                            address: tokenAddressEth,
                            symbol: tokenSymbolEth,
                            decimals: tokenDecimalsEth,
                            image: tokenImageEth
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
    {#if $onExpectedNetwork2}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <a on:click={addHydroEth} disabled={!$onExpectedNetwork2} id="button">Add Hydro Token on Eth Network</a>
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