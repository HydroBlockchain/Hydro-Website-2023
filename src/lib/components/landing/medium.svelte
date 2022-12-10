<script>
// @ts-nocheck
import { mediumData } from "$lib/stores/store";
</script>

<div class="three-quarter" id="animated-border">
    <div class="blog-posts">
        <div class="blog-title">
            <a href ="{$mediumData.mediumLinkOne}" target="_blank" rel="noopener noreferrer">{$mediumData.mediumTitleOne} </a></div>
        <div class="blog-title">
            <a href ="{$mediumData.mediumLinkTwo}" target="_blank" rel="noopener noreferrer"> {$mediumData.mediumTitleTwo} </a></div>
        <div class="blog-title">
            <a href ="{$mediumData.mediumLinkThree}" target="_blank" rel="noopener noreferrer"> {$mediumData.mediumTitleThree} </a></div>
    </div>
</div>

<style>
.three-quarter {
    height: 15rem;
}

.blog-posts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.blog-title {
    display: flex;
    margin-top: 1rem;
}

.blog-title a {
    cursor: pointer;
    color: var(--link-color);
    font-size: var(--fs-large);
}
</style>
