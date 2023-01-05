<script lang="ts">
  //@ts-nocheck
  import {
    addressCsc,
    connectCsc,
    disconnectCsc,
    onExpectedNetworkCsc,
  } from "$lib/utils/wallet-csc";
  import { showNotification, NotificationType } from "$lib/utils/notifications";
  import { metamask } from "$lib/utils/wallet-bsc";

  let loading = false;

  const onConnectCsc = async () => {
    loading = true;
    try {
      await connectCsc();
    } catch (error) {
      showNotification(error.message, {
        type: NotificationType.Error,
      });
    }
    loading = false;
  };

  $: legend = loading
    ? "Connecting"
    : $addressCsc
    ? "Connected to CoinEx Smart Chain"
    : "Connect Wallet";
  $: legend1 = loading ? ".." : $addressCsc ? "Disconnect" : "Disconnect";
  $: legend2 = $addressCsc;
</script>

{#if $metamask && $onExpectedNetworkCsc}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    on:click={onConnectCsc}
    disabled={loading || !$onExpectedNetworkCsc}
    class="button-connect"
    id="connect"
  >
    {legend}
  </div>
{/if}
{#if $addressCsc}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    disabled={loading || $onExpectedNetworkCsc}
    class="button-network"
    id="address-div"
  >
    {legend2}
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    on:click={disconnectCsc}
    disabled={loading || !$onExpectedNetworkCsc}
    class="button-connect"
    id="disconnect"
  >
    {legend1}
  </div>
{/if}

<style>
  #disconnect {
    margin-top: var(--margin-half);
  }
  #connect {
    font-size: var(--fs-xsmall) !important;
  }
</style>
