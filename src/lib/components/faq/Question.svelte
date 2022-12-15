<script>
  // @ts-nocheck
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let item;
  export let index;
  export let current;
</script>

<div class="question-container" class:active={current == index}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="title" on:click={() => dispatch("select", index)}>
    <p class="question-index" class:active={current == index}>
      {index > 9 ? "" : "0"}{index + 1}
    </p>
    <span class="question-title" class:active={current == index}
      >{item.question}</span
    >
  </div>
  <div class="body">{item.answer}</div>
</div>

<style>
  .question-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 81rem;
    height: 150px auto;
    padding: 2rem;
    margin-bottom: 1rem;
    overflow: hidden;
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    color: var(--text-color);
    transition: height 0.5s ease-in-out;
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
    margin: 1rem;
  }

  .question-container.active {
    height: auto;
  }

  .question-index.active {
    display: none;
  }

  .question-container {
    height: 50px;
    margin: 1rem;
  }

  .question-index {
    display: none;
  }

  .question-title {
    font-size: 32px;
    margin-bottom: 1rem;
    width: 100%;
  }

  .question-title.active {
    width: initial;
  }

  .body {
    margin-top: 20px;
    font-size: 24px;
  }

  .question-index.active {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    .question-container {
    width: 300px;
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
    margin: 1rem;
  }

  .question-container.active {
    height: auto;
  }

  .question-index.active {
    display: none;
  }

  .question-container {
    height: 50px;
    margin: 1rem;
  }

  .question-index {
    display: none;
  }

  .question-title {
    font-size: 18px;
    margin-bottom: 2rem;
  }

  .question-title.active {
    width: initial;
  }

  .body {
    margin-top: 2rem;
    font-size: 14px;
  }

  .question-index.active {
    display: none;
  }
  }
</style>
