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
</script>

<svelte:head>
    <title>Team</title>
    <meta name="Team" content="Team" />
</svelte:head>
    <section>

            <div class="team-section" id="top-one">

                <div class="team-card" id="hydro-drop">
                    <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_b_1_63)">
                        <circle cx="512" cy="512" r="512" fill="#192E46"/>
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
                        TEAM HYDRO
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
}

.team-card:before {
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

#hydro-drop {
    display: flex;
    flex-direction: column;
    color: var(--text-color);
    background: var(--animated-bg);
	animation: gradient 20s ease infinite;
	background-size: 1000% 100%;
	border-radius: var(--border-radius);
    animation: fadeIn 2s;
}

#hydro-drop svg{
    width: 90px;
    height: 90px;
    margin-bottom: var(--margin-xs);
}

a:hover {
    opacity: 0.5;
}
</style>
