<script>
    import ethLogo from "$lib/images/logo/ethereum.svg";
    import bscLogo from "$lib/images/logo/bsc.svg";
    import polyLogo from "$lib/images/logo/polygon.svg";
    import cscLogo from "$lib/images/logo/coinex.svg";
    import movrLogo from "$lib/images/logo/moonriver.svg";
    import { priceData } from "$lib/stores/store";
    //Coin names
    let coinNameHydro = "HYDRO";
    let coinNameETH = "ETH";
    let coinNameBSC = "BNB";
    let coinNamePOLY = "POLYGON";
    let coinNameCSC = "CET";
    let coinNameMOVR = "MOVR";
    </script>
    <section>
        <div class="banner" id="card-background">
            <div class="slider">
                <div class="slide-track">
                    <a href="https://www.coingecko.com/en/coins/hydro" target="_blank" rel="noopener noreferrer">
                        <div class="slide">
                            <div class="hydro-slot">
                                <div class="coin-img">
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
                                <div class="coin-data">
                                    <div class="banner-slot" id="name">{(coinNameHydro)}</div>
                                    <div class="banner-slot" id="price">Price: {$priceData.hydroPrice} USD</div>
                                    <div class="banner-slot" id="volume">
                                        Change:
                                        {#if $priceData.hydroChange > 0}
                                        <div class="green"> {$priceData.hydroChange} %</div>
                                        {:else if 0 > $priceData.hydroChange}
                                        <div class="red"> {$priceData.hydroChange} %</div>
                                        {:else}
                                        {$priceData.hydroChange}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        </div></a>
                    <a href="https://www.coingecko.com/en/coins/ethereum" target="_blank" rel="noopener noreferrer">
                        <div class="slide">
                            <div class="eth-slot">
                                <div class="coin-img"><img src={ethLogo} alt="ethereum" id="coin-ticker-logo"/></div>
                                <div class="coin-data">
                                    <div class="banner-slot" id="name">{(coinNameETH)}</div>
                                    <div class="banner-slot" id="price">Price: {$priceData.ethPrice} USD</div>
                                    <div class="banner-slot" id="volume">
                                        Change:
                                        {#if $priceData.ethChange > 0}
                                        <div class="green"> {$priceData.ethChange} %</div>
                                        {:else if 0 > $priceData.ethChange}
                                        <div class="red"> {$priceData.ethChange} %</div>
                                        {:else}
                                        {$priceData.ethChange}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        </div></a>
                    <a href="https://www.coingecko.com/en/coins/binancecoin" target="_blank" rel="noopener noreferrer">
                        <div class="slide">
                            <div class="bsc-slot">
                                <div class="coin-img"><img src={bscLogo} alt="BSC" id="coin-ticker-logo"/></div>
                                <div class="coin-data">
                                    <div class="banner-slot" id="name">{(coinNameBSC)}</div>
                                    <div class="banner-slot" id="price">Price: {$priceData.bscPrice} USD</div>
                                    <div class="banner-slot" id="volume">
                                        Change:
                                        {#if $priceData.bscChange > 0}
                                        <div class="green"> {$priceData.bscChange} %</div>
                                        {:else if 0 > $priceData.bscChange}
                                        <div class="red"> {$priceData.bscChange} %</div>
                                        {:else}
                                        {$priceData.bscChange}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        </div></a>
                    <a href="https://www.coingecko.com/en/coins/polygon" target="_blank" rel="noopener noreferrer">
                        <div class="slide">
                            <div class="poly-slot">
                                <div class="coin-img"><img src={polyLogo} alt="polygon" id="coin-ticker-logo"/></div>
                                <div class="coin-data">
                                    <div class="banner-slot" id="name">{(coinNamePOLY)}</div>
                                    <div class="banner-slot" id="price">Price: {$priceData.polyPrice} USD</div>
                                    <div class="banner-slot" id="volume">
                                        Change:
                                        {#if $priceData.polyChange > 0}
                                        <div class="green"> {$priceData.polyChange} %</div>
                                        {:else if 0 > $priceData.polyChange}
                                        <div class="red"> {$priceData.polyChange} %</div>
                                        {:else}
                                        {$priceData.polyChange}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        </div></a>
                    <a href="https://www.coingecko.com/en/coins/coinex-token" target="_blank" rel="noopener noreferrer">
                        <div class="slide">
                            <div class="csc-slot">
                                <div class="coin-img"><img src={cscLogo} alt="csc" id="coin-ticker-logo"/></div>
                                <div class="coin-data">
                                    <div class="banner-slot" id="name">{(coinNameCSC)}</div>
                                    <div class="banner-slot" id="price">Price: {$priceData.cscPrice} USD</div>
                                    <div class="banner-slot" id="volume">
                                        Change:
                                        {#if $priceData.cscChange > 0}
                                        <div class="green"> {$priceData.cscChange} %</div>
                                        {:else if 0 > $priceData.cscChange}
                                        <div class="red"> {$priceData.cscChange} %</div>
                                        {:else}
                                        {$priceData.cscChange}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        </div></a>
                    <a href="https://www.coingecko.com/en/coins/moonriver" target="_blank" rel="noopener noreferrer">
                        <div class="slide">
                            <div class="movr-slot">
                                <div class="coin-img"><img src={movrLogo} alt="moonriver" id="coin-ticker-logo"/></div>
                                <div class="coin-data">
                                    <div class="banner-slot" id="name">{(coinNameMOVR)}</div>
                                    <div class="banner-slot" id="price">Price: {$priceData.movrPrice} USD</div>
                                    <div class="banner-slot" id="volume">
                                        Change:
                                        {#if $priceData.movrChange > 0}
                                        <div class="green"> {$priceData.movrChange} %</div>
                                        {:else if 0 > $priceData.movrChange}
                                        <div class="red"> {$priceData.movrChange} %</div>
                                        {:else}
                                        {$priceData.movrChange}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        </div></a>
                    <a href="https://www.coingecko.com/en/coins/hydro" target="_blank" rel="noopener noreferrer">
                        <div class="slide">
                            <div class="hydro-slot">
                                <div class="coin-img">
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
                                <div class="coin-data">
                                    <div class="banner-slot" id="name">{(coinNameHydro)}</div>
                                    <div class="banner-slot" id="price">Price: {$priceData.hydroPrice} USD</div>
                                    <div class="banner-slot" id="volume">
                                        Change:
                                        {#if $priceData.hydroChange > 0}
                                        <div class="green"> {$priceData.hydroChange} %</div>
                                        {:else if 0 > $priceData.hydroChange}
                                        <div class="red"> {$priceData.hydroChange} %</div>
                                        {:else}
                                        {$priceData.hydroChange}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        </div></a>
                    <a href="https://www.coingecko.com/en/coins/ethereum" target="_blank" rel="noopener noreferrer">
                        <div class="slide">
                            <div class="eth-slot">
                                <div class="coin-img"><img src={ethLogo} alt="ethereum" id="coin-ticker-logo"/></div>
                                <div class="coin-data">
                                    <div class="banner-slot" id="name">{(coinNameETH)}</div>
                                    <div class="banner-slot" id="price">Price: {$priceData.ethPrice} USD</div>
                                    <div class="banner-slot" id="volume">
                                        Change:
                                        {#if $priceData.ethChange > 0}
                                        <div class="green"> {$priceData.ethChange} %</div>
                                        {:else if 0 > $priceData.ethChange}
                                        <div class="red"> {$priceData.ethChange} %</div>
                                        {:else}
                                        {$priceData.ethChange}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        </div></a>
                    <a href="https://www.coingecko.com/en/coins/binancecoin" target="_blank" rel="noopener noreferrer">
                        <div class="slide">
                            <div class="bsc-slot">
                                <div class="coin-img"><img src={bscLogo} alt="BSC" id="coin-ticker-logo"/></div>
                                <div class="coin-data">
                                    <div class="banner-slot" id="name">{(coinNameBSC)}</div>
                                    <div class="banner-slot" id="price">Price: {$priceData.bscPrice} USD</div>
                                    <div class="banner-slot" id="volume">
                                        Change:
                                        {#if $priceData.bscChange > 0}
                                        <div class="green"> {$priceData.bscChange} %</div>
                                        {:else if 0 > $priceData.bscChange}
                                        <div class="red"> {$priceData.bscChange} %</div>
                                        {:else}
                                        {$priceData.bscChange}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        </div></a>
                    <a href="https://www.coingecko.com/en/coins/polygon" target="_blank" rel="noopener noreferrer">
                        <div class="slide">
                            <div class="poly-slot">
                                <div class="coin-img"><img src={polyLogo} alt="polygon" id="coin-ticker-logo"/></div>
                                <div class="coin-data">
                                    <div class="banner-slot" id="name">{(coinNamePOLY)}</div>
                                    <div class="banner-slot" id="price">Price: {$priceData.polyPrice} USD</div>
                                    <div class="banner-slot" id="volume">
                                        Change:
                                        {#if $priceData.polyChange > 0}
                                        <div class="green"> {$priceData.polyChange} %</div>
                                        {:else if 0 > $priceData.polyChange}
                                        <div class="red"> {$priceData.polyChange} %</div>
                                        {:else}
                                        {$priceData.polyChange}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        </div></a>
                    <a href="https://www.coingecko.com/en/coins/coinex-token" target="_blank" rel="noopener noreferrer">
                        <div class="slide">
                            <div class="csc-slot">
                                <div class="coin-img"><img src={cscLogo} alt="csc" id="coin-ticker-logo"/></div>
                                <div class="coin-data">
                                    <div class="banner-slot" id="name">{(coinNameCSC)}</div>
                                    <div class="banner-slot" id="price">Price: {$priceData.cscPrice} USD</div>
                                    <div class="banner-slot" id="volume">
                                        Change:
                                        {#if $priceData.cscChange > 0}
                                        <div class="green"> {$priceData.cscChange} %</div>
                                        {:else if 0 > $priceData.cscChange}
                                        <div class="red"> {$priceData.cscChange} %</div>
                                        {:else}
                                        {$priceData.cscChange}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        </div></a>
                    <a href="https://www.coingecko.com/en/coins/moonriver" target="_blank" rel="noopener noreferrer">
                        <div class="slide">
                            <div class="movr-slot">
                                <div class="coin-img"><img src={movrLogo} alt="moonriver" id="coin-ticker-logo"/></div>
                                <div class="coin-data">
                                    <div class="banner-slot" id="name">{(coinNameMOVR)}</div>
                                    <div class="banner-slot" id="price">Price: {$priceData.movrPrice} USD</div>
                                    <div class="banner-slot" id="volume">
                                        Change:
                                        {#if $priceData.movrChange > 0}
                                        <div class="green"> {$priceData.movrChange} %</div>
                                        {:else if 0 > $priceData.movrChange}
                                        <div class="red"> {$priceData.movrChange} %</div>
                                        {:else}
                                        {$priceData.movrChange}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        </div></a>
                    <a href="https://www.coingecko.com/en/coins/hydro" target="_blank" rel="noopener noreferrer">
                        <div class="slide">
                            <div class="hydro-slot">
                                <div class="coin-img">
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
                                <div class="coin-data">
                                    <div class="banner-slot" id="name">{(coinNameHydro)}</div>
                                    <div class="banner-slot" id="price">Price: {$priceData.hydroPrice} USD</div>
                                    <div class="banner-slot" id="volume">
                                        Change:
                                        {#if $priceData.hydroChange > 0}
                                        <div class="green"> {$priceData.hydroChange} %</div>
                                        {:else if 0 > $priceData.hydroChange}
                                        <div class="red"> {$priceData.hydroChange} %</div>
                                        {:else}
                                        {$priceData.hydroChange}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        </div></a>
                    <a href="https://www.coingecko.com/en/coins/ethereum" target="_blank" rel="noopener noreferrer">
                        <div class="slide">
                            <div class="eth-slot">
                                <div class="coin-img"><img src={ethLogo} alt="ethereum" id="coin-ticker-logo"/></div>
                                <div class="coin-data">
                                    <div class="banner-slot" id="name">{(coinNameETH)}</div>
                                    <div class="banner-slot" id="price">Price: {$priceData.ethPrice} USD</div>
                                    <div class="banner-slot" id="volume">
                                        Change:
                                        {#if $priceData.ethChange > 0}
                                        <div class="green"> {$priceData.ethChange} %</div>
                                        {:else if 0 > $priceData.ethChange}
                                        <div class="red"> {$priceData.ethChange} %</div>
                                        {:else}
                                        {$priceData.ethChange}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        </div></a>
                    <a href="https://www.coingecko.com/en/coins/binancecoin" target="_blank" rel="noopener noreferrer">
                        <div class="slide">
                            <div class="bsc-slot">
                                <div class="coin-img"><img src={bscLogo} alt="BSC" id="coin-ticker-logo"/></div>
                                <div class="coin-data">
                                    <div class="banner-slot" id="name">{(coinNameBSC)}</div>
                                    <div class="banner-slot" id="price">Price: {$priceData.bscPrice} USD</div>
                                    <div class="banner-slot" id="volume">
                                        Change:
                                        {#if $priceData.bscChange > 0}
                                        <div class="green"> {$priceData.bscChange} %</div>
                                        {:else if 0 > $priceData.bscChange}
                                        <div class="red"> {$priceData.bscChange} %</div>
                                        {:else}
                                        {$priceData.bscChange}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        </div></a>
                    <a href="https://www.coingecko.com/en/coins/polygon" target="_blank" rel="noopener noreferrer">
                        <div class="slide">
                            <div class="poly-slot">
                                <div class="coin-img"><img src={polyLogo} alt="polygon" id="coin-ticker-logo"/></div>
                                <div class="coin-data">
                                    <div class="banner-slot" id="name">{(coinNamePOLY)}</div>
                                    <div class="banner-slot" id="price">Price: {$priceData.polyPrice} USD</div>
                                    <div class="banner-slot" id="volume">
                                        Change:
                                        {#if $priceData.polyChange > 0}
                                        <div class="green"> {$priceData.polyChange} %</div>
                                        {:else if 0 > $priceData.polyChange}
                                        <div class="red"> {$priceData.polyChange} %</div>
                                        {:else}
                                        {$priceData.polyChange}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        </div></a>
                </div>
            </div>
        </div>
    </section>
    
    <style>
    .banner {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: var(--cw-desktop);
        height: 60px;
        border-radius: var(--border-radius);
        color: var(--text-color);
        position: relative;
        z-index: 1;
        background: inherit;
        overflow: hidden;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
    
    .hydro-slot,
    .eth-slot,
    .bsc-slot,
    .poly-slot,
    .csc-slot,
    .movr-slot {
        display: flex;
        width: 250px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    
    .banner-slot {
        margin-left: 1rem;
        margin-right: 1rem;
        color: var(--text-color);
        font-size: 11px;
    }
    
    #volume {
        display: flex;
        flex-direction: row;
    }
    
    #name {
        display: flex;
        justify-content: flex-start;
        font-size: 11px;
    }
    
    #coin-ticker-logo {
        width: 32px;
        height: 32px;
    }
    
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
    
        100% {
            transform: translateX(calc(-250px * 6))
        }
    }
    
    .slider {
        height: 60px;
        display: flex;
        overflow: hidden;
        position: relative;
        width: var(--cw-desktop);
    }
    
    .slider::before,
    .slider::after {
        content: "";
        height: 60px;
        position: absolute;
        width: 200px;
        z-index: 2;
    }
    
    .slider::after {
        transform: rotateZ(180deg);
    }
    
    .slide-track {
        animation: scroll 40s linear infinite;
        display: flex;
        width: calc(250px * 16);
    }
    
    .slide {
        display: flex;
        justify-content: center;
        height: 60px;
        width: 250px;
    }
    
    section {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    </style>
    