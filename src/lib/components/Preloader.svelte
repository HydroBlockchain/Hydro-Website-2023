<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  let start = false;
  onMount(() => {
    start = true;
  });
</script>

<div out:fade={{ delay: 0, duration: 100 }} id="preload-wrapper">
  {#if start}
    <svg
      id="hydro-logo"
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_1_63)">
        <circle cx="512" cy="512" r="512" fill="var(--drop-color-2)" />
      </g>
      <path
        d="M512 857.08C653.38 857.08 768 736.93 768 588.72C768 505.82 707.937 393.523 587.81 251.83C572.443 233.703 547.173 205.427 512 167C474.94 207.54 448.38 237.343 432.32 256.41C314.773 395.943 256 506.713 256 588.72C256 736.93 370.62 857.08 512 857.08Z"
        fill="url(#paint0_linear_1_63)"
      />
      <path
        d="M512 855.73C618.035 855.73 704 765.617 704 654.46C704 592.285 658.952 508.062 568.857 401.792C557.333 388.197 538.38 366.99 512 338.17C484.205 368.575 464.285 390.927 452.24 405.227C364.08 509.877 320 592.955 320 654.46C320 765.617 405.965 855.73 512 855.73Z"
        fill="#244A93"
        fill-opacity="0.5"
      />
      <path
        d="M512 855.21C582.69 855.21 640 795.135 640 721.03C640 679.58 609.968 623.432 549.905 552.585C542.222 543.522 529.587 529.383 512 510.17C493.47 530.44 480.19 545.342 472.16 554.875C413.387 624.642 384 680.027 384 721.03C384 795.135 441.31 855.21 512 855.21Z"
        fill="url(#paint1_linear_1_63)"
        fill-opacity="0.75"
      />
      <defs>
        <filter
          id="filter0_b_1_63"
          x="-100"
          y="-100"
          width="1224"
          height="1224"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1_63"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_63"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_63"
          x1="512"
          y1="167"
          x2="512"
          y2="857.08"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#614CB5" />
          <stop offset="1" stop-color="#3F70EE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_63"
          x1="512"
          y1="510.17"
          x2="512"
          y2="855.17"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#8FAFFF" />
          <stop offset="1" stop-color="#3D7DDD" />
        </linearGradient>
      </defs>
    </svg>
  {/if}
</div>

<style>
  #preload-wrapper {
    position: fixed;
    bottom: var(--zero);
    right: var(--zero);
    left: var(--zero);
    top: var(--zero);
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 5000;
    background-color: var(--preloader);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  #hydro-logo {
    width: 200px;
    height: auto;
    margin-bottom: var(--margin-alt);
    animation: fadeIn 0.5s;
  }

  @media only screen and (max-width: 600px) {
    #hydro-logo {
      width: 100px;
    }
  }
</style>
