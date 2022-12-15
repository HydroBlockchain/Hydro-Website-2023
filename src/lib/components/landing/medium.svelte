<script>
// @ts-nocheck
import { mediumData } from "$lib/stores/store";
import Time from "svelte-time";
</script>

<div class="three-quarter" id="card-background">
    <div class="blog-posts">
        <a id="blog-link" href ="{$mediumData.mediumLinkOne}" target="_blank" rel="noopener noreferrer">
            <div class="blog-title" id="card-background-alt">
                <div class="img-link">
                    {$mediumData.mediumTitleOne} </div>
                <div class="pub-date">
                    <Time timestamp={$mediumData.mediumPubOne} format="YY/MM/DD" />
                </div>
            </div></a>
        <a id="blog-link" href ="{$mediumData.mediumLinkTwo}" target="_blank" rel="noopener noreferrer">
            <div class="blog-title" id="card-background-alt">
                <div class="img-link">
                    {$mediumData.mediumTitleTwo} </div>
                <div class="pub-date">
                    <Time timestamp={$mediumData.mediumPubTwo} format="YY/MM/DD" />
                </div>
            </div></a>
        <a id="blog-link" href ="{$mediumData.mediumLinkThree}" target="_blank" rel="noopener noreferrer">
            <div class="blog-title" id="card-background-alt">
                <div class="img-link">
                    {$mediumData.mediumTitleThree} </div>
                <div class="pub-date">
                    <Time timestamp={$mediumData.mediumPubThree} format="YY/MM/DD" />
                </div>
            </div></a>
    </div>
    <div class="blog-posts">
        <a id="blog-link" href ="{$mediumData.mediumLinkFour}" target="_blank" rel="noopener noreferrer">
            <div class="blog-title" id="card-background-alt">
                <div class="img-link">
                    {$mediumData.mediumTitleFour} </div>
                <div class="pub-date">
                    <Time timestamp={$mediumData.mediumPubFour} format="YY/MM/DD" />
                </div>
            </div></a>
        <a id="blog-link" href ="{$mediumData.mediumLinkFive}" target="_blank" rel="noopener noreferrer">
            <div class="blog-title" id="card-background-alt">
                <div class="img-link">
                    {$mediumData.mediumTitleFive} </div>
                <div class="pub-date">
                    <Time timestamp={$mediumData.mediumPubFive} format="YY/MM/DD" />
                </div>
            </div></a>
        <a id="blog-link" href ="{$mediumData.mediumLinkSix}" target="_blank" rel="noopener noreferrer">
            <div class="blog-title" id="card-background-alt">
                <div class="img-link">
                    {$mediumData.mediumTitleSix} </div>
                <div class="pub-date">
                    <Time timestamp={$mediumData.mediumPubSix} format="YY/MM/DD" />
                </div>
            </div></a>
    </div>
</div>

<style>
.three-quarter {
    height: 15rem;
}

.blog-posts {
    display: flex;
    flex-direction: row;
}

.blog-title {
    display: flex;
    background-color: var(--card-background-alt);
    padding: 1rem;
    margin: 0.5rem;
    border-radius: var(--border-radius);
    width: 200px;
    height: 50px;
    flex-direction: row;
}

.img-link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: start;
    font-size: 12px;
}

.pub-date {
    font-size: 9px;
    align-items: flex-start;
    color: var(--text-color-alt);
}

#blog-link {
    cursor: pointer;
    color: var(--link-color);
    font-size: 10px;
    width: 100%;
}

.blog-title:hover {
    background-color: var(--button-hover) !important;
    opacity: 1 !important;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

    .three-quarter {
        height: auto;
        flex-direction: row;
    }

    .blog-posts {
        flex-direction: column;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .blog-title {
        width: 120px;
        height: 50px;
        word-wrap: break-word;
    }

    .img-link {
        font-size: 10px !important;

    }

}
</style>
