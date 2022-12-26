<script>
  import ethLogo from "$lib/images/logo/ethereum.svg";
  import bscLogo from "$lib/images/logo/bsc.svg";
  import polyLogo from "$lib/images/logo/polygon.svg";
  import cscLogo from "$lib/images/logo/coinex.svg";
  import btcLogo from "$lib/images/logo/bitcoin.svg";
  import item from "../../json/techlinks.json";
  import { githubData } from "$lib/store/store";
</script>

<div class="half" id="card-background">
  <div class="button-row-small">
    <div class="support-button" id="card-background-alt">
      <img src={btcLogo} alt="bitcoin" id="coin-ticker-logo" />
    </div>
    <div class="support-button" id="card-background-alt">
      <img src={ethLogo} alt="ethereum" id="coin-ticker-logo" />
    </div>
    <div class="support-button" id="card-background-alt">
      <img src={bscLogo} alt="BSC" id="coin-ticker-logo" />
    </div>
    <div class="support-button" id="card-background-alt">
      <img src={polyLogo} alt="polygon" id="coin-ticker-logo" />
    </div>
    <div class="support-button" id="card-background-alt">
      <img src={cscLogo} alt="csc" id="coin-ticker-logo" />
    </div>
    <div class="support-button" id="card-background-alt">
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
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
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
  </div>
  <div class="hydro-dashboard">
    <div class="aegir-slot-alt" id="card-background-alt">
      <div class="chain-alt">
        The Aegir Wallet is our open source multicoin and NFT wallet. Aegir
        encrypts all keys locally, no information is sent to any server.
        <br /><br />
        Remember to back up your Mnemonic seed! Keep your assets safe with Aegir.
        <br />
        <a
          class="aegir-privacy-link"
          href="https://projecthydro.org/aegir-privacy-policy"
          target="_blank"
          rel="noopener noreferrer">privacy policy</a
        >
      </div>
    </div>
    <a href={$githubData.urlAegir}>
      <div class="aegir-slot" id="card-background">
        <div class="price">Latest Commit</div>
        <div class="github-text" id="commit-message">
          {$githubData.commitMsgAegir}
        </div>
        <div class="github-info-inner">
          <img
            src={$githubData.avatarAegir}
            alt="github avatar"
          />{$githubData.usernameAegir}
        </div>
      </div>
    </a>
  </div>
  <div class="hydro-dashboard" id="buttons-downloads">
    <div class="aegir-logo" id="card-background-alt">ÆGIR.</div>
    <a href={item[9].link} target="_blank" rel="noopener noreferrer">
      <div class="button" id="aegir-button-play">
        <svg
          id="button-logo"
          viewBox="0 0 233 256"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#32bbff">
            <path
              d="m179.41 87.8117c-29.739-16.6335-77.471-43.343-151.5074-84.79762-4.9915-3.296506-10.7345-3.728507-15.6965-2.049004l127.0249 127.024924z"
            />
            <path
              d="m12.2065.965088c-.93.315002-1.835.695002-2.70048 1.154002-5.47951 2.96401-9.50602 8.66751-9.50602 15.88101v219.9809c0 7.213 4.02601 12.917 9.50602 15.88.86398.459 1.76848.84 2.69748 1.157l127.0285-127.028z"
            />
            <path
              d="m139.231 127.99-127.0279 127.028c4.9635 1.692 10.7065 1.293 15.6996-2.052 71.7991-40.205 118.9933-66.598 149.0763-83.373.837-.47 1.658-.93 2.469-1.386z"
            />
          </g>
          <path
            d="m0 127.99v109.99c0 7.214 4.02601 12.917 9.50602 15.881.86398.458 1.76848.84 2.69748 1.157l127.0285-127.028z"
            fill="#2c9fd9"
          />
          <path
            d="m27.9029 3.01396c-5.9275-3.914007-12.9175-3.802507-18.39704-.8945l127.79814 127.79854 42.106-42.1064c-29.739-16.6335-77.471-43.3431-151.5071-84.79764z"
            fill="#29cc5e"
          />
          <path
            d="m137.305 126.063-127.79914 127.798c5.48004 2.907 12.46954 3.075 18.39704-.895 71.7991-40.205 118.9931-66.598 149.0761-83.373.838-.47 1.658-.93 2.469-1.386z"
            fill="#d93f21"
          />
          <path
            d="m232.451 127.99c0-6.095-3.076-12.246-9.171-15.657 0 0-11.4-6.36-46.341-25.9043l-41.562 41.5613 41.602 41.603c34.558-19.404 46.3-25.946 46.3-25.946 6.096-3.411 9.172-9.562 9.172-15.657z"
            fill="#ffd500"
          />
          <path
            d="m223.28 143.647c6.095-3.411 9.171-9.562 9.171-15.657h-97.074l41.602 41.603c34.559-19.403 46.301-25.946 46.301-25.946z"
            fill="#fa0"
          />
        </svg>
        <div class="download-text">
          Get it on
          <div class="download-text-inner">Google Play</div>
        </div>
      </div>
    </a>
    <a href={item[10].link} target="_blank" rel="noopener noreferrer">
      <div class="button" id="aegir-button-ios">
        <svg
          id="button-logo"
          fill="none"
          viewBox="0 0 281 256"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M103.126 162.178l71.54-129.212c.98-1.771 1.969-3.536 2.853-5.367.802-1.662 1.483-3.34 1.927-5.154.94-3.816.688-7.793-.773-11.435-1.449-3.623-4-6.647-7.26-8.61A16.592 16.592 0 0 0 160.631.146c-3.755.503-7.183 2.265-9.885 5.02-1.28 1.309-2.336 2.764-3.315 4.32-1.077 1.713-2.049 3.488-3.032 5.259l-4.524 8.17-4.525-8.17c-.98-1.774-1.952-3.547-3.029-5.259-.98-1.556-2.036-3.011-3.319-4.32-2.698-2.755-6.126-4.516-9.881-5.023A16.601 16.601 0 0 0 108.339 2.4c-3.26 1.964-5.812 4.988-7.262 8.611-1.459 3.641-1.71 7.62-.773 11.435.445 1.814 1.126 3.493 1.929 5.154.882 1.831 1.871 3.595 2.854 5.367l14.61 26.392-56.927 102.82H23.76c-1.962 0-3.923-.008-5.884.108-1.782.105-3.517.332-5.245.836-3.639 1.06-6.816 3.275-9.112 6.415C1.236 172.657 0 176.479 0 180.401c0 3.924 1.237 7.74 3.52 10.86 2.294 3.142 5.472 5.357 9.11 6.416 1.73.503 3.465.729 5.246.837 1.961.117 3.922.106 5.884.106h153.336c.2-.418.691-1.515 1.171-3.158 4.859-16.567-7.207-33.284-23.821-33.284zm-66.681 42.409l-9.274 17.57c-.958 1.818-1.925 3.629-2.792 5.509-.784 1.706-1.451 3.43-1.886 5.291-.919 3.918-.674 8.001.756 11.742 1.418 3.717 3.917 6.825 7.106 8.837 3.192 2.014 6.897 2.829 10.552 2.313 3.675-.515 7.03-2.325 9.674-5.154 1.255-1.344 2.287-2.838 3.245-4.434 1.056-1.759 2.006-3.581 2.968-5.399l13.45-25.483c-1.049-1.745-11.09-17.215-33.799-10.792zm241.009-35.188a17.216 17.216 0 0 0-9.12-6.33c-1.728-.498-3.466-.721-5.248-.825-1.965-.116-3.925-.107-5.889-.107h-38.878l-51.385-91.516c-7.791 8.2-11.276 17.385-12.612 25.728-1.938 12.097.43 24.508 6.392 35.126l61.746 109.971c.983 1.749 1.955 3.501 3.033 5.192.98 1.534 2.036 2.971 3.321 4.262 2.704 2.72 6.132 4.459 9.891 4.955a16.784 16.784 0 0 0 10.791-2.224c3.259-1.935 5.816-4.921 7.27-8.496 1.459-3.596 1.709-7.522.77-11.287-.446-1.79-1.126-3.448-1.931-5.088-.882-1.806-1.871-3.547-2.855-5.296l-14.236-25.361h18.685c1.964 0 3.923.011 5.888-.105 1.782-.106 3.52-.328 5.248-.826a17.212 17.212 0 0 0 9.12-6.33 18.01 18.01 0 0 0 3.522-10.721 18.022 18.022 0 0 0-3.523-10.722z"
            fill="var(--svg-color)"
          /></svg
        >
        <div class="download-text">
          Download on the
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

  .aegir-slot,
  .aegir-slot-alt {
    justify-content: space-between;
    text-align: start;
    display: flex;
    margin: 0.5rem;
    padding: 1rem;
    width: 150px;
    height: 150px;
  }

  .aegir-slot-alt {
    align-items: flex-start;
    flex-direction: column;
    width: 70%;
  }

  .aegir-slot {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0.5rem;
  }

  .aegir-slot:hover {
    background-color: var(--button-hover) !important;
    opacity: 1 !important;
  }

  .price {
    display: flex;
    justify-content: flex-start;
    font-size: var(--fs-mini);
    color: var(--text-color-alt);
  }

  #commit-message {
    font-size: var(--fs-xsmall);
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
    font-size: var(--fs-mini);
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
    font-size: var(--fs-monster) !important;
    font-family: "Montserrat", sans-serif;
  }

  #card-background-alt {
    font-size: var(--fs-small);
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
    font-size: var(--fs-mini);
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

  .aegir-privacy-link {
    font-size: var(--fs-mini);
    color: var(--text-color-alt);
  }

  #aegir-button-ios {
    font-family: "Open Sans", sans-serif;
  }

  #aegir-button-play {
    font-family: "Roboto", sans-serif;
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
      font-size: var(--fs-small);
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

    .aegir-slot,
    .aegir-slot-alt {
      justify-content: space-between;
      text-align: start;
      display: flex;
      margin: 0.5rem;
      padding: 1rem;
      width: 280px !important;
      height: 150px;
    }

    .aegir-slot-alt {
      height: 200px !important;
    }

    .aegir-slot {
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

    #aegir-button-play,
    #aegir-button-play {
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
