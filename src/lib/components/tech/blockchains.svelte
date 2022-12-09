<script>
//chains
import eth from "$lib/images/blockchains/eth.svg";
import bsc from "$lib/images/blockchains/bsc.svg";
import matic from "$lib/images/blockchains/matic.svg";
import csc from "$lib/images/blockchains/csc.svg";
import movr from "$lib/images/blockchains/movr.svg";
</script>

<div class="half" id="animated-border">
    <div class="chains">
        <a href="https://add-hydro-eth.netlify.app/" target="_blank" rel="noopener noreferrer" ><img src={eth} alt="eth-logo" id="chain"/></a>
        <a href="https://add-hydro.netlify.app/" target="_blank" rel="noopener noreferrer" ><img src={bsc} alt="bsc-logo" id="chain"/></a>
        <a href="https://polygonscan.com/address/0x946112efab61c3636cbd52de2e1392d7a75a6f01" target="_blank" rel="noopener noreferrer" ><img src={matic} alt="matic-logo" id="chain"/></a>
        <a href="https://www.coinex.net/address/0x946112efaB61C3636CBD52DE2E1392D7A75A6f01#code" target="_blank" rel="noopener noreferrer" ><img src={csc} alt="csc-logo" id="chain"/></a>
        <a href="https://moonriver.moonscan.io/address/0x946112efab61c3636cbd52de2e1392d7a75a6f01#code" target="_blank" rel="noopener noreferrer" ><img src={movr} alt="csc-logo" id="chain"/></a>
    </div>
    <div class="container-footer"><p style="font-size:12px;">Choose a Network to add Hydro Tokens on by clicking a logo above!</p></div>
</div>

<style>
.chains {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 2rem;
}

.chains a {
    margin: 20px;
}
</style>
