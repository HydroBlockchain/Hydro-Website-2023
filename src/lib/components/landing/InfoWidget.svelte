<script>
  import { priceData, stakedData } from "$lib/store/store";
</script>

<div class="one-quarter" id="card-background">
  <div class="dashboards">
    <div class="hydro-dashboard">
      <div class="dashboard-slot-alt" id="card-background-alt">
        <svg
          id="hydro-logo"
          viewBox="0 0 2561 490"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1733_118)">
            <path
              d="M344.4 20C344.4 8.954 353.354 1.72589e-08 364.4 1.72589e-08H415.4C426.446 1.72589e-08 435.4 8.954 435.4 20V470C435.4 481.046 426.446 490 415.4 490H364.4C353.354 490 344.4 481.046 344.4 470V20ZM91 470C91 481.046 82.046 490 71 490H20C8.954 490 0 481.046 0 470V20C0 8.954 8.954 1.72589e-08 20 1.72589e-08H71C82.046 1.72589e-08 91 8.954 91 20V470ZM351.4 260C351.4 271.046 342.446 280 331.4 280H103.3C92.254 280 83.3 271.046 83.3 260V222.3C83.3 211.254 92.254 202.3 103.3 202.3H331.4C342.446 202.3 351.4 211.254 351.4 222.3V260ZM707.099 490C696.054 490 687.099 481.046 687.099 470V317.466C687.099 313.264 692.949 312.236 694.381 316.187C695.927 320.451 689.987 323.289 687.64 319.407L512.939 30.345C504.883 17.015 514.481 1.72589e-08 530.056 1.72589e-08H580.599C584.047 -0.000143194 587.436 0.890974 590.438 2.58687C593.439 4.28276 595.952 6.72584 597.731 9.679L748.641 260.165C754.821 270.424 747.433 283.5 735.457 283.5C723.456 283.5 716.071 270.375 722.302 260.118L874.458 9.618C876.241 6.68183 878.751 4.25448 881.745 2.56988C884.738 0.885276 888.116 0.000218207 891.551 1.72589e-08L934.443 1.72589e-08C950.017 1.72589e-08 959.615 17.016 951.56 30.345L777.57 318.228C775.264 322.045 769.43 319.218 770.996 315.043C772.43 311.219 778.099 312.247 778.099 316.331V470C778.099 481.046 769.145 490 758.099 490H707.099V490ZM1043.34 490C1032.29 490 1023.34 481.046 1023.34 470V20C1023.34 8.954 1032.29 1.72589e-08 1043.34 1.72589e-08H1237.54C1290.74 1.72589e-08 1337.41 10.267 1377.54 30.8C1417.67 51.333 1448.94 79.8 1471.34 116.2C1493.74 152.6 1504.94 195.533 1504.94 245C1504.94 294 1493.74 336.933 1471.34 373.8C1448.94 410.2 1417.67 438.667 1377.54 459.2C1337.41 479.733 1290.74 490 1237.54 490H1043.34V490ZM1114.34 393C1114.34 404.046 1123.29 413 1134.34 413H1233.34C1270.21 413 1301.94 406 1328.54 392C1355.61 378 1376.37 358.4 1390.84 333.2C1405.77 308 1413.24 278.6 1413.24 245C1413.24 210.933 1405.77 181.533 1390.84 156.8C1376.37 131.6 1355.61 112 1328.54 98C1301.94 84 1270.21 77 1233.34 77H1134.34C1123.29 77 1114.34 85.954 1114.34 97V393ZM1621.66 490C1610.61 490 1601.66 481.046 1601.66 470V20C1601.66 8.954 1610.61 1.72589e-08 1621.66 1.72589e-08H1803.26C1846.66 1.72589e-08 1883.76 7 1914.56 21C1945.83 35 1969.86 55.067 1986.66 81.2C2003.46 107.333 2011.86 138.367 2011.86 174.3C2011.86 210.233 2003.46 241.267 1986.66 267.4C1969.86 293.067 1945.83 312.9 1914.56 326.9C1883.76 340.433 1846.66 347.2 1803.26 347.2H1680.67C1670.03 347.2 1664.66 334.384 1672.11 326.8C1679.64 319.145 1692.66 324.473 1692.66 335.207V470C1692.66 481.046 1683.71 490 1672.66 490H1621.66ZM1932.7 490C1926.16 490 1920.03 486.801 1916.29 481.435L1820.27 343.635C1811.03 330.375 1820.51 312.2 1836.67 312.2H1885.25C1888.46 312.199 1891.63 312.973 1894.48 314.456C1897.33 315.94 1899.79 318.089 1901.63 320.722L1998.2 458.522C2007.49 471.777 1998.01 490 1981.82 490H1932.7ZM1692.66 284.585C1692.66 295.728 1679.02 301.115 1671.4 292.978C1664.06 285.128 1669.63 272.3 1680.38 272.3H1799.06C1839.19 272.3 1869.29 263.667 1889.36 246.4C1909.89 229.133 1920.16 205.1 1920.16 174.3C1920.16 143.033 1909.89 119 1889.36 102.2C1869.29 85.4 1839.19 77 1799.06 77H1680.19C1669.37 77 1663.69 64.171 1670.95 56.156C1678.61 47.703 1692.66 53.122 1692.66 64.53V284.585V284.585Z"
              fill="var(--svg-color)"
            />
            <path
              d="M2315.26 490C2266.8 490 2219.43 475.631 2179.14 448.71C2138.85 421.79 2107.45 383.525 2088.91 338.757C2070.36 293.991 2065.51 244.728 2074.97 197.203C2084.42 149.676 2107.75 106.02 2142.02 71.759C2176.28 37.494 2219.94 14.1593 2267.46 4.70572C2314.99 -4.74783 2364.25 0.104469 2409.02 18.649C2453.79 37.1946 2492.05 68.5965 2518.97 108.885C2545.89 149.175 2560.26 196.544 2560.26 245C2560.26 277.174 2553.92 309.033 2541.61 338.758C2529.3 368.483 2511.25 395.491 2488.5 418.241C2465.75 440.991 2438.74 459.038 2409.02 471.35C2379.29 483.663 2347.43 490 2315.26 490ZM2315.26 404.779C2382.92 404.779 2437.76 347.292 2437.76 276.36C2437.76 236.69 2409.01 182.96 2351.52 115.17C2344.19 106.48 2332.1 92.917 2315.26 74.48C2297.53 93.884 2284.82 108.146 2277.14 117.267C2220.88 184.129 2192.76 237.16 2192.76 276.36C2192.76 347.292 2247.6 404.779 2315.26 404.779Z"
              fill="var(--svg-color)"
            />
          </g>
          <defs>
            <clipPath id="clip0_1733_118">
              <rect width="2561" height="490" fill="var(--svg-color)" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="dashboard-slot" id="card-background-alt">
        <div class="price">Price</div>
        <div class="currency">
          {$priceData.hydroPrice}
          <div class="currency-class">USD</div>
        </div>
      </div>
      <div class="dashboard-slot" id="card-background-alt">
        <div class="price">Change 24/7</div>
        <div class="procentage">
          {#if $priceData.hydroChange > 0}
            <div class="green">{$priceData.hydroChange} %</div>
          {:else if 0 > $priceData.hydroChange}
            <div class="red">{$priceData.hydroChange} %</div>
          {:else}
            {$priceData.hydroChange}
          {/if}
        </div>
      </div>
    </div>
    <div class="hydro-dashboard">
      <div class="dashboard-slot" id="card-background-alt">
        <div class="price">Volume 24/7</div>
        <div class="currency">
          {$priceData.hydroVolume}
          <div class="currency-class">USD</div>
        </div>
      </div>
      <div class="dashboard-slot" id="card-background-alt">
        <div class="price">Marketcap</div>
        <div class="currency">
          {$priceData.hydroMC}
          <div class="currency-class">USD</div>
        </div>
      </div>
      <div class="dashboard-slot" id="card-background-alt">
        <div class="price">Staked</div>
        <div class="currency">
          {$stakedData.hydroStaked}
          <div class="currency-class">HYDRO</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .one-quarter {
    height: var(--ch-mini);
  }

  .dashboard-slot-alt {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #hydro-logo {
    height: 14px;
    width: auto;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .dashboards {
      display: flex;
      flex-direction: row;
    }

    .one-quarter {
      height: auto;
    }

    .hydro-dashboard {
      flex-direction: column !important;
    }

    .dashboard-slot,
    .dashboard-slot-alt {
      width: 100px !important;
    }
  }

  @media only screen and (max-width: 768px) {
    .dashboards {
      margin: 1rem;
    }

    .hydro-dashboard {
      flex-direction: row;
    }
    .dashboard-slot,
    .dashboard-slot-alt {
      width: 150px;
    }
  }

  @media only screen and (max-width: 992px) {
    .hydro-dashboard {
      flex-direction: row;
    }
    .dashboard-slot,
    .dashboard-slot-alt {
      width: 200px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .hydro-dashboard {
      flex-direction: row;
    }
    .dashboard-slot,
    .dashboard-slot-alt {
      width: 200px;
    }
  }
</style>
