<script lang="ts">
// @ts-nocheck
import {
    showNotification,
    NotificationType
} from '$lib/stores/notifications';
import {
    metamask
} from '$lib/stores/wallet-bsc';
//Ethereum
const expectedChainIdEth = 1;
//Binance Smart Chain
const expectedChainIdBsc = 56;
//Polygon
const expectedChainIdPoly = 137;
//Moonriver
const expectedChainIdMovr = 1285;
//Coinex Smart Chain
const expectedChainIdCsc = 52;

let loading = false;

//Switch to Ethereum Network
export async function switchNetworkEth(chainId: number = expectedChainIdEth) {
    const windowWithEthereum = window as unknown as WindowWithEthereum;
    const {
        ethereum
    } = windowWithEthereum;

    if (!ethereum) {
        throw new Error('asdas');
    }

    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{
                chainId: `0x${chainId.toString(16)}`
            }]
        });
    } catch (error: any) {
        // Missing network
        if (error.code === 4902) {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [getCreateNetworkDataByChainId(1)]
            });
        } else {
            throw Error(error);
        }
    }
}

async function onSwitchNetworkEth() {
    loading = true;
    showNotification('Switching network', {
        type: NotificationType.Error,
    });
    try {
        await switchNetworkEth();
    } catch (error: any) {
        showNotification(error.message, {
            type: NotificationType.Error,
        });
    }
    loading = false;
}

// Switch to Binance Smart Chain Network
export async function switchNetworkBsc(chainId: number = expectedChainIdBsc) {
    const windowWithEthereum = window as unknown as WindowWithEthereum;
    const {
        ethereum
    } = windowWithEthereum;

    if (!ethereum) {
        throw new Error('asdas');
    }

    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{
                chainId: `0x${chainId.toString(16)}`
            }]
        });
    } catch (error: any) {
        // Missing network
        if (error.code === 4902) {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [getCreateNetworkDataByChainId(56)]
            });
        } else {
            throw Error(error);
        }
    }
}

async function onSwitchNetworkBsc() {
    loading = true;
    showNotification('Switching network', {
        type: NotificationType.Error,
    });
    try {
        await switchNetworkBsc();
    } catch (error: any) {
        showNotification(error.message, {
            type: NotificationType.Error,
        });
    }
    loading = false;
}

//Switch to Polygon Network
export async function switchNetworkPoly(chainId: number = expectedChainIdPoly) {
    const windowWithEthereum = window as unknown as WindowWithEthereum;
    const {
        ethereum
    } = windowWithEthereum;

    if (!ethereum) {
        throw new Error('asdas');
    }

    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{
                chainId: `0x${chainId.toString(16)}`
            }]
        });
    } catch (error: any) {
        // Missing network
        if (error.code === 4902) {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [getCreateNetworkDataByChainId(137)]
            });
        } else {
            throw Error(error);
        }
    }
}

async function onSwitchNetworkPoly() {
    loading = true;
    showNotification('Switching network', {
        type: NotificationType.Error,
    });
    try {
        await switchNetworkPoly();
    } catch (error: any) {
        showNotification(error.message, {
            type: NotificationType.Error,
        });
    }
    loading = false;
}

//Switch to Moonriver Network
export async function switchNetworkMovr(chainId: number = expectedChainIdMovr) {
    const windowWithEthereum = window as unknown as WindowWithEthereum;
    const {
        ethereum
    } = windowWithEthereum;

    if (!ethereum) {
        throw new Error('asdas');
    }

    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{
                chainId: `0x${chainId.toString(16)}`
            }]
        });
    } catch (error: any) {
        // Missing network
        if (error.code === 4902) {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [getCreateNetworkDataByChainId(1285)]
            });
        } else {
            throw Error(error);
        }
    }
}

async function onSwitchNetworkMovr() {
    loading = true;
    showNotification('Switching network', {
        type: NotificationType.Error,
    });
    try {
        await switchNetworkMovr();
    } catch (error: any) {
        showNotification(error.message, {
            type: NotificationType.Error,
        });
    }
    loading = false;
}

//Switch to Coinex Smart Chain Network
export async function switchNetworkCsc(chainId: number = expectedChainIdCsc) {
    const windowWithEthereum = window as unknown as WindowWithEthereum;
    const {
        ethereum
    } = windowWithEthereum;

    if (!ethereum) {
        throw new Error('asdas');
    }

    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{
                chainId: `0x${chainId.toString(16)}`
            }]
        });
    } catch (error: any) {
        // Missing network
        if (error.code === 4902) {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [getCreateNetworkDataByChainId(52)]
            });
        } else {
            throw Error(error);
        }
    }
}

async function onSwitchNetworkCsc() {
    loading = true;
    showNotification('Switching network', {
        type: NotificationType.Error,
    });
    try {
        await switchNetworkCsc();
    } catch (error: any) {
        showNotification(error.message, {
            type: NotificationType.Error,
        });
    }
    loading = false;
}

//Button content

import ethLogo from "$lib/images/logo/ethereum.svg";
import bscLogo from "$lib/images/logo/bsc.svg";
import polyLogo from "$lib/images/logo/polygon.svg";
import cscLogo from "$lib/images/logo/coinex.svg";
import movrLogo from "$lib/images/logo/moonriver.svg"
$: legendMetamask = 'Download Metamask'

</script>
{#if $metamask}
<div class="button-network-switch" id="no-hover">Select <br> Network</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={onSwitchNetworkEth} disabled={loading} class="button-network-switch"><img src={ethLogo} alt="bitcoin" id="coin-ticker-logo"/></div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={onSwitchNetworkBsc} disabled={loading} class="button-network-switch"><img src={bscLogo} alt="bitcoin" id="coin-ticker-logo"/></div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={onSwitchNetworkPoly} disabled={loading} class="button-network-switch"><img src={polyLogo} alt="bitcoin" id="coin-ticker-logo"/></div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={onSwitchNetworkMovr} disabled={loading} class="button-network-switch"><img src={movrLogo} alt="bitcoin" id="coin-ticker-logo"/></div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={onSwitchNetworkCsc} disabled={loading} class="button-network-switch"><img src={cscLogo} alt="bitcoin" id="coin-ticker-logo"/></div>
{:else}
<div disabled={loading} class="button-network-switch">{legendMetamask}</div>
{/if}

<style>
#no-hover:hover{
    background-color: var(--card-bg-alt) !important;
    cursor: default;
}

#coin-ticker-logo {
    width: 32px;
    height: 32px;
}
</style>
