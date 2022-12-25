<script>
  //Switching Networks
  import SwitchingNetworks from "../web3/SwitchingNetworks.svelte";
  //Binance Smart Chain
  import { addressBsc, onExpectedNetworkBsc } from "$lib/utils/wallet-bsc";
  import ConnectButtonBsc from "$lib/components/web3/bsc/ConnectButtonBsc.svelte";
  import AddHydroBsc from "../web3/bsc/AddHydroBsc.svelte";
  //Ethereum
  import { addressEth, onExpectedNetworkEth } from "$lib/utils/wallet-eth";
  import ConnectButtonEth from "$lib/components/web3/eth/ConnectButtonEth.svelte";
  import AddHydroEth from "$lib/components/web3/eth/AddHydroEth.svelte";
  //Polygon
  import { addressPoly, onExpectedNetworkPoly } from "$lib/utils/wallet-poly";
  import AddHydroPoly from "$lib/components/web3/poly/AddHydroPoly.svelte";
  import ConnectButtonPoly from "$lib/components/web3/poly/ConnectButtonPoly.svelte";
  //Movr
  import { addressMovr, onExpectedNetworkMovr } from "$lib/utils/wallet-movr";
  import ConnectButtonMovr from "$lib/components/web3/movr/ConnectButtonMovr.svelte";
  import AddHydroMovr from "$lib/components/web3/movr/AddHydroMovr.svelte";
  //Csc
  import { addressCsc, onExpectedNetworkCsc } from "$lib/utils/wallet-csc";
  import ConnectButtonCsc from "$lib/components/web3/csc/ConnectButtonCsc.svelte";
  import AddHydroCsc from "$lib/components/web3/csc/AddHydroCsc.svelte";
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="half" id="card-background">
  <div class="switch-networks-row">
    <SwitchingNetworks />
  </div>
  <div class="function-row">
    <div class="address-row">
      {#if $onExpectedNetworkBsc}
        <ConnectButtonBsc />
      {:else if $onExpectedNetworkEth}
        <ConnectButtonEth />
      {:else if $onExpectedNetworkPoly}
        <ConnectButtonPoly />
      {:else if $onExpectedNetworkMovr}
        <ConnectButtonMovr />
      {:else if $onExpectedNetworkCsc}
        <ConnectButtonCsc />
      {/if}
    </div>
    <div class="add-button-column">
      <div class="network-slot">
        {#if $addressEth && $onExpectedNetworkEth}
          <AddHydroEth />
        {/if}
      </div>
      <div class="network-slot">
        {#if $addressBsc && $onExpectedNetworkBsc}
          <AddHydroBsc />
        {/if}
      </div>
      <div class="network-slot">
        {#if $addressPoly && $onExpectedNetworkPoly}
          <AddHydroPoly />
        {/if}
      </div>
      <div class="network-slot">
        {#if $addressMovr && $onExpectedNetworkMovr}
          <AddHydroMovr />
        {/if}
      </div>
      <div class="network-slot">
        {#if $addressCsc && $onExpectedNetworkCsc}
          <AddHydroCsc />
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .switch-networks-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 0.5rem;
  }

  .function-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .add-button-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 600px) {
    .function-row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .switch-networks-row {
      margin-top: 1rem;
    }

    .add-button-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .half {
      height: auto !important;
      flex-direction: column;
    }

    .function-row {
      display: flex;
      flex-direction: column !important;
      justify-content: center;
      align-items: center;
    }

    .switch-networks-row {
      margin-top: 1rem;
    }

    .add-button-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  @media only screen and (max-width: 992px) {
    .half {
      height: auto !important;
      flex-direction: column;
    }

    .function-row {
      display: flex;
      flex-direction: column !important;
      justify-content: center;
      align-items: center;
    }

    .switch-networks-row {
      margin-top: 1rem;
    }

    .add-button-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  @media only screen and (max-width: 1200px) {
    .half {
      height: auto !important;
      flex-direction: column;
    }

    .function-row {
      display: flex;
      flex-direction: column !important;
      justify-content: center;
      align-items: center;
    }

    .switch-networks-row {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    .add-button-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
    }
  }
</style>
