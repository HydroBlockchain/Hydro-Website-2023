<script>
import hydroDrop from "$lib/images/logo/hydro-drop.svg";
import ethLogo from "$lib/images/logo/ethereum.svg";
import bscLogo from "$lib/images/logo/bsc.svg";
import polyLogo from "$lib/images/logo/polygon.svg";
import cscLogo from "$lib/images/logo/coinex.svg";
import btcLogo from "$lib/images/logo/bitcoin.svg"
import appstoreLogo from "$lib/images/icons/appstore.svg";
import playstoreLogo from "$lib/images/icons/playstore.svg";
import item from "../../json/techlinks.json"
import {
    onMount
} from "svelte";
let username
let commitMsg
let avatar
let url
onMount(() => {
    //Fetches the last commit on Aegir Wallet
    fetch("https://api.github.com/repos/HydroBlockchain/aegir-wallet/commits/main")
        .then((response) => response.json())
        .then((data) => {
            username = data.author.login
            commitMsg = data.commit.message
            avatar = data.author.avatar_url
            url = data.html_url
        });
})
</script>

<div class="half" id="animated-border">

    <div class="button-row-small">
        <div class="support-button" id="animated-border"><img src={btcLogo} alt="bitcoin" id="coin-ticker-logo"/></div>
        <div class="support-button" id="animated-border"><img src={ethLogo} alt="ethereum" id="coin-ticker-logo"/></div>
        <div class="support-button" id="animated-border"><img src={bscLogo} alt="BSC" id="coin-ticker-logo"/></div>
        <div class="support-button" id="animated-border"><img src={polyLogo} alt="polygon" id="coin-ticker-logo"/></div>
        <div class="support-button" id="animated-border"><img src={cscLogo} alt="csc" id="coin-ticker-logo"/></div>
        <div class="support-button" id="animated-border"><img src={hydroDrop} alt="hydro-drop" id="coin-ticker-logo"/></div>
    </div>

    <div class="hydro-dashboard">

        <div class="dashboard-slot-alt" id="animated-border">
            <div class="chain-alt">
                Info on Aegir
            </div>
        </div>

        <a href="{url}" id="github-link">

            <div class="dashboard-slot" id="animated-border">

                <div class="price">Latest Commit</div>

                <div class="github-text" id="commit-message">{commitMsg}</div>

                <div class="github-info-inner"><img src={avatar} alt="github avatar">{username}</div>

            </div>

        </a>

    </div>

    <div class="hydro-dashboard" id="buttons-downloads">
        <div class="aegir-logo" id="animated-border">ÆGIR.</div>
        <a href="{item[9].link}" target="_blank" rel="noopener noreferrer" >
            <div class="playstore-button" id="aegir-button-play">
                <img src={playstoreLogo} alt="playstore"id="button-logo">

                <div class="download-text">Get it on
                    <div class="download-text-inner">Google Play</div>
                </div>
            </div></a>
        <a href="{item[10].link}" target="_blank" rel="noopener noreferrer" >
            <div class="apple-button" id="aegir-button-ios">
                <img src={appstoreLogo} alt="appstore" id="button-logo"/>
                <div class="download-text">Download on the
                    <div class="download-text-inner">Appstore</div>
                </div>
            </div></a>
    </div>
</div>

<style lang="scss">
.dashboard-slot {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0.5rem;
}

.price {
    display: flex;
    justify-content: flex-start;
    font-size: 9px;
}

.dashboard-slot:hover {
    background-color: var(--button-hover) !important;
    opacity: 1 !important;
}

#commit-message {
    font-size: 10px;
    word-wrap: break-word;
    justify-content: center;
    align-items: center;

}

.github-info-inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
    justify-content: flex-end;
    font-size: 8px;
}

.github-info-inner img {
    width: 32px;
    height: 32px;
    border-radius: 7px;
}

.github-info-inner {
    font-size: 8px;
}

.github-info-inner img {
    width: 32px;
    height: 32px;
    border-radius: 7px;
}

.aegir-logo {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: var(--border-radius);
    background-color: var(--button-color);
    color: var(--text-color);
    font-size: var(--fs-xsmall);
    width: 60%;
    height: 45px;
    margin-left: 1rem;
    font-size: 32px !important;
    font-family: 'Montserrat', sans-serif;
}

#animated-border {
    font-size: 14px;
}

#coin-ticker-logo {
    width: 32px;
    height: 32px;
}

#buttons-downloads {
    margin-top: 0.5rem;
    margin-right: 0.8rem;
    justify-content: flex-end;
    align-items: flex-end;
    width: 600px;
}

.support-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    padding: 0.5rem;
    width: 70px;
    height: 30px;
}

.button-row-small {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 0.5rem;
    width: 600px;
}

.tagline {
    font-size: 12px;
    margin-top: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
}

.half {
    flex-direction: column;
    margin-right: 0px;
    margin-left: 15px;

}

.download-text {
    display: flex;
    flex-direction: column;
    text-align: start;
    font-size: 9px;
}

.download-text-inner {
    font-size: var(--fs-small);
}

.apple-button,
.playstore-button {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: var(--border-radius);
    background-color: var(--button-color);
    color: var(--text-color);
    font-size: var(--fs-xsmall);
    width: 130px;
    height: 45px;
    margin-left: 1rem;
}

.apple-button {
    font-family: 'Open Sans', sans-serif;
}

.apple-button:hover {
    background-color: var(--button-hover);
    opacity: 1 !important;
}

.playstore-button:hover {
    background-color: var(--button-hover);
    opacity: 1 !important;
}

a:hover {
    opacity: 1 !important;
}

.playstore-button {
    font-family: 'Roboto', sans-serif;
}

#button-logo {
    height: 25px;
    width: auto;
}

.products {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#aegir-logo {
    height: 40px;
    margin: 10px;
}

.hydro-dashboard {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 600px;
}

.dashboard-slot,
.dashboard-slot-alt {
    justify-content: space-between;
    text-align: start;
    display: flex;
    margin: 0.5rem;
    padding: 1rem;
    width: 150px;
    height: 150px;
}

.dashboard-slot-alt {
    align-items: flex-start;
    flex-direction: column;
    width: 70%;
}

.dashboard-slot-commit {
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
}

#chain {
    font-size: 8px;
}
</style>
