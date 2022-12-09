<script>
//partners
import bloceducare from "$lib/images/partners/bloceducare.svg";
import ethernity from "$lib/images/partners/ethernity.svg";
import sparkpoint from "$lib/images/partners/sparkpoint.png";
import vulkania from "$lib/images/partners/vulkania.svg";
import item from "../../json/landinglinks.json"
</script>
<div class="half" id="animated-border">
    <div class="title">Partners</div>
    <div class="partners">
        <a href="{item[0].link}" target="_blank" rel="noopener noreferrer">
            <img src={bloceducare} alt="bloceducare" id="partner"/></a>
        <a href="{item[1].link}" target="_blank" rel="noopener noreferrer">
            <img src={vulkania} alt="vulkania" id="partner"/></a>
    </div>
    <div class="partners">
        <a href="{item[2].link}" target="_blank" rel="noopener noreferrer">
            <img src={sparkpoint} alt="sparkpoint" id="partner"/></a>
        <a href="{item[3].link}" target="_blank" rel="noopener noreferrer">
            <img src={ethernity} alt="Ethernity" id="partner"/></a>
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
