<script>
// @ts-nocheck
import saurav from "$lib/images/team/saurav.jpg";
import carl from "$lib/images/team/carl.jpg";
import jignesh from "$lib/images/team/jignesh.jpg";
import ayushya from "$lib/images/team/ayushya.jpg";
import profile from "$lib/images/team/profile.jpg";
import twitter from "$lib/images/icons/twitter.svg";
import linkedin from "$lib/images/icons/linkedin.svg";
import item from "../../lib/json/team.json"
import ContactUs from "$lib/components/team/contact-us.svelte";
import hydroDrop from "$lib/images/logo/hydro-drop.svg";
</script>

<svelte:head>
    <title>Team</title>
    <meta name="Team" content="Team" />
    </svelte:head>
    <section>

        <div class="team-section" id="top-one">

            <div class="team-card" id="animated-border">
                <img src={hydroDrop} alt="hydro-drop" id="hydro-drops"/>
            </div>

            <div class="team-card" id="animated-border">
                <img src={saurav} alt="saurav" id="profile-pic"/>
                <div class="team-column">
                    <div class="team-name">{item[0].name}</div>
                    <div class="team-title">{item[0].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[0].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[0].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>
            </div>

            <div class="team-card" id="animated-border">
                <img src={carl} alt="carl" id="profile-pic"/>
                <div class="team-column">
                    <div class="team-name">{item[1].name}</div>
                    <div class="team-title">{item[1].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[1].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[1].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>
            </div>

            <div class="team-card" id="animated-border">
                <img src={profile} alt="profile" id="profile-pic"/>
                <div class="team-column">
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

        </div>

        <div class="team-section">

            <div class="team-card" id="animated-border">
                <img src={profile} alt="profile" id="profile-pic"/>
                <div class="team-column">
                    <div class="team-name">{item[3].name}</div>
                    <div class="team-title">{item[3].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[3].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[3].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>
            </div>

            <div class="team-card" id="animated-border">
                <img src={ayushya} alt="ayushya" id="profile-pic"/>
                <div class="team-column">
                    <div class="team-name">{item[4].name}</div>
                    <div class="team-title">{item[4].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[4].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[4].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>
            </div>

            <div class="team-card" id="animated-border">
                <img src={profile} alt="profile" id="profile-pic"/>
                <div class="team-column">
                    <div class="team-name">{item[5].name}</div>
                    <div class="team-title">{item[5].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[5].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[5].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>
            </div>

            <div class="team-card" id="animated-border">
                <img src={profile} alt="profile" id="profile-pic"/>
                <div class="team-column">
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

        </div>

        <div class="team-section" id="last-one">

            <div class="team-card" id="animated-border">
                <img src={profile} alt="profile" id="profile-pic"/>
                <div class="team-column">
                    <div class="team-name">{item[7].name}</div>
                    <div class="team-title">{item[7].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[7].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[7].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>
            </div>

            <div class="team-card" id="animated-border">
                <img src={jignesh} alt="jignesh" id="profile-pic"/>
                <div class="team-column">
                    <div class="team-name">{item[8].name}</div>
                    <div class="team-title">{item[8].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[8].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[8].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>
            </div>

            <div class="team-card" id="animated-border">
                <img src={profile} alt="profile" id="profile-pic"/>
                <div class="team-column">
                    <div class="team-name">{item[9].name}</div>
                    <div class="team-title">{item[9].title}</div>
                    <div class="team-info">
                        <div class="button-team"><a href="{item[9].twitter}" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" id="icon"/></a></div>
                        <div class="button-team"><a href="{item[9].linkedin}" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                    </div>
                </div>
            </div>

            <div class="team-card" id="animated-border">
                <img src={profile} alt="profile" id="profile-pic"/>
                <div class="team-column">
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

    <ContactUs/>

</section>

<style lang="scss">
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: var(--cw-desktop);
}

.team-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: var(--cw-desktop);
}

.team-card {
    width: 285px;
    height: 130px;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    background: inherit;
    overflow: hidden;
    border-radius: var(--border-radius);
    color: var(--text-color);
}

.team-column {
    width: 150px;
    display: flex;
    flex-direction: column;
}

.team-name {
    font-size: var(--fs-xsmall);
    text-align: right;
    margin-top: var(--margin-s);
    color: var(--text-color);
}

.team-title {
    font-size: var(--fs-mini);
    text-align: right;
    margin-top: var(--margin-xs);
    color: var(--text-color-alt);
}

.team-info {
    display: flex;
    flex-direction: row;
    justify-content: end;
}

.button-team {
    margin-top: var(--margin-l);
    margin-left: var(--margin-x);
    margin-right: 0;
}

#top-one {
    margin-bottom: var(--margin-m);
}

#last-one {
    margin-top: var(--margin-m);
    margin-bottom: var(--margin-m);
}

#profile-pic {
    width: 128px;
    border-radius: var(--border-radius);
}

#icon {
    width: 20px;
}

#hydro-drops {
    width: 90px;
    height: 90px;
    margin-bottom: var(--margin-xs);
}

a:hover {
    opacity: 0.5;
}
</style>
