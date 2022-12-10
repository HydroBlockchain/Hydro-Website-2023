<script>
//chains
import eth from "$lib/images/blockchains/eth.svg";
import bsc from "$lib/images/blockchains/bsc.svg";
import matic from "$lib/images/blockchains/matic.svg";
import csc from "$lib/images/blockchains/csc.svg";
import movr from "$lib/images/blockchains/movr.svg";
import item from "../../json/techlinks.json"
</script>

<div class="half" id="animated-border">
    <div class="chains">
        <a href="{item[4].link}" target="_blank" rel="noopener noreferrer" ><img src={eth} alt="eth-logo" id="chain"/></a>
        <a href="{item[5].link}" target="_blank" rel="noopener noreferrer" ><img src={bsc} alt="bsc-logo" id="chain"/></a>
        <a href="{item[6].link}" target="_blank" rel="noopener noreferrer" ><img src={matic} alt="matic-logo" id="chain"/></a>
        <a href="{item[7].link}" target="_blank" rel="noopener noreferrer" ><img src={csc} alt="csc-logo" id="chain"/></a>
        <a href="{item[8].link}" target="_blank" rel="noopener noreferrer" ><img src={movr} alt="movr-logo" id="chain"/></a>
    </div>
    <div class="choose-network">Choose a Network to add Hydro Tokens on by clicking a logo above!</div>
</div>

<style>
.chains {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 2rem;
}

#chain {
    height: 50px;
}

.chains a {
    margin: 20px;
}

.choose-network {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
    font-size: var(--fs-small);
	color: var(--text-color);
}
</style>
