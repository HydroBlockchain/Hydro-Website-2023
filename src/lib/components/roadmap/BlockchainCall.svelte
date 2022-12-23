<script>
</script>
<!-- Credit to http://codepen.io/nw/pen/EKdBKx -->
<div class="full" id="card-background">
    <div class="statement" id="cta">GameFi is at the core of the Hydro Ecosystem. <br>
                                    Join us in the Keresverse where you can manifest your skills to earn.
        <a class="button" data-sveltekit-preload-data="hover" href="/tech">Explore Web3 with us!</a></div>
    <div class="statement">
        <div class="container">
            <div class="holder"><div class="box" /></div>
            <div class="holder"><div class="box" /></div>
            <div class="holder"><div class="box" /></div>
        </div>
    </div>
</div>

<style lang="scss">
.full {
    height: var(--ch-mini);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.statement {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}

#cta {
    margin-left: 4rem;
    justify-content: flex-start !important;
    align-items: flex-start !important;
}

.statement a {
    margin-top: 2rem;
}

.container {
    padding: 1rem;
    padding-left: 4rem;
    width: 300px;
    height: 100%;
    transform: translate(-50%, -50%);
    transform-style: preserve-3d;
    perspective: 2000px;
    transform: rotateX(-30deg) rotateY(-45deg);
}

.holder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-style: preserve-3d;
    transform: translate3d(0em, 3em, 1.5em);
}

.holder:last-child {
    transform: rotateY(-90deg) rotateX(90deg) translate3d(0, 3em, 1.5em);
}

.holder:first-child {
    transform: rotateZ(-90deg) rotateX(-90deg) translate3d(0, 3em, 1.5em);
}

.holder:nth-child(1) .box {
    background-color: var(--pillar-1);
}

.holder:nth-child(1) .box:before {
    background-color: var(--pillar-2);
}

.holder:nth-child(1) .box:after {
    background-color: var(--pillar-3);
}

.holder:nth-child(2) .box {
    background-color: var(--pillar-4);
}

.holder:nth-child(2) .box:before {
    background-color: var(--pillar-5);
}

.holder:nth-child(2) .box:after {
    background-color: var(--pillar-6);
}

.holder:nth-child(3) .box {
    background-color: var(--pillar-7);
}

.holder:nth-child(3) .box:before {
    background-color: var(--pillar-8);
}

.holder:nth-child(3) .box:after {
    background-color: var(--pillar-9);
}

.box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-style: preserve-3d;
    animation: ani-box 10s infinite;
    width: 3em;
    height: 3em;
}

.box:before,
.box:after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
}

.box:before {
    left: 100%;
    bottom: 0;
    transform: rotateY(90deg);
    transform-origin: 0 50%;
}

.box:after {
    left: 0;
    bottom: 100%;
    transform: rotateX(90deg);
    transform-origin: 0 100%;
}

@keyframes ani-box {
    8.33% {
        transform: translate3d(-50%, -50%, 0) scaleZ(2);
    }
    16.7% {
        transform: translate3d(-50%, -50%, -3em) scaleZ(1);
    }
    25% {
        transform: translate3d(-50%, -100%, -3em) scaleY(2);
    }
    33.3% {
        transform: translate3d(-50%, -150%, -3em) scaleY(1);
    }
    41.7% {
        transform: translate3d(-100%, -150%, -3em) scaleX(2);
    }
    50% {
        transform: translate3d(-150%, -150%, -3em) scaleX(1);
    }
    58.3% {
        transform: translate3d(-150%, -150%, 0) scaleZ(2);
    }
    66.7% {
        transform: translate3d(-150%, -150%, 0) scaleZ(1);
    }
    75% {
        transform: translate3d(-150%, -100%, 0) scaleY(2);
    }
    83.3% {
        transform: translate3d(-150%, -50%, 0) scaleY(1);
    }
    91.7% {
        transform: translate3d(-100%, -50%, 0) scaleX(2);
    }
    100% {
        transform: translate3d(-50%, -50%, 0) scaleX(1);
    }
}

@media only screen and (max-width: 600px) {
    .full {
    justify-content: center;
}

#cta {
    display: none;
}
}

@media only screen and (max-width: 768px) {
    .full {
    justify-content: center;
}

#cta {
    display: none;
}
}

@media only screen and (max-width: 992px) {
    .full {
    justify-content: center;
}

#cta {
    display: none;
}

}
</style>
