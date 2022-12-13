<script>
</script>

<svelte:head>
    <title>FAQ</title>
    <meta name="FAQ" content="FAQ" />
    </svelte:head>

    <section>

        <div class="container" id="animated-border">

            <div class="hydro-dashboard">
                <div class="dashboard-slot" id="animated-border">
                    FAQ
                </div>
            </div>

            <div class="hydro-dashboard">

                <a href="/faq/answers/q1">
                    <div class="dashboard-slot" id="animated-border">
                        What is the main purpose of project Hydro?
                    </div></a>

                <a href="/faq/answers/q2">
                    <div class="dashboard-slot" id="animated-border">
                        What is Hydroswap?
                    </div></a>

                <a href="/faq/answers/q3">
                    <div class="dashboard-slot" id="animated-border">
                        What is Aegir wallet?
                    </div></a>

                <a href="/faq/answers/q4">
                    <div class="dashboard-slot" id="animated-border">
                        What is Keresverse?
                    </div></a>

            </div>

            <div class="hydro-dashboard">

                <a href="/faq/answers/q5">
                    <div class="dashboard-slot" id="animated-border">
                        How can Hydro benefit its users?
                    </div></a>

                <a href="/faq/answers/q6">
                    <div class="dashboard-slot" id="animated-border">
                        How to swap Hydro between blockchains?
                    </div></a>

                <a href="/faq/answers/q7">
                    <div class="dashboard-slot" id="animated-border">
                        How to stake Hydro and what are the rewards?
                    </div></a>

                <a href="/faq/answers/q8">
                    <div class="dashboard-slot" id="animated-border">
                        How to add Hydro Token in a Web3 wallet?
                    </div></a>

            </div>

            <div class="hydro-dashboard">

                <a href="/faq/answers/q10">
                    <div class="dashboard-slot" id="animated-border">
                        Did Hydro have any ICO, or received any investment?
                    </div></a>

                <a href="/faq/answers/q11">
                    <div class="dashboard-slot" id="animated-border">
                        How many percent of total supply does the Team hold?
                    </div></a>

            </div>

        </div>
    </section>

<style lang="scss">
.hydro-dashboard {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.dashboard-slot,
.dashboard-slot-stats {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
    padding: 1rem;
    width: 250px;
    height: 100px;
}

.dashboard-slot-stats {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}

.price,
.currency-class {
    text-align: end;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
}

.currency {
    text-align: end;
}

.procentage {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
}

.one-quarter {
    height: var(--ch-mini);
}

#hydro-svg-ticker {
    height: auto;
    width: 90px;
}

.container {
    height: var(--ch-mini);
    position: relative;
    text-align: center;
}

a:hover {
    opacity: 0.5;
}

.questions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
}

.container {
    height: 50rem;
}
</style>
