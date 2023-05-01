<script lang="ts">
  // @ts-nocheck
  import { metamask, provider } from "$lib/utils/wallet-bsc";
  import { Web3Provider } from "@ethersproject/providers";
  import bscLogo from "$lib/images/logo/bsc.svg";
  import Metamask from "./Metamask.svelte";

  let loading = false;

  const NETWORKS = {
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
  }
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

export async function addNetworkBsc() {
  await switchNetwork("bsc");
}


</script>

<div class="networks-button-row-container">
  {#if $metamask}
    <div class="networks-button-row">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={addNetworkBsc}
        disabled={loading}
        class="button-network-switch"
      >
      Switch to BSC <br /> Network
        <img src={bscLogo} alt="bitcoin" id="coin-ticker-logo" />
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
    margin-left: 20px;
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
