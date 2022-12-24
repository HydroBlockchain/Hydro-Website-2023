<script>
	import hydroDrop from '$lib/images/logo/hydro-drop.svg';
</script>
<div class="full" id="card-background">
    <div class="intro-hero">
        <div class="hero-column">
            <div class="hero-text">
                Web3 Architects building the future of GameFi. <br>
                We are DeFi, We are Hydro.
            </div>
        </div>
        <img src={hydroDrop} alt="hydro-drop" id="intro-chain">
        </div>
    </div>
<style>
    .full {
        height: 22rem;
    }

    .intro-hero {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 1rem;
        justify-content: space-evenly;
    }

    #intro-chain {
        width: 300px;
        height: 300px;
    }

    .hero-column {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .hero-text {
        display: flex;
        justify-content: flex-end;
        font-size: 20px;
        margin-left: 10rem;
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {

        #intro-chain {
            width: 200px !important;
            height: 200px !important;
        }

        .full {
            height: 25rem !important;
        }

        .intro-hero {
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        .hero-column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .hero-text {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-top: 2rem;
            margin-bottom: 2rem;
            margin-left: 3rem;
            font-size: 16px;
        }

        #intro-chain {
            width: 200px;
            height: 200px;
            margin-bottom: 1rem;
        }

    }

    @media only screen and (max-width: 768px) {
        .intro-hero {
            display: flex;
            flex-direction: column-reverse !important;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        .hero-column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .hero-text {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-top: 1rem;
            margin-left: 3rem;
            font-size: 16px;
        }

        #intro-chain {
            width: 200px;
            height: 200px;
            margin-bottom: 1rem;
        }

    }


    @media only screen and (max-width: 992px) {
        .intro-hero {
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        .hero-column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .hero-text {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-top: 1rem;
            margin-left: 3rem;
            font-size: 16px;
        }

        #intro-chain {
            width: 200px;
            height: 200px;
        }
    }


    @media only screen and (max-width: 1400px) {
        .intro-hero {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        .hero-column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .hero-text {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-top: 1rem;
            margin-left: 3rem;
            font-size: 16px;
        }

        #intro-chain {
            width: 256px;
            height: 256px;
            margin-left: 1rem;
            margin-right: 1rem;
        }
    }
</style>