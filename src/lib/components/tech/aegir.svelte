<script>
import ethLogo from "$lib/images/logo/ethereum.svg";
import bscLogo from "$lib/images/logo/bsc.svg";
import polyLogo from "$lib/images/logo/polygon.svg";
import cscLogo from "$lib/images/logo/coinex.svg";
import btcLogo from "$lib/images/logo/bitcoin.svg"
import appstoreLogo from "$lib/images/icons/appstore.svg";
import playstoreLogo from "$lib/images/icons/playstore.svg";
import item from "../../json/techlinks.json"
import { githubData } from "$lib/stores/store";
</script>

<div class="half" id="card-background">
    <div class="button-row-small">
        <div class="support-button" id="card-background-alt"><img src={btcLogo} alt="bitcoin" id="coin-ticker-logo" /></div>
        <div class="support-button" id="card-background-alt"><img src={ethLogo} alt="ethereum" id="coin-ticker-logo" /></div>
        <div class="support-button" id="card-background-alt"><img src={bscLogo} alt="BSC" id="coin-ticker-logo" /></div>
        <div class="support-button" id="card-background-alt"><img src={polyLogo} alt="polygon" id="coin-ticker-logo" /></div>
        <div class="support-button" id="card-background-alt"><img src={cscLogo} alt="csc" id="coin-ticker-logo" /></div>
        <div class="support-button" id="card-background-alt">
            <svg id="coin-ticker-logo" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_1_63)">
                <circle cx="512" cy="512" r="512" fill="var(--drop-color-2)"/>
                </g>
                <path d="M512 857.08C653.38 857.08 768 736.93 768 588.72C768 505.82 707.937 393.523 587.81 251.83C572.443 233.703 547.173 205.427 512 167C474.94 207.54 448.38 237.343 432.32 256.41C314.773 395.943 256 506.713 256 588.72C256 736.93 370.62 857.08 512 857.08Z" fill="url(#paint0_linear_1_63)"/>
                <path d="M512 855.73C618.035 855.73 704 765.617 704 654.46C704 592.285 658.952 508.062 568.857 401.792C557.333 388.197 538.38 366.99 512 338.17C484.205 368.575 464.285 390.927 452.24 405.227C364.08 509.877 320 592.955 320 654.46C320 765.617 405.965 855.73 512 855.73Z" fill="#244A93" fill-opacity="0.5"/>
                <path d="M512 855.21C582.69 855.21 640 795.135 640 721.03C640 679.58 609.968 623.432 549.905 552.585C542.222 543.522 529.587 529.383 512 510.17C493.47 530.44 480.19 545.342 472.16 554.875C413.387 624.642 384 680.027 384 721.03C384 795.135 441.31 855.21 512 855.21Z" fill="url(#paint1_linear_1_63)" fill-opacity="0.75"/>
                <defs>
                <filter id="filter0_b_1_63" x="-100" y="-100" width="1224" height="1224" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="50"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_63"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_63" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_1_63" x1="512" y1="167" x2="512" y2="857.08" gradientUnits="userSpaceOnUse">
                <stop stop-color="#614CB5"/>
                <stop offset="1" stop-color="#3F70EE"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1_63" x1="512" y1="510.17" x2="512" y2="855.17" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8FAFFF"/>
                <stop offset="1" stop-color="#3D7DDD"/>
                </linearGradient>
                </defs>
                </svg>    
        </div>
    </div>
    <div class="hydro-dashboard">
        <div class="dashboard-slot-alt" id="card-background-alt">
            <div class="chain-alt">
                The Aegir Wallet is our open source multicoin and NFT wallet.
                Aegir encrypts all keys locally, no information is sent to any server.
                <br><br>
                Remember to back up your Mnemonic seed! Keep your assets safe with Aegir.
            </div>
        </div>
        <a href="{$githubData.urlAegir}" >
            <div class="dashboard-slot" id="card-background">
                <div class="price">Latest Commit</div>
                <div class="github-text" id="commit-message">{$githubData.commitMsgAegir}</div>
                <div class="github-info-inner"><img src={$githubData.avatarAegir}
                        alt="github avatar">{$githubData.usernameAegir}</div>
            </div>
        </a>
    </div>
    <div class="hydro-dashboard" id="buttons-downloads">
        <div class="aegir-logo" id="card-background-alt">ÆGIR.</div>
        <a href="{item[9].link}" target="_blank" rel="noopener noreferrer">
            <div class="button" id="aegir-button-play">
                <img src={playstoreLogo} alt="playstore" id="button-logo">
                <div class="download-text">Get it on
                    <div class="download-text-inner">Google Play</div>
                </div>
            </div>
        </a>
        <a href="{item[10].link}" target="_blank" rel="noopener noreferrer">
            <div class="button" id="aegir-button-ios">
                <img src={appstoreLogo} alt="appstore" id="button-logo" />
                <div class="download-text">Download on the
                    <div class="download-text-inner">Appstore</div>
                </div>
            </div>
        </a>
    </div>
</div>

<style>
    .half {
        flex-direction: column;
        margin-right: 0px;
        margin-left: 15px;
    }

    .button-row-small {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-bottom: 0.5rem;
        width: 600px;
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

    .dashboard-slot {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0.5rem;
    }

    .dashboard-slot:hover {
        background-color: var(--button-hover) !important;
        opacity: 1 !important;
    }

    .price {
        display: flex;
        justify-content: flex-start;
        font-size: 9px;
        color: var(--text-color-alt);
    }

    #commit-message {
        font-size: 12px;
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
        font-size: 10px;
    }

    .github-info-inner img {
        width: 40px;
        height: 40px;
        border-radius: var(--border-radius);
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

    #card-background-alt {
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

    .download-text {
        display: flex;
        flex-direction: column;
        text-align: start;
        font-size: 9px;
    }

    .download-text-inner {
        font-size: var(--fs-small);
    }

    .button {
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

    #aegir-button-ios {
        font-family: 'Open Sans', sans-serif;
    }


    #aegir-button-play {
        font-family: 'Roboto', sans-serif;
    }

    #button-logo {
        height: 25px;
        width: auto;
    }

    @media only screen and (max-width: 600px) {
        .half {
            height: auto !important;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        #coin-ticker-logo {
            height: auto;
            width: 28px;
        }

        .chain-alt {
            font-size: 14px;
        }

        .button-row-small {
            width: 280px !important;
            height: auto !important;
            margin: 0.2rem !important;
        }

        .hydro-dashboard {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 300px !important;
        }

        .dashboard-slot,
        .dashboard-slot-alt {
            justify-content: space-between;
            text-align: start;
            display: flex;
            margin: 0.5rem;
            padding: 1rem;
            width: 280px !important;
            height: 150px;
        }

        .dashboard-slot-alt {
            height: 200px !important;
        }

        .dashboard-slot {
            height: 75px !important;
        }

        .support-button {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0.25rem !important;
            padding: 0.5rem;
            width: 50px;
            height: 30px;
        }

        .aegir-logo {
            display: none;
            width: 316px;
            margin-left: 0rem;
            margin-top: 0.5rem;
            margin-bottom: 1rem;
        }

        #buttons-downloads {
            margin-top: 0.5rem;
            margin-right: 0rem !important;
            flex-direction: row;
            justify-content: space-between !important;
            align-items: center;
            width: 100%;
        }

        .apple-button,
        .playstore-button {
            margin-left: 0;
        }
    }

    @media only screen and (max-width: 768px) {
        .half {
            height: auto !important;
            flex-direction: column;
            padding-bottom: 1rem;
            padding-top: 1rem;
        }


    }

    @media only screen and (max-width: 992px) {
        .half {
            height: auto !important;
            flex-direction: column;
            padding-bottom: 1rem;
            padding-top: 1rem;
        }



    }

    @media only screen and (max-width: 1200px) {
        .half {
            height: auto !important;
            flex-direction: column;
            padding-bottom: 1rem;
            padding-top: 1rem;
        }



    }
</style>