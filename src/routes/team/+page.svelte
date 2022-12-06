<script>
	import saurav from "$lib/images/team/saurav.jpg";
	import carl from "$lib/images/team/carl.jpg";
	import jignesh from "$lib/images/team/jignesh.jpg";
	import ayushya from "$lib/images/team/ayushya.jpg";
	import profile from "$lib/images/team/profile.jpg";
	import twitter from "$lib/images/icons/twitter.svg";
	import linkedin from "$lib/images/icons/linkedin.svg";
</script>

<svelte:head>
	<title>Team</title>
	<meta name="Team" content="Team" />
</svelte:head>

<section>
	<div class="container">

		<div class="team-section">

			<div class="team-card">
				<img src={saurav} alt="saurav" id="profile-pic"/>
				<div class="team-name">Saurav Kumar</div>
				<div class="team-title">President</div>
				<div class="team-info">
					<div class="button"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" id="icon"/></a></div>
					<div class="button"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" id="icon"/></a></div>
				</div>
			</div>

			<div class="team-card">
				<img src={carl} alt="carl" id="profile-pic"/>
				<div class="team-name">Carl Ulvinen</div>
				<div class="team-title">Vice President</div>
				<div class="team-info">
					<div class="button"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" id="icon"/></a></div>
					<div class="button"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" id="icon"/></a></div>
				</div>
			</div>

			<div class="team-card">
				<img src={profile} alt="profile" id="profile-pic"/>
				<div class="team-name">Abhimanyu Bundela</div>
				<div class="team-title">Chief Gaming Officer</div>
				<div class="team-info">
					<div class="button"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" id="icon"/></a></div>
					<div class="button"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" id="icon"/></a></div>
				</div>
			</div>

		</div>

		<div class="team-section">

			<div class="team-card">
				<img src={profile} alt="profile" id="profile-pic"/>
				<div class="team-name">Briws Ustyugov</div>
				<div class="team-title">Frontend Developer</div>
				<div class="team-info">
					<div class="button"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" id="icon"/></a></div>
					<div class="button"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" id="icon"/></a></div>
				</div>
			</div>

			<div class="team-card">
				<img src={ayushya} alt="ayushya" id="profile-pic"/>
				<div class="team-name">Ayushya Chitransh</div>
				<div class="team-title">Backend Developer</div>
				<div class="team-info">
					<div class="button"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" id="icon"/></a></div>
					<div class="button"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" id="icon"/></a></div>
				</div>
			</div>

			<div class="team-card">
				<img src={profile} alt="profile" id="profile-pic"/>
				<div class="team-name">Jwalin Adhyaru</div>
				<div class="team-title">3D Artist</div>
				<div class="team-info">
					<div class="button"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" id="icon"/></a></div>
					<div class="button"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" id="icon"/></a></div>
				</div>
			</div>

			<div class="team-card">
				<img src={profile} alt="profile" id="profile-pic"/>
				<div class="team-name">Abishek Padmanaban</div>
				<div class="team-title">3D Artist</div>
				<div class="team-info">
					<div class="button"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" id="icon"/></a></div>
					<div class="button"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" id="icon"/></a></div>
				</div>
			</div>

		</div>

		<div class="team-section">

			<div class="team-card">
				<img src={profile} alt="profile" id="profile-pic"/>
				<div class="team-name">Sundar Mahalingam</div>
				<div class="team-title">3D Artist</div>
				<div class="team-info">
					<div class="button"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" id="icon"/></a></div>
					<div class="button"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" id="icon"/></a></div>
				</div>
			</div>

			<div class="team-card">
				<img src={jignesh} alt="jignesh" id="profile-pic"/>
				<div class="team-name">Jignesh Beladiya</div>
				<div class="team-title">Content Creator</div>
				<div class="team-info">
					<div class="button"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" id="icon"/></a></div>
					<div class="button"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" id="icon"/></a></div>
				</div>
			</div>

			<div class="team-card">
				<img src={profile} alt="profile" id="profile-pic"/>
				<div class="team-name">Anochie Modestus</div>
				<div class="team-title">Community Manager</div>
				<div class="team-info">
					<div class="button"><a href="https://twitter.com/uzobankz" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" id="icon"/></a></div>
					<div class="button"><a href="https://www.linkedin.com/in/anochie-modestus-26b75616a" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" id="icon"/></a></div>
				</div>
			</div>

			<div class="team-card">
				<img src={profile} alt="profile" id="profile-pic"/>
				<div class="team-name">Matas</div>
				<div class="team-title">Community</div>
				<div class="team-info">
					<div class="button"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" id="icon"/></a></div>
					<div class="button"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" id="icon"/></a></div>
				</div>
			</div>

		</div>

	</div>
</section>

<style>
	.team-section{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.team-card{
		width: 10rem;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 20px;
		animation: fadeIn 2.5s;
	}
	
	.team-name{
		margin: 3px;
		font-size: var(--font-size-xsmall);
	}

	.team-title{
		margin: 3px;
		font-size: var(--font-size-mini);
	}

	.team-info{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.button{
		padding: 8px;
		margin: 5px;
	}
</style>
