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
$: legend = loading ? 'Switching' : !$onExpectedNetwork ? `Switch to the ${$expectedNetwork.name} to add Hydro Token` : $expectedNetwork.name;
</script>
{#if !$onExpectedNetwork}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={onSwitchNetwork} disabled={loading || $onExpectedNetwork} class="button">{legend}</div>
{/if}
<style>
    .button{
        background-color: var(--transparent);
        display: flex;
        flex-direction: row;
        text-align: start;
        height: 60px;
        width: 140px;
        font-size: 12px !important;
        word-break: break-all;
    }
</style>
