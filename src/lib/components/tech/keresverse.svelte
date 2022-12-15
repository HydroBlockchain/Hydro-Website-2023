<script>
import item from "$lib/json/techlinks.json"
import Jixta from "$lib/images/keresverse/jixta.png"
import Vox from "$lib/images/keresverse/vox.png"
import Wex from "$lib/images/keresverse/wex.svg"
import Keresverse from "$lib/images/keresverse/keresverse-logo.svg"
</script>

<div class="three-quarter" id="card-background">
    <div class="jixta">
        <img src={Vox} alt="keres-agent" id="vox"/>

        <div class="middle">
            <img src={Wex} alt="Wex" id="wex"/>
            <img src={Keresverse} alt="Keresverse" id="keresverse-logo"/>
            Ave Ixa Keres!
            <a href="{item[0].link}" target="_blank" rel="noopener noreferrer" >
                <div class="button" id="keres-play-button">Play 2 Earn</div></a>
        </div>

        <img src={Jixta} alt="keres-agent" id="jixta"/>
    </div>
</div>

<style>
.three-quarter {
    margin-right: 15px;
    margin-left: 0px;
}

#keresverse-logo {
    height: 50px;
    margin-bottom: 1rem;
}

#jixta {
    height: 300px;
}

#vox {
    height: 300px;
    margin-left: -2rem;
}

#wex {
    height: 130px;
    width: 130px;
}

.jixta {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}

.middle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: var(--fs-small);
    margin-bottom: 5rem;
}

.middle a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

}

#keres-play-button {
    margin-top: 3rem;
    width: 100px;
}

@media only screen and (max-width: 600px) {

    .three-quarter {
        margin-right: 0px;
        margin-left: 0px;
    }

    #jixta,
    #vox {
        display: none;
        margin: 0;
    }

    #vox {
        margin-left: 0rem;
    }

    .jixta {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

}
</style>
