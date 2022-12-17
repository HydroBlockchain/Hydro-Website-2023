<script lang="ts">
    // @ts-nocheck
    import { expectedNetworkPoly, onExpectedNetworkPoly, switchNetworkPoly } from '$lib/stores/wallet-poly';
    import { showNotification, NotificationType } from '$lib/stores/notifications';
    import { metamask } from '$lib/stores/wallet-bsc';
    
    let loading = false;
    async function onSwitchNetworkPoly() {
        loading = true;
        showNotification('Switching network', {
            type: NotificationType.Error,
        });
        try {
            await switchNetworkPoly();
        } catch (error: any) {
            showNotification(error.message, {
                type: NotificationType.Error,
            });
        }
        loading = false;
    }
    $: legend = loading ? 'Switching' : $onExpectedNetworkPoly ? `Switch to the ${$expectedNetworkPoly.name} to add Hydro Token` : $expectedNetworkPoly.name;
    </script>
    {#if $metamask && $onExpectedNetworkPoly}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={onSwitchNetworkPoly} disabled={loading || $onExpectedNetworkPoly} class="button">{legend}</div>
    {/if}
    {#if !$metamask && !$onExpectedNetworkPoly}
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