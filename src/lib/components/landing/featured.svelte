<script>
import cointelegraph from "$lib/images/featured-on/cointelegraph.svg";
import coinmarketcap from "$lib/images/featured-on/coinmarketcap.svg";
import coingecko from "$lib/images/featured-on/coingecko.svg";
import item from "../../json/landinglinks.json"
</script>
<div class="full" id="animated-border">
    <div class="title">Featured on</div>
    <div class="partners">
        <a href="{item[9].link}" target="_blank" rel="noopener noreferrer">
            <img src={coinmarketcap} alt="cmc" id="featured-on"/></a>
        <a href="{item[10].link}" target="_blank" rel="noopener noreferrer">
            <img src={cointelegraph} alt="cointelegraph" id="featured-on"/></a>
        <a href="{item[11].link}" target="_blank" rel="noopener noreferrer">
            <img src={coingecko} alt="cg" id="featured-on"/></a>
    </div>
</div>

<style>
.title {
    font-size: var(--font-size-large);
    color: var(--title-color);
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
</style>
