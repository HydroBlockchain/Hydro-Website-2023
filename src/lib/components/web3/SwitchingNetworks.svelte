<script lang="ts">
  // @ts-nocheck
  import { metamask, provider } from "$lib/utils/wallet-bsc";
  import { Web3Provider } from "@ethersproject/providers";
  import ethLogo from "$lib/images/logo/ethereum.svg";
  import bscLogo from "$lib/images/logo/bsc.svg";
  import polyLogo from "$lib/images/logo/polygon.svg";
  import cscLogo from "$lib/images/logo/coinex.svg";
  import movrLogo from "$lib/images/logo/moonriver.svg";
  import Metamask from "./Metamask.svelte";

  let loading = false;

  const NETWORKS = {
  eth: {
    chainId: "0x1",
  },
  bsc: {
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
  poly: {
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
  movr: {
    chainId: "0x505",
    chainName: "Moonriver Network",
    nativeCurrency: {
      name: "MOVR",
      symbol: "MOVR",
      decimals: 18,
    },
    rpcUrls: ["https://moon-rpc.com"],
    blockExplorerUrls: ["https://moonriver.explorer.com/"],
  },
  csc: {
    chainId: "0x34",
    chainName: "CoinEx Smart Chain Mainnet",
    nativeCurrency: {
      name: "CoinEx Chain Native Token",
      symbol: "cet",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.coinex.net/"],
    blockExplorerUrls: ["https://coinex.net/"],
  },
};

async function switchNetwork(network: keyof typeof NETWORKS) {
  const windowWithEthereum = window as unknown as WindowWithEthereum;
  const { ethereum } = windowWithEthereum;
  const newProvider = new Web3Provider(ethereum, "any");
  provider.set(newProvider);

  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: NETWORKS[network].chainId }],
    });
  } catch (switchError: any) {
    // Missing network
    if (switchError.code === 4902 || switchError.code === -32603) {
      await ethereum.request({
        method: "wallet_addEthereumChain",
        params: [NETWORKS[network]],
      });
    } else {
      throw Error(error);
    }
  }
}

export async function switchNetworkEth() {
  await switchNetwork("eth");
}

async function addNetworkBsc() {
  await switchNetwork("bsc");
}

async function addNetworkPoly() {
  await switchNetwork("poly");
}

async function addNetworkMovr() {
  await switchNetwork("movr");
}

async function addNetworkCsc() {
  await switchNetwork("csc");
}

</script>

<div class="networks-button-row-container">
  {#if $metamask}
    <div class="networks-button-row">
      <div class="button-network-switch" id="no-hover">
        Select <br /> Network
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={switchNetworkEth}
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
    <div disabled={loading} class="button-container">
      <Metamask />
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

    .button-network-switch {
      width: 60px;
    }
  }

  @media only screen and (max-width: 768px) {
    .networks-button-row-container {
      flex-direction: column;
    }

    .networks-button-row {
      display: flex;
      flex-direction: row;
    }
  }

  @media only screen and (max-width: 992px) {
    .networks-button-row-container {
      flex-direction: column;
    }

    .networks-button-row {
      display: flex;
      flex-direction: row;
    }
  }

  @media only screen and (max-width: 1200px) {
    .networks-button-row-container {
      flex-direction: column;
    }

    .networks-button-row {
      display: flex;
      flex-direction: row;
    }
  }
</style>
