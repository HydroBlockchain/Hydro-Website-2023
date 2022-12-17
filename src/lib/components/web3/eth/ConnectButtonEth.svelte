<script lang="ts">
    import { address2, connect, onExpectedNetwork2 } from "$lib/stores/wallet-eth";
    import { showNotification, NotificationType} from "$lib/stores/notifications";
    import { metamask } from '$lib/stores/wallet-bsc';
    let loading = false;
    async function onConnect() {
        loading = true;
        try {
            await connect();
        } catch (error: any) {
            showNotification(error.message, {
                type: NotificationType.Error,
            });
        }
        loading = false;
    }
    $: legend = loading ? "Connecting" : $address2 ? $address2 : "Connect Wallet";
    </script>
    {#if $metamask && $onExpectedNetwork2}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={onConnect} disabled={loading || !$onExpectedNetwork2} class="button">{legend}</div>
    
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