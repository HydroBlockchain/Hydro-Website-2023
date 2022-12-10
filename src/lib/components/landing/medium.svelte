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
        <div class="blog-title"><a href ="{(blogLink)}" target="_blank" rel="noopener noreferrer">Latest -> {(blogTitle)} </a></div>
        <div class="blog-title"><a href ="{(blogLinkSecond)}" target="_blank" rel="noopener noreferrer"> {(blogTitleSecond)} </a></div>
        <div class="blog-title"><a href ="{(blogLinkThird)}" target="_blank" rel="noopener noreferrer"> {(blogTitleThird)} </a></div>
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
