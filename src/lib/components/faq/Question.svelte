<script>
// @ts-nocheck
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
export let item;
export let index;
export let current;
</script>

<section>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="question-container" id="card-background" class:active={current==index} on:click={()=> dispatch("select", index)}>
        <div class="title">
            <div class="question-index" class:active={current==index}> {index > 9 ? "" : "0"}{index + 1} </div>
            <div class="question-title" class:active={current==index}> {item.question}</div>
        </div>
        <div class="body">{item.answer}
            <div class="button-row">
                {#if item.link1}
                <a class="button" href={item.link1} target="_blank" rel="noopener noreferrer">{item.linktitle1}</a>
                {/if}
                {#if item.link2}
                <a class="button" href={item.link2} target="_blank" rel="noopener noreferrer">{item.linktitle2}</a>
                {/if}
                {#if item.link3}
                <a class="button" href={item.link3} target="_blank" rel="noopener noreferrer">{item.linktitle3}</a>
                {/if}
            </div>
        </div>

    </div>
</section>

<style lang="scss">
    section {
        width: var(--cw-desktop);
    }

    .question-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        height: 35px;
        padding-top: 1rem;
        padding-bottom: 1rem;
        margin-bottom: 0.5rem;
        overflow: hidden;
        color: var(--text-color);
        transition: height 0.5s ease-in-out;
        cursor: pointer;
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        font-size: 16px;
        cursor: pointer;
        padding-left: 1rem;

    }

    .body {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 14px !important;
        margin-top: 3rem;
        display: none;
        padding-left: 1rem;
    }

    .button-row {
        width: 100%;
        justify-content: space-evenly;
    }

    .question-container.active {
        height: auto;

        .body {
            display: block;
        }
    }

    .question-index,
    .question-index.active {
        display: none;
    }

    .question-title {
        font-size: 20px;
        height: auto;
        width: 100%;
    }

    @media only screen and (max-width: 600px) {
        section {
            width: 100% !important;
        }

        .title {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }

        .body {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            display: none;
            font-size: 14px;
            width: 300px;
            word-wrap: break-word;
        }

        a {
            width: auto !important;
            height: auto !important;
            justify-content: center;
            align-items: center;
            margin: 0.5rem;
            font-size: 10px !important;
        }

        .question-container {
            height: 35px;
            padding-bottom: 2rem;
        }

        .question-title {
            height: 30px;
            font-size: 18px;
        }

        .body {
            display: none;
        }

        .question-container.active {
            .body {
                display: block;
            }
        }

    }

    @media only screen and (max-width: 768px) {
        section {
            width: 100% !important;
        }

        .title {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }

        .body {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            font-size: 14px;
        }

        .question-container {
            height: 30px;
        }

        .question-title {
            height: 30px;
            font-size: 18px;
        }

        .body {
            font-size: 14px;
        }

        .body {
            display: none;
        }

        .question-container.active {
            .body {
                display: block;
            }
        }

    }

    @media only screen and (max-width: 992px) {
        section {
            width: 100% !important;
        }

        .title {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }

        .body {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            font-size: 14px;
        }

        .question-container {
            height: 30px;
        }

        .question-title {
            height: 30px;
        }

        .body {
            font-size: 16px;
        }

        .body {
            display: none;
        }

        .question-container.active {
            .body {
                display: block;
            }
        }
    }
</style>