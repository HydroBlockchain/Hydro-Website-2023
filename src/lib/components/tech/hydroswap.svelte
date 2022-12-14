<script>
import item from "../../json/techlinks.json"
import {
    priceData
} from "$lib/stores/price";
import {
    stakedData
} from "$lib/stores/staked"
import {
    githubData
} from "$lib/stores/github";
</script>

<div class="one-quarter" id="animated-border">

    <div>

        <div class="hydroswap">

            <div class="row">
                <div class="hydro-dashboard">

                    <div class="dashboard-slot" id="animated-border">
                        <div class="price">Price</div>
                        <div class="procentage">{$priceData.hydroPrice} USD </div>
                    </div>

                    <div class="dashboard-slot" id="animated-border">
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

                    <div class="dashboard-slot" id="animated-border">
                        <div class="price">Staked</div>
                        <div class="procentage">{$stakedData.hydroStaked} HYDRO</div>
                    </div>

                </div>

                <div class="hydro-dashboard">

                    <div class="dashboard-slot-alt-logo" id="animated-border">HYDROSWAP</div>
                    <a href="{$githubData.urlSwap}">
                        <div class="dashboard-slot-alt" id="animated-border">

                            <div class="price">Latest Commit</div>

                            <div class="github-text" id="commit-message">{$githubData.commitMsgSwap}</div>

                            <div class="github-info-inner"><img src={$githubData.avatarSwap} alt="github avatar">{$githubData.usernameSwap}</div>

                        </div>

                    </a>

                </div>
            </div>

            <div class="button-row">
                <a href="{item[1].link}" target="_blank" rel="noopener noreferrer">
                    <div class="button" id="hydroswap-buttons">Swap</div></a>
                <a href="{item[2].link}" target="_blank" rel="noopener noreferrer">
                    <div class="button" id="hydroswap-buttons">Stake</div></a>
                <a href="{item[3].link}" target="_blank" rel="noopener noreferrer">
                    <div class="button" id="hydroswap-buttons">Bridge</div></a>
            </div>
        </div>
    </div>
    <div class="cg-credit"><a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">Data from Coingecko & Bscscan</a></div>
</div>

<style>

.dashboard-slot-alt:hover {
    background-color: var(--button-hover) !important;
    opacity: 1 !important;
}

#commit-message {
    font-size: 10px;
    word-wrap: break-word;
    justify-content: center;
    align-items: center;
}

.github-info-inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
    justify-content: flex-end;
    font-size: 8px;
}

.github-info-inner img {
    width: 32px;
    height: 32px;
    border-radius: 7px;
}

.one-quarter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between !important;
}

.row {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.hydroswap {
    display: flex;
    flex-direction: row;
    margin-top: 4rem;
    width: 100%;
}

.hydro-dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
}

.dashboard-slot {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    height: 45px;
    padding: 1rem;
    margin: 0.5rem;
}

.dashboard-slot-alt {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    height: 140px;
    padding: 1rem;
    margin: 0.5rem;
}

.dashboard-slot-alt-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 200px;
    height: 45px;
    padding: 1rem;
    margin: 0.5rem;
    font-size: 28px !important;
    font-family: 'Montserrat', sans-serif;
}

.cg-credit {
    display: flex !important;
    width: 100%;
    justify-content: flex-end;
    margin-right: 1rem !important;
    margin-bottom: 0.5rem;
    font-size: var(--fs-mini);
}

.cg-credit a {
    color: rgba(255, 255, 255, 0.44) !important;
}

.cg-credit a:hover {
    color: rgb(255, 255, 255) !important;
    cursor: pointer;
}

.price {
    display: flex;
    justify-content: flex-start;
    font-size: 9px;
}

.procentage {
    display: flex;
    justify-content: flex-end;
}

.one-quarter {
    margin-right: 0px;
    margin-left: 15px;
    flex-direction: column;
    justify-content: space-between;
}

.hydroswap {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.button-row {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 0;
}

.button:hover {
    background-color: var(--button-hover);
    opacity: 1 !important;
}

#hydroswap-buttons {
    width: 110px;
    margin: 0.8rem;
}
</style>
