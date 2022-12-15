<script>
    // @ts-nocheck
    import items from "$lib/json/faq.json";
    import Hoverable from "$lib/components/faq/Hoverable.svelte";
</script>

<svelte:head>
    <title>FAQ</title>
    <meta name="FAQ" content="FAQ" />
</svelte:head>

<section>
    <div class="container">
    {#each items as item (item.id)}
        <Hoverable let:hovering={active}>
            <div class:active id="team-card">
                {#if active}
                <div class="answer">
                    {item.question} <br><br>
                    {item.answer}
                </div>
                {:else}
                <div class="question">
                    {item.question}
                </div>
                {/if}
            </div>
        </Hoverable>
    {/each}
</div>
</section>

<style>
    .container{
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
    .answer{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 14px;
        margin: 1rem;
    }
    .question{
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
    #team-card:hover {
        background-color: var(--button-hover) !important;
        opacity: 1 !important;
        height: 200px;
        cursor: pointer;
    }

    #team-card:active {
        background-color: var(--button-hover) !important;
        opacity: 1 !important;
        height: 200px;
    }

    @media only screen and (max-width: 600px) {

        #team-card {
        width: 300px;
    }

    #team-card:active{
        height: auto;
    }

    .question{
        font-size: 16px;
    }

    .answer{
        font-size: 12px;
    }

}
</style>
