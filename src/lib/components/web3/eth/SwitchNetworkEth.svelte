<script lang="ts">
    // @ts-nocheck
    import { expectedNetworkEth, onExpectedNetworkEth, switchNetworkEth } from '$lib/stores/wallet-eth';
    import { showNotification, NotificationType } from '$lib/stores/notifications';
    import { metamask } from '$lib/stores/wallet-bsc';
    
    let loading = false;
    async function onSwitchNetworkEth() {
        loading = true;
        showNotification('Switching network', {
            type: NotificationType.Error,
        });
        try {
            await switchNetworkEth();
        } catch (error: any) {
            showNotification(error.message, {
                type: NotificationType.Error,
            });
        }
        loading = false;
    }
    $: legend = loading ? 'Switching' : !$onExpectedNetworkEth ? `Switch to the ${$expectedNetworkEth.name} to add Hydro Token` : $expectedNetworkEth.name;
    </script>
    {#if $metamask && $onExpectedNetworkEth}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={onSwitchNetworkEth} disabled={loading || $onExpectedNetworkEth} class="button">{legend}</div>
    {/if}
    {#if !$metamask && !$onExpectedNetworkEth}
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