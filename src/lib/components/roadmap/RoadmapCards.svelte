<script>
</script>

<div class="full" id="card-background">
  <div class="information">
    <div class="roadmap">
      <div class="roadmap-card-half" id="card-background-alt">
        <div class="half-card-structure">
          <div class="card-row" id="what">
            Keresverse Public Beta <div id="q">Q1</div>
          </div>
          <div class="card-row" id="desc">
            Keresverse is released as a public beta to evaluate its gameplay.<br
            />
            - Full Gameplay Beta <br />
            - Public access with free beta key <br />
          </div>
          <div class="card-row" id="progress">
            <div class="container-prog">
              <div class="progress1 progress-moved">
                <div class="progress-bar1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="roadmap-card-half" id="card-background-alt">
        <div class="half-card-structure">
          <div class="card-row" id="what">
            Aegir Wallet Refresh
            <div id="q">Q2</div>
          </div>
          <div class="card-row" id="desc">
            Aegir wallet gets an UI and UX update to integrate the new Hydro
            Style! <br />
            - Updates in preparation for the Hydro Testnet in Q4 <br />
            - Integration of the Keres Diamond.
          </div>
          <div class="card-row" id="progress">
            <div class="container-prog">
              <div class="progress2 progress-moved">
                <div class="progress-bar2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="roadmap-card-half" id="card-background-alt">
        <div class="half-card-structure">
          <div class="card-row" id="what">
            Keresverse Website Beta
            <div id="q">Q2</div>
          </div>
          <div class="card-row" id="desc">
            Keresverse Website live for beta testing. <br />
            - Main interface & Registration. <br />
            - Keres Diamond on testnet for evaluation.
          </div>
          <div class="card-row" id="progress">
            <div class="container-prog">
              <div class="progress3 progress-moved">
                <div class="progress-bar3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="roadmap">
      <div class="roadmap-card-half" id="card-background-alt">
        <div class="half-card-structure">
          <div class="card-row" id="what">
            Keres Diamond, The Keresian Protocol.
            <div id="q">Q3</div>
          </div>
          <div class="card-row" id="desc">
            Deploy Keres Diamond on testnet for integration with Keresverse.
            <br />
            - Keresverse Assets on testnet. <br />
            - Keres Voucher redeem contract on testnet.
          </div>
          <div class="card-row" id="progress">
            <div class="container-prog">
              <div class="progress4 progress-moved">
                <div class="progress-bar4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="roadmap-card-half" id="card-background-alt">
        <div class="half-card-structure">
          <div class="card-row" id="what">
            Hydroswap Refresh
            <div id="q">Q3</div>
          </div>
          <div class="card-row" id="desc">
            Hydroswap performance and UI/UX upgrades with vital preparations for
            the Regn Testnet. <br />
            - Hydroswap transitions to Svelte. <br />
            - UI/UX update to follow New Hydro Style. <br />
          </div>
          <div class="card-row" id="progress">
            <div class="container-prog">
              <div class="progress5 progress-moved">
                <div class="progress-bar5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="roadmap-card-half" id="card-background-alt">
        <div class="half-card-structure">
          <div class="card-row" id="what">
            Regn Testnet
            <div id="q">Q4</div>
          </div>
          <div class="card-row" id="desc">
            Genesis block of Regn Testnet, the blockchain powered by Hydro.
            <br />
            - Regn Testnet Genesis block. <br />
            - The first Hydro Testnet Coins are mined. <br />
          </div>
          <div class="card-row" id="progress">
            <div class="container-prog">
              <div class="progress6 progress-moved">
                <div class="progress-bar6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .full {
    padding-top: 2rem;
    padding-bottom: 2rem;
    height: auto;
  }

  .information {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }

  .roadmap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .roadmap-card-half {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    width: 625px;
    height: 170px;
  }

  .half-card-structure {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    padding: 1rem;
  }

  .card-row {
    display: flex;
    flex-direction: row;
  }

  #what {
    justify-content: space-between;
  }

  #desc {
    font-size: var(--fs-xsmall);
    word-wrap: break-word;
    height: 80px;
  }

  #q {
    font-size: var(--fs-mini);
    color: var(--text-color-alt);
  }

  .container-prog {
    width: 500px;
    text-align: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .progress1 {
    padding: 3px;
    border-radius: 7px;
  }

  .progress-bar1 {
    height: 10px;
    border-radius: 7px;
    transition: 0.4s linear;
    transition-property: width, background-color;
  }

  .progress-moved .progress-bar1 {
    width: var(--progressbar1);
    background-color: var(--progress-bar-complete);
    animation: progressAnimation1 4s;
  }

  @keyframes progressAnimation1 {
    0% {
      width: 5%;
      background-color: var(--progress-bar-complete);
    }

    100% {
      width: var(--progressbar1);
      background-color: var(--progress-bar-complete);
    }
  }

  .progress2 {
    padding: 3px;
    border-radius: 7px;
  }

  .progress-bar2 {
    height: 10px;
    border-radius: 7px;
    transition: 0.4s linear;
    transition-property: width, background-color;
  }

  .progress-moved .progress-bar2 {
    width: var(--progressbar2);
    background-color: var(--progress-bar);
    animation: progressAnimation2 4s;
  }

  @keyframes progressAnimation2 {
    0% {
      width: 5%;
      background-color: var(--progress-bar);
    }

    100% {
      width: var(--progressbar2);
      background-color: var(--progress-bar);
    }
  }

  .progress3 {
    padding: 3px;
    border-radius: 7px;
  }

  .progress-bar3 {
    height: 10px;
    border-radius: 7px;
    transition: 0.4s linear;
    transition-property: width, background-color;
  }

  .progress-moved .progress-bar3 {
    width: var(--progressbar3);
    background-color: var(--progress-bar-complete);
    animation: progressAnimation3 4s;
  }

  @keyframes progressAnimation3 {
    0% {
      width: 5%;
      background-color: var(--progress-bar-complete);
    }

    100% {
      width: var(--progressbar3);
      background-color: var(--progress-bar-complete);
    }
  }

  .progress4 {
    padding: 3px;
    border-radius: 7px;
  }

  .progress-bar4 {
    height: 10px;
    border-radius: 7px;
    transition: 0.4s linear;
    transition-property: width, background-color;
  }

  .progress-moved .progress-bar4 {
    width: var(--progressbar4);
    background-color: var(--progress-bar);
    animation: progressAnimation4 4s;
  }

  @keyframes progressAnimation4 {
    0% {
      width: 5%;
      background-color: var(--progress-bar);
    }

    100% {
      width: var(--progressbar4);
      background-color: var(--progress-bar);
    }
  }

  .progress5 {
    padding: 3px;
    border-radius: 7px;
  }

  .progress-bar5 {
    height: 10px;
    border-radius: 7px;
    transition: 0.4s linear;
    transition-property: width, background-color;
  }

  .progress-moved .progress-bar5 {
    width: var(--progressbar5);
    background-color: var(--progress-bar);
    animation: progressAnimation5 4s;
  }

  @keyframes progressAnimation5 {
    0% {
      width: 5%;
      background-color: var(--progress-bar);
    }

    100% {
      width: var(--progressbar5);
      background-color: var(--progress-bar);
    }
  }

  .progress6 {
    padding: 3px;
    border-radius: 7px;
  }

  .progress-bar6 {
    height: 10px;
    border-radius: 7px;
    transition: 0.4s linear;
    transition-property: width, background-color;
  }

  .progress-moved .progress-bar6 {
    width: var(--progressbar6);
    background-color: var(--progress-bar);
    animation: progressAnimation6 4s;
  }

  @keyframes progressAnimation6 {
    0% {
      width: 5%;
      background-color: var(--progress-bar);
    }

    100% {
      width: var(--progressbar6);
      background-color: var(--progress-bar);
    }
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .information {
      flex-direction: column !important;
    }

    .roadmap-card-half {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
      padding: 1rem;
      width: 280px;
      height: 300px;
    }

    .container-prog {
      width: 300px !important;
      text-align: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .full {
      height: auto;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    #desc {
      height: auto !important;
    }
  }

  @media only screen and (max-width: 768px) {
    .information {
      flex-direction: column !important;
    }

    .full {
      height: auto;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }

  @media only screen and (max-width: 992px) {
    .information {
      flex-direction: column !important;
    }

    .full {
      height: auto;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }

  @media only screen and (max-width: 1200px) {
    .information {
      flex-direction: column !important;
    }

    .full {
      height: auto;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
</style>
