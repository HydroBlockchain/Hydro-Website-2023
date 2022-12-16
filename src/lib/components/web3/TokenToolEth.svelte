<script lang="ts">
// @ts-nocheck
import {
    metamask,
    expectedNetwork,
    switchNetwork,
    onExpectedNetwork
} from '$lib/stores/wallet';
import {
    showNotification,
    NotificationType
} from '$lib/stores/notifications';
import {
    address,
    connect
} from '$lib/stores/wallet';
import {
    showNotification,
    NotificationType
} from '$lib/stores/notifications';

const tokenAddressBsc = '0xf3DBB49999B25c9D6641a9423C7ad84168D00071';
const tokenSymbolBsc = 'Hydro';
const tokenDecimalsBsc = 18;
const tokenImageBsc = 'http://github.com/HydroBlockchain/Hydro-Brandkit-2023/blob/main/png/128px/drop/Dark-blue-drop.png?raw=true';
export const addHydroTokenBsc = () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const wasAdded = ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: tokenAddressBsc,
                        symbol: tokenSymbolBsc,
                        decimals: tokenDecimalsBsc,
                        image: tokenImageBsc,
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
}

let loading = false;
async function onSwitchNetwork() {
    loading = true;
    showNotification('Switching network', {
        type: NotificationType.Error,
    });
    try {
        await switchNetwork();
    } catch (error: any) {
        showNotification(error.message, {
            type: NotificationType.Error,
        });
    }
    loading = false;
}

$: legend = loading ?
    'Switching' :
    !$onExpectedNetwork ?
    `Switch to ${$expectedNetwork.name}` :
    $expectedNetwork.name;

async function onConnect() {
    loading = true;
    try {
        await connect();
    } catch (error: any) {
        showNotification(error.message, {
            type: NotificationType.Error
        });
    }
    loading = false;
}

$: legend = loading ? 'Connecting' : $address ? $address : 'Connect Wallet';
</script>

<div class="full" id="card-background">
    {#if $onExpectedNetwork}
    {#if $onExpectedNetwork}
    <button
        on:click={onConnect}
        disabled={loading || !$onExpectedNetwork}
        class="button" id="card-background"
        class:cursor-pointer={!$address}>
        {legend}
    </button>
    {/if}

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="button" id="card-background" on:click={addHydroTokenBsc}>add token</div>
    {:else if !$onExpectedNetwork}
    {#if $metamask}
    <button
        on:click={onSwitchNetwork}
        disabled={loading}
        class="button" id="card-background"
        class:cursor-pointer={!$onExpectedNetwork}>
        {legend}
    </button>
    {:else}
    <a href="https://metamask.io"><div class="button" id="card-background">Download Metamask!</div></a>
    {/if}
    {/if}
</div>

<style>
.full {
    height: 10rem;
}

.button {
    border: none !important;
    margin-top: 0.5rem;
    padding: .7rem;
    font-size: 12px;
}
</style>
