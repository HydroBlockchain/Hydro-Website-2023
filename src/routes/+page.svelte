<script>
	import hydro from "$lib/images/white-logo.svg";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="container">
		<img src={hydro} alt="hydro-logo" />
	</div>
	<div class="multiple-containers">
		<div class="container-first">Blockchains</div>
		<div class="container-second">Exchanges</div>
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

	.container-first {
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
		margin-left: 0;
		margin-right: 15px;
		color: #fff;
	}

	.container-first:before {
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

	.container-second {
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
		margin-left: 15px;
		color: #fff;
	}

	.container-second:before {
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

	.container img {
		width: 256px;
	}

	.multiple-containers {
		display: flex;
		flex-direction: row;
	}
</style>
