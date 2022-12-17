<script lang="ts">
import { address, connect, onExpectedNetwork } from "$lib/stores/wallet-bsc";
import { showNotification, NotificationType} from "$lib/stores/notifications";
import { metamask } from '$lib/stores/wallet-bsc';
let loading = false;
async function onConnect() {
    loading = true;
    try {
        await connect();
    } catch (error: any) {
        showNotification(error.message, {
            type: NotificationType.Error,
        });
    }
    loading = false;
}
$: legend = loading ? "Connecting" : $address ? $address : "Connect Wallet";
</script>
{#if $metamask && $onExpectedNetwork}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="center">Binance smart chain
<div on:click={onConnect} disabled={loading || !$onExpectedNetwork} class="button">{legend}</div>
</div>

{/if}

<style>
    .button{
        background-color: var(--transparent);
        display: flex;
        flex-direction: row;
        text-align: start;
        height: 50px;
        width: 140px;
        font-size: 14px !important;
        word-break: break-all;
    }
    .center{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
</style>