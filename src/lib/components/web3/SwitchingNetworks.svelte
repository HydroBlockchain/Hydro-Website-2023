<script lang="ts">
    // @ts-nocheck
    import { showNotification, NotificationType } from "$lib/stores/notifications";
    import { metamask, provider } from "$lib/stores/wallet-bsc";
    import { Web3Provider } from "@ethersproject/providers";
    import ethLogo from "$lib/images/logo/ethereum.svg";
    import bscLogo from "$lib/images/logo/bsc.svg";
    import polyLogo from "$lib/images/logo/polygon.svg";
    import cscLogo from "$lib/images/logo/coinex.svg";
    import movrLogo from "$lib/images/logo/moonriver.svg";

    const expectedChainIdEth = 1;
    let loading = false;

    //Switch to Ethereum Network
    export async function switchNetworkEth(
        chainId: number = expectedChainIdEth
    ) {
        const windowWithEthereum = window as unknown as WindowWithEthereum;
        const { ethereum } = windowWithEthereum;

        if (!ethereum) {
            throw new Error("asdas");
        }

        try {
            await ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId: `0x${chainId.toString(16)}`,
                    },
                ],
            });
        } catch (error: any) {
            // Missing network
            if (error.code === 4902) {
                await ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [getCreateNetworkDataByChainId(1)],
                });
            } else {
                throw Error(error);
            }
        }
    }

    async function onSwitchNetworkEth() {
        loading = true;
        showNotification("Switching network", {
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

    //Add or switch Binance Smart Chain Network
    async function onSwitchNetworkBsc() {
        loading = true;
        showNotification("Switching network", {
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

    async function addNetworkBsc() {
        const windowWithEthereum = window as unknown as WindowWithEthereum;
        const { ethereum } = windowWithEthereum;
        const newProvider = new Web3Provider(ethereum, "any");
        provider.set(newProvider);

        try {
            await ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId: "0x38",
                    },
                ],
            });
        } catch (error: any) {
            
            // Missing network
            if (switchError.code === 4902 || switchError?.data?.orginalError?.code === 4902) {
                await ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId: "0x38",
                            chainName: "Binance Smart Chain Mainnet",
                            nativeCurrency: {
                                name: "BNB",
                                symbol: "BNB",
                                decimals: 18,
                            },
                            rpcUrls: ["https://bsc-dataseed1.binance.org/"],
                            blockExplorerUrls: ["https://bscscan.com/"],
                        },
                    ],
                });
            } else {
                throw Error(error);
            }
            onSwitchNetworkBsc();
        }
    }

    //Add or switch to Polygon Network
    async function onSwitchNetworkPoly() {
        loading = true;
        showNotification("Switching network", {
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

    async function addNetworkPoly() {
        const windowWithEthereum = window as unknown as WindowWithEthereum;
        const { ethereum } = windowWithEthereum;
        const newProvider = new Web3Provider(ethereum, "any");
        provider.set(newProvider);

        try {
            await ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId: "0x89",
                    },
                ],
            });
        } catch (error: any) {
            // Missing network
            if (error.code === 4902) {
                await ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId: "0x89",
                            chainName: "Polygon Mainnet",
                            nativeCurrency: {
                                name: "Matic",
                                symbol: "MATIC",
                                decimals: 18,
                            },
                            rpcUrls: ["https://polygon-rpc.com"],
                            blockExplorerUrls: ["https://polygonscan.com/"],
                        },
                    ],
                });
            } else {
                throw Error(error);
            }
            onSwitchNetworkPoly();
        }
    }

    //Add or switch to Moonriver Network
    async function onSwitchNetworkMovr() {
        loading = true;
        showNotification("Switching network", {
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

    async function addNetworkMovr() {
        const windowWithEthereum = window as unknown as WindowWithEthereum;
        const { ethereum } = windowWithEthereum;
        const newProvider = new Web3Provider(ethereum, "any");
        provider.set(newProvider);

        try {
            await ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId: "0x505",
                    },
                ],
            });
        } catch (error: any) {
            // Missing network
            if (error.code === 4902) {
                await ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId: "0x505",
                            chainName: "Moonriver",
                            nativeCurrency: {
                                name: "Moonriver",
                                symbol: "MOVR",
                                decimals: 18,
                            },
                            rpcUrls: [
                                "https://rpc.api.moonriver.moonbeam.network",
                            ],
                            blockExplorerUrls: [
                                "https://moonriver.moonscan.io",
                            ],
                        },
                    ],
                });
            } else {
                throw Error(error);
            }
            onSwitchNetworkMovr();
        }
    }

    //Add or switch to Coinex Smart Chain
    async function onSwitchNetworkCsc() {
        loading = true;
        showNotification("Switching network", {
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

    async function addNetworkCsc() {
        const windowWithEthereum = window as unknown as WindowWithEthereum;
        const { ethereum } = windowWithEthereum;
        const newProvider = new Web3Provider(ethereum, "any");
        provider.set(newProvider);
        try {
            await ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId: "0x34",
                    },
                ],
            });
        } catch (error: any) {
            // Missing network
            if (error.code === 4902) {
                await ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId: "0x34", //Coinex RPC is down atm
                            chainName: "CoinEx Smart Chain",
                            nativeCurrency: {
                                name: "Coinex",
                                symbol: "CET",
                                decimals: 18,
                            },
                            rpcUrls: ["https://rpc.coinex.net"],
                            blockExplorerUrls: ["https://coinex.net"],
                        },
                    ],
                });
            } else {
                throw Error(error);
            }
            onSwitchNetworkCsc();
        }
    }

    //Button content

    $: legendMetamask = "Download Metamask";
</script>

<div class="networks-button-row-container">
    {#if $metamask}
        <div class="networks-button-row">
            <div class="button-network-switch" id="no-hover">
                Select <br /> Network
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                on:click={onSwitchNetworkEth}
                disabled={loading}
                class="button-network-switch"
            >
                <img src={ethLogo} alt="bitcoin" id="coin-ticker-logo" />
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                on:click={addNetworkBsc}
                disabled={loading}
                class="button-network-switch"
            >
                <img src={bscLogo} alt="bitcoin" id="coin-ticker-logo" />
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
        </div>
        <div class="networks-button-row">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                on:click={addNetworkPoly}
                disabled={loading}
                class="button-network-switch"
            >
                <img src={polyLogo} alt="bitcoin" id="coin-ticker-logo" />
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                on:click={addNetworkMovr}
                disabled={loading}
                class="button-network-switch"
            >
                <img src={movrLogo} alt="bitcoin" id="coin-ticker-logo" />
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                on:click={addNetworkCsc}
                disabled={loading}
                class="button-network-switch"
            >
                <img src={cscLogo} alt="bitcoin" id="coin-ticker-logo" />
            </div>
        </div>
    {:else}
        <div disabled={loading} class="button-network-switch">
            {legendMetamask}
        </div>
    {/if}
</div>

<style>
    #no-hover:hover {
        background-color: var(--card-bg-alt) !important;
        cursor: default;
    }

    #coin-ticker-logo {
        width: 32px;
        height: 32px;
    }
    .networks-button-row-container {
        display: flex;
        flex-direction: row;
    }
    .networks-button-row {
        display: flex;
        flex-direction: row;
    }

    @media only screen and (max-width: 600px) {
        .networks-button-row-container {
            flex-direction: column;
        }
        .networks-button-row {
            display: flex;
            flex-direction: row;
        }
    }
</style>
