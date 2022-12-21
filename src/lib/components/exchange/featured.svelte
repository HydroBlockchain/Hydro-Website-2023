<script>
import item from "$lib/json/landinglinks.json"
import Coinmarketcap from "$lib/images/featured/coinmarketcap.svg"
import Cointelegraph from "$lib/images/featured/cointelegraph.svg"
import Coingecko from "$lib/images/featured/coingecko.svg"
</script>
<div class="full" id="card-background">
    <div class="partners">
        <a href="{item[9].link}" target="_blank" rel="noopener noreferrer">
            <img src={Coinmarketcap} alt="Coinmarketcap" id="featured-on"/>
        </a>
        <a href="{item[10].link}" target="_blank" rel="noopener noreferrer">
            <img src={Cointelegraph} alt="Cointelegraph" id="featured-on"/>
        </a>
        <a href="{item[11].link}" target="_blank" rel="noopener noreferrer">
            <img src={Coingecko} alt="Coingecko" id="featured-on"/>
        </a>
    </div>
</div>

<style>
.full {
    height: var(--ch-mini);
}

.partners {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#featured-on {
	width: 256px;
	margin: 20px;
}

a:hover {
    opacity: 0.5;
}

@media only screen and (max-width: 600px) {
    .full  {
    height: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-right: 0px !important;
    margin-left: 0px !important;
}

.partners {
    display: flex;
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
}

#featured-on {
	width: 150px;
    height: auto;
}
}

@media only screen and (max-width: 768px) {
    .full  {
    height: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-right: 0px !important;
    margin-left: 0px !important;
}

.partners {
    display: flex;
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
}

#featured-on {
	width: 150px;
    height: auto;
}
}

@media only screen and (max-width: 992px) {
    .full  {
    height: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-right: 0px !important;
    margin-left: 0px !important;
}

.partners {
    display: flex;
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
}

#featured-on {
	width: 250px;
    height: auto;
}
}
</style>
