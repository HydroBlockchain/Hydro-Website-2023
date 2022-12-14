<script>
import {
    createEventDispatcher
} from "svelte";
const dispatch = createEventDispatcher();
export let item;
export let index;
export let current;
</script>

<div class="question-container" id="animated-border" class:active={current == index}>
    <div class="title" on:click={() => dispatch("select", index)}>
        <div class="question-title" class:active={current == index}>{item.question}</div>
    </div>
    <div class="body">{item.answer}</div>
</div>

<style>
.body {
    margin: 1rem;
    font-size: 12px;
    color: #fff;
}

.question-container {
    width: var(--cw-desktop);
    overflow: hidden;
    margin-bottom: 1rem;
}

.question-container.active {
  background-color: var(--button-hover) !important;
  height: auto;
}

.title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    color: #fff;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}

@media screen and (min-width: 768px) {
    .question-container {
        height: 80px;
    }

    .question-title {
        font-size: 24px;
        width: calc(100% - 80px);
        margin-left: 20px;
    }

    .question-title.active {
        width: initial;
    }

    .body {
        margin-top: 20px;
        font-size: 20px;
    }
}
</style>
