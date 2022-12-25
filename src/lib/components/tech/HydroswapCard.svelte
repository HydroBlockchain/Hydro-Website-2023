<script>
    import item from "../../json/techlinks.json"
    import { priceData, stakedData, githubData } from "$lib/stores/store";
    </script>
    
    <div class="one-quarter" id="card-background">
        <div class="center">
            <div class="hydroswap">
                <div class="row">
                    <div class="hydro-dashboard">
                        <div class="hydroswap-slot" id="card-background-alt">
                            <div class="price">Price</div>
                            <div class="procentage">{$priceData.hydroPrice}</div>
                            <div class="currency">USD</div>
                        </div>
                        <div class="hydroswap-slot" id="card-background-alt">
                            <div class="price">Change 24/7</div>
                            <div class="procentage">
                                {#if $priceData.hydroChange > 0}
                                <div class="green"> {$priceData.hydroChange} %</div>
                                {:else if 0 > $priceData.hydroChange}
                                <div class="red"> {$priceData.hydroChange} %</div>
                                {:else}
                                {$priceData.hydroChange}
                                {/if}
                            </div>
                        </div>
                        <div class="hydroswap-slot" id="card-background-alt">
                            <div class="price">Staked</div>
                            <div class="procentage">{$stakedData.hydroStaked}</div>
                            <div class="currency">HYDRO</div>
                        </div>
                    </div>
                    <div class="hydro-dashboard">
                        <a href="{$githubData.urlSwap}">
                            <div class="hydroswap-slot-alt" id="card-background-alt">
                                <div class="hydroswap-logo">HYDROSWAP</div>
                                <div class="price">Latest Commit</div>
                                <div class="github-text" id="commit-message">{$githubData.commitMsgSwap}</div>
                                <div class="github-info-inner"><img src={$githubData.avatarSwap} alt="github avatar">{$githubData.usernameSwap}</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="button-row">
                    <a data-sveltekit-preload-data="hover" href="{item[1].link}" target="_blank" rel="noopener noreferrer">
                        <div class="button" id="hydroswap-buttons">Swap</div></a>
                    <a data-sveltekit-preload-data="hover" href="{item[2].link}" target="_blank" rel="noopener noreferrer">
                        <div class="button" id="hydroswap-buttons">Stake</div></a>
                    <a data-sveltekit-preload-data="hover" href="{item[3].link}" target="_blank" rel="noopener noreferrer">
                        <div class="button" id="hydroswap-buttons">Bridge</div></a>
                </div>
            </div>
        </div>
        <div class="cg-credit"><a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">Data from Coingecko</a></div>
    </div>
    
    <style>
        .one-quarter {
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-between !important;
       }
    
       .hydroswap {
       display: flex;
       flex-direction: row;
       margin-top: 2rem;
       width: 100%;
       }
    
       .row {
       display: flex;
       flex-direction: row;
       justify-content: center;
       }
    
       .hydro-dashboard {
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       color: var(--text-color);
       }
    
       .hydroswap-slot {
       display: flex;
       flex-direction: column;
       width: 200px;
       padding: 1rem;
       margin: 0.5rem;
       }
    
       .hydroswap-slot-alt {
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       width: 200px;
       height: 245px;
       padding: 1rem;
       margin: 0.5rem;
       }
    
       .hydroswap-logo {
       font-size: 28px !important;
       font-family: 'Montserrat', sans-serif;
       margin: 0.1rem;
       }
    
       .hydroswap-slot-alt:hover {
       background-color: var(--button-hover) !important;
       opacity: 1 !important;
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
    
       .currency {
       display: flex;
       justify-content: flex-end;
       font-size: 9px;
       color: var(--text-color-alt);
       }
    
       .one-quarter {
       margin-right: 0px;
       margin-left: 15px;
       flex-direction: column;
       justify-content: space-between;
       }
    
       .hydroswap {
       display: flex;
       flex-direction: column;
       justify-content: center;
       }
    
       .button-row {
       justify-content: center;
       align-items: center;
       width: 100%;
       margin-top: 0;
       }
    
       .button:hover {
       background-color: var(--button-hover);
       opacity: 1 !important;
       }
    
       #hydroswap-buttons {
       width: 110px;
       margin: 0.8rem;
       }
    
       /* Responsive */
       @media only screen and (max-width: 1200px) {
    
       .one-quarter {
       height: auto;
       margin-right: 0px;
       margin-left: 0px;
       }
    
       .cg-credit {
       margin-right: 3rem;
       }
    
       }
    
       @media only screen and (max-width: 992px) {
    
       .hydroswap {
       margin-top: 1rem;
       }
    
       .one-quarter {
       height: auto;
       margin-right: 0px;
       margin-left: 0px;
       }
    
       .cg-credit {
       margin-right: 3rem;
       }
    
       }
    
       @media only screen and (max-width: 768px) {
    
       .one-quarter {
       height: auto;
       margin-right: 0px;
       margin-left: 0px;
       }
    
       .cg-credit {
       margin-right: 3rem;
       }
    
       }
    
       @media only screen and (max-width: 600px) {
    
       .one-quarter {
       height: auto;
       margin-right: 0px;
       margin-left: 0px;
       }
    
       .row {
       flex-direction: column-reverse !important;
       }
    
       .hydroswap-slot {
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       width: 280px;
       padding: 1rem;
       margin: 0.5rem;
       }
    
       .hydroswap-slot-alt {
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       width: 280px;
       height: auto;
       padding: 1rem;
       margin: 0.5rem;
       }
    
       .button-row {
       margin-top: 1rem;
       }
    
       #hydroswap-buttons {
       width: auto;
       padding-left: 1.5rem;
       padding-right: 1.5rem;
       margin: 0.2rem;
    
       }
    
       .cg-credit {
       margin-top: 1rem;
       margin-bottom: 1rem;
       margin-right: 1rem;
       }
    
       }
    </style>