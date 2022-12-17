<script>
// @ts-nocheck
import item from "../../json/techlinks.json"
import hydroDrop from "$lib/images/logo/hydro-drop-white.svg";
import ethLogo from "$lib/images/logo/ethereum.svg";
import bscLogo from "$lib/images/logo/bsc.svg";
import polyLogo from "$lib/images/logo/polygon.svg";
import cscLogo from "$lib/images/logo/coinex.svg";
import movrLogo from "$lib/images/logo/moonriver.svg";

import ConnectButtonBsc from '$lib/components/web3/bsc/ConnectButtonBsc.svelte';
import SwitchNetworkBsc from '$lib/components/web3/bsc/SwitchNetworkBsc.svelte';
import { address, onExpectedNetwork } from "$lib/stores/wallet-bsc";
import { address2, onExpectedNetwork2 } from "$lib/stores/wallet-eth";
import AddHydroBsc from "../web3/bsc/AddHydroBsc.svelte";
import AddHydroEth from "../web3/eth/AddHydroEth.svelte";
import SwitchNetworkEth from "../web3/eth/SwitchNetworkEth.svelte";
import ConnectButtonEth from "../web3/eth/ConnectButtonEth.svelte";
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->


<div class="half" id="card-background">
    <div class="hydro-dashboard">
        <div class="dashboard-slot-alt" id="card-background-alt">
            

            {#if $onExpectedNetwork}
            <ConnectButtonBsc/>
            <SwitchNetworkBsc/>
            {:else}
            {#if $onExpectedNetwork2}
            <ConnectButtonEth/>
            <SwitchNetworkEth/>
            {:else}
            <ConnectButtonEth/>
            <SwitchNetworkEth/>
            {/if}
            {/if}
            
    </div>
       
        <a target="_blank" rel="noopener noreferrer" >
            <div class="dashboard-slot" id="card-background-alt">
                {#if $address2 && $onExpectedNetwork2}
                <AddHydroEth/>
                {/if}
                <div class="chain"></div>
                <div class="chain-img"><img src={ethLogo} alt="hydro-drop" id="chain"/></div>
            </div>
        </a>
        
            <div class="dashboard-slot" id="card-background-alt">
                {#if $address && $onExpectedNetwork}
                <AddHydroBsc/>
                {/if}
                <div class="chain"></div>
                <div class="chain-img"><img src={bscLogo} alt="hydro-drop" id="chain"/></div>
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
    width: 150px;
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
