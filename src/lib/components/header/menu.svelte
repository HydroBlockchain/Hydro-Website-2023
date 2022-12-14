<script>
    import {fade} from "svelte/transition";
</script>

<div in:fade out:fade="{{delay: 750}}" class="backdrop" on:click>
    <div class="nav-mobile-wrapper">
        <div class="logo">
            <svg id="intro-chain" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_1_63)">
                <circle cx="512" cy="512" r="512" fill="var(--drop-color)"/>
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
        <div class="navigation">
            <a class="mobile-link" in:fade="{{delay: 150, duration: 500}}" out:fade="{{delay: 350}}" href="/tech">Technology</a>
            <a class="mobile-link" in:fade="{{delay: 250, duration: 500}}" out:fade="{{delay: 250}}" href="/team">Team</a>
            <a class="mobile-link" in:fade="{{delay: 350, duration: 500}}" out:fade="{{delay: 150}}" href="/faq">FAQ</a>
            <a class="mobile-link" in:fade="{{delay: 450, duration: 500}}" out:fade="{{delay: 50}}" href="/">Home</a>
        </div>
    </div>
</div>

<style lang="scss">
#intro-chain{
    margin-top: 150px;
    width: 200px;
    height: 200px;
}
  .backdrop {
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:var(--sidemenu-color);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .nav-mobile-wrapper {
    box-sizing: border-box;
    padding-bottom: 5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    text-align: start;
  }
  .navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .mobile-link {
    text-decoration: none;
    color: var(--text-color);
    font-size: 2rem;
    transition: 200ms ease-in-out;
    &:hover {
      color: rgb(129, 129, 129);
    }
  }
</style>