<script lang="ts">
    import { addressMovr, connectMovr, onExpectedNetworkMovr } from "$lib/stores/wallet-movr";
    import { showNotification, NotificationType} from "$lib/stores/notifications";
    import { metamask } from '$lib/stores/wallet-bsc';
    let loading = false;
    async function onConnectMovr() {
        loading = true;
        try {
            await connectMovr();
        } catch (error: any) {
            showNotification(error.message, {
                type: NotificationType.Error,
            });
        }
        loading = false;
    }
    $: legend = loading ? "Connecting" : $addressMovr ? $addressMovr : "Connect Wallet";
    $: legend2 = 'You are Connected to Moonriver Network';
    </script>
    {#if $metamask && $onExpectedNetworkMovr}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={onConnectMovr} disabled={loading || !$onExpectedNetworkMovr} class="button-connect">{legend}</div>
    <div disabled={loading || $onExpectedNetworkMovr} class="button-network">{legend2}</div>
    
    {/if}
    
    <style>
    </style>