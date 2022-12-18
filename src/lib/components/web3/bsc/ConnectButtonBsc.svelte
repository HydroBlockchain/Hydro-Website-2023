<script lang="ts">
import { addressBsc, connectBsc, onExpectedNetworkBsc } from "$lib/stores/wallet-bsc";
import { showNotification, NotificationType} from "$lib/stores/notifications";
import { metamask } from '$lib/stores/wallet-bsc';
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
$: legend = loading ? "Connecting" : $addressBsc ? $addressBsc : "Connect Wallet";
$: legend2 = 'You are Connected to Binance Smart Chain'
</script>
{#if $metamask && $onExpectedNetworkBsc}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={onConnectBsc} disabled={loading || !$onExpectedNetworkBsc} class="button-connect">{legend}</div>
<div disabled={loading || $onExpectedNetworkBsc} class="button-network">{legend2}</div>

{/if}

<style>
</style>