<script>
import swap from "$lib/images/logos/Hydro-Swap.svg";
import item from "../../json/techlinks.json"
import { priceData } from "$lib/stores/store";
</script>

<div class="one-quarter" id="animated-border">
    <img src={swap} alt="swap-logo" id="hydroswap-logo"/>
    <div class="hydroswap">
        <div class="hydro-dashboard">

            <div class="dashboard-slot" id="price">
                <div class="price">Price</div>
                <div class="currency">{$priceData.hydroPrice}
                    <div class="currency-class">USD</div>
                </div>
            </div>

            <div class="dashboard-slot" id="marketcap">
                <div class="price">Marketcap</div>
                <div class="currency">{$priceData.hydroMC}
                    <div class="currency-class">USD</div>
                </div>
            </div>

            <div class="dashboard-slot" id="volume">
                <div class="price">Vol 24/7</div>
                <div class="currency">{$priceData.hydroVolume}
                    <div class="currency-class">USD</div>
                </div>
            </div>

            <div class="dashboard-slot" id="staked">
                <div class="price">Staked</div>
                <div class="currency">{$priceData.hydroStaked}
                    <div class="currency-class">HYDRO</div>
                </div>
            </div>

            <div class="dashboard-slot" id="supply">
                <div class="price">Circulating Supply</div>
                <div class="currency">{$priceData.hydroSupply}
                    <div class="currency-class">HYDRO</div>
                </div>
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
    <div class="cg-credit"><a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">Data from Coingecko & Bscscan</a></div>
</div>

<style>
/* Hydroswap */

.currency-class {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--fs-xsmall);
    margin-left: 0.3rem;
    color: var(--text-color-alt);
}

#staked {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--text-color);
}

.hydro-dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    width: 450px;
    color: var(--text-color);
}

.dashboard-slot {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0.5rem;
    justify-content: space-between;
}

.cg-credit {
    display: flex !important;
    width: 100%;
    justify-content: flex-end;
    margin-right: 1rem !important;
    margin-bottom: 0.5rem;
    font-size: var(--fs-mini);
}

.price {
    display: flex;
    justify-content: flex-start;
}

.currency {
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

#hydroswap-logo {
    margin-top: 5rem;
    margin-bottom: 0rem;
    height: 35px;
}

.button-row {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
}

#hydroswap-buttons {
    width: 100px;
    margin: 1rem;
}
</style>
