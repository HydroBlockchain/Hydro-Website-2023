<script>
import aegir from "$lib/images/logos/Aegir-Wallet.svg";
</script>

<div class="half" id="animated-border" style="margin-right:0px;margin-left:15px;">
    <div class="products">
        <img src={aegir} alt="aegir-logo" id="product"/>
        <div class="button-row">
            <a href="https://play.google.com/store/apps/details?id=com.aegirwallet&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" >
                <div class="button" id="aegir-button-play">Playstore</div></a>
            <a href="https://play.google.com/store/apps/details?id=com.aegirwallet&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" >
                <div class="button" id="aegir-button-ios">Appstore</div></a>
        </div>
    </div>
</div>

<style>
.products {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.button-row {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
}

#aegir-button-play,
#aegir-button-ios {
    width: 100px;
    margin: 1rem;
}
</style>
