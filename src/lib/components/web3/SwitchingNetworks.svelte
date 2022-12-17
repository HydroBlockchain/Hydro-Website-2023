<script lang="ts">
    // @ts-nocheck
    import { showNotification, NotificationType } from '$lib/stores/notifications';
    import { metamask } from '$lib/stores/wallet-bsc';
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
	const { ethereum } = windowWithEthereum;

	if (!ethereum) {
		throw new Error('asdas');
	}

	try {
		await ethereum.request({
			method: 'wallet_switchEthereumChain',
			params: [
				{
					chainId: `0x${chainId.toString(16)}`
				}
			]
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
	const { ethereum } = windowWithEthereum;

	if (!ethereum) {
		throw new Error('asdas');
	}

	try {
		await ethereum.request({
			method: 'wallet_switchEthereumChain',
			params: [
				{
					chainId: `0x${chainId.toString(16)}`
				}
			]
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
	const { ethereum } = windowWithEthereum;

	if (!ethereum) {
		throw new Error('asdas');
	}

	try {
		await ethereum.request({
			method: 'wallet_switchEthereumChain',
			params: [
				{
					chainId: `0x${chainId.toString(16)}`
				}
			]
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
	const { ethereum } = windowWithEthereum;

	if (!ethereum) {
		throw new Error('asdas');
	}

	try {
		await ethereum.request({
			method: 'wallet_switchEthereumChain',
			params: [
				{
					chainId: `0x${chainId.toString(16)}`
				}
			]
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
	const { ethereum } = windowWithEthereum;

	if (!ethereum) {
		throw new Error('asdas');
	}

	try {
		await ethereum.request({
			method: 'wallet_switchEthereumChain',
			params: [
				{
					chainId: `0x${chainId.toString(16)}`
				}
			]
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

    $: legendEth = 'ETH' 
    $: legendBsc = 'BSC'
    $: legendMetamask = 'Download Metamask'
    $: legendPoly = 'Polygon'
    $: legendCsc = 'CSC'
    $: legendMovr = 'Moonriver'

    </script>
        {#if $metamask}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={onSwitchNetworkEth} disabled={loading} class="button" id="card-background">{legendEth}</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={onSwitchNetworkBsc} disabled={loading} class="button" id="card-background">{legendBsc}</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={onSwitchNetworkPoly} disabled={loading} class="button" id="card-background">{legendPoly}</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={onSwitchNetworkMovr} disabled={loading} class="button" id="card-background">{legendMovr}</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={onSwitchNetworkCsc} disabled={loading} class="button" id="card-background">{legendCsc}</div>
        {:else}
        <div disabled={loading} class="button" id="card-background">{legendMetamask}</div>
        {/if}

    <style>
        .button{
            background-color: var(--transparent);
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            text-align: start;
            height: 30px;
            width: auto;
            margin: 0.5rem;
            font-size: 12px !important;
            word-break: break-all;
        }
    </style>