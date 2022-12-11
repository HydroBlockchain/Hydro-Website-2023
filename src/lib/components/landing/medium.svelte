<script>
// @ts-nocheck
import { mediumData } from "$lib/stores/store";
</script>

<div class="three-quarter" id="animated-border">
    <div class="blog-posts">

        <a id="blog-link" href ="{$mediumData.mediumLinkOne}" target="_blank" rel="noopener noreferrer">
            <div class="blog-title" id="animated-border">
                <div class="img-link">
                    <img id="medium-thumbnail" src="{$mediumData.mediumImgOne}" alt="">
                    {$mediumData.mediumTitleOne} </div>
                <div class="pub-date">{$mediumData.mediumPubOne}</div>
            </div></a>

        <a id="blog-link" href ="{$mediumData.mediumLinkTwo}" target="_blank" rel="noopener noreferrer">
            <div class="blog-title" id="animated-border">
                <div class="img-link">
                    <img id="medium-thumbnail" src="{$mediumData.mediumImgTwo}" alt="">
                    {$mediumData.mediumTitleTwo} </div>
                <div class="pub-date">{$mediumData.mediumPubTwo}</div>
            </div></a>

        <a id="blog-link" href ="{$mediumData.mediumLinkThree}" target="_blank" rel="noopener noreferrer">
            <div class="blog-title" id="animated-border">
                <div class="img-link">
                    <img id="medium-thumbnail" src="{$mediumData.mediumImgTwo}" alt="">
                    {$mediumData.mediumTitleThree} </div>
                <div class="pub-date">{$mediumData.mediumPubThree}</div>
            </div></a>

    </div>
</div>

<style lang=scss>
.three-quarter {
    height: 15rem;
}

.blog-posts {
    display: flex;
    flex-direction: column;
}

.blog-title {
    display: flex;
    background-color: var(--card-background);
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: var(--border-radius);
    width: 42.5rem;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
}

.img-link {
    display: flex;
    flex-direction: row;
    align-items: center;

}

.pub-date {
    font-size: 9px;
    align-items: flex-start;
}

#blog-link {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: var(--link-color);
    font-size: var(--fs-large);
    width: 100%;
}

a:hover {
    opacity: 0.5;
}

#medium-thumbnail {
    width: 40px;
    height: 40px;
    border-radius: var(--border-radius);
    margin-right: 1rem;
}
</style>
