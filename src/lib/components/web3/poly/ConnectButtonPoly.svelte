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
    </script>
    {#if $metamask && $onExpectedNetworkPoly}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={onConnectPoly} disabled={loading || !$onExpectedNetworkPoly} class="button">{legend}</div>
    
    {/if}
    
    <style>
        .button{
            background-color: var(--transparent);
            display: flex;
            flex-direction: row;
            text-align: start;
            height: 50px;
            width: 140px;
            font-size: 14px !important;
            word-break: break-all;
        }
    </style>