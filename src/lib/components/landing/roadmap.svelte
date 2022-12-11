<script>

</script>

<div class="full" id="animated-border">
    <div class="information">

        <div class="roadmap">
            <div class="roadmap-card-half" id="animated-border">
                <div class="half-card-structure">
                    <div class="card-row" id="quarter">Q1</div>
                    <div class="card-row" id="what">What</div>
                    <div class="card-row" id="progress">ProgressBar</div>
                </div>
            </div>
            <div class="row">
                <div class="roadmap-card-one" id="animated-border">
                    <div class="one-card-structure">
                        <div class="card-row-small" id="quarter">Q1</div>
                        <div class="card-row-small" id="what-small">What</div>
                        <div class="card-row-small" id="progress">ProgressBar</div>
                    </div>
                </div>
                <div class="roadmap-card-one" id="animated-border">
                    <div class="one-card-structure">
                        <div class="card-row-small" id="quarter">Q1</div>
                        <div class="card-row-small" id="what-small">What</div>
                        <div class="card-row-small" id="progress">ProgressBar</div>
                    </div>
                </div>

            </div>
            <div class="roadmap-card-half" id="animated-border">
                <div class="half-card-structure">
                    <div class="card-row" id="quarter">Q1</div>
                    <div class="card-row" id="what">What</div>
                    <div class="card-row" id="progress">ProgressBar</div>
                </div>
            </div>
        </div>

        <div class="roadmap">
            <div class="row">
                <div class="roadmap-card-one" id="animated-border">
                    <div class="one-card-structure">
                        <div class="card-row-small" id="quarter">Q1</div>
                        <div class="card-row-small" id="what-small">What</div>
                        <div class="card-row-small" id="progress">ProgressBar</div>
                    </div>
                </div>
                <div class="roadmap-card-one" id="animated-border">
                    <div class="one-card-structure">
                        <div class="card-row-small" id="quarter">Q1</div>
                        <div class="card-row-small" id="what-small">What</div>
                        <div class="card-row-small" id="progress">ProgressBar</div>
                    </div>
                </div>
            </div>
            <div class="roadmap-card-half" id="animated-border">
                <div class="half-card-structure">
                    <div class="card-row" id="quarter">Q1</div>
                    <div class="card-row" id="what">What</div>
                    <div class="card-row" id="progress">ProgressBar</div>
                </div>
            </div>

            <div class="roadmap-card-half" id="animated-border">
                <div class="half-card-structure">
                    <div class="card-row" id="quarter">Q1</div>
                    <div class="card-row" id="what">What</div>
                    <div class="card-row" id="progress">ProgressBar</div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
#progress {
    justify-content: flex-end;
    align-items: end;
    text-align: end;
    font-size: 10px;
}

#what, #what-small {
    justify-content: center;
    align-items: center;
    text-align: center;
}

#quarter {
    justify-content: flex-start;
    align-self: start;
    text-align: start;
    font-size: 10px;
}

.card-row {
    width: 450px;
    display: flex;
    flex-direction: row;
    margin: 0.5rem;
}

.card-row-small {
    width: 200px;
    display: flex;
    flex-direction: row;
}


.half-card-structure {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
}

.one-card-structure {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
}


.row {
    display: flex;
    flex-direction: row;
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

.roadmap-card-one {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 230px;
    height: 120px;
}

.roadmap-card-half {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 500px;
    height: 150px;
}
</style>
