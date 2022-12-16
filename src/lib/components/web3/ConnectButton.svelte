<script lang="ts">
import { address, connect, onExpectedNetwork } from "$lib/stores/wallet";
import { showNotification, NotificationType} from "$lib/stores/notifications";
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
{#if $onExpectedNetwork}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={onConnect} disabled={loading || !$onExpectedNetwork} class="button">{legend}</div>
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
</style>