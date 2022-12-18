<script lang="ts">
    import { addressEth, connectEth, disconnectEth, onExpectedNetworkEth } from "$lib/stores/wallet-eth";
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
$: legend = loading ? "Connecting" : $addressEth ? "Connected to Ethereum Network" : "Connect Wallet";
$: legend1 = loading ? '..' : $addressEth ? "Disconnect" : "Disconnect";
$: legend2 = $addressEth
</script>
{#if $metamask && $onExpectedNetworkEth }

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={onConnectEth} disabled={loading || !$onExpectedNetworkEth} class="button-connect" id="connect">{legend}</div>

{/if}

{#if $addressEth}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div disabled={loading || $onExpectedNetworkEth} class="button-network" id="address-div">{legend2}</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={disconnectEth} disabled={loading || !$onExpectedNetworkEth} class="button-connect" id="disconnect">{legend1}</div>
{/if}

<style>

    #disconnect{
        margin-top: 0.5rem;
    }
    #connect{
        font-size: 12px !important;
    }

</style>