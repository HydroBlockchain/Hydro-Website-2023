<script lang="ts">
    // @ts-nocheck
    import { expectedNetworkMovr, onExpectedNetworkMovr, switchNetworkMovr } from '$lib/stores/wallet-movr';
    import { showNotification, NotificationType } from '$lib/stores/notifications';
    import { metamask } from '$lib/stores/wallet-bsc';
    
    let loading = false;
    async function onSwitchNetworkMovr() {
        loading = true;
        showNotification('Switching network', {
            type: NotificationType.Error,
        });
        try {
            await switchNetworkMovr();
        } catch (error: any) {
            showNotification(error.message, {
                type: NotificationType.Error,
            });
        }
        loading = false;
    }
    $: legend = loading ? 'Switching' : !$onExpectedNetworkMovr ? `Switch to the ${$expectedNetworkMovr.name} to add Hydro Token` : $expectedNetworkMovr.name;
    </script>
    {#if $metamask && $onExpectedNetworkMovr}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={onSwitchNetworkMovr} disabled={loading || $onExpectedNetworkMovr} class="button">{legend}</div>
    {/if}
    {#if !$metamask && !$onExpectedNetworkMovr}
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