<script lang="ts">
    import { addressPoly, connectPoly, onExpectedNetworkPoly } from "$lib/stores/wallet-poly";
    import { showNotification, NotificationType} from "$lib/stores/notifications";
    import { metamask } from '$lib/stores/wallet-bsc';
    let loading = false;
    async function onConnectPoly() {
        loading = true;
        try {
            await connectPoly();
        } catch (error: any) {
            showNotification(error.message, {
                type: NotificationType.Error,
            });
        }
        loading = false;
    }
    $: legend = loading ? "Connecting" : $addressPoly ? $addressPoly : "Connect Wallet";
    $: legend2 = 'You are Connected to Polygon Network';
    </script>
    {#if $metamask && $onExpectedNetworkPoly}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={onConnectPoly} disabled={loading || !$onExpectedNetworkPoly} class="button-connect">{legend}</div>
    <div disabled={loading || $onExpectedNetworkPoly} class="button-network">{legend2}</div>
    
    {/if}
    
    <style>
    </style>