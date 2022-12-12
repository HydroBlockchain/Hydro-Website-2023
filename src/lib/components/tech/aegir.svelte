<script>
import hydroDrop from "$lib/images/logo/hydro-drop.svg";
import ethLogo from "$lib/images/logo/ethereum.svg";
import bscLogo from "$lib/images/logo/bsc.svg";
import polyLogo from "$lib/images/logo/polygon.svg";
import cscLogo from "$lib/images/logo/coinex.svg";
import btcLogo from "$lib/images/logo/bitcoin.svg"
import movrLogo from "$lib/images/logo/moonriver.svg";
import item from "../../json/techlinks.json"
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
                Meet Aegir - Our open source wallet for Web3 assets. <br>
                Aegir Wallet supports a wide array of currencys such as Bitcoin, Ethereum, Binance Smart Chain
                and off course the Hydro Token on all its deployed networks. <br>
                Your keys your Crypto!
            </div>
        </div>

        <div class="dashboard-slot" id="animated-border">
            <div class="chain">
                more info on aegir
                
            </div>
        </div>

    </div>

    <div class="hydro-dashboard" id="buttons-downloads">
        <a href="{item[9].link}" target="_blank" rel="noopener noreferrer" >
            <div class="playstore-button" id="aegir-button-play">
                <svg id="playstore-logo" viewBox="0 0 233 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M179.41 87.8117C149.671 71.1782 101.939 44.4687 27.9026 3.01408C22.9111 -0.282426 17.1681 -0.714427 12.2061 0.965076L139.231 127.99L179.41 87.8117Z" fill="#32BBFF" class="svg-elem-1"></path>
                    <path d="M12.2065 0.965088C11.2765 1.28009 10.3715 1.66009 9.50602 2.11909C4.02651 5.0831 0 10.7866 0 18.0001V237.981C0 245.194 4.02601 250.898 9.50602 253.861C10.37 254.32 11.2745 254.701 12.2035 255.018L139.232 127.99L12.2065 0.965088Z" fill="#32BBFF" class="svg-elem-2"></path>
                    <path d="M139.231 127.99L12.2031 255.018C17.1666 256.71 22.9096 256.311 27.9027 252.966C99.7018 212.761 146.896 186.368 176.979 169.593C177.816 169.123 178.637 168.663 179.448 168.207L139.231 127.99Z" fill="#32BBFF" class="svg-elem-3"></path>
                    <path d="M0 127.99V237.98C0 245.194 4.02601 250.897 9.50602 253.861C10.37 254.319 11.2745 254.701 12.2035 255.018L139.232 127.99H0Z" fill="#2C9FD9" class="svg-elem-4"></path>
                    <path d="M27.9029 3.01396C21.9754 -0.900047 14.9854 -0.788547 9.50586 2.11946L137.304 129.918L179.41 87.8116C149.671 71.1781 101.939 44.4685 27.9029 3.01396Z" fill="#29CC5E" class="svg-elem-5"></path>
                    <path d="M137.305 126.063L9.50586 253.861C14.9859 256.768 21.9754 256.936 27.9029 252.966C99.702 212.761 146.896 186.368 176.979 169.593C177.817 169.123 178.637 168.663 179.448 168.207L137.305 126.063Z" fill="#D93F21" class="svg-elem-6"></path>
                    <path d="M232.451 127.99C232.451 121.895 229.375 115.744 223.28 112.333C223.28 112.333 211.88 105.973 176.939 86.4287L135.377 127.99L176.979 169.593C211.537 150.189 223.279 143.647 223.279 143.647C229.375 140.236 232.451 134.085 232.451 127.99Z" fill="#FFD500" class="svg-elem-7"></path>
                    <path d="M223.28 143.647C229.375 140.236 232.451 134.085 232.451 127.99H135.377L176.979 169.593C211.538 150.19 223.28 143.647 223.28 143.647Z" fill="#FFAA00" class="svg-elem-8"></path>
                </svg>
                <div class="download-text">Get it on
                    <div class="download-text-inner">Google Play</div>
                </div>
            </div></a>
        <a href="{item[10].link}" target="_blank" rel="noopener noreferrer" >
            <div class="apple-button" id="aegir-button-ios">
                <svg id="apple-logo" viewBox="0 0 281 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M103.126 162.178L174.666 32.9661C175.646 31.1948 176.635 29.4305 177.519 27.5994C178.321 25.937 179.002 24.2582 179.446 22.4447C180.386 18.6293 180.134 14.6523 178.673 11.0101C177.224 7.38667 174.673 4.36265 171.413 2.39933C168.181 0.442768 164.377 -0.351861 160.631 0.146828C156.876 0.650245 153.448 2.4122 150.746 5.16695C149.466 6.47583 148.41 7.93106 147.431 9.48697C146.354 11.1998 145.382 12.9746 144.399 14.7459L139.875 22.9165L135.35 14.7459C134.37 12.9723 133.398 11.1986 132.321 9.48697C131.341 7.93106 130.285 6.47583 129.002 5.16695C126.304 2.4122 122.876 0.651415 119.121 0.144486C115.375 -0.352934 111.572 0.442487 108.339 2.39933C105.079 4.36265 102.527 7.38667 101.077 11.0101C99.618 14.6511 99.3663 18.6293 100.304 22.4447C100.749 24.2593 101.43 25.9382 102.233 27.5994C103.115 29.4305 104.104 31.1936 105.087 32.9661L119.697 59.358L62.7702 162.178H23.7601C21.798 162.178 19.837 162.17 17.876 162.286C16.0941 162.391 14.3591 162.618 12.6311 163.122C8.99243 164.182 5.81505 166.397 3.51924 169.537C1.2363 172.657 0 176.479 0 180.401C0 184.325 1.23747 188.141 3.51924 191.261C5.81388 194.403 8.99243 196.618 12.6299 197.677C14.3591 198.18 16.0953 198.406 17.876 198.514C19.837 198.631 21.798 198.62 23.7601 198.62H177.096C177.296 198.202 177.787 197.105 178.267 195.462C183.126 178.895 171.06 162.178 154.446 162.178H103.126ZM36.445 204.587L27.1705 222.157C26.2128 223.975 25.2458 225.786 24.3794 227.666C23.595 229.372 22.9277 231.096 22.4934 232.957C21.5743 236.875 21.819 240.958 23.2485 244.699C24.6674 248.416 27.1658 251.524 30.3549 253.536C33.5475 255.55 37.2517 256.365 40.9067 255.849C44.5817 255.334 47.937 253.524 50.5805 250.695C51.8356 249.351 52.8681 247.857 53.8258 246.261C54.8818 244.502 55.8324 242.68 56.7936 240.862L70.2442 215.379C69.1952 213.634 59.1538 198.164 36.445 204.587ZM277.454 169.399C275.196 166.34 271.99 164.114 268.334 163.069C266.606 162.571 264.868 162.348 263.086 162.244C261.121 162.128 259.161 162.137 257.197 162.137H218.319L166.934 70.6205C159.143 78.8215 155.658 88.006 154.322 96.3486C152.384 108.446 154.752 120.857 160.714 131.475L222.46 241.446C223.443 243.195 224.415 244.947 225.493 246.638C226.473 248.172 227.529 249.609 228.814 250.9C231.518 253.62 234.946 255.359 238.705 255.855C242.442 256.351 246.233 255.569 249.496 253.631C252.755 251.696 255.312 248.71 256.766 245.135C258.225 241.539 258.475 237.613 257.536 233.848C257.09 232.058 256.41 230.4 255.605 228.76C254.723 226.954 253.734 225.213 252.75 223.464L238.514 198.103H257.199C259.163 198.103 261.122 198.114 263.087 197.998C264.869 197.892 266.607 197.67 268.335 197.172C271.991 196.127 275.198 193.901 277.455 190.842C279.747 187.738 280.982 183.98 280.977 180.121C280.981 176.262 279.746 172.504 277.454 169.399V169.399Z" fill="var(--text-color)" class="svg-elem-1"></path>
                </svg>
                <div class="download-text">Download on the
                    <div class="download-text-inner">Appstore</div>
                </div>
            </div></a>
    </div>
</div>

<style lang="scss">

#animated-border{
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

#apple-logo,
#playstore-logo {
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
    align-items: center;
    text-align: start;
    display: flex;
    margin: 0.5rem;
    padding: 1rem;
    width: 30%;
    height: 150px;
}

.dashboard-slot-alt {
    justify-content: center;
    flex-direction: column;
    width: 70%;
}

#chain {
    font-size: 10px;
}
</style>
