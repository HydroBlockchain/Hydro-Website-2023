<script>
// @ts-nocheck
import item from "../../json/techlinks.json"

//Switching Networks
import SwitchingNetworks from "../web3/SwitchingNetworks.svelte";

//Binance Smart Chain
import { addressBsc, onExpectedNetworkBsc } from "$lib/stores/wallet-bsc";
import ConnectButtonBsc from '$lib/components/web3/bsc/ConnectButtonBsc.svelte';
import AddHydroBsc from "../web3/bsc/AddHydroBsc.svelte";

//Ethereum
import { addressEth, onExpectedNetworkEth } from "$lib/stores/wallet-eth";
import ConnectButtonEth from "$lib/components/web3/eth/ConnectButtonEth.svelte";
import AddHydroEth from "$lib/components/web3/eth/AddHydroEth.svelte";

//Polygon
import { addressPoly, onExpectedNetworkPoly } from "$lib/stores/wallet-poly";
import AddHydroPoly from "$lib/components/web3/poly/AddHydroPoly.svelte";
import ConnectButtonPoly from "$lib/components/web3/poly/ConnectButtonPoly.svelte";

//Movr
import { addressMovr, onExpectedNetworkMovr } from "$lib/stores/wallet-movr";
import ConnectButtonMovr from "$lib/components/web3/movr/ConnectButtonMovr.svelte";
import AddHydroMovr from "$lib/components/web3/movr/AddHydroMovr.svelte";

//Csc
import { addressCsc, onExpectedNetworkCsc } from "$lib/stores/wallet-csc";
import ConnectButtonCsc from "$lib/components/web3/csc/ConnectButtonCsc.svelte";
import AddHydroCsc from "$lib/components/web3/csc/AddHydroCsc.svelte";

</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->


<div class="half" id="card-background">
    <div class="switch-networks-row"><SwitchingNetworks/></div>
    <div class="function-row">
    <div class="address-row">
        {#if $onExpectedNetworkBsc}
        <ConnectButtonBsc/>
        {:else}
        {#if $onExpectedNetworkEth}
        <ConnectButtonEth/>
        {:else}
        {#if $onExpectedNetworkPoly}
        <ConnectButtonPoly/>
        {:else}
        {#if $onExpectedNetworkMovr}
        <ConnectButtonMovr/>
        {:else}
        {#if $onExpectedNetworkCsc}
        <ConnectButtonCsc/>
        {/if}
        {/if}
        {/if}
        {/if}
        {/if}
    </div>
    
    <div class="add-button-column">
       
            <div class="dashboard-slot">
                {#if $addressEth && $onExpectedNetworkEth}
                <AddHydroEth/>
                {/if}
            </div>
        
        
            <div class="dashboard-slot">
                {#if $addressBsc && $onExpectedNetworkBsc}
                <AddHydroBsc/>
                {/if}
            </div>

            <div class="dashboard-slot">
                {#if $addressPoly && $onExpectedNetworkPoly}
                <AddHydroPoly/>
                {/if}
            </div>

            <div class="dashboard-slot">
                {#if $addressMovr && $onExpectedNetworkMovr}
                <AddHydroMovr/>
                {/if}
            </div>

            <div class="dashboard-slot">
                {#if $addressCsc && $onExpectedNetworkCsc}
                <AddHydroCsc/>
                {/if}
            </div>
        </div>
</div>
  
</div>

<style>
.switch-networks-row{
    display: flex;
    flex-direction: row;
}

.function-row{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.address-row{
    width: auto;
    
}
.add-button-column{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.choose-network{
    width: auto;
    background-color: var(--card-bg-alt);
    backdrop-filter: blur(10px);
    padding: 1rem;
}

@media only screen and (max-width: 600px) {
    .half {
        height: auto;
        flex-direction: row;
    }

   

}
</style>
