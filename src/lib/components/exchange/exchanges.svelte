<script>
//exchanges
import item from "$lib/json/landinglinks.json"
import Coinex from "$lib/images/exchanges/coinex.svg"
import Bithumb from "$lib/images/exchanges/bithumb.svg"
import Mercatox from "$lib/images/exchanges/mercatox.svg"
import Latoken from "$lib/images/exchanges/latoken.svg"
import Buyucoin from "$lib/images/exchanges/buyucoin.svg"
</script>
<div class="half" id="card-background">
    <div class="exchanges">
        <a href="{item[4].link}" target="_blank" rel="noopener noreferrer">
            <img src={Coinex} alt="Coinex" id="exchange" />
        </a>
        <a href="{item[5].link}" target="_blank" rel="noopener noreferrer">
            <img src={Bithumb} alt="Bithumb" id="exchange" />
        </a>
    </div>
    <div class="exchanges">
        <a href="{item[6].link}" target="_blank" rel="noopener noreferrer">
            <img src={Mercatox} alt="Mercatox" id="exchange" />
        </a>
        <a href="{item[8].link}" target="_blank" rel="noopener noreferrer">
            <img src={Buyucoin} alt="Buyucoin" id="exchange" />
        </a>
    </div>
</div>

<style>
    .half {
        height: var(--ch-mini);
        margin-right: 0px;
        margin-left: 15px;
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

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (max-width: 600px) {
        .half {
            height: auto;
            padding-top: 1rem;
            padding-bottom: 1rem;
            margin-right: 0px !important;
            margin-left: 0px !important;

        }

        #exchange {
            width: 70px;
            height: auto;
        }
    }
</style>