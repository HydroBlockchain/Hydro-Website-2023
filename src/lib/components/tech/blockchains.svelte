<script>
import item from "../../json/techlinks.json"
import hydroDrop from "$lib/images/logo/hydro-drop.svg";
import ethLogo from "$lib/images/logo/ethereum.svg";
import bscLogo from "$lib/images/logo/bsc.svg";
import polyLogo from "$lib/images/logo/polygon.svg";
import cscLogo from "$lib/images/logo/coinex.svg";
import movrLogo from "$lib/images/logo/moonriver.svg";
</script>

<div class="half" id="card-background">

    <div class="hydro-dashboard">

        <div class="dashboard-slot-alt" id="card-background">

            <img src={hydroDrop} alt="hydro-drop" id="chain"/>
            <div class="chain-alt">Hydro Token Tool</div>

        </div>

        <a href="{item[4].link}" target="_blank" rel="noopener noreferrer" >
            <div class="dashboard-slot" id="card-background">
                <div class="chain">Add Hydro Token on Ethereum Network</div>
                <img src={ethLogo} alt="hydro-drop" id="chain"/>
            </div>
        </a>

        <a href="{item[5].link}" target="_blank" rel="noopener noreferrer" >
            <div class="dashboard-slot" id="card-background">
                <div class="chain">Add Hydro Token on Binance Smart Chain Network</div>
                <img src={bscLogo} alt="hydro-drop" id="chain"/>
            </div>
        </a>

    </div>

    <div class="hydro-dashboard">
        <a href="{item[6].link}" target="_blank" rel="noopener noreferrer" >
            <div class="dashboard-slot" id="card-background">

                <div class="chain">Add Hydro Token on Polygon Network</div>
                <img src={polyLogo} alt="hydro-drop" id="chain"/>
            </div>
        </a>
        <a href="{item[7].link}" target="_blank" rel="noopener noreferrer" >
            <div class="dashboard-slot" id="card-background">

                <div class="chain">Add Hydro Token on CoinEx Smart Chain Network</div>

                <img src={cscLogo} alt="hydro-drop" id="chain"/>

            </div>
        </a>

        <a href="{item[8].link}" target="_blank" rel="noopener noreferrer" >
            <div class="dashboard-slot" id="card-background">

                <div class="chain">Add Hydro Token on Moonriver Network</div>

                <img src={movrLogo} alt="hydro-drop" id="chain"/>

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
    justify-content: space-between;
    align-items: center;
    text-align: start;
    display: flex;
    margin: 0.5rem;
    padding: 1rem;
    width: 150px;
    height: 120px;
}

.dashboard-slot-alt {
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

#chain {
    height: 40px;
    width: 40px;
}

.chain {
    width: 60%;
    font-size: 12px;
}

.chain-alt {
    width: 100%;
    font-size: 12px;
    margin-top: 0.5rem;
}

.dashboard-slot:hover {
    background-color: var(--button-hover) !important;
    opacity: 1 !important;
}

@media only screen and (max-width: 600px) {
.half{
    height: 20rem;
}

.dashboard-slot,
.dashboard-slot-alt {
    flex-direction: column !important;
    width: 70px;
    height: 100px;
}

#chain {
    height: 30px;
    width: 30px;
}

.chain {
    width: 100%;
    font-size: 10px;
}

}
</style>
