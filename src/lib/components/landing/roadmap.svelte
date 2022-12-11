<script>

</script>

<div class="full" id="animated-border">
    <div class="information">

        <div class="roadmap">
            <div class="roadmap-card-half" id="animated-border">Q1</div>
            <div class="row">
                <div class="roadmap-card-one" id="animated-border">Q2</div>
                <div class="roadmap-card-one" id="animated-border">Q2</div>
            </div>
            <div class="roadmap-card-half" id="animated-border">Q1</div>
        </div>

        <div class="roadmap">
            <div class="row">
                <div class="roadmap-card-one" id="animated-border">Q2</div>
                <div class="roadmap-card-one" id="animated-border">Q2</div>
            </div>
            <div class="roadmap-card-half" id="animated-border">Q1</div>

            <div class="roadmap-card-half" id="animated-border">Q1</div>
        </div>
    </div>
</div>

<style>
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
}

.roadmap-card-one {
    display: flex;
    justify-content: center;
    margin: 20px;
    width: 230px;
    height: 100px;
}

.roadmap-card-half {
    display: flex;
    justify-content: center;
    margin: 20px;
    width: 500px;
    height: 150px;
}
</style>
