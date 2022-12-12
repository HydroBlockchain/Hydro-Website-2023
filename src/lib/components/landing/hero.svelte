<script>
import hydroDrop from "$lib/images/logo/hydro-drop.svg";
</script>

<div class="full" id="animated-border">
    <div class="intro-hero">
        <div class="hero-column">
            <div class="hero-text">
                Web3 Architects building the future of GameFi. <br>
                We are DeFi, We are Hydro.
            </div>
        </div>

        <img src={hydroDrop} alt="ecosystem" id="intro-chain"/>
    </div>
</div>

<style>
.full {
    height: 25rem;
}

.intro-hero {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 1rem;
    justify-content: space-evenly;
}

#intro-chain {
    width: 300px;
    height: 300px;
}

.hero-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-text {
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    margin-left: 10rem;
}
</style>
