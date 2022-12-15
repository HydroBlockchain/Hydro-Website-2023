<script>
//partners
import Sparkpoint from "$lib/images/partners/sparkpoint.png";
import Bloceducare from "$lib/images/partners/bloceducare.svg";
import Vulkania from "$lib/images/partners/vulkania.svg";
import Ethernity from "$lib/images/partners/ethernity.svg";
import item from "../../json/landinglinks.json"
</script>
<div class="half" id="card-background">
    <div class="partners">
        <a href="{item[0].link}" target="_blank" rel="noopener noreferrer">
            <img src={Bloceducare} alt="Bloceducare" id="partner"/>
        </a>
        <a href="{item[1].link}" target="_blank" rel="noopener noreferrer">
            <img src={Sparkpoint} alt="Sparkpoint" id="partner"/>
        </a>
    </div>
    <div class="partners">
        <a href="{item[2].link}" target="_blank" rel="noopener noreferrer">
            <img src={Vulkania} alt="Vulkania" id="partner"/></a>
        <a href="{item[3].link}" target="_blank" rel="noopener noreferrer">
            <img src={Ethernity} alt="Ethernity" id="partner"/>
        </a>
    </div>
</div>

<style>
.half {
    height: var(--ch-mini);
}

.partners {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#partner {
	width: 128px;
	margin: 20px;
}

a:hover {
    opacity: 0.5;
}

@media only screen and (max-width: 600px) {

    .half {
        height: var(--ch-mini);
        margin-right: 0px !important;
        margin-left: 0px !important;
        padding: 1rem;
        width: 327px !important;

    }

    #partner {
        width: 100px;
        height: auto;
    }
}
</style>
