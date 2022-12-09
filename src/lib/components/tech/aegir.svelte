<script>
import aegir from "$lib/images/logos/Aegir-Wallet.svg";
import item from "./techlinks.json"
</script>

<div class="half" id="animated-border">

    <div class="products">
        <img src={aegir} alt="aegir-logo" id="product"/>

        <div class="button-row">
            <a href="{item[9].link}" target="_blank" rel="noopener noreferrer" >
                <div class="button" id="aegir-button-play">Playstore</div></a>
            <a href="{item[10].link}" target="_blank" rel="noopener noreferrer" >
                <div class="button" id="aegir-button-ios">Appstore</div></a>
        </div>

    </div>

</div>

<style>
.half {
    margin-right: 0px;
    margin-left: 15px;

}

.products {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#aegir-button-play,
#aegir-button-ios {
    width: 100px;
    margin: 1rem;
}

#aegir-button-play {
    background-image: none;
}

#aegir-button-ios {
    background-image: none;
}
</style>
