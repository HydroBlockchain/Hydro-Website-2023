<script>
// @ts-nocheck
import {
    onMount
} from "svelte";
//API Call to Medium
const apiURL = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fprojecthydro.medium.com%2Ffeed";
let data = []

onMount(async function() {
    const response = await fetch(apiURL);
    data = await response.json();
    getData()
});

//Get the latest Article
let blogTitle = [];
let blogLink = [];
let blogTitleSecond = [];
let blogLinkSecond = [];
let blogTitleThird = [];
let blogLinkThird = [];
async function getData() {
    const response = await fetch(apiURL);
    if (response) {
        data = await response.json();
        blogTitle = data.items[0].title;
        blogLink = data.items[0].link;
        blogTitleSecond = data.items[1].title;
        blogLinkSecond = data.items[1].link;
        blogTitleThird = data.items[2].title;
        blogLinkThird = data.items[2].link;
    } else {
        console.log("Blog query error");
    }
}
</script>

<div class="three-quarter" id="animated-border">
    <div class="blog-posts">
        <div class="latest">Lastest Hydro Blog Post</div>
        <div class="blog-title"><a href ="{(blogLink)}" target="_blank" rel="noopener noreferrer"> {(blogTitle)} </a></div>
        <div class="blog-title"><a href ="{(blogLinkSecond)}" target="_blank" rel="noopener noreferrer"> {(blogTitleSecond)} </a></div>
        <div class="blog-title"><a href ="{(blogLinkThird)}" target="_blank" rel="noopener noreferrer"> {(blogTitleThird)} </a></div>
    </div>
</div>

<style>
.three-quarter {
    height: var(--container-height-small);
}
</style>
