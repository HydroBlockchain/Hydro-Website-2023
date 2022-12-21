<script>
    import { hydroInfo } from "$lib/stores/store";
    import { priceData } from "$lib/stores/store";
    import { stakedData } from "$lib/stores/store";
    import hydroDrop from "$lib/images/logo/hydro-drop.svg";
    import hydroLogo from "$lib/images/logo/hydro-logo.svg";
</script>

<div class="one-quarter" id="card-background">
    <div class="column" id="b">
        <img src={hydroDrop} alt="Hydro-Drop" id="hydro-drop" />
        <img src={hydroLogo} alt="Hydro-Logo" id="hydro-logo" />
    </div>
    Price: {$priceData.hydroPrice} USD<br />
    Change 24/7:
    {#if $priceData.hydroChange > 0}
        <div class="green">{$priceData.hydroChange} %</div>
    {:else if 0 > $priceData.hydroChange}
        <div class="red">{$priceData.hydroChange} %</div>
    {:else}
        {$priceData.hydroChange}
    {/if}
    <br />
    Volume 24/7: {$priceData.hydroVolume} USD <br />
    Hydro Staked: {$stakedData.hydroStaked} <br />
    Marketcap: {$priceData.hydroMC} <br />
    Markertcap rank: {$hydroInfo.marketcapRank} <br />
    Coingecko Rank: {$hydroInfo.coingeckoRank} <br />
    Twitter Followers: {$hydroInfo.twitterFollowers} <br />
    Reddit Subs: {$hydroInfo.redditSubscribers} <br />
    Telegram Users: {$hydroInfo.telegramUsers}
</div>

<style>
    .one-quarter {
        height: 25rem;
        margin-right: 0;
        margin-left: 2rem;
    }

    #b {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    #hydro-drop {
        width: 60px;
        height: auto;
    }

    #hydro-logo {
        width: 100px;
        height: auto;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }
</style>
