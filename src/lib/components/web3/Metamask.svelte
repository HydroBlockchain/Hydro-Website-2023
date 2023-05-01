<script>
</script>

<div class="metamask-wrapper">
  <div class="metamask-container">
    <div class="metamask-notice">
      <div class="metamask-notice-title">
        Hydro Token Tool
        <!-- svelte-ignore a11y-missing-attribute -->
        <svg
          id="hydro-logo"
          viewBox="0 0 1024 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="var(--drop-color-2)"
            filter="url(#filter0_b_1616_338)"
          />
          <path
            d="M512 857.08c141.38 0 256-120.15 256-268.36 0-82.9-60.063-195.197-180.19-336.89-15.367-18.127-40.637-46.403-75.81-84.83-37.06 40.54-63.62 70.343-79.68 89.41C314.773 395.943 256 506.713 256 588.72c0 148.21 114.62 268.36 256 268.36z"
            fill="url(#paint0_linear_1616_338)"
          />
          <path
            d="M512 855.73c106.035 0 192-90.113 192-201.27 0-62.175-45.048-146.398-135.143-252.668C557.333 388.197 538.38 366.99 512 338.17c-27.795 30.405-47.715 52.757-59.76 67.057C364.08 509.877 320 592.955 320 654.46c0 111.157 85.965 201.27 192 201.27z"
            fill="#244A93"
            fill-opacity=".5"
          />
          <path
            d="M512 855.21c70.69 0 128-60.075 128-134.18 0-41.45-30.032-97.598-90.095-168.445-7.683-9.063-20.318-23.202-37.905-42.415-18.53 20.27-31.81 35.172-39.84 44.705C413.387 624.642 384 680.027 384 721.03c0 74.105 57.31 134.18 128 134.18z"
            fill="url(#paint1_linear_1616_338)"
            fill-opacity=".75"
          />
          <defs>
            <filter
              id="filter0_b_1616_338"
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
                result="effect1_backgroundBlur_1616_338"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1616_338"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1616_338"
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
              id="paint1_linear_1616_338"
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
      </div>

      The Hydro Token Tool Can Add Hydro Tokens to your wallet on the BSC Network.<br />
      In order to use it you have to first download Metamask. <br />
      Once you have, head on back here to add the Hydro Token automatically.
      <h3>
        The Hydro token tool only reads public data and asks for permission to
        add the Hydro Token Smart contract. No information is stored or sent to
        any servers
      </h3>
    </div>
  </div>
  <a
    class="button"
    id="metamask-button"
    href="https://metamask.io"
    target="_blank"
    rel="noopener noreferrer"
  >
    <!-- svelte-ignore a11y-missing-attribute -->
    <svg
      id="metamask-logo"
      viewBox="0 0 318.6 318.6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke-linecap="round" stroke-linejoin="round">
        <path
          d="m274.1 35.5-99.5 73.9 18.4-43.6z"
          fill="#e2761b"
          stroke="#e2761b"
        />
        <path
          d="m44.4 35.5 98.7 74.6-17.5-44.3zm193.9 171.3-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9 16.2 55.3 56.7-15.6-26.5-40.6z"
          fill="#e4761b"
          stroke="#e4761b"
        />
        <path
          d="m103.6 138.2-15.8 23.9 56.3 2.5-2-60.5zm111.3 0-39-34.8-1.3 61.2 56.2-2.5zm-108.1 109.2 33.8-16.5-29.2-22.8zm71.1-16.5 33.9 16.5-4.7-39.3z"
          fill="#e4761b"
          stroke="#e4761b"
        />
        <path
          d="m211.8 247.4-33.9-16.5 2.7 22.1-.3 9.3zm-105 0 31.5 14.9-.2-9.3 2.5-22.1z"
          fill="#d7c1b3"
          stroke="#d7c1b3"
        />
        <path
          d="m138.8 193.5-28.2-8.3 19.9-9.1zm40.9 0 8.3-17.4 20 9.1z"
          fill="#233447"
          stroke="#233447"
        />
        <path
          d="m106.8 247.4 4.8-40.6-31.3.9zm100.2-40.6 4.8 40.6 26.5-39.7zm23.8-44.7-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1 20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
          fill="#cd6116"
          stroke="#cd6116"
        />
        <path
          d="m87.8 162.1 23.6 46-.8-22.9zm120.3 23.1-1 22.9 23.7-46zm-64-20.6-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0-2.7 18 1.2 45 6.7-34.1z"
          fill="#e4751f"
          stroke="#e4751f"
        />
        <path
          d="m179.8 193.5-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
          fill="#f6851b"
          stroke="#f6851b"
        />
        <path
          d="m180.3 262.3.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
          fill="#c0ad9e"
          stroke="#c0ad9e"
        />
        <path
          d="m177.9 230.9-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
          fill="#161616"
          stroke="#161616"
        />
        <path
          d="m278.3 114.2 8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zm-246.5-40.8 8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
          fill="#763d16"
          stroke="#763d16"
        />
        <path
          d="m267.2 153.5-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4 3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
          fill="#f6851b"
          stroke="#f6851b"
        />
      </g>
    </svg>
    Download Metamask</a
  >
</div>

<style>
  .metamask-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .metamask-container {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-top: var(--padding-standard);
    padding-left: var(--padding-alt);
    padding-right: var(--padding-alt);
    padding-bottom: var(--padding-standard);
  }

  .metamask-notice {
    width: auto;
    height: auto;
    padding: var(--padding-standard);
    backdrop-filter: blur(10px);
    border-radius: var(--border-radius);
    font-size: var(--fs-small);
  }

  .metamask-notice-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: var(--fs-xlarge);
    margin-bottom: var(--margin-half);
  }

  #metamask-logo {
    margin-right: var(--margin-half);
    width: 32px;
    height: auto;
  }

  #hydro-logo {
    width: 64px;
    height: auto;
  }

  .metamask-notice h3 {
    text-align: end;
    font-size: var(--fs-mini);
    margin-block-start: var(--zero) !important;
    margin-block-end: var(--zero) !important;
    margin-top: 2.5rem;
    color: var(--text-color-alt);
  }

  #metamask-button {
    margin-bottom: var(--margin-standard);
    padding: var(--padding-standard);
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 600px) {
    .metamask-notice {
      width: auto;
      height: auto;
    }

    a {
      margin-top: var(--zero);
      margin-bottom: var(--zero);
      width: 250px;
    }

    .metamask-container {
      width: 300px !important;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-left: var(--zero);
      padding-right: var(--zero);
      margin: var(--margin-standard);
      padding: var(--padding-standard);
    }
  }

  @media only screen and (max-width: 992px) {
    .metamask-container {
      width: 500px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .metamask-container {
      width: 500px;
    }
  }
</style>
