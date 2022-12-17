<script lang="ts">
    // @ts-nocheck
    import { expectedNetwork2, onExpectedNetwork2 } from '$lib/stores/wallet-eth';
    import { expectedNetwork, onExpectedNetwork } from '$lib/stores/wallet-bsc';
    import { showNotification, NotificationType } from '$lib/stores/notifications';
    import { metamask } from '$lib/stores/wallet-bsc';
    
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
    $: legend = loading ? 'Switching' : $onExpectedNetwork ? `Switch to the ${$expectedNetwork2.name} to add Hydro Token` : $expectedNetwork2.name;
    </script>
    {#if $metamask && $onExpectedNetwork2}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={onSwitchNetwork} disabled={loading || $onExpectedNetwork2} class="button">{legend}</div>
    {/if}
    {#if !$metamask && !$onExpectedNetwork2}
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