<script>
    // @ts-nocheck
    import Question from "$lib/components/faq/Question.svelte";
    import items from "$lib/json/faq.json";

    let currentActive = 0;
</script>

<svelte:head>
    <title>FAQ</title>
    <meta name="Hydro FAQ" content="Hydro FAQ to answer your questions" />
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
        width: var(--cw-desktop);
        align-items: center;
    }
</style>
