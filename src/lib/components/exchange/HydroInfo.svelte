<script>
import {
    hydroInfo
} from "$lib/stores/store";
import {
    priceData
} from "$lib/stores/store";
</script>

<div class="one-quarter" id="card-background">

    <div class="dashboards">

        <div class="hydro-dashboard">

            <div class="dashboard-slot" id="card-background-alt">
                <div class="price">Price</div>
                <div class="currency">{$priceData.hydroPrice.toFixed(7)}<div class="currency-class">USD</div></div>
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

            <div class="dashboard-slot" id="card-background-alt">
                <div class="price">Volume 24/7</div>
                <div class="currency">{$priceData.hydroVolume}<div class="currency-class">USD</div></div>
            </div>

        </div>

        <div class="hydro-dashboard">

            <div class="dashboard-slot" id="card-background-alt">
                <div class="price">Marketcap</div>
                <div class="currency">{$priceData.hydroMC}<div class="currency-class">USD</div></div>
            </div>

            <div class="dashboard-slot" id="card-background-alt">
                <div class="price">Marketcap Rank</div>
                <div class="currency">{$hydroInfo.marketcapRank}<div class="currency-class">Rank</div></div>
            </div>

            <div class="dashboard-slot" id="card-background-alt">
                <div class="price">Coingecko Rank</div>
                <div class="currency">{$hydroInfo.coingeckoRank}<div class="currency-class">Rank</div></div>
            </div>

        </div>

        <div class="hydro-dashboard">

            <div class="dashboard-slot" id="card-background-alt">
                <div class="price">Twitter Followers</div>
                <div class="currency">{$hydroInfo.twitterFollowers}<div class="currency-class">Followers</div></div>
            </div>

            <div class="dashboard-slot" id="card-background-alt">
                <div class="price">Reddit Subs</div>
                <div class="currency">{$hydroInfo.redditSubscribers}<div class="currency-class">Subs</div></div>
            </div>

            <div class="dashboard-slot" id="card-background-alt">
                <div class="price">Telegram Users</div>
                <div class="currency">{$hydroInfo.telegramUsers}<div class="currency-class">Users</div></div>
            </div>

        </div>

    </div>
</div>

<style>
.one-quarter {
    height: 25rem;
    margin-right: 0;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
}

.dashboards {
    display: flex;
    flex-direction: row;
}

#hydro-logo {
    width: 120px;
    height: auto;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
}

.hydro-dashboard {
    display: flex;
    flex-direction: column;
}

.dashboard-slot {
    margin: 0.5rem;
    padding: 1rem;
    width: 120px;
    height: 40px;
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

@media only screen and (max-width: 600px) {

    .dashboard-slot {
        width: auto !important;
        height: 50px;
    }

    .one-quarter {
        height: auto;
        flex-direction: row;
        margin-left: 0 !important;
    }

    .hydro-dashboard {
        flex-direction: column;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .dashboard-slot {
        margin: 0.5rem;
        padding: 1rem;
        width: 130px;
        height: 50px;
    }

    .currency-class,
    .price {
        font-size: 10px;
    }

    #hydro-logo {
        display: none;
    }

}

@media only screen and (max-width: 768px) {

    .dashboard-slot {
        width: auto !important;
        height: 50px;
    }

    .one-quarter {
        height: auto;
        flex-direction: row;
        margin-left: 0 !important;
    }

    .hydro-dashboard {
        flex-direction: column;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .dashboard-slot {
        margin: 0.5rem;
        padding: 1rem;
        width: 130px;
        height: 50px;
    }

    .currency-class,
    .price {
        font-size: 10px;
    }

    #hydro-logo {
        display: none;
    }

}

@media only screen and (max-width: 992px) {

    .dashboard-slot {
        width: auto !important;
        height: 50px;
    }

    .one-quarter {
        height: auto;
        flex-direction: row;
        margin-left: 0 !important;
    }

    .hydro-dashboard {
        flex-direction: column;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .dashboard-slot {
        margin: 0.5rem;
        padding: 1rem;
        width: 130px;
        height: 50px;
    }

    .currency-class,
    .price {
        font-size: 10px;
    }

    #hydro-logo {
        display: none;
    }

}

@media only screen and (max-width: 1200px) {

    .dashboard-slot {
        width: auto !important;
        height: 50px;
    }

    .one-quarter {
        height: auto;
        flex-direction: row;
        margin-left: 0 !important;
    }

    .hydro-dashboard {
        flex-direction: column;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .dashboard-slot {
        margin: 0.5rem;
        padding: 1rem;
        width: 130px;
        height: 50px;
    }

    .currency-class,
    .price {
        font-size: 10px;
    }

    #hydro-logo {
        display: none;
    }

}
</style>
