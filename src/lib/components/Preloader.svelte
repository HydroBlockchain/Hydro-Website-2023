.
<script>
import {
    fade
} from "svelte/transition";
import {
    onMount
} from "svelte";
import logo from "$lib/images/logo/hydro-logo.svg"

let start = false
onMount(() => {
    start = true
})
</script>

<div in:fade="{{delay: 0, duration: 0}}" out:fade="{{delay: 1000}}" id="preload-wrapper">
    {#if start}
    <img src={logo} alt="hydro-logo" id="hydro-logo"/>
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
    justify-content: center;
    align-items: center;
    z-index: 5000;
    background-color: #000;
}

#hydro-logo {
    width: 128px;
    height: 128px;
    animation: fadeIn 0.2s;
}
</style>
