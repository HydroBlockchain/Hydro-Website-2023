<script>
	import { page } from "$app/stores";
	import hydro from "$lib/images/white-logo.svg";
	import blog from "$lib/images/icons/blog.svg";
	import faq from "$lib/images/icons/faq.svg";
	import team from "$lib/images/icons/team.svg";
</script>

<header>
	<div class="header-button">
			<a href="/team"><img src={team} alt="team" /></a>
	</div>

	<div class="header-button">
			<a href="/blog"><img src={blog} alt="blog" /></a>
	</div>

	<div class="header-button">
			<a href="/faq"><img src={faq} alt="faq" /></a>
	</div>

	<div class="header-logo">
		<div class="logo">
			<a href="/">
				<img src={hydro} alt="hydro" />
			</a>
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		margin-top: 50px;
		animation: fadeIn 2.5s;
		width: 1200px auto;
	}

	.header-button {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 100px;
		height: 100px;
		margin-top: 10px;
		margin-left: 10px;
		margin-right: 10px;
		background-color: #fff;
		color: #fff;
		border-radius: 5px;
		position: relative;
		z-index: 1;
		background: inherit;
		overflow: hidden;
	}

	.header-button:before {
		opacity: 0.5;
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

	.header-button a {
		color: #fff;
	}

	.header-button img {
		height: 30px;
	}

	.header-logo {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		text-align: center;
		width: 1000px;
		height: 100px;
		margin: 10px;
		background-color: #fff;
		color: #fff;
		border-radius: 5px;
		position: relative;
		z-index: 1;
		background: inherit;
		overflow: hidden;
	}

	.header-logo:before {
		opacity: 0.5;
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

	.header-logo img {
		color: #000;
		width: 128px;
		padding-right: 10px;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
