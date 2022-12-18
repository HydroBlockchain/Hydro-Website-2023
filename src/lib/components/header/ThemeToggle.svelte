<script>
    import Sun from "$lib/images/icons/sun.svg"
    import Moon from "$lib/images/icons/moon.svg"

	let darkMode = false;
	function toggle() {
        darkMode = !darkMode;
        window.document.body.classList.toggle('dark');
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="themeDiv" on:click={toggle}>
	{#if darkMode }
    <img src={Moon} alt="bitcoin" id="themeToggle" />
	{:else}
    <img src={Sun} alt="bitcoin" id="themeToggle" />
	{/if}
</div>

<style>
.themeDiv{
    width: 100px;
    margin-bottom: 3px;
}
#themeToggle{
    width: 32px;
    height: 32px;
}

</style>