<script>
import hydroDrop from "$lib/images/logo/hydro-drop.svg";
import ethLogo from "$lib/images/logo/ethereum.svg";
import bscLogo from "$lib/images/logo/bsc.svg";
import polyLogo from "$lib/images/logo/polygon.svg";
import cscLogo from "$lib/images/logo/coinex.svg";
import movrLogo from "$lib/images/logo/moonriver.svg";
import { priceData } from "$lib/stores/store";
//Coin names
let coinNameHydro = "HYDRO";
let coinNameETH = "ETH";
let coinNameBSC = "BNB";
let coinNamePOLY = "POLYGON";
let coinNameCSC = "CET";
let coinNameMOVR = "MOVR";
</script>
<section>
    <div class="banner" id="card-background">
        <div class="slider">
            
            <div class="slide-track">
                <a href="https://www.coingecko.com/en/coins/hydro" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="hydro-slot">
                            <div class="coin-img"><img src={hydroDrop} alt="hydro-drop" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameHydro)}</div>
                                <div class="banner-slot" id="price">Price: {$priceData.hydroPrice} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
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
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/ethereum" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="eth-slot">
                            <div class="coin-img"><img src={ethLogo} alt="ethereum" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameETH)}</div>
                                <div class="banner-slot" id="price">Price: {$priceData.ethPrice} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if $priceData.ethChange > 0}
                                    <div class="green"> {$priceData.ethChange} %</div>
                                    {:else if 0 > $priceData.ethChange}
                                    <div class="red"> {$priceData.ethChange} %</div>
                                    {:else}
                                    {$priceData.ethChange}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/binancecoin" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="bsc-slot">
                            <div class="coin-img"><img src={bscLogo} alt="BSC" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameBSC)}</div>
                                <div class="banner-slot" id="price">Price: {$priceData.bscPrice} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if $priceData.bscChange > 0}
                                    <div class="green"> {$priceData.bscChange} %</div>
                                    {:else if 0 > $priceData.bscChange}
                                    <div class="red"> {$priceData.bscChange} %</div>
                                    {:else}
                                    {$priceData.bscChange}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/polygon" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="poly-slot">
                            <div class="coin-img"><img src={polyLogo} alt="polygon" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNamePOLY)}</div>
                                <div class="banner-slot" id="price">Price: {$priceData.polyPrice} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if $priceData.polyChange > 0}
                                    <div class="green"> {$priceData.polyChange} %</div>
                                    {:else if 0 > $priceData.polyChange}
                                    <div class="red"> {$priceData.polyChange} %</div>
                                    {:else}
                                    {$priceData.polyChange}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/coinex-token" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="csc-slot">
                            <div class="coin-img"><img src={cscLogo} alt="csc" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameCSC)}</div>
                                <div class="banner-slot" id="price">Price: {$priceData.cscPrice} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if $priceData.cscChange > 0}
                                    <div class="green"> {$priceData.cscChange} %</div>
                                    {:else if 0 > $priceData.cscChange}
                                    <div class="red"> {$priceData.cscChange} %</div>
                                    {:else}
                                    {$priceData.cscChange}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/moonriver" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="movr-slot">
                            <div class="coin-img"><img src={movrLogo} alt="moonriver" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameMOVR)}</div>
                                <div class="banner-slot" id="price">Price: {$priceData.movrPrice} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if $priceData.movrChange > 0}
                                    <div class="green"> {$priceData.movrChange} %</div>
                                    {:else if 0 > $priceData.movrChange}
                                    <div class="red"> {$priceData.movrChange} %</div>
                                    {:else}
                                    {$priceData.movrChange}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/hydro" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="hydro-slot">
                            <div class="coin-img"><img src={hydroDrop} alt="hydro-drop" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameHydro)}</div>
                                <div class="banner-slot" id="price">Price: {$priceData.hydroPrice} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
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
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/ethereum" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="eth-slot">
                            <div class="coin-img"><img src={ethLogo} alt="ethereum" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameETH)}</div>
                                <div class="banner-slot" id="price">Price: {$priceData.ethPrice} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if $priceData.ethChange > 0}
                                    <div class="green"> {$priceData.ethChange} %</div>
                                    {:else if 0 > $priceData.ethChange}
                                    <div class="red"> {$priceData.ethChange} %</div>
                                    {:else}
                                    {$priceData.ethChange}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/binancecoin" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="bsc-slot">
                            <div class="coin-img"><img src={bscLogo} alt="BSC" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameBSC)}</div>
                                <div class="banner-slot" id="price">Price: {$priceData.bscPrice} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if $priceData.bscChange > 0}
                                    <div class="green"> {$priceData.bscChange} %</div>
                                    {:else if 0 > $priceData.bscChange}
                                    <div class="red"> {$priceData.bscChange} %</div>
                                    {:else}
                                    {$priceData.bscChange}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/polygon" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="poly-slot">
                            <div class="coin-img"><img src={polyLogo} alt="polygon" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNamePOLY)}</div>
                                <div class="banner-slot" id="price">Price: {$priceData.polyPrice} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if $priceData.polyChange > 0}
                                    <div class="green"> {$priceData.polyChange} %</div>
                                    {:else if 0 > $priceData.polyChange}
                                    <div class="red"> {$priceData.polyChange} %</div>
                                    {:else}
                                    {$priceData.polyChange}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/coinex-token" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="csc-slot">
                            <div class="coin-img"><img src={cscLogo} alt="csc" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameCSC)}</div>
                                <div class="banner-slot" id="price">Price: {$priceData.cscPrice} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if $priceData.cscChange > 0}
                                    <div class="green"> {$priceData.cscChange} %</div>
                                    {:else if 0 > $priceData.cscChange}
                                    <div class="red"> {$priceData.cscChange} %</div>
                                    {:else}
                                    {$priceData.cscChange}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/moonriver" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="movr-slot">
                            <div class="coin-img"><img src={movrLogo} alt="moonriver" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameMOVR)}</div>
                                <div class="banner-slot" id="price">Price: {$priceData.movrPrice} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if $priceData.movrChange > 0}
                                    <div class="green"> {$priceData.movrChange} %</div>
                                    {:else if 0 > $priceData.movrChange}
                                    <div class="red"> {$priceData.movrChange} %</div>
                                    {:else}
                                    {$priceData.movrChange}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/hydro" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="hydro-slot">
                            <div class="coin-img"><img src={hydroDrop} alt="hydro-drop" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameHydro)}</div>
                                <div class="banner-slot" id="price">Price: {$priceData.hydroPrice} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
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
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/ethereum" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="eth-slot">
                            <div class="coin-img"><img src={ethLogo} alt="ethereum" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameETH)}</div>
                                <div class="banner-slot" id="price">Price: {$priceData.ethPrice} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if $priceData.ethChange > 0}
                                    <div class="green"> {$priceData.ethChange} %</div>
                                    {:else if 0 > $priceData.ethChange}
                                    <div class="red"> {$priceData.ethChange} %</div>
                                    {:else}
                                    {$priceData.ethChange}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/binancecoin" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="bsc-slot">
                            <div class="coin-img"><img src={bscLogo} alt="BSC" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNameBSC)}</div>
                                <div class="banner-slot" id="price">Price: {$priceData.bscPrice} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if $priceData.bscChange > 0}
                                    <div class="green"> {$priceData.bscChange} %</div>
                                    {:else if 0 > $priceData.bscChange}
                                    <div class="red"> {$priceData.bscChange} %</div>
                                    {:else}
                                    {$priceData.bscChange}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://www.coingecko.com/en/coins/polygon" target="_blank" rel="noopener noreferrer">
                    <div class="slide">
                        <div class="poly-slot">
                            <div class="coin-img"><img src={polyLogo} alt="polygon" id="coin-ticker-logo"/></div>
                            <div class="coin-data">
                                <div class="banner-slot" id="name">{(coinNamePOLY)}</div>
                                <div class="banner-slot" id="price">Price: {$priceData.polyPrice} USD</div>
                                <div class="banner-slot" id="volume">
                                    Change:
                                    {#if $priceData.polyChange > 0}
                                    <div class="green"> {$priceData.polyChange} %</div>
                                    {:else if 0 > $priceData.polyChange}
                                    <div class="red"> {$priceData.polyChange} %</div>
                                    {:else}
                                    {$priceData.polyChange}
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div></a>
            </div>
        </div>

    </div>

</section>

<style lang="scss">
.banner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: var(--cw-desktop);
    height: 60px;
    border-radius: var(--border-radius);
    color: var(--text-color);
    position: relative;
    z-index: 1;
    background: inherit;
    overflow: hidden;
    margin-bottom: 20px;
    margin-top: 20px;
}

.hydro-slot,
.eth-slot,
.bsc-slot,
.poly-slot,
.csc-slot,
.movr-slot {
    display: flex;
    width: 250px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.banner-slot {
    margin-left: 1rem;
    margin-right: 1rem;
    color: var(--text-color);
    font-size: 11px;
}

#volume {
    display: flex;
    flex-direction: row;
}

#name {
    display: flex;
    justify-content: flex-start;
    font-size: 11px;
}

#coin-ticker-logo {
    width: 32px;
    height: 32px;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-250px * 6))
    }
}

.slider {
    height: 60px;
    display: flex;
    overflow: hidden;
    position: relative;
    width: var(--cw-desktop);
}

.slider::before,
.slider::after {
    content: "";
    height: 60px;
    position: absolute;
    width: 200px;
    z-index: 2;
}

.slider::after {
    transform: rotateZ(180deg);
}

.slide-track {
    animation: scroll 40s linear infinite;
    display: flex;
    width: calc(250px * 16);
}

.slide {
    display: flex;
    justify-content: center;
    height: 60px;
    width: 250px;
}

section {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
