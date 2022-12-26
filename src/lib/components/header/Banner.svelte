<script>
  import ethLogo from "$lib/images/logo/ethereum.svg";
  import bscLogo from "$lib/images/logo/bsc.svg";
  import polyLogo from "$lib/images/logo/polygon.svg";
  import cscLogo from "$lib/images/logo/coinex.svg";
  import movrLogo from "$lib/images/logo/moonriver.svg";
  import { priceData } from "$lib/store/store";
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
        <a
          href="https://www.coingecko.com/en/coins/hydro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="slide">
            <div class="hydro-slot">
              <div class="coin-img">
                <svg
                  id="coin-ticker-logo"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="512"
                    cy="512"
                    r="512"
                    fill="var(--drop-color-2)"
                    filter="url(#filter0_b_1616_338)"
                  />
                  <path
                    d="M512 857.08c141.38 0 256-120.15 256-268.36 0-82.9-60.063-195.197-180.19-336.89-15.367-18.127-40.637-46.403-75.81-84.83-37.06 40.54-63.62 70.343-79.68 89.41C314.773 395.943 256 506.713 256 588.72c0 148.21 114.62 268.36 256 268.36z"
                    fill="url(#paint0_linear_1616_338)"
                  />
                  <path
                    d="M512 855.73c106.035 0 192-90.113 192-201.27 0-62.175-45.048-146.398-135.143-252.668C557.333 388.197 538.38 366.99 512 338.17c-27.795 30.405-47.715 52.757-59.76 67.057C364.08 509.877 320 592.955 320 654.46c0 111.157 85.965 201.27 192 201.27z"
                    fill="#244A93"
                    fill-opacity=".5"
                  />
                  <path
                    d="M512 855.21c70.69 0 128-60.075 128-134.18 0-41.45-30.032-97.598-90.095-168.445-7.683-9.063-20.318-23.202-37.905-42.415-18.53 20.27-31.81 35.172-39.84 44.705C413.387 624.642 384 680.027 384 721.03c0 74.105 57.31 134.18 128 134.18z"
                    fill="url(#paint1_linear_1616_338)"
                    fill-opacity=".75"
                  />
                  <defs>
                    <filter
                      id="filter0_b_1616_338"
                      x="-100"
                      y="-100"
                      width="1224"
                      height="1224"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="50"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1616_338"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1616_338"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1616_338"
                      x1="512"
                      y1="167"
                      x2="512"
                      y2="857.08"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#614CB5" />
                      <stop offset="1" stop-color="#3F70EE" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1616_338"
                      x1="512"
                      y1="510.17"
                      x2="512"
                      y2="855.17"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#8FAFFF" />
                      <stop offset="1" stop-color="#3D7DDD" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div class="coin-data">
                <div class="banner-slot" id="name">{coinNameHydro}</div>
                <div class="banner-slot" id="price">
                  Price: {$priceData.hydroPrice} USD
                </div>
                <div class="banner-slot" id="volume">
                  Change:
                  {#if $priceData.hydroChange > 0}
                    <div class="green">{$priceData.hydroChange} %</div>
                  {:else if 0 > $priceData.hydroChange}
                    <div class="red">{$priceData.hydroChange} %</div>
                  {:else}
                    {$priceData.hydroChange}
                  {/if}
                </div>
              </div>
            </div>
          </div></a
        >
        <a
          href="https://www.coingecko.com/en/coins/ethereum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="slide">
            <div class="eth-slot">
              <div class="coin-img">
                <img src={ethLogo} alt="ethereum" id="coin-ticker-logo" />
              </div>
              <div class="coin-data">
                <div class="banner-slot" id="name">{coinNameETH}</div>
                <div class="banner-slot" id="price">
                  Price: {$priceData.ethPrice} USD
                </div>
                <div class="banner-slot" id="volume">
                  Change:
                  {#if $priceData.ethChange > 0}
                    <div class="green">{$priceData.ethChange} %</div>
                  {:else if 0 > $priceData.ethChange}
                    <div class="red">{$priceData.ethChange} %</div>
                  {:else}
                    {$priceData.ethChange}
                  {/if}
                </div>
              </div>
            </div>
          </div></a
        >
        <a
          href="https://www.coingecko.com/en/coins/binancecoin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="slide">
            <div class="bsc-slot">
              <div class="coin-img">
                <img src={bscLogo} alt="BSC" id="coin-ticker-logo" />
              </div>
              <div class="coin-data">
                <div class="banner-slot" id="name">{coinNameBSC}</div>
                <div class="banner-slot" id="price">
                  Price: {$priceData.bscPrice} USD
                </div>
                <div class="banner-slot" id="volume">
                  Change:
                  {#if $priceData.bscChange > 0}
                    <div class="green">{$priceData.bscChange} %</div>
                  {:else if 0 > $priceData.bscChange}
                    <div class="red">{$priceData.bscChange} %</div>
                  {:else}
                    {$priceData.bscChange}
                  {/if}
                </div>
              </div>
            </div>
          </div></a
        >
        <a
          href="https://www.coingecko.com/en/coins/polygon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="slide">
            <div class="poly-slot">
              <div class="coin-img">
                <img src={polyLogo} alt="polygon" id="coin-ticker-logo" />
              </div>
              <div class="coin-data">
                <div class="banner-slot" id="name">{coinNamePOLY}</div>
                <div class="banner-slot" id="price">
                  Price: {$priceData.polyPrice} USD
                </div>
                <div class="banner-slot" id="volume">
                  Change:
                  {#if $priceData.polyChange > 0}
                    <div class="green">{$priceData.polyChange} %</div>
                  {:else if 0 > $priceData.polyChange}
                    <div class="red">{$priceData.polyChange} %</div>
                  {:else}
                    {$priceData.polyChange}
                  {/if}
                </div>
              </div>
            </div>
          </div></a
        >
        <a
          href="https://www.coingecko.com/en/coins/coinex-token"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="slide">
            <div class="csc-slot">
              <div class="coin-img">
                <img src={cscLogo} alt="csc" id="coin-ticker-logo" />
              </div>
              <div class="coin-data">
                <div class="banner-slot" id="name">{coinNameCSC}</div>
                <div class="banner-slot" id="price">
                  Price: {$priceData.cscPrice} USD
                </div>
                <div class="banner-slot" id="volume">
                  Change:
                  {#if $priceData.cscChange > 0}
                    <div class="green">{$priceData.cscChange} %</div>
                  {:else if 0 > $priceData.cscChange}
                    <div class="red">{$priceData.cscChange} %</div>
                  {:else}
                    {$priceData.cscChange}
                  {/if}
                </div>
              </div>
            </div>
          </div></a
        >
        <a
          href="https://www.coingecko.com/en/coins/moonriver"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="slide">
            <div class="movr-slot">
              <div class="coin-img">
                <img src={movrLogo} alt="moonriver" id="coin-ticker-logo" />
              </div>
              <div class="coin-data">
                <div class="banner-slot" id="name">{coinNameMOVR}</div>
                <div class="banner-slot" id="price">
                  Price: {$priceData.movrPrice} USD
                </div>
                <div class="banner-slot" id="volume">
                  Change:
                  {#if $priceData.movrChange > 0}
                    <div class="green">{$priceData.movrChange} %</div>
                  {:else if 0 > $priceData.movrChange}
                    <div class="red">{$priceData.movrChange} %</div>
                  {:else}
                    {$priceData.movrChange}
                  {/if}
                </div>
              </div>
            </div>
          </div></a
        >
        <a
          href="https://www.coingecko.com/en/coins/hydro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="slide">
            <div class="hydro-slot">
              <div class="coin-img">
                <svg
                  id="coin-ticker-logo"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="512"
                    cy="512"
                    r="512"
                    fill="var(--drop-color-2)"
                    filter="url(#filter0_b_1616_338)"
                  />
                  <path
                    d="M512 857.08c141.38 0 256-120.15 256-268.36 0-82.9-60.063-195.197-180.19-336.89-15.367-18.127-40.637-46.403-75.81-84.83-37.06 40.54-63.62 70.343-79.68 89.41C314.773 395.943 256 506.713 256 588.72c0 148.21 114.62 268.36 256 268.36z"
                    fill="url(#paint0_linear_1616_338)"
                  />
                  <path
                    d="M512 855.73c106.035 0 192-90.113 192-201.27 0-62.175-45.048-146.398-135.143-252.668C557.333 388.197 538.38 366.99 512 338.17c-27.795 30.405-47.715 52.757-59.76 67.057C364.08 509.877 320 592.955 320 654.46c0 111.157 85.965 201.27 192 201.27z"
                    fill="#244A93"
                    fill-opacity=".5"
                  />
                  <path
                    d="M512 855.21c70.69 0 128-60.075 128-134.18 0-41.45-30.032-97.598-90.095-168.445-7.683-9.063-20.318-23.202-37.905-42.415-18.53 20.27-31.81 35.172-39.84 44.705C413.387 624.642 384 680.027 384 721.03c0 74.105 57.31 134.18 128 134.18z"
                    fill="url(#paint1_linear_1616_338)"
                    fill-opacity=".75"
                  />
                  <defs>
                    <filter
                      id="filter0_b_1616_338"
                      x="-100"
                      y="-100"
                      width="1224"
                      height="1224"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="50"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1616_338"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1616_338"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1616_338"
                      x1="512"
                      y1="167"
                      x2="512"
                      y2="857.08"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#614CB5" />
                      <stop offset="1" stop-color="#3F70EE" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1616_338"
                      x1="512"
                      y1="510.17"
                      x2="512"
                      y2="855.17"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#8FAFFF" />
                      <stop offset="1" stop-color="#3D7DDD" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div class="coin-data">
                <div class="banner-slot" id="name">{coinNameHydro}</div>
                <div class="banner-slot" id="price">
                  Price: {$priceData.hydroPrice} USD
                </div>
                <div class="banner-slot" id="volume">
                  Change:
                  {#if $priceData.hydroChange > 0}
                    <div class="green">{$priceData.hydroChange} %</div>
                  {:else if 0 > $priceData.hydroChange}
                    <div class="red">{$priceData.hydroChange} %</div>
                  {:else}
                    {$priceData.hydroChange}
                  {/if}
                </div>
              </div>
            </div>
          </div></a
        >
        <a
          href="https://www.coingecko.com/en/coins/ethereum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="slide">
            <div class="eth-slot">
              <div class="coin-img">
                <img src={ethLogo} alt="ethereum" id="coin-ticker-logo" />
              </div>
              <div class="coin-data">
                <div class="banner-slot" id="name">{coinNameETH}</div>
                <div class="banner-slot" id="price">
                  Price: {$priceData.ethPrice} USD
                </div>
                <div class="banner-slot" id="volume">
                  Change:
                  {#if $priceData.ethChange > 0}
                    <div class="green">{$priceData.ethChange} %</div>
                  {:else if 0 > $priceData.ethChange}
                    <div class="red">{$priceData.ethChange} %</div>
                  {:else}
                    {$priceData.ethChange}
                  {/if}
                </div>
              </div>
            </div>
          </div></a
        >
        <a
          href="https://www.coingecko.com/en/coins/binancecoin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="slide">
            <div class="bsc-slot">
              <div class="coin-img">
                <img src={bscLogo} alt="BSC" id="coin-ticker-logo" />
              </div>
              <div class="coin-data">
                <div class="banner-slot" id="name">{coinNameBSC}</div>
                <div class="banner-slot" id="price">
                  Price: {$priceData.bscPrice} USD
                </div>
                <div class="banner-slot" id="volume">
                  Change:
                  {#if $priceData.bscChange > 0}
                    <div class="green">{$priceData.bscChange} %</div>
                  {:else if 0 > $priceData.bscChange}
                    <div class="red">{$priceData.bscChange} %</div>
                  {:else}
                    {$priceData.bscChange}
                  {/if}
                </div>
              </div>
            </div>
          </div></a
        >
        <a
          href="https://www.coingecko.com/en/coins/polygon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="slide">
            <div class="poly-slot">
              <div class="coin-img">
                <img src={polyLogo} alt="polygon" id="coin-ticker-logo" />
              </div>
              <div class="coin-data">
                <div class="banner-slot" id="name">{coinNamePOLY}</div>
                <div class="banner-slot" id="price">
                  Price: {$priceData.polyPrice} USD
                </div>
                <div class="banner-slot" id="volume">
                  Change:
                  {#if $priceData.polyChange > 0}
                    <div class="green">{$priceData.polyChange} %</div>
                  {:else if 0 > $priceData.polyChange}
                    <div class="red">{$priceData.polyChange} %</div>
                  {:else}
                    {$priceData.polyChange}
                  {/if}
                </div>
              </div>
            </div>
          </div></a
        >
        <a
          href="https://www.coingecko.com/en/coins/coinex-token"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="slide">
            <div class="csc-slot">
              <div class="coin-img">
                <img src={cscLogo} alt="csc" id="coin-ticker-logo" />
              </div>
              <div class="coin-data">
                <div class="banner-slot" id="name">{coinNameCSC}</div>
                <div class="banner-slot" id="price">
                  Price: {$priceData.cscPrice} USD
                </div>
                <div class="banner-slot" id="volume">
                  Change:
                  {#if $priceData.cscChange > 0}
                    <div class="green">{$priceData.cscChange} %</div>
                  {:else if 0 > $priceData.cscChange}
                    <div class="red">{$priceData.cscChange} %</div>
                  {:else}
                    {$priceData.cscChange}
                  {/if}
                </div>
              </div>
            </div>
          </div></a
        >
        <a
          href="https://www.coingecko.com/en/coins/moonriver"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="slide">
            <div class="movr-slot">
              <div class="coin-img">
                <img src={movrLogo} alt="moonriver" id="coin-ticker-logo" />
              </div>
              <div class="coin-data">
                <div class="banner-slot" id="name">{coinNameMOVR}</div>
                <div class="banner-slot" id="price">
                  Price: {$priceData.movrPrice} USD
                </div>
                <div class="banner-slot" id="volume">
                  Change:
                  {#if $priceData.movrChange > 0}
                    <div class="green">{$priceData.movrChange} %</div>
                  {:else if 0 > $priceData.movrChange}
                    <div class="red">{$priceData.movrChange} %</div>
                  {:else}
                    {$priceData.movrChange}
                  {/if}
                </div>
              </div>
            </div>
          </div></a
        >
        <a
          href="https://www.coingecko.com/en/coins/hydro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="slide">
            <div class="hydro-slot">
              <div class="coin-img">
                <svg
                  id="coin-ticker-logo"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="512"
                    cy="512"
                    r="512"
                    fill="var(--drop-color-2)"
                    filter="url(#filter0_b_1616_338)"
                  />
                  <path
                    d="M512 857.08c141.38 0 256-120.15 256-268.36 0-82.9-60.063-195.197-180.19-336.89-15.367-18.127-40.637-46.403-75.81-84.83-37.06 40.54-63.62 70.343-79.68 89.41C314.773 395.943 256 506.713 256 588.72c0 148.21 114.62 268.36 256 268.36z"
                    fill="url(#paint0_linear_1616_338)"
                  />
                  <path
                    d="M512 855.73c106.035 0 192-90.113 192-201.27 0-62.175-45.048-146.398-135.143-252.668C557.333 388.197 538.38 366.99 512 338.17c-27.795 30.405-47.715 52.757-59.76 67.057C364.08 509.877 320 592.955 320 654.46c0 111.157 85.965 201.27 192 201.27z"
                    fill="#244A93"
                    fill-opacity=".5"
                  />
                  <path
                    d="M512 855.21c70.69 0 128-60.075 128-134.18 0-41.45-30.032-97.598-90.095-168.445-7.683-9.063-20.318-23.202-37.905-42.415-18.53 20.27-31.81 35.172-39.84 44.705C413.387 624.642 384 680.027 384 721.03c0 74.105 57.31 134.18 128 134.18z"
                    fill="url(#paint1_linear_1616_338)"
                    fill-opacity=".75"
                  />
                  <defs>
                    <filter
                      id="filter0_b_1616_338"
                      x="-100"
                      y="-100"
                      width="1224"
                      height="1224"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="50"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1616_338"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1616_338"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1616_338"
                      x1="512"
                      y1="167"
                      x2="512"
                      y2="857.08"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#614CB5" />
                      <stop offset="1" stop-color="#3F70EE" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1616_338"
                      x1="512"
                      y1="510.17"
                      x2="512"
                      y2="855.17"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#8FAFFF" />
                      <stop offset="1" stop-color="#3D7DDD" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div class="coin-data">
                <div class="banner-slot" id="name">{coinNameHydro}</div>
                <div class="banner-slot" id="price">
                  Price: {$priceData.hydroPrice} USD
                </div>
                <div class="banner-slot" id="volume">
                  Change:
                  {#if $priceData.hydroChange > 0}
                    <div class="green">{$priceData.hydroChange} %</div>
                  {:else if 0 > $priceData.hydroChange}
                    <div class="red">{$priceData.hydroChange} %</div>
                  {:else}
                    {$priceData.hydroChange}
                  {/if}
                </div>
              </div>
            </div>
          </div></a
        >
        <a
          href="https://www.coingecko.com/en/coins/ethereum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="slide">
            <div class="eth-slot">
              <div class="coin-img">
                <img src={ethLogo} alt="ethereum" id="coin-ticker-logo" />
              </div>
              <div class="coin-data">
                <div class="banner-slot" id="name">{coinNameETH}</div>
                <div class="banner-slot" id="price">
                  Price: {$priceData.ethPrice} USD
                </div>
                <div class="banner-slot" id="volume">
                  Change:
                  {#if $priceData.ethChange > 0}
                    <div class="green">{$priceData.ethChange} %</div>
                  {:else if 0 > $priceData.ethChange}
                    <div class="red">{$priceData.ethChange} %</div>
                  {:else}
                    {$priceData.ethChange}
                  {/if}
                </div>
              </div>
            </div>
          </div></a
        >
        <a
          href="https://www.coingecko.com/en/coins/binancecoin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="slide">
            <div class="bsc-slot">
              <div class="coin-img">
                <img src={bscLogo} alt="BSC" id="coin-ticker-logo" />
              </div>
              <div class="coin-data">
                <div class="banner-slot" id="name">{coinNameBSC}</div>
                <div class="banner-slot" id="price">
                  Price: {$priceData.bscPrice} USD
                </div>
                <div class="banner-slot" id="volume">
                  Change:
                  {#if $priceData.bscChange > 0}
                    <div class="green">{$priceData.bscChange} %</div>
                  {:else if 0 > $priceData.bscChange}
                    <div class="red">{$priceData.bscChange} %</div>
                  {:else}
                    {$priceData.bscChange}
                  {/if}
                </div>
              </div>
            </div>
          </div></a
        >
        <a
          href="https://www.coingecko.com/en/coins/polygon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="slide">
            <div class="poly-slot">
              <div class="coin-img">
                <img src={polyLogo} alt="polygon" id="coin-ticker-logo" />
              </div>
              <div class="coin-data">
                <div class="banner-slot" id="name">{coinNamePOLY}</div>
                <div class="banner-slot" id="price">
                  Price: {$priceData.polyPrice} USD
                </div>
                <div class="banner-slot" id="volume">
                  Change:
                  {#if $priceData.polyChange > 0}
                    <div class="green">{$priceData.polyChange} %</div>
                  {:else if 0 > $priceData.polyChange}
                    <div class="red">{$priceData.polyChange} %</div>
                  {:else}
                    {$priceData.polyChange}
                  {/if}
                </div>
              </div>
            </div>
          </div></a
        >
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
    font-size: var(--fs-xsmall);
  }

  #volume {
    display: flex;
    flex-direction: row;
  }

  #name {
    display: flex;
    justify-content: flex-start;
    font-size: var(--fs-xsmall);
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
      transform: translateX(calc(-250px * 6));
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
