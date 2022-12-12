<script>
import item from "../../json/techlinks.json"
import { priceData } from "$lib/stores/price";
import { stakedData } from "$lib/stores/staked"
</script>

<div class="one-quarter" id="animated-border">

    <div>

    <div class="hydroswap">

        <div class="row">
        <div class="hydro-dashboard">

            <div class="dashboard-slot" id="animated-border">
                <div class="price">Price</div>
                <div class="currency">{$priceData.hydroPrice}
                    
                </div>
                <div class="currency-class">USD</div>
            </div>

            <div class="dashboard-slot" id="animated-border">
                <div class="price">Marketcap</div>
                <div class="currency">{$priceData.hydroMC}
                    
                </div>
                <div class="currency-class">USD</div>
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
        </div>

            <div class="hydro-dashboard">

            <div class="dashboard-slot" id="animated-border">
                <div class="price">Vol 24/7</div>
                <div class="currency">{$priceData.hydroVolume}
                    
                </div>
                <div class="currency-class">USD</div>
            </div>

            <div class="dashboard-slot" id="animated-border">
                <div class="price">Staked</div>
                <div class="currency">{$stakedData.hydroStaked}
                    
                </div>
                <div class="currency-class">HYDRO</div>
            </div>

            <div class="dashboard-slot" id="animated-border">
                <div class="price">Circ Supply</div>
                <div class="currency">{$priceData.hydroSupply}
                    
                </div>
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
  </div>
    <div class="cg-credit"><a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">Data from Coingecko & Bscscan</a></div>
</div>

<style lang="scss">

    .one-quarter{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between !important;
    }

    .row{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

.currency-class {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--fs-xsmall);
    margin-left: 0.3rem;
    color: var(--text-color-alt);
}

.hydroswap{
    display: flex;
    flex-direction: row;
    margin-top: 4rem;
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
    height: 40px;
    padding: 1rem;
    margin: 0.5rem;
}

.dashboard-slot-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-size: 30px;
}

.cg-credit {
    display: flex !important;
    width: 100%;
    justify-content: flex-end;
    margin-right: 1rem !important;
    margin-bottom: 0.5rem;
    font-size: var(--fs-mini);
}

.cg-credit a{
    color: rgba(255, 255, 255, 0.44) !important;
}

.cg-credit a:hover{
    color: rgb(255, 255, 255) !important;
    cursor: pointer;
}

.price {
    display: flex;
    justify-content: flex-start;
    font-size: 9px;
}

.currency-class{
    display: flex;
    justify-content: flex-end;
    font-size: 9px;
    
}

.currency, .procentage {
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
    height: 32px;
}

.button-row {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 0;
}

#hydroswap-buttons {
    width: 110px;
    margin: 0.8rem;
}
</style>
