<script>
  import { hydroInfo } from "$lib/store/store";
  import { priceData } from "$lib/store/store";
</script>

<div class="one-quarter" id="card-background">
  <div class="dashboards">
    <div class="hydro-dashboard">
      <div class="dashboard-slot" id="card-background-alt">
        <div class="price">Price</div>
        <div class="currency">
          {$priceData.hydroPrice.toFixed(7)}
          <div class="currency-class">USD</div>
        </div>
      </div>
      <div class="dashboard-slot" id="card-background-alt">
        <div class="price">Change 24/7</div>
        <div class="procentage">
          {#if $priceData.hydroChange > 0}
            <div class="green">{$priceData.hydroChange} %</div>
          {:else if 0 > $priceData.hydroChange}
            <div class="red">{$priceData.hydroChange} %</div>
          {:else}
            {$priceData.hydroChange}
          {/if}
        </div>
      </div>
      <div class="dashboard-slot" id="card-background-alt">
        <div class="price">Volume 24/7</div>
        <div class="currency">
          {$priceData.hydroVolume}
          <div class="currency-class">USD</div>
        </div>
      </div>
    </div>
    <div class="hydro-dashboard">
      <div class="dashboard-slot" id="card-background-alt">
        <div class="price">Marketcap</div>
        <div class="currency">
          {$priceData.hydroMC}
          <div class="currency-class">USD</div>
        </div>
      </div>
      <div class="dashboard-slot" id="card-background-alt">
        <div class="price">Marketcap</div>
        <div class="currency">
          {$hydroInfo.marketcapRank}
          <div class="currency-class">Rank</div>
        </div>
      </div>
      <div class="dashboard-slot" id="card-background-alt">
        <div class="price">Coingecko</div>
        <div class="currency">
          {$hydroInfo.coingeckoRank}
          <div class="currency-class">Rank</div>
        </div>
      </div>
    </div>
    <div class="hydro-dashboard">
      <div class="dashboard-slot" id="card-background-alt">
        <div class="price">Twitter</div>
        <div class="currency">
          {$hydroInfo.twitterFollowers}
          <div class="currency-class">Followers</div>
        </div>
      </div>
      <div class="dashboard-slot" id="card-background-alt">
        <div class="price">Reddit</div>
        <div class="currency">
          {$hydroInfo.redditSubscribers}
          <div class="currency-class">Subs</div>
        </div>
      </div>
      <div class="dashboard-slot" id="card-background-alt">
        <div class="price">Telegram</div>
        <div class="currency">
          {$hydroInfo.telegramUsers}
          <div class="currency-class">Users</div>
        </div>
      </div>
    </div>
  </div>
  <div class="cg-credit">
    <a
      href="https://www.coingecko.com/"
      target="_blank"
      rel="noopener noreferrer">Data from Coingecko</a
    >
  </div>
</div>

<style>
  .one-quarter {
    height: 25rem;
    margin-right: 0;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .dashboards {
    display: flex;
    flex-direction: row;
    margin-top: 3rem;
  }

  .hydro-dashboard {
    flex-direction: column;
  }

  @media only screen and (max-width: 600px) {
    .price,
    .currency-class {
      font-size: 8px;
    }
    .currency,
    .procentage {
      font-size: 12px;
    }
    .one-quarter {
      height: auto;
      margin-left: 0 !important;
    }

    .dashboards {
      flex-direction: column;
      margin: 1rem !important;
    }

    .hydro-dashboard {
      flex-direction: row !important;
      margin-top: 0rem !important;
      margin-bottom: 0rem !important;
    }

    .dashboard-slot {
      margin: 0.3rem !important;
      width: 60px !important;
      height: 40px !important;
    }
  }

  @media only screen and (max-width: 768px) {
    .one-quarter {
      height: auto;
      margin-left: 0 !important;
    }

    .dashboards {
      margin-top: 0rem;
      margin-left: 1rem;
      margin-right: 1rem;
    }

    .hydro-dashboard {
      flex-direction: column;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  @media only screen and (max-width: 992px) {
    .one-quarter {
      height: auto;
      margin-left: 0 !important;
    }

    .dashboards {
      margin-top: 0rem;
      margin-left: 1rem;
      margin-right: 1rem;
    }

    .hydro-dashboard {
      flex-direction: column;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  @media only screen and (max-width: 1200px) {
    .one-quarter {
      height: auto;
      margin-left: 0 !important;
    }

    .dashboards {
      margin-top: 0rem;
      margin-left: 1rem;
      margin-right: 1rem;
    }

    .hydro-dashboard {
      flex-direction: column;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
</style>
