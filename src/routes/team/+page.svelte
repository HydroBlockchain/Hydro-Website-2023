<script>
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Team Hydro" content="Hydro Team" />
</svelte:head>

<section>
	<div class="container">
		<div class="team-section">
			<div class="team-card">Saurav</div>
			<div class="team-card">Carl</div>
			<div class="team-card">Jignesh</div>
		</div>
		<div class="team-section">
			<div class="team-card">Briws</div>
			<div class="team-card">Abhimanyu</div>
			<div class="team-card">Jwalin</div>
			<div class="team-card">Abishek</div>
		</div>


	</div>
</section>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: var(--container-width-desktop);
		height: var(--container-height-large);
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

	.team-section{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.team-card{
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 20px;
	}
</style>
