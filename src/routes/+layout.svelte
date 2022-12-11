<script>
import Header from "./Header.svelte";
import Footer from "./Footer.svelte";
import "./styles.scss";
</script>

<div class="app-wrapper">
    <div class="app">
        <Header />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</div>

<style>
.app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
}
</style>
