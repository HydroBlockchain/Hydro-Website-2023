<script>
//exchanges
import coinex from "$lib/images/exchanges/coinex.svg";
import bithumb from "$lib/images/exchanges/bithumb.svg";
import mercatox from "$lib/images/exchanges/mercatox.svg";
import latoken from "$lib/images/exchanges/latoken.svg";
import buyucoin from "$lib/images/exchanges/buyucoin.svg";
import item from "../../json/landinglinks.json"
</script>
<div class="half" id="animated-border" style="margin-right:0px;margin-left:15px;">
    <div class="title">Exchanges</div>
    <div class="exchanges">
        <a href="{item[4].link}" target="_blank" rel="noopener noreferrer">
            <img src={coinex} alt="Coinex" id="exchange"/></a>
        <a href="{item[5].link}" target="_blank" rel="noopener noreferrer">
            <img src={bithumb} alt="Bithumb" id="exchange"/></a>
        <a href="{item[6].link}" target="_blank" rel="noopener noreferrer">
            <img src={mercatox} alt="Mercatox" id="exchange"/></a>
    </div>
    <div class="exchanges">
        <a href="{item[7].link}" target="_blank" rel="noopener noreferrer">
            <img src={latoken} alt="LAtoken" id="exchange"/></a>
        <a href="{item[8].link}" target="_blank" rel="noopener noreferrer">
            <img src={buyucoin} alt="BuyUcoin" id="exchange"/></a>
    </div>
</div>

<style>
.half {
    height: var(--container-height-mini);
}

.exchanges {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#exchange {
	width: 128px;
	margin: 20px;
}

a:hover {
    opacity: 0.5;
}
</style>
