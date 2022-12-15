<script>
import {
    priceData,
    stakedData
} from "$lib/stores/store";
import HydroLogo from "$lib/images/logo/hydro-logo.svg"
</script>

<div class="one-quarter" id="card-background">

    <div class="hydro-dashboard">

        <div class="dashboard-slot-stats" id="card-background-alt">
            <img src={HydroLogo} alt="hydro-logo" id="hydro-logo"/>
        </div>

        <div class="dashboard-slot" id="card-background-alt">
            <div class="price">Price</div>
            <div class="currency">{$priceData.hydroPrice}
                <div class="currency-class">USD</div>
            </div>
        </div>

        <div class="dashboard-slot" id="card-background-alt">
            <div class="price">Change 24/7</div>
            <div class="procentage">
                {#if $priceData.hydroChange > 0}
                <div class="green"> {$priceData.hydroChange} %</div>
                {:else if 0 > $priceData.hydroChange}
                <div class="red"> {$priceData.hydroChange} %</div>
                {:else}
                {$priceData.hydroChange}
                {/if}
            </div>
        </div>
    </div>

    <div class="hydro-dashboard">

        <div class="dashboard-slot" id="card-background-alt">
            <div class="price">Volume 24/7</div>
            <div class="currency">{$priceData.hydroVolume}
                <div class="currency-class">USD</div>
            </div>
        </div>

        <div class="dashboard-slot" id="card-background-alt">
            <div class="price">Marketcap</div>
            <div class="currency">{$priceData.hydroMC}
                <div class="currency-class">USD</div>
            </div>
        </div>

        <div class="dashboard-slot" id="card-background-alt">
            <div class="price">Staked</div>
            <div class="currency">{$stakedData.hydroStaked}
                <div class="currency-class">HYDRO</div>
            </div>
        </div>

    </div>

</div>

<style>
.hydro-dashboard {
    display: flex;
    flex-direction: row;
}

.dashboard-slot,
.dashboard-slot-stats {
    margin: 0.5rem;
    padding: 1rem;
    width: 120px;
    height: 50px;
}

.dashboard-slot-stats {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}

.price,
.currency-class {
    text-align: end;
    font-size: 10px;
    color: var(--text-color-alt);
}

.currency {
    text-align: end;
}

.procentage {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
}

.one-quarter {
    height: var(--ch-mini);
}

#hydro-logo {
    height: 14px;
    width: auto;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

    .dashboard-slot,
    .dashboard-slot-stats {
        margin: 0.5rem;
        padding: 1rem;
        width: 70px;
        height: 50px;
    }

    .currency,
    .procentage {
        font-size: 12px;
    }

}
</style>
