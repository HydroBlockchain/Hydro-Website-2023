<script>
import hydroDrop from "$lib/images/logo/hydro-drop-white.svg"
import metamask from "$lib/images/icons/metamask.svg"
</script>
<div class="metamask-wrapper">
    <div class="metamask-container">
        <div class="metamask-notice">
            <div class="metamask-notice-title">
                Hydro Token Tool
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src={hydroDrop} id="hydro-logo">
            </div>

            The Hydro Token Tool Can Add Hydro Tokens on all supported networks. <br>
            In order to use it you have to first download Metamask. <br>
            Once you have, head on back here to add the Hydro Token automatically.
            <h3>
                The Hydro token tool only reads public data and asks for permission to add the Hydro Token Smart
                contract.
                No information is stored or sent to any servers</h3>
        </div>

    </div>
    <a href="https://metamask.io" target="_blank" rel="noopener noreferrer">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={metamask} id="metamask-logo">
        Download Metamask</a>
</div>

<style>
.metamask-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.metamask-container {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-top: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 1rem;
}

.metamask-notice {
    width: auto;
    height: auto;
    padding: 1rem;
    background-color: var(--button-color);
    backdrop-filter: blur(10px);
    border-radius: var(--border-radius);
    font-size: 14px;
}

.metamask-notice-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    margin-bottom: 0.5rem;
}

#metamask-logo {
    margin-right: 0.5rem;
    width: 32px;
    height: auto;
}

#hydro-logo {
    width: 64px;
    height: auto;
}

.metamask-notice h3 {
    text-align: end;
    font-size: 10px;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-top: 2.5rem;
    color: var(--text-color-alt);
}

a {
    background: var(--button-color);
    backdrop-filter: blur(10px);
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
}

a:hover {
    background-color: var(--button-hover) !important;
}

@media only screen and (max-width: 600px) {

    .metamask-container {
        padding-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 1rem;
    }

    .metamask-notice {
        width: auto;
        height: auto;
    }

    a {
        margin-top: 0rem;
        margin-bottom: 0rem;
        width: 250px;
    }

    .metamask-container {
        width: auto;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-left: 0;
        padding-right: 0;
        margin: 1rem;
    }

}
</style>
