<script lang="ts">
    import { addressMovr, connectMovr, disconnectMovr, onExpectedNetworkMovr } from "$lib/stores/wallet-movr";
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
    
$: legend = loading ? "Connecting" : $addressMovr ? "Connected to Moonriver Network" : "Connect Wallet";
$: legend1 = loading ? '..' : $addressMovr ? "Disconnect" : "Disconnect";
$: legend2 = $addressMovr

</script>

{#if $metamask && $onExpectedNetworkMovr }
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={onConnectMovr} disabled={loading || !$onExpectedNetworkMovr} class="button-connect" id="connect">{legend}</div>
{/if}
{#if $addressMovr}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div disabled={loading || $onExpectedNetworkMovr} class="button-network" id="address-div">{legend2}</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={disconnectMovr} disabled={loading || !$onExpectedNetworkMovr} class="button-connect" id="disconnect">{legend1}</div>
{/if}

<style lang="scss">
#disconnect{
    margin-top: 0.5rem;
}
#connect{
    font-size: 12px !important;
}
</style>