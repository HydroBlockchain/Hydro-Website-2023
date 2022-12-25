<script>
    // @ts-nocheck
    import { mediumData } from "$lib/stores/store";
    import Time from "svelte-time";
</script>

<div class="three-quarter" id="card-background">
    <div class="blog-column" id="first-blog-post-column">
        <a class="blog-link" href="{$mediumData.mediumLinkOne}" target="_blank" rel="noopener noreferrer">
            <div class="blog-card" id="card-background-alt">
                <div class="blog-title">
                    {$mediumData.mediumTitleOne} </div>
                <div class="pub-date">
                    <Time timestamp={$mediumData.mediumPubOne} format="MM/DD" />
                </div>
            </div>
        </a>
        <a class="blog-link" href="{$mediumData.mediumLinkTwo}" target="_blank" rel="noopener noreferrer">
            <div class="blog-card" id="card-background-alt">
                <div class="blog-title">
                    {$mediumData.mediumTitleTwo} </div>
                <div class="pub-date">
                    <Time timestamp={$mediumData.mediumPubTwo} format="MM/DD" />
                </div>
            </div>
        </a>
        <a class="blog-link" href="{$mediumData.mediumLinkThree}" target="_blank" rel="noopener noreferrer">
            <div class="blog-card" id="card-background-alt">
                <div class="blog-title">
                    {$mediumData.mediumTitleThree} </div>
                <div class="pub-date">
                    <Time timestamp={$mediumData.mediumPubThree} format="MM/DD" />
                </div>
            </div>
        </a>
    </div>
    <div class="blog-column" id="second-blog-post-column">
        <a class="blog-link" href="{$mediumData.mediumLinkFour}" target="_blank" rel="noopener noreferrer">
            <div class="blog-card" id="card-background-alt">
                <div class="blog-title">
                    {$mediumData.mediumTitleFour} </div>
                <div class="pub-date">
                    <Time timestamp={$mediumData.mediumPubFour} format="MM/DD" />
                </div>
            </div>
        </a>
        <a class="blog-link" href="{$mediumData.mediumLinkFive}" target="_blank" rel="noopener noreferrer">
            <div class="blog-card" id="card-background-alt">
                <div class="blog-title">
                    {$mediumData.mediumTitleFive} </div>
                <div class="pub-date">
                    <Time timestamp={$mediumData.mediumPubFive} format="MM/DD" />
                </div>
            </div>
        </a>
        <a class="blog-link" href="{$mediumData.mediumLinkSix}" target="_blank" rel="noopener noreferrer">
            <div class="blog-card" id="card-background-alt">
                <div class="blog-title">
                    {$mediumData.mediumTitleSix} </div>
                <div class="pub-date">
                    <Time timestamp={$mediumData.mediumPubSix} format="MM/DD" />
                </div>
            </div>
        </a>
    </div>
</div>

<style>
    .three-quarter {
    height: 15rem;
    }

    .blog-column {
    display: flex;
    flex-direction: row;
    }

    .blog-link {
    width: 100%;
    font-size: 10px;
    cursor: pointer;
    color: var(--link-color);
    }

    .blog-card {
    display: flex;
    flex-direction: row;
    width: 200px;
    height: 50px;
    padding: 1rem;
    margin: 0.5rem;
    background-color: var(--card-background-alt);
    border-radius: var(--border-radius);
    }

    .blog-card:hover {
    background-color: var(--button-hover) !important;
    }

    .blog-title {
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

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
    .three-quarter {
    height: auto;
    flex-direction: row;
    }

    .blog-column {
    flex-direction: column;
    }

    #first-blog-post-column {
    margin-left: 1rem;
    }

    #second-blog-post-column {
    margin-right: 1rem;
    }

    .blog-card {
    width: 120px !important;
    height: 70px !important;
    word-wrap: break-word;
    padding: 0.5rem;
    }
    }

    @media only screen and (max-width: 768px) {

    .three-quarter {
    height: auto;
    flex-direction: row;
    }

    .blog-column {
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;
    }

    .blog-card {
    width: 250px;
    height: 50px;
    word-wrap: break-word;
    }
    }
</style>