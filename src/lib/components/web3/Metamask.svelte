<script>
import ethLogo from "$lib/images/logo/ethereum.svg";
import bscLogo from "$lib/images/logo/bsc.svg";
import polyLogo from "$lib/images/logo/polygon.svg";
import cscLogo from "$lib/images/logo/coinex.svg";
import movrLogo from "$lib/images/logo/moonriver.svg";
</script>
<div class="metamask-wrapper">
    <div class="metamask-container">
        <div class="metamask-notice">
            <h1>Hydro Token Tool</h1> <br> <br>
            <h2>
                The Hydro Token Tool Can Add Hydro Tokens on all Hydros supported networks. <br>
                In order to use it you have to first download Metamask. <br>
                Once you have, head on back here to add the Hydro Token automatically. </h2>
            <h3>
                The Hydro token tool only reads public data and asks for permission to add the Hydro Token Smart contract.
                No information is stored or sent to any servers</h3></div>

        <div class="metamask-hydro-chains-container">

            <div class="metamask-hydro-chains">
                <div class="hydro-chain"><img src={ethLogo} alt="bitcoin" id="metamask-network-icon" /></div>
                <div class="hydro-chain"><img src={bscLogo} alt="bitcoin" id="metamask-network-icon" /></div>
                <div class="hydro-chain"><img src={polyLogo} alt="bitcoin" id="metamask-network-icon" /></div>
                <div class="metamask-hydro-chains">
                    <div class="hydro-chain"><img src={movrLogo} alt="bitcoin" id="metamask-network-icon" /></div>
                    <div class="hydro-chain"><img src={cscLogo} alt="bitcoin" id="metamask-network-icon" /></div>

                </div>
            </div>
        </div>

    </div>
    <a href="https://metamask.io" target="_blank" rel="noopener noreferrer">Download Metamask</a>
</div>

<style>
.metamask-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.metamask-container {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: 1rem;
}

.metamask-notice {
    width: auto;
    height: 250px;
    padding: 1rem;
    background-color: var(--button-color);
    backdrop-filter: blur(10px);
    border-radius: var(--border-radius);
    font-size: 14px;
}

.metamask-notice h1 {
    font-size: 20px;
    margin-block-start: 0em;
    margin-block-end: 0em;
}

.metamask-notice h2 {
    margin-block-start: 0em;
    margin-block-end: 0em;
    font-size: 14px;
}

.metamask-notice h3 {
    text-align: end;
    font-size: 10px;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-top: 2.5rem;
    color: var(--text-color-alt);
}

#metamask-network-icon {
    width: 25px;
    height: 25px;
}

.metamask-hydro-chains {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.metamask-hydro-chains-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 300px;
    margin-right: 1rem;
}

.hydro-chain {
    background: var(--button-color);
    padding: 0.7rem;
    margin: 0.2rem;
    border-radius: var(--border-radius);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;

}

a {
    background: var(--button-color);
    backdrop-filter: blur(10px);
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
}

a:hover {
    background-color: var(--button-hover) !important;
}

@media only screen and (max-width: 600px) {

    .half{
        padding-top: 0rem;
        padding-bottom: 0rem;
    }

    .metamask-notice {
    width: auto;
    height: auto;
}

a {
    margin-top: 0rem;
    margin-bottom: 0rem;
    width: 250px;
}

.hydro-chain {
    margin-top: 1;
    width: 50px;
    padding: 0.3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

}

.metamask-container {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    margin: 1rem;
}

.metamask-hydro-chains {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.metamask-hydro-chains-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: auto;
    margin-right: 0rem;
}


}
</style>
