<script>
</script>

<svelte:head>
	<title>FAQ</title>
	<meta name="FAQ" content="FAQ" />
</svelte:head>

<section>
	<div class="container">FAQ</div>
</section>

<style>
	.container {
		display: flex;
		justify-content: center;
		width: var(--container-width-desktop);
		height: var(--container-height-x-large);
		border-radius: var(--border-radius);
		position: relative;
		z-index: 1;
		background: inherit;
		overflow: hidden;
		margin-bottom: 30px;
		color: var(--text-color);
	}

	.container:before {
		content: "";
		position: absolute;
		background: inherit;
		z-index: -1;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: inset 0 0 2000px var(--card-background);
		filter: blur(10px);
		margin: -20px;
	}
</style>
