<script>
    import item from "$lib/json/whitepapers.json"
</script>
<div class="full" id="card-background">
    <div class="left">
        <div class="building-statement">
            Anyone can build ontop of the Hydro Protocols, Start with our whitepapers!
        </div>
    </div>
    <div class="right">
        <div class="protocol-row">
            <a href="{item[0].link}" target="_blank" rel="noopener noreferrer">
                <div class="protocol-card" id="card-background-alt">Raindrop</div>
            </a>
            <a href="{item[1].link}" target="_blank" rel="noopener noreferrer">
                <div class="protocol-card" id="card-background-alt">Snowflake</div>
            </a>
        </div>
        <div class="protocol-row">
            <a href="{item[2].link}" target="_blank" rel="noopener noreferrer">
                <div class="protocol-card" id="card-background-alt">Ice</div>
            </a>
            <a href="{item[3].link}" target="_blank" rel="noopener noreferrer">
                <div class="protocol-card" id="card-background-alt">Tide</div>
            </a>
            <a href="{item[4].link}" target="_blank" rel="noopener noreferrer">
                <div class="protocol-card" id="card-background-alt">Keresia</div>
            </a>
        </div>
    </div>
</div>

<style>
    .full {
        height: 10rem;
        flex-direction: row;
    }

    .left {
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
    }

    .right {
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 50%;
    }

    .protocol-row {
        display: flex;
        justify-content: center;
        flex-direction: row;
    }

    .protocol-card {
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        padding: 1rem;
        margin: 0.5rem;
    }

    .building-statement {
        display: flex;
        justify-content: center;
        margin: 2rem;
        font-size: 20px;
    }

    .protocol-card:hover {
        background-color: var(--button-hover) !important;
        opacity: 1 !important;
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {

        .full {
            height: auto;
            flex-direction: column;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .protocol-row {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
        }

        .right,
        .left {
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 300px;
        }

        .protocol-card {
            width: auto;
            margin: 0.5rem;
        }

        .building-statement {
            font-size: 16px;
        }

    }

    @media only screen and (max-width: 768px) {

        .full {
            height: auto;
            flex-direction: column;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .protocol-row {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
        }

        .right,
        .left {
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 300px;
        }

        .protocol-card {
            width: auto;
            margin: 0.5rem;
        }

        .building-statement {
            font-size: 16px;
        }

    }

    @media only screen and (max-width: 992px) {

        .full {
            height: auto;
            flex-direction: column;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .protocol-row {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
        }

        .right,
        .left {
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 300px;
        }

        .protocol-card {
            width: auto;
            margin: 0.5rem;
        }

        .building-statement {
            font-size: 16px;
        }

    }

    @media only screen and (max-width: 1200px) {

        .full {
            height: auto;
            flex-direction: column;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .protocol-row {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
        }

        .right,
        .left {
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 300px;
        }

        .protocol-card {
            width: auto;
            margin: 0.5rem;
        }

        .building-statement {
            font-size: 16px;
        }

    }
</style>