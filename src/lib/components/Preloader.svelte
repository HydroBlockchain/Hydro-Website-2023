<script>
import { fade } from "svelte/transition";
import { onMount } from "svelte";
import hydroLogo from "$lib/images/logo/hydro-logo.svg"

let start = false
onMount(() => {
    start = true
})
</script>

<div out:fade="{{delay: 0, duration: 100}}" id="preload-wrapper">
    {#if start}
    <img src={hydroLogo} alt="hydro-logo" id="hydro-logo"/>
    {/if}
</div>

<style>
#preload-wrapper {
position: fixed;
bottom: 0;
right: 0;
left: 0;
top: 0;
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 5000;
background-color: var(--preloader);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
}

#hydro-logo{
    width: 200px;
    height: auto;
    margin-bottom: 2rem;
    animation: fadeIn 0.5s;
}

@media only screen and (max-width: 600px) {
    #hydro-logo{
    width: 100px;
}

}
</style>
