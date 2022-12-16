<script>
import item from "../../json/techlinks.json"
import hydroDrop from "$lib/images/logo/hydro-drop-white.svg";
import ethLogo from "$lib/images/logo/ethereum.svg";
import bscLogo from "$lib/images/logo/bsc.svg";
import polyLogo from "$lib/images/logo/polygon.svg";
import cscLogo from "$lib/images/logo/coinex.svg";
import movrLogo from "$lib/images/logo/moonriver.svg";
import {
		accountChainId,
		connected,
		connectMetamask,
		disconnect,
		walletAddress,
		addHydroTokenEth,
        addHydroTokenBSC
	} from '$lib/stores/provider';
    import NoMetamask from "$lib/components/web3/NoMetamask.svelte";


let hasMetamask = false;
if (typeof window.ethereum !== "undefined" && ethereum.isMetaMask) {
hasMetamask = true;
} else {
hasMetamask = false;
}
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->


<div class="half" id="card-background">
    <div class="hydro-dashboard">
        <div class="dashboard-slot-alt" id="card-background-alt">
        {#if hasMetamask}
            <div class="connected-address">connected: {$connected}</div>
            <div class="connected-address">{$walletAddress}</div>
            <div on:click={addHydroTokenEth} class="button">Add Hydro</div>
            <div class="row">
            <div on:click={connectMetamask} class="button">Connect</div>
            <div on:click={disconnect} class="button">Disconnect</div>
        </div>
        {:else}
        <NoMetamask/>
        {/if}
    </div>
       
        <a target="_blank" rel="noopener noreferrer" >
            <div class="dashboard-slot" id="card-background-alt">
                <div class="chain">Add Hydro Token on Ethereum</div>
                <div class="chain-img"><img src={ethLogo} alt="hydro-drop" id="chain"/></div>
            </div>
        </a>
        <a href="{item[5].link}" target="_blank" rel="noopener noreferrer" >
            <div class="dashboard-slot" id="card-background-alt">
                <div class="chain">Add Hydro Token on BSC Network</div>
                <div class="chain-img"><img src={bscLogo} alt="hydro-drop" id="chain"/></div>
            </div>
        </a>
    </div>
    <div class="hydro-dashboard">
        <a href="{item[6].link}" target="_blank" rel="noopener noreferrer" >
            <div class="dashboard-slot" id="card-background-alt">
                <div class="chain">Add Hydro Token on Polygon</div>
                <div class="chain-img"><img src={polyLogo} alt="hydro-drop" id="chain"/></div>
            </div>
        </a>
        <a href="{item[7].link}" target="_blank" rel="noopener noreferrer" >
            <div class="dashboard-slot" id="card-background-alt">
                <div class="chain">Add Hydro Token on CSC Network</div>
                <div class="chain-img"><img src={cscLogo} alt="hydro-drop" id="chain"/></div>
            </div>
        </a>
        <a href="{item[8].link}" target="_blank" rel="noopener noreferrer" >
            <div class="dashboard-slot" id="card-background-alt">
                <div class="chain">Add Hydro Token on Moonriver</div>
                <div class="chain-img"> <img src={movrLogo} alt="hydro-drop" id="chain"/></div>
            </div>
        </a>
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
}

.row{
    display: flex;
    flex-direction: row;
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
    height: 40px;
    width: 40px;
}

.button{
    justify-content: center;
    margin: 2px;
    padding: 10px;
    height: auto;
    width: auto;
    font-size: 10px;
}

#chain-alt {
    height: 60px;
    width: 60px;
}

.connected-address{
    width: 100%;
    word-wrap: break-word;
    font-size: 9px;
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
