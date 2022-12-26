<script lang="ts">
  //@ts-nocheck
  import {
    addressBsc,
    connectBsc,
    disconnectBsc,
    onExpectedNetworkBsc,
  } from "$lib/utils/wallet-bsc";
  import { showNotification, NotificationType } from "$lib/utils/notifications";
  import { metamask } from "$lib/utils/wallet-bsc";
  let loading = false;
  async function onConnectBsc() {
    loading = true;
    try {
      await connectBsc();
    } catch (error: any) {
      showNotification(error.message, {
        type: NotificationType.Error,
      });
    }
    loading = false;
  }

  $: legend = loading
    ? "Connecting"
    : $addressBsc
    ? "Connected to Binance Smart Chain"
    : "Connect Wallet";
  $: legend1 = loading ? ".." : $addressBsc ? "Disconnect" : "Disconnect";
  $: legend2 = $addressBsc;
</script>

{#if $metamask && $onExpectedNetworkBsc}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    on:click={onConnectBsc}
    disabled={loading || !$onExpectedNetworkBsc}
    class="button-connect"
    id="connect"
  >
    {legend}
  </div>
{/if}
{#if $addressBsc}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    disabled={loading || $onExpectedNetworkBsc}
    class="button-network"
    id="address-div"
  >
    {legend2}
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    on:click={disconnectBsc}
    disabled={loading || !$onExpectedNetworkBsc}
    class="button-connect"
    id="disconnect"
  >
    {legend1}
  </div>
{/if}

<style>
  #disconnect {
    margin-top: 0.5rem;
  }
  #connect {
    font-size: var(--fs-xsmall) !important;
  }
</style>
