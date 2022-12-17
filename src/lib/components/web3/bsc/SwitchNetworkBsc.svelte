<script lang="ts">
// @ts-nocheck
import { expectedNetworkBsc, switchNetworkBsc, onExpectedNetworkBsc } from '$lib/stores/wallet-bsc';
import { showNotification, NotificationType } from '$lib/stores/notifications';
import { metamask } from '$lib/stores/wallet-bsc';

let loading = false;
async function onSwitchNetworkBsc() {
    loading = true;
    showNotification('Switching network', {
        type: NotificationType.Error,
    });
    try {
        await switchNetworkBsc();
    } catch (error: any) {
        showNotification(error.message, {
            type: NotificationType.Error,
        });
    }
    loading = false;
}
$: legend = loading ? 'Switching' : !$onExpectedNetworkBsc ? `Switch to the ${$expectedNetworkBsc.name} to add Hydro Token` : $expectedNetworkBsc.name;
</script>
{#if $metamask && !$onExpectedNetworkBsc}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={onSwitchNetworkBsc} disabled={loading || $onExpectedNetworkBsc} class="button">{legend}</div>
{/if}
{#if !$metamask && !$onExpectedNetworkBsc}
    <a href="https://metamask.io"><div class="button" id="card-background">Download Metamask!</div></a>
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
