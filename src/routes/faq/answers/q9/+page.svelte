<script>
</script>

<svelte:head>
    <title>Questions?</title>
    <meta name="Questions?" content="Questions?" />
    </svelte:head>

    <section>
        <div class="container" id="animated-border">
            <div class="faq-title">Questions?</div>
            <br><br>
            <div class="faq-answer">
                Answer
            </div>
            <div class="button-row">
                <a href="/faq"><div class="button">Return</div></a>
            </div>
        </div>
    </section>

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50rem;
}

.button {
    width: 150px;
    padding: 0.5rem;
    margin: 1rem;
}

.button-row {
    display: flex;
    flex-direction: row;
}
</style>