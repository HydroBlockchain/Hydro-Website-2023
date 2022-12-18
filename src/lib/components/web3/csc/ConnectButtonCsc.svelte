<script lang="ts">
    import { addressCsc, connectCsc, onExpectedNetworkCsc } from "$lib/stores/wallet-csc";
    import { showNotification, NotificationType} from "$lib/stores/notifications";
    import { metamask } from '$lib/stores/wallet-bsc';
    let loading = false;
    async function onConnectCsc() {
        loading = true;
        try {
            await connectCsc();
        } catch (error: any) {
            showNotification(error.message, {
                type: NotificationType.Error,
            });
        }
        loading = false;
    }
    $: legend = loading ? "Connecting" : $addressCsc ? $addressCsc : "Connect Wallet";
    $: legend2 = 'You are Connected to Coinex Smart Chain'
    </script>
    {#if $metamask && $onExpectedNetworkCsc}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={onConnectCsc} disabled={loading || !$onExpectedNetworkCsc} class="button-connect">{legend}</div>
    <div disabled={loading || $onExpectedNetworkCsc} class="button-network">{legend2}</div>
    {/if}
    
    <style>
    </style>