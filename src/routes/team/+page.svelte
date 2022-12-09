<script>
// @ts-nocheck
import saurav from "$lib/images/team/saurav.jpg";
import carl from "$lib/images/team/carl.jpg";
import jignesh from "$lib/images/team/jignesh.jpg";
import ayushya from "$lib/images/team/ayushya.jpg";
import profile from "$lib/images/team/profile.jpg";
import twitter from "$lib/images/icons/twitter.svg";
import linkedin from "$lib/images/icons/linkedin.svg";
import item from "./team.json"
</script>

<svelte:head>
    <title>Team</title>
    <meta name="Team" content="Team" />
    </svelte:head>

    <section>
        <div class="container" id="animated-border">

            <div class="team-section">

                <div class="team-card">
                    <img src={saurav} alt="saurav" id="profile-pic"/>
                    <div class="team-name">{item[0].name}</div>
                    <div class="team-title">{item[0].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[0].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[0].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>

                <div class="team-card">
                    <img src={carl} alt="carl" id="profile-pic"/>
                    <div class="team-name">{item[1].name}</div>
                    <div class="team-title">{item[1].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[1].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[1].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>

                <div class="team-card">
                    <img src={profile} alt="profile" id="profile-pic"/>
                    <div class="team-name">{item[2].name}</div>
                    <div class="team-title">{item[2].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[2].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[2].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>

            </div>

            <div class="team-section">

                <div class="team-card">
                    <img src={profile} alt="profile" id="profile-pic"/>
                    <div class="team-name">{item[3].name}</div>
                    <div class="team-title">{item[3].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[3].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[3].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>

                <div class="team-card">
                    <img src={ayushya} alt="ayushya" id="profile-pic"/>
                    <div class="team-name">{item[4].name}</div>
                    <div class="team-title">{item[4].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[4].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[4].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>

                <div class="team-card">
                    <img src={profile} alt="profile" id="profile-pic"/>
                    <div class="team-name">{item[5].name}</div>
                    <div class="team-title">{item[5].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[5].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[5].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>

                <div class="team-card">
                    <img src={profile} alt="profile" id="profile-pic"/>
                    <div class="team-name">{item[6].name}</div>
                    <div class="team-title">{item[6].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[6].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[6].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>

            </div>

            <div class="team-section">

                <div class="team-card">
                    <img src={profile} alt="profile" id="profile-pic"/>
                    <div class="team-name">{item[7].name}</div>
                    <div class="team-title">{item[7].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[7].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[7].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>

                <div class="team-card">
                    <img src={jignesh} alt="jignesh" id="profile-pic"/>
                    <div class="team-name">{item[8].name}</div>
                    <div class="team-title">{item[8].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[8].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[8].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>

                <div class="team-card">
                    <img src={profile} alt="profile" id="profile-pic"/>
                    <div class="team-name">{item[9].name}</div>
                    <div class="team-title">{item[9].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[9].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[9].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>

                <div class="team-card">
                    <img src={profile} alt="profile" id="profile-pic"/>
                    <div class="team-name">{item[10].name}</div>
                    <div class="team-title">{item[10].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[10].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[10].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>

            </div>

        </div>
    </section>

<style>
.team-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.team-card {
    width: 10rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    animation: fadeIn 2.5s;
}

.team-name {
    margin: 3px;
    font-size: var(--font-size-xsmall);
}

.team-title {
    margin: 3px;
    font-size: var(--font-size-mini);
}

.team-info {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.button-team {
    padding: 8px;
    margin: 5px;
}
</style>
