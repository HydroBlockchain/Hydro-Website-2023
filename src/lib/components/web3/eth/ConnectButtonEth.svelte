<script lang="ts">
    import { addressEth, connectEth, onExpectedNetworkEth } from "$lib/stores/wallet-eth";
    import { showNotification, NotificationType} from "$lib/stores/notifications";
    import { metamask } from '$lib/stores/wallet-bsc';
    let loading = false;
    async function onConnectEth() {
        loading = true;
        try {
            await connectEth();
        } catch (error: any) {
            showNotification(error.message, {
                type: NotificationType.Error,
            });
        }
        loading = false;
    }
    $: legend = loading ? "Connecting" : $addressEth ? $addressEth : "Connect Wallet";
    $: legend2 = 'You are Connected to Ethereum Network';
    </script>
    {#if $metamask && $onExpectedNetworkEth}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    
    <div on:click={onConnectEth} disabled={loading || !$onExpectedNetworkEth} class="button-connect">{legend}</div>
    <div disabled={loading || $onExpectedNetworkEth} class="button-network">{legend2}</div>
    {/if}
    
    <style>
    </style>