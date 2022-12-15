<script>
// @ts-nocheck
    import {fade} from "svelte/transition";
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div in:fade out:fade="{{delay: 200}}" class="backdrop" on:click>
    <div class="nav-mobile-wrapper">
        <div class="navigation">
            <a data-sveltekit-prefetch class="mobile-link" in:fade="{{delay: 50, duration: 400}}" out:fade="{{delay: 350}}" href="/tech">Technology</a>
            <a data-sveltekit-prefetch class="mobile-link" in:fade="{{delay: 150, duration: 400}}" out:fade="{{delay: 250}}" href="/team">Team</a>
            <a data-sveltekit-prefetch class="mobile-link" in:fade="{{delay: 250, duration: 400}}" out:fade="{{delay: 150}}" href="/faq">FAQ</a>
            <a data-sveltekit-prefetch class="mobile-link" in:fade="{{delay: 350, duration: 400}}" out:fade="{{delay: 50}}" href="/">Home</a>
        </div>
    </div>
</div>

<style lang="scss">
#intro-chain{
    margin-top: 150px;
    width: 200px;
    height: 200px;
}
  .backdrop {
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:var(--sidemenu-color);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
  .nav-mobile-wrapper {
    box-sizing: border-box;
    padding-bottom: 5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    text-align: start;
  }
  .navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .mobile-link {
    width: 300px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    text-decoration: none;
    color: var(--text-color);
    margin: 1rem;
    font-size: 2rem;
    transition: 200ms ease-in-out;
    &:hover {
      color: rgb(129, 129, 129);
    }
  }
</style>