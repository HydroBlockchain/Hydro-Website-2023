<script>
//keresverse
import keres from "$lib/images/logos/Keresverse.svg";
import jixta from "$lib/images/keresverse/jixta.png"
import vox from "$lib/images/keresverse/vox.png"
import wex from "$lib/images/keresverse/wex.svg"
import item from "./techlinks.json"
</script>

<div class="three-quarter" id="animated-border">
    <div class="jixta">
        <img src={vox} alt="keres-agent" id="vox"/>

        <div class="middle">
            <img src={wex} alt="keres-logo" id="wex"/>
            <img src={keres} alt="keres-logo" id="keresverse-logo"/>
            Manifest your skills to earn!
            <a href="{item[0].link}" target="_blank" rel="noopener noreferrer" >
                <div class="button" id="keres-play-button">Play</div></a>
        </div>

        <img src={jixta} alt="keres-agent" id="jixta"/>
    </div>
</div>

<style>
.three-quarter {
    margin-right: 15px;
    margin-left: 0px;
}

#keresverse-logo {
    height: 50px;
    animation: fadeIn 2.5s;
    margin-bottom: 1rem;
}

#jixta {
    height: 300px;
    animation: fadeIn 2.5s;
}

#vox {
    height: 300px;
    margin-left: -2rem;
    animation: fadeIn 2.5s;
}

#wex {
    height: 130px;
    animation: fadeIn 2.5s;
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
    font-size: 14px;
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
    color: #212124;
    width: 100px;
    animation: fadeIn 2.5s;
}
</style>
