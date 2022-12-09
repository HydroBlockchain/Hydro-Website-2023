<script>
//partners
import bloceducare from "$lib/images/partners/bloceducare.svg";
import ethernity from "$lib/images/partners/ethernity.svg";
import sparkpoint from "$lib/images/partners/sparkpoint.png";
import vulkania from "$lib/images/partners/vulkania.svg";
</script>
<div class="half" id="animated-border">
    <div class="title">Partners</div>
    <div class="partners">
        <a href="https://www.blocedu.care/" target="_blank" rel="noopener noreferrer"><img src={bloceducare} alt="bloceducare" id="partner"/></a>
        <a href="https://vulkania.io/coins/hydro" target="_blank" rel="noopener noreferrer"><img src={vulkania} alt="vulkania" id="partner"/></a>
    </div>
    <div class="partners">
        <a href="https://sparkpoint.io/" target="_blank" rel="noopener noreferrer"><img src={sparkpoint} alt="sparkpoint" id="partner"/></a>
        <a href="https://ethernity.live/" target="_blank" rel="noopener noreferrer"><img src={ethernity} alt="Ethernity" id="partner"/></a>
    </div>
</div>

<style>
.half {
    height: var(--container-height-mini);
}

.partners {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
