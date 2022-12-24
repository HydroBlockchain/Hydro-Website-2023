<script>
import linkedin from "$lib/images/icons/linkedin.svg";
import items from "$lib/json/team.json"
import items2 from "$lib/json/team2.json"
import items3 from "$lib/json/team3.json"
import Protocols from "$lib/components/tech/protocols.svelte";
</script>

<svelte:head>
    <title>Team Hydro</title>
    <meta name="Team Hydro" content="Projects Hydros Global Blockchain Team" />
    </svelte:head>
<section>
    <div class="team-section" id="top-one">
        <div class="team-card" id="card-background">
            <svg id="hydro-drops" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_1_63)">
                <circle cx="512" cy="512" r="512" fill="var(--drop-color-2)"/>
                </g>
                <path d="M512 857.08C653.38 857.08 768 736.93 768 588.72C768 505.82 707.937 393.523 587.81 251.83C572.443 233.703 547.173 205.427 512 167C474.94 207.54 448.38 237.343 432.32 256.41C314.773 395.943 256 506.713 256 588.72C256 736.93 370.62 857.08 512 857.08Z" fill="url(#paint0_linear_1_63)"/>
                <path d="M512 855.73C618.035 855.73 704 765.617 704 654.46C704 592.285 658.952 508.062 568.857 401.792C557.333 388.197 538.38 366.99 512 338.17C484.205 368.575 464.285 390.927 452.24 405.227C364.08 509.877 320 592.955 320 654.46C320 765.617 405.965 855.73 512 855.73Z" fill="#244A93" fill-opacity="0.5"/>
                <path d="M512 855.21C582.69 855.21 640 795.135 640 721.03C640 679.58 609.968 623.432 549.905 552.585C542.222 543.522 529.587 529.383 512 510.17C493.47 530.44 480.19 545.342 472.16 554.875C413.387 624.642 384 680.027 384 721.03C384 795.135 441.31 855.21 512 855.21Z" fill="url(#paint1_linear_1_63)" fill-opacity="0.75"/>
                <defs>
                <filter id="filter0_b_1_63" x="-100" y="-100" width="1224" height="1224" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="50"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_63"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_63" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_1_63" x1="512" y1="167" x2="512" y2="857.08" gradientUnits="userSpaceOnUse">
                <stop stop-color="#614CB5"/>
                <stop offset="1" stop-color="#3F70EE"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1_63" x1="512" y1="510.17" x2="512" y2="855.17" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8FAFFF"/>
                <stop offset="1" stop-color="#3D7DDD"/>
                </linearGradient>
                </defs>
                </svg> 
        </div>
        {#each items as item (item.id)}
        <div class="team-card" id="card-background">
            <img src={item.img} alt="profile" id="profile-pic"/>
            <div class="team-column">
                <div class="team-name">{item.name}</div>
                <div class="team-title">{item.title}</div>
                <div class="team-info">
                    <div class="button-team"><a href="{item.linkedin}" target="_blank" rel="noopener noreferrer">
                        <svg id="icon" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.976 9.64H1.94a.485.485 0 0 0-.485.484v19.391c0 .268.217.485.485.485h6.036a.485.485 0 0 0 .485-.485v-19.39a.485.485 0 0 0-.485-.485zM4.96 0A3.985 3.985 0 0 0 .978 3.979a3.986 3.986 0 0 0 3.982 3.98 3.984 3.984 0 0 0 3.98-3.98A3.984 3.984 0 0 0 4.96 0zM23.33 9.158c-2.424 0-4.216 1.042-5.303 2.226v-1.26a.485.485 0 0 0-.485-.484h-5.78a.485.485 0 0 0-.486.484v19.391c0 .268.217.485.485.485h6.023a.485.485 0 0 0 .485-.485v-9.594c0-3.233.878-4.492 3.132-4.492 2.454 0 2.649 2.019 2.649 4.658v9.428c0 .268.217.485.485.485h6.025a.485.485 0 0 0 .485-.485V18.88c0-4.807-.917-9.721-7.715-9.721z"
                                fill="var(--svg-color)" /></svg></a></div>
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
                    <div class="button-team"><a href="{item.linkedin}" target="_blank" rel="noopener noreferrer">
                        <svg id="icon" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.976 9.64H1.94a.485.485 0 0 0-.485.484v19.391c0 .268.217.485.485.485h6.036a.485.485 0 0 0 .485-.485v-19.39a.485.485 0 0 0-.485-.485zM4.96 0A3.985 3.985 0 0 0 .978 3.979a3.986 3.986 0 0 0 3.982 3.98 3.984 3.984 0 0 0 3.98-3.98A3.984 3.984 0 0 0 4.96 0zM23.33 9.158c-2.424 0-4.216 1.042-5.303 2.226v-1.26a.485.485 0 0 0-.485-.484h-5.78a.485.485 0 0 0-.486.484v19.391c0 .268.217.485.485.485h6.023a.485.485 0 0 0 .485-.485v-9.594c0-3.233.878-4.492 3.132-4.492 2.454 0 2.649 2.019 2.649 4.658v9.428c0 .268.217.485.485.485h6.025a.485.485 0 0 0 .485-.485V18.88c0-4.807-.917-9.721-7.715-9.721z"
                                fill="var(--svg-color)" /></svg></a></div>
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
                    <div class="button-team"><a href="{item.linkedin}" target="_blank" rel="noopener noreferrer">
                        <svg id="icon" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.976 9.64H1.94a.485.485 0 0 0-.485.484v19.391c0 .268.217.485.485.485h6.036a.485.485 0 0 0 .485-.485v-19.39a.485.485 0 0 0-.485-.485zM4.96 0A3.985 3.985 0 0 0 .978 3.979a3.986 3.986 0 0 0 3.982 3.98 3.984 3.984 0 0 0 3.98-3.98A3.984 3.984 0 0 0 4.96 0zM23.33 9.158c-2.424 0-4.216 1.042-5.303 2.226v-1.26a.485.485 0 0 0-.485-.484h-5.78a.485.485 0 0 0-.486.484v19.391c0 .268.217.485.485.485h6.023a.485.485 0 0 0 .485-.485v-9.594c0-3.233.878-4.492 3.132-4.492 2.454 0 2.649 2.019 2.649 4.658v9.428c0 .268.217.485.485.485h6.025a.485.485 0 0 0 .485-.485V18.88c0-4.807-.917-9.721-7.715-9.721z"
                                fill="var(--svg-color)" /></svg></a></div>
                </div>
            </div>
        </div>
        {/each}
    </div>
<Protocols/>
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
        margin-bottom: 0.5rem;
    }

}

@media only screen and (max-width: 768px) {

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
width: 120px;
margin-right: 1rem;
}

#top-one {
    margin-bottom: 0;
}

#last-one {
    margin-top: 0;
    margin-bottom: 0.5rem;
}

}

@media only screen and (max-width: 992px) {

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
    margin-bottom: 0.5rem;
}

}

@media only screen and (max-width: 1200px) {

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
    margin-bottom: 0.5rem;
}

}
</style>
