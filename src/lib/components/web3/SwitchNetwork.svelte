<script lang="ts">
// @ts-nocheck
import { expectedNetwork, switchNetwork, onExpectedNetwork } from '$lib/stores/wallet';
import { showNotification, NotificationType } from '$lib/stores/notifications';

let loading = false;
async function onSwitchNetwork() {
    loading = true;
    showNotification('Switching network', {
        type: NotificationType.Error,
    });
    try {
        await switchNetwork();
    } catch (error: any) {
        showNotification(error.message, {
            type: NotificationType.Error,
        });
    }
    loading = false;
}
$: legend = loading ? 'Switching' : !$onExpectedNetwork ? `Switch to ${$expectedNetwork.name}` : $expectedNetwork.name;
</script>
{#if !$onExpectedNetwork}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={onSwitchNetwork} disabled={loading || $onExpectedNetwork} class="button" id="card-background">{legend}</div>
{/if}
