<script>
// @ts-nocheck
import item from "../../json/techlinks.json"
import hydroDrop from "$lib/images/logo/hydro-drop-white.svg";
import ethLogo from "$lib/images/logo/ethereum.svg";
import bscLogo from "$lib/images/logo/bsc.svg";
import polyLogo from "$lib/images/logo/polygon.svg";
import cscLogo from "$lib/images/logo/coinex.svg";
import movrLogo from "$lib/images/logo/moonriver.svg";

//Switching Networks
import SwitchingNetworks from "../web3/SwitchingNetworks.svelte";

//Binance Smart Chain
import { addressBsc, onExpectedNetworkBsc } from "$lib/stores/wallet-bsc";
import ConnectButtonBsc from '$lib/components/web3/bsc/ConnectButtonBsc.svelte';
import SwitchNetworkBsc from '$lib/components/web3/bsc/SwitchNetworkBsc.svelte';
import AddHydroBsc from "../web3/bsc/AddHydroBsc.svelte";

//Ethereum
import { addressEth, onExpectedNetworkEth } from "$lib/stores/wallet-eth";
import ConnectButtonEth from "../web3/eth/ConnectButtonEth.svelte";
import SwitchNetworkEth from "../web3/eth/SwitchNetworkEth.svelte";
import AddHydroEth from "../web3/eth/AddHydroEth.svelte";

//Polygon
import { addressPoly, onExpectedNetworkPoly } from "$lib/stores/wallet-poly";
import AddHydroPoly from "../web3/poly/AddHydroPoly.svelte";
import ConnectButtonPoly from "../web3/poly/ConnectButtonPoly.svelte";
import SwitchNetworkPoly from "../web3/poly/SwitchNetworkPoly.svelte";


</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->


<div class="half" id="card-background">
    <div class="hydro-dashboard"><SwitchingNetworks/></div>
    <div class="hydro-dashboard">
        
        <div class="dashboard-slot-alt" id="card-background-alt">
            

            {#if $onExpectedNetworkBsc}
            <ConnectButtonBsc/>
            <SwitchNetworkBsc/>
            {:else}
            {#if $onExpectedNetworkEth}
            <ConnectButtonEth/>
            <SwitchNetworkEth/>
            {:else}
            {#if $onExpectedNetworkPoly}
            <ConnectButtonPoly/>
            <SwitchNetworkPoly/>
            {:else}
            <ConnectButtonEth/>
            <SwitchNetworkEth/>
            {/if}
            {/if}
            {/if}
            
            </div>
 
       
            <div class="dashboard-slot" id="card-background-alt">
                {#if $addressEth && $onExpectedNetworkEth}
                <AddHydroEth/>
                {/if}
                <div class="chain"></div>
                <div class="chain-img"><img src={ethLogo} alt="hydro-drop" id="chain"/></div>
            </div>
        
        
            <div class="dashboard-slot" id="card-background-alt">
                {#if $addressBsc && $onExpectedNetworkBsc}
                <AddHydroBsc/>
                {/if}
                <div class="chain"></div>
                <div class="chain-img"><img src={bscLogo} alt="hydro-drop" id="chain"/></div>
            </div>

            <div class="dashboard-slot" id="card-background-alt">
                {#if $addressPoly && $onExpectedNetworkPoly}
                <AddHydroPoly/>
                {/if}
                <div class="chain"></div>
                <div class="chain-img"><img src={polyLogo} alt="hydro-drop" id="chain"/></div>
            </div>
    </div>
  
</div>

<style>
.hydro-dashboard {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.dashboard-slot,
.dashboard-slot-alt {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    text-align: start;
    margin: 0.5rem;
    padding: 1rem;
    width: auto;
    height: 100px;
    cursor: pointer;
}


.dashboard-slot-alt {
    justify-content: center;
}

.chain {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
}

.chain-img {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}

#chain {
    height: 48px;
    width: 48px;
}

.small{
    display: flex;
    width: 140px;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: start;
    font-size: 10px;
    color:var(--text-color-alt);
}

.dashboard-slot:hover {
    background-color: var(--button-hover) !important;
    opacity: 1 !important;
}

@media only screen and (max-width: 600px) {
    .half {
        height: auto;
        flex-direction: row;
    }

    .hydro-dashboard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .dashboard-slot,
    .dashboard-slot-alt {
        flex-direction: column !important;
        width: 120px;
        height: 100px;
    }

    .chain {
        width: 100%;
        font-size: 12px;
    }

}
</style>
