<script lang="ts">
    import { addressPoly, connectPoly, disconnectPoly, onExpectedNetworkPoly } from "$lib/stores/wallet-poly";
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

$: legend = loading ? "Connecting" : $addressPoly ? "Connected to Polygon Network" : "Connect Wallet";
$: legend1 = loading ? '..' : $addressPoly ? "Disconnect" : "Disconnect";
$: legend2 = $addressPoly

</script>

{#if $metamask && $onExpectedNetworkPoly }
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={onConnectPoly} disabled={loading || !$onExpectedNetworkPoly} class="button-connect" id="connect">{legend}</div>
{/if}
{#if $addressPoly}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div disabled={loading || $onExpectedNetworkPoly} class="button-network" id="address-div">{legend2}</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={disconnectPoly} disabled={loading || !$onExpectedNetworkPoly} class="button-connect" id="disconnect">{legend1}</div>
{/if}

<style>
#disconnect {
    margin-top: 0.5rem;
}
#connect {
    font-size: 12px !important;
}
</style>