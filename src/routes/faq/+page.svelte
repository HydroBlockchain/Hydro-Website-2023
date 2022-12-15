<script>
    // @ts-nocheck
    import Question from "$lib/components/faq/Question.svelte";
    import items from "$lib/json/faq.json";

    let currentActive = 0;
</script>

<svelte:head>
    <title>FAQ</title>
    <meta name="FAQ" content="FAQ" />
</svelte:head>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<section>
    <div class="container">
        {#each items as item, index}
            <Question
                {item}
                {index}
                on:select={(e) => (currentActive = e.detail)}
                current={currentActive}
            />
        {/each}
    </div>
</section>

<style>
    .container {
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 85rem;
    }

    .answer {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 14px;
        margin: 1rem;
    }

    .question {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 20px;
    }

    #team-card {
        width: 81rem;
        height: 150px auto;
        padding: 2rem;
        margin-bottom: 1rem;
        overflow: hidden;
        background-color: var(--animated-bg);
        border-radius: var(--border-radius);
        color: var(--text-color);
    }

    @media only screen and (max-width: 600px) {
        #team-card {
            width: 300px;
        }

        #team-card:active {
            height: 300px;
        }

        .question {
            font-size: 16px;
        }

        .answer {
            font-size: 12px;
        }
    }
</style>
