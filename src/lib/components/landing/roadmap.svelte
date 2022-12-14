<script>

</script>

<div class="full" id="animated-border">
    <div class="information">

        <div class="roadmap">

            <div class="roadmap-card-half" id="animated-border">
                <div class="half-card-structure">
                    <div class="card-row" id="what">Keresverse Public Beta <div id="q">Q1</div></div>
                    <div class="card-row" id="desc">Keresverse is released as a public beta to evaluate its gameplay.</div>
                    <div class="card-row" id="progress">
                        <div class="container-prog">
                            <div class="progress1 progress-moved">
                                <div class="progress-bar1" >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="roadmap-card-half" id="animated-border">
                <div class="half-card-structure">
                    <div class="card-row" id="what">Aegir Wallet Refresh<div id="q">Q2</div></div>
                    <div class="card-row" id="desc">Aegir wallet gets an UI update and preparation work for the Hydro Testnet in Q4.</div>
                    <div class="card-row" id="progress">
                        <div class="container-prog">
                            <div class="progress2 progress-moved">
                                <div class="progress-bar2" >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


              <div class="roadmap-card-half" id="animated-border">
                <div class="half-card-structure">
                    <div class="card-row" id="what">Keresverse Website Beta<div id="q">Q2</div></div>
                    <div class="card-row" id="desc">Keresverse Website live for beta testing.</div>
                    <div class="card-row" id="progress">
                        <div class="container-prog">
                            <div class="progress3 progress-moved">
                                <div class="progress-bar3" >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="roadmap">

              <div class="roadmap-card-half" id="animated-border">
                <div class="half-card-structure">
                    <div class="card-row" id="what">Keres Diamond<div id="desc">Q2</div></div>
                    <div class="card-row" id="desc">Keresverse transitions to public testnet launching the Keres Diamond</div>
                    <div class="card-row" id="progress">
                        <div class="container-prog">
                            <div class="progress4 progress-moved">
                                <div class="progress-bar4" >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="roadmap-card-half" id="animated-border">
                <div class="half-card-structure">
                    <div class="card-row" id="what">Hydroswap Refresh<div id="q">Q3</div></div>
                    <div class="card-row" id="desc">Hydroswap gets a ui revamp and preparation work for the hydro testnet.</div>
                    <div class="card-row" id="progress">
                        <div class="container-prog">
                            <div class="progress5 progress-moved">
                                <div class="progress-bar5" >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="roadmap-card-half" id="animated-border">
                <div class="half-card-structure">
                    <div class="card-row" id="what">Hydro Testnet<div id="q">Q4</div></div>
                    <div class="card-row" id="desc">Hydro Testnet launches in preparation for Hydros own Blockchain.</div>
                    <div class="card-row" id="progress">
                        <div class="container-prog">
                            <div class="progress6 progress-moved">
                                <div class="progress-bar6" >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>

#what{
    justify-content: space-between;
}

#desc, #q{
  font-size: 10px;
}

.card-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 1.5rem;
}

.half-card-structure {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
}

.full {
    height: var(--ch-large);
}

.information {
    display: flex;
    flex-direction: row;
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
    width: 600px;
    height: 160px;
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
    width: 85%;
    background-color: rgba(255, 255, 255, 0.65);
    animation: progressAnimation1 3s;
}

@keyframes progressAnimation1 {
    0% {
        width: 5%;
        background-color: rgba(255, 255, 255, 0.40);
    }

    100% {
        width: 85%;
        background-color: rgba(255, 255, 255, 0.60);
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
    width: 45%;
    background-color: rgba(255, 255, 255, 0.65);
    animation: progressAnimation2 3s;
}

@keyframes progressAnimation2 {
    0% {
        width: 5%;
        background-color: rgba(255, 255, 255, 0.40);
    }

    100% {
        width: 45%;
        background-color: rgba(255, 255, 255, 0.60);
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
    width: 16%;
    background-color: rgba(255, 255, 255, 0.65);
    animation: progressAnimation3 3s;
}

@keyframes progressAnimation3 {
    0% {
        width: 5%;
        background-color: rgba(255, 255, 255, 0.40);
    }

    100% {
        width: 16%;
        background-color: rgba(255, 255, 255, 0.60);
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
    width: 32%;
    background-color: rgba(255, 255, 255, 0.65);
    animation: progressAnimation4 3s;
}

@keyframes progressAnimation4 {
    0% {
        width: 5%;
        background-color: rgba(255, 255, 255, 0.40);
    }

    100% {
        width: 32%;
        background-color: rgba(255, 255, 255, 0.60);
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
    width: 41%;
    background-color: rgba(255, 255, 255, 0.65);
    animation: progressAnimation5 3s;
}

@keyframes progressAnimation5 {
    0% {
        width: 5%;
        background-color: rgba(255, 255, 255, 0.40);
    }

    100% {
        width: 41%;
        background-color: rgba(255, 255, 255, 0.60);
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
    width: 24%;
    background-color: rgba(255, 255, 255, 0.65);
    animation: progressAnimation6 3s;
}

@keyframes progressAnimation6 {
    0% {
        width: 5%;
        background-color: rgba(255, 255, 255, 0.40);
    }

    100% {
        width: 24%;
        background-color: rgba(255, 255, 255, 0.60);
    }
}
</style>
