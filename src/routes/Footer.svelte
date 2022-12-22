<script>
import item from "$lib/json/sociallinks.json"
import Facebook from "$lib/images/icons/facebook.svg"
import Twitter from "$lib/images/icons/twitter.svg"
import Youtube from "$lib/images/icons/youtube.svg"
import Instagram from "$lib/images/icons/instagram.svg"
import Telegram from "$lib/images/icons/telegram.svg"
import Medium from "$lib/images/icons/medium.svg"
import Linkedin from "$lib/images/icons/linkedin.svg"
import Reddit from "$lib/images/icons/reddit.svg"
import Discord from "$lib/images/icons/discord.svg"
import Github from "$lib/images/icons/github.svg"
import hydroLogo from "$lib/images/logo/hydro-logo.svg";
</script>

<footer>
    <div class="footer-container" id="card-background">
        <div class="logo">
            <img src={hydroLogo} alt="hydro-drop" id="hydro-logo" />
        </div>
        <div class="social-media-wrapper">
            <div class="social-media">
                <a href={item[0].link} target="_blank" rel="noopener noreferrer">
                    <div class="social-icon">
                        <img src={Facebook} alt="Facebook-logo" id="social-link-logo" />
                    </div>
                </a>
                <a href={item[1].link} target="_blank" rel="noopener noreferrer">
                    <div class="social-icon">
                        <img src={Twitter} alt="Facebook-logo" id="social-link-logo" />
                    </div>
                </a>
                <a href={item[2].link} target="_blank" rel="noopener noreferrer">
                    <div class="social-icon">
                        <img src={Youtube} alt="Facebook-logo" id="social-link-logo" />
                    </div>
                </a>
                <a href={item[3].link} target="_blank" rel="noopener noreferrer">
                    <div class="social-icon">
                        <img src={Instagram} alt="Facebook-logo" id="social-link-logo" />
                    </div>
                </a>
                <a href={item[4].link} target="_blank" rel="noopener noreferrer">
                    <div class="social-icon">
                        <img src={Telegram} alt="Facebook-logo" id="social-link-logo" />
                    </div>
                </a>
            </div>
            <div class="social-media">
                <a href={item[5].link} target="_blank" rel="noopener noreferrer">
                    <div class="social-icon">
                        <img src={Medium} alt="Facebook-logo" id="social-link-logo" />
                    </div>
                </a>
                <a href={item[6].link} target="_blank" rel="noopener noreferrer">
                    <div class="social-icon">
                        <img src={Linkedin} alt="Facebook-logo" id="social-link-logo" />
                    </div>
                </a>
                <a href={item[7].link} target="_blank" rel="noopener noreferrer">
                    <div class="social-icon">
                        <img src={Reddit} alt="Facebook-logo" id="social-link-logo" />
                    </div>
                </a>
                <a href={item[8].link} target="_blank" rel="noopener noreferrer">
                    <div class="social-icon">
                        <img src={Discord} alt="Facebook-logo" id="social-link-logo" />
                    </div>
                </a>
                <a href={item[9].link} target="_blank" rel="noopener noreferrer">
                    <div class="social-icon">
                        <img src={Github} alt="Facebook-logo" id="social-link-logo" />
                    </div>
                </a>
            </div>
        </div>
    </div>
</footer>

<style>
footer {
    display: flex;
    justify-content: center;
}

.footer-container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: var(--cw-desktop);
    height: 100px;
    background-color: var(--card-background);
    color: var(--text-color);
    border-radius: var(--border-radius);
}

.social-media-wrapper {
    display: flex;
    flex-direction: row;
    margin-right: 0;
    margin-left: 1rem;
}

#hydro-logo {
    width: 128px;
    height: 32px;
    margin-right: 2rem;
}

.social-media {
    display: flex;
    flex-direction: row;
}

.social-icon {
    margin-left: 1rem;
    margin-right: 1rem;
}

#social-link-logo {
    height: 25px;
    width: 25px;
}

a:hover {
    opacity: 0.5;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

    .footer-container {
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        height: auto;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    
    #hydro-logo {
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: 0;
        margin-right: 0;
        width: 128px;
        height: 32px;
    }

    .social-media-wrapper {
        display: flex;
        flex-direction: column;
        margin-right: 0;
        margin-left: 0;
    }

    .social-media {
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        margin-right: 0;
        margin-bottom: 1rem;
    }

    .social-icon {
        margin-left: 1rem;
        margin-right: 1rem;
    }

}

@media only screen and (max-width: 768px) {

.footer-container {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    height: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

#hydro-logo {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 0;
    margin-right: 0;
    width: 128px;
    height: 32px;
}

.social-media-wrapper {
    display: flex;
    flex-direction: column;
    margin-right: 0;
    margin-left: 0;
}

.social-media {
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-right: 0;
    margin-bottom: 1rem;
}

.social-icon {
    margin-left: 1rem;
    margin-right: 1rem;
}

}


</style>
