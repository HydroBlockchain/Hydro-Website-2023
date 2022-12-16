<script>
// @ts-nocheck
import twitter from "$lib/images/icons/twitter.svg"
import linkedin from "$lib/images/icons/linkedin.svg"
import hydroDrop from "$lib/images/logo/hydro-drop.svg"
import items from "$lib/json/team.json"
import items2 from "$lib/json/team2.json"
import items3 from "$lib/json/team3.json"
</script>

<svelte:head>
    <title>Team</title>
    <meta name="Team" content="Team" />
    </svelte:head>
<section>

    <div class="team-section" id="top-one">
        <div class="team-card" id="card-background">
            <img src={hydroDrop} alt="hydro-drop" id="hydro-drops"/>
        </div>
        {#each items as item (item.id)}
        <div class="team-card" id="card-background">
            <img src={item.img} alt="profile" id="profile-pic"/>
            <div class="team-column">
                <div class="team-name">{item.name}</div>
                <div class="team-title">{item.title}</div>
                <div class="team-info">
                    <div class="button-team"><a href="{item.twitter}" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="twitter" id="icon"/></a></div>
                    <div class="button-team"><a href="{item.linkedin}" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                </div>
            </div>
        </div>
        {/each}
    </div>

    <div class="team-section" id="middle-one">
        {#each items2 as item (item.id)}
        <div class="team-card" id="card-background">
            <img src={item.img} alt="profile" id="profile-pic"/>
            <div class="team-column">
                <div class="team-name">{item.name}</div>
                <div class="team-title">{item.title}</div>
                <div class="team-info">
                    <div class="button-team"><a href="{item.twitter}" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="twitter" id="icon"/></a></div>
                    <div class="button-team"><a href="{item.linkedin}" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                </div>
            </div>
        </div>
        {/each}
    </div>

    <div class="team-section" id="last-one">
        {#each items3 as item (item.id)}
        <div class="team-card" id="card-background">
            <img src={item.img} alt="profile" id="profile-pic"/>
            <div class="team-column">
                <div class="team-name">{item.name}</div>
                <div class="team-title">{item.title}</div>
                <div class="team-info">
                    <div class="button-team"><a href="{item.twitter}" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="twitter" id="icon"/></a></div>
                    <div class="button-team"><a href="{item.linkedin}" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin" id="icon"/></a></div>
                </div>
            </div>
        </div>
        {/each}
    </div>

</section>

<style>
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

@media only screen and (max-width: 600px) {

    section{
        width: 100%;
    }

    .team-section {
        flex-direction: column !important;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .team-card {
        justify-content: space-around;
        padding: 0;
        width: 100% !important;
        margin-top: 0.5rem;
	 	margin-bottom: 0.5rem;
    }

    #profile-pic {
    width: 100px;
    margin-right: 1rem;
    }

    #top-one {
        margin-bottom: 0;
    }

    #last-one {
        margin-top: 0;
    }

}
</style>
