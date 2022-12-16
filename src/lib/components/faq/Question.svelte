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
<div class="question-container" class:active={current == index} on:click={() => dispatch("select", index)}>
  <div class="title" >
    <div class="question-index" class:active={current == index}> {index > 9 ? "" : "0"}{index + 1} </div>
    <div class="question-title" class:active={current == index}> {item.question}</div> 
  </div>
  <div class="body">{item.answer}</div>
</div>
</section>

<style>
  section{
    width: var(--cw-desktop);
  }
  .question-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 50px;
    padding: 1rem;
    margin-bottom: 0.5rem;
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
    height: 50px;
    cursor: pointer;
  }

  .body {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 14px;
    margin: 1rem;
    margin-top: 1.5rem;
    font-size: 20px;
  }

  .question-container.active {
    height: auto;
  }

  .question-index,
  .question-index.active {
    display: none;
  }

  .question-title {
    font-size: 32px;
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    section{
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
    height: 50px;
  }

  .question-title {
    height: 50px;
    font-size: 18px;
  }

  .body {
    font-size: 14px;
  }
  }
</style>
