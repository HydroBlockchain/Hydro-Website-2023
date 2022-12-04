<script>
	import saurav from "$lib/images/team/saurav.jpg";
	import carl from "$lib/images/team/carl.jpg";
	import jignesh from "$lib/images/team/jignesh.jpg";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Team Hydro" content="Hydro Team" />
</svelte:head>

<section>
	<div class="container">

		<div class="team-section">

			<div class="team-card">
				<img src={saurav} alt="saurav" />
				<div class="team-name">Saurav Kumar</div>
				<div class="team-title">President</div>
				<div class="team-info">
					<div class="button">linkedin</div>
					<div class="button">twitter</div>
				</div>
			</div>

			<div class="team-card">
				<img src={carl} alt="carl" />
				<div class="team-name">Carl Ulvinen</div>
				<div class="team-title">Vice President</div>
				<div class="team-info">
					<div class="button">linkedin</div>
					<div class="button">twitter</div>
				</div>
			</div>

			<div class="team-card">
				<img src={jignesh} alt="saurav" />
				<div class="team-name">Jignesh Beladiya</div>
				<div class="team-title">Writer</div>
				<div class="team-info">
					<div class="button">linkedin</div>
					<div class="button">twitter</div>
				</div>
			</div>

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
		align-items: center;
		margin: 20px;
	}

	.team-card img{
		width: 128px;
		border-radius: var(--border-radius);
	}
	
	.team-name{

	}

	.team-title{

	}

	.team-info{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.button{
		background-color: var(--button-color);
		font-size: 12px;
		padding: 10px;
		margin: 5px;
		border-radius: var(--border-radius);
	}

	.button:hover{
		background-color: var(--button-color-alt);
	}
</style>
