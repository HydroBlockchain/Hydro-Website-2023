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
<div on:click={onConnect} disabled={loading || !$onExpectedNetwork} class="button" id="card-background">{legend}</div>
{/if}