<script>
  //Switching Networks
  import SwitchingNetworks from "../web3/SwitchingNetworks.svelte";
  //Binance Smart Chain
  import { addressBsc, onExpectedNetworkBsc } from "$lib/utils/wallet-bsc";
  import ConnectButtonBsc from "$lib/components/web3/bsc/ConnectButtonBsc.svelte";
  import AddHydroBsc from "../web3/bsc/AddHydroBsc.svelte";
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="half" id="card-background">
  <div class="switch-networks-row">
    {#if !$addressBsc && !$onExpectedNetworkBsc}
      <SwitchingNetworks />
        {/if}
  </div>
  <div class="function-row">
    <div class="address-row">
      <ConnectButtonBsc />
    </div>
    <div class="add-button-column">
      <div class="network-slot">
        {#if $addressBsc && $onExpectedNetworkBsc}
          <AddHydroBsc />
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .switch-networks-row {
    display: flex;
    flex-direction: row;
    margin-bottom: var(--margin-half);
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
      margin-top: var(--margin-standard);
    }

    .add-button-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: var(--margin-standard);
      margin-bottom: var(--margin-standard);
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
      margin-top: var(--margin-standard);
    }

    .add-button-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: var(--margin-standard);
      margin-bottom: var(--margin-standard);
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
      margin-top: var(--margin-standard);
    }

    .add-button-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: var(--margin-standard);
      margin-bottom: var(--margin-standard);
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
      margin-top: var(--margin-standard);
      margin-bottom: var(--margin-standard);
    }

    .add-button-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: var(--margin-standard);
    }
  }
</style>
