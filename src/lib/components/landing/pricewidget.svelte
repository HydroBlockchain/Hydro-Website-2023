<script>
    import { priceData, stakedData } from "$lib/stores/store";
    import HydroLogo from "$lib/images/logo/hydro-logo.svg"
</script>
<div class="one-quarter" id="card-background">
    <div class="dashboards">
        <div class="hydro-dashboard">
            <div class="dashboard-slot-alt" id="card-background-alt">
                <img src={HydroLogo} alt="hydro-logo" id="hydro-logo" />
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
</div>
<style>
    .one-quarter {
    height: var(--ch-mini);
    }

    .dashboard-slot-alt {
    display: flex;
    justify-content: center;
    align-items: center;
    }

    #hydro-logo {
    height: 14px;
    width: auto;
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {

    .dashboards{
    display: flex;
    flex-direction: row;
    }

    .one-quarter {
    height: auto;
    }

    .hydro-dashboard {
    flex-direction: column !important;
    }

    }

    @media only screen and (max-width: 768px) {

    .dashboards{
    margin: 1rem;
    }

    .hydro-dashboard {
    flex-direction: row ;
    }

    }

    @media only screen and (max-width: 992px) {

    .hydro{
    margin: 1rem;
    }

    .hydro-dashboard {
    flex-direction: row;
    }

    }
</style>