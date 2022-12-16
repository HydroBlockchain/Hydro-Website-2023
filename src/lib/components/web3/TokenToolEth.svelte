<script lang="ts">
// @ts-nocheck
import { metamask } from '$lib/stores/wallet';
import ConnectButton from './ConnectButton.svelte';
import SwitchNetwork from './SwitchNetwork.svelte';
import AddHydro from './AddHydro.svelte';
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="full" id="card-background">
    <ConnectButton/>
    <SwitchNetwork/>
    <AddHydro/>
    {#if !$metamask}
    <a href="https://metamask.io"><div class="button" id="card-background">Download Metamask!</div></a>
    {/if}
</div>

<style>
.full {
    height: 10rem;
}
.button {
    border: none !important;
    margin-top: 0.5rem;
    padding: .7rem;
    font-size: 12px;
}
</style>
