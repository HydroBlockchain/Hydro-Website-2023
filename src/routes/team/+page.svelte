<script>
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Team Hydro" content="Hydro Team" />
</svelte:head>

<section>
	<div class="container">
		TEAM
	</div>
</section>

<style>
	.container {
		display: flex;
		justify-content: center;
		width: 62rem;
		height: 30rem;
		border-radius: 5px;
		position: relative;
		z-index: 1;
		background: inherit;
		overflow: hidden;
		margin-bottom: 30px;
		color: #fff;
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
		box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
		filter: blur(10px);
		margin: -20px;
	}
</style>
