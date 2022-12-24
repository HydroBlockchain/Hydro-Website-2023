<script>
    import { priceData, stakedData } from "$lib/stores/store";
</script>
<div class="one-quarter" id="card-background">
    <div class="dashboards">
        <div class="hydro-dashboard">
            <div class="dashboard-slot-alt" id="card-background-alt">
                <svg id="hydro-logo" fill="none" viewBox="0 0 2561 490" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <filter id="a" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="690"
                        width="2211.86" x="-100" y="-100">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_47_473" />
                        <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_47_473" mode="normal" result="shape" />
                    </filter>
                    <filter id="b" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="690"
                        width="690" x="1970.26" y="-100">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_47_473" />
                        <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_47_473" mode="normal" result="shape" />
                    </filter>
                    <g fill="var(--svg-color)" filter="url(#a)">
                        <path
                            d="m344.4 20c0-11.0457 8.954-20 20-20h51c11.046 0 20 8.9543 20 20v450c0 11.046-8.954 20-20 20h-51c-11.046 0-20-8.954-20-20zm-253.4 450c0 11.046-8.9543 20-20 20h-51c-11.0457 0-20-8.954-20-20v-450c0-11.0457 8.95431-20 20-20h51c11.0457 0 20 8.9543 20 20zm260.4-210c0 11.046-8.954 20-20 20h-228.1c-11.0457 0-20-8.954-20-20v-37.7c0-11.046 8.9543-20 20-20h228.1c11.046 0 20 8.954 20 20z" />
                        <path
                            d="m707.099 490c-11.045 0-20-8.954-20-20v-152.534c0-4.202 5.85-5.23 7.282-1.279 1.546 4.264-4.394 7.102-6.741 3.22l-174.701-289.0621c-8.056-13.3293 1.542-30.3449 17.117-30.3449h50.543c7.013 0 13.513 3.67253 17.132 9.679l150.91 250.486c6.18 10.259-1.208 23.335-13.184 23.335-12.001 0-19.386-13.125-13.155-23.382l152.156-250.50085c3.627-5.97133 10.107-9.61715 17.093-9.61715h42.892c15.574 0 25.172 17.0156 17.117 30.3449l-173.99 287.8831c-2.306 3.817-8.14.99-6.574-3.185 1.434-3.824 7.103-2.796 7.103 1.288v153.669c0 11.046-8.954 20-20 20z" />
                        <path
                            d="m1043.34 490c-11.05 0-20-8.954-20-20v-450c0-11.0457 8.95-20 20-20h194.2c53.2 0 99.87 10.2667 140 30.8s71.4 49 93.8 85.4 33.6 79.333 33.6 128.8c0 49-11.2 91.933-33.6 128.8-22.4 36.4-53.67 64.867-93.8 85.4s-86.8 30.8-140 30.8zm71-97c0 11.046 8.95 20 20 20h99c36.87 0 68.6-7 95.2-21 27.07-14 47.83-33.6 62.3-58.8 14.93-25.2 22.4-54.6 22.4-88.2 0-34.067-7.47-63.467-22.4-88.2-14.47-25.2-35.23-44.8-62.3-58.8-26.6-14-58.33-21-95.2-21h-99c-11.05 0-20 8.9543-20 20z" />
                        <path
                            d="m1621.66 490c-11.05 0-20-8.954-20-20v-450c0-11.0457 8.95-20 20-20h181.6c43.4 0 80.5 7.00001 111.3 21 31.27 14 55.3 34.0667 72.1 60.2 16.8 26.133 25.2 57.167 25.2 93.1s-8.4 66.967-25.2 93.1c-16.8 25.667-40.83 45.5-72.1 59.5-30.8 13.533-67.9 20.3-111.3 20.3h-122.59c-10.64 0-16.01-12.816-8.56-20.4 7.53-7.655 20.55-2.327 20.55 8.407v134.793c0 11.046-8.95 20-20 20zm311.04 0c-6.54 0-12.67-3.199-16.41-8.565l-96.02-137.8c-9.24-13.26.24-31.435 16.4-31.435h48.58c6.53 0 12.64 3.181 16.38 8.522l96.57 137.8c9.29 13.255-.19 31.478-16.38 31.478zm-240.04-205.415c0 11.143-13.64 16.53-21.26 8.393-7.34-7.85-1.77-20.678 8.98-20.678h118.68c40.13 0 70.23-8.633 90.3-25.9 20.53-17.267 30.8-41.3 30.8-72.1 0-31.267-10.27-55.3-30.8-72.1-20.07-16.8-50.17-25.2-90.3-25.2h-118.87c-10.82 0-16.5-12.829-9.24-20.8439 7.66-8.4529 21.71-3.0337 21.71 8.3739z" />
                    </g>
                    <g filter="url(#b)">
                        <path
                            d="m2315.26 490c-48.46 0-95.83-14.369-136.12-41.29s-71.69-65.185-90.23-109.953c-18.55-44.767-23.4-94.029-13.94-141.554 9.45-47.525 32.78-91.18 67.05-125.4441 34.26-34.2638 77.92-57.5978 125.44-67.05118 47.53-9.45338 96.79-4.601564 141.56 13.94188 44.76 18.5435 83.03 49.9457 109.95 90.2354 26.92 40.29 41.29 87.659 41.29 136.115 0 64.978-25.81 127.295-71.76 173.241-45.95 45.947-108.26 71.759-173.24 71.759zm0-85.221c67.66 0 122.5-57.487 122.5-128.419 0-39.67-28.75-93.4-86.24-161.19-7.33-8.69-19.42-22.2528-36.26-40.6899-17.73 19.404-30.44 33.6659-38.12 42.7869-56.26 66.862-84.38 119.893-84.38 159.093 0 70.932 54.84 128.419 122.5 128.419z"
                            fill="var(--svg-color)" />
                    </g>
                </svg>
            </div>
            <div class="dashboard-slot" id="card-background-alt">
                <div class="price">Price</div>
                <div class="currency">{$priceData.hydroPrice}
                    <div class="currency-class">USD</div>
                </div>
            </div>
            <div class="dashboard-slot" id="card-background-alt">
                <div class="price">Change 24/7</div>
                <div class="procentage">
                    {#if $priceData.hydroChange > 0}
                <div class="green"> {$priceData.hydroChange} %</div>
                {:else if 0 > $priceData.hydroChange}
                <div class="red"> {$priceData.hydroChange} %</div>
                {:else}
                {$priceData.hydroChange}
                {/if}
            </div>
        </div>
    </div>
    <div class="hydro-dashboard">
        <div class="dashboard-slot" id="card-background-alt">
            <div class="price">Volume 24/7</div>
            <div class="currency">{$priceData.hydroVolume}
                <div class="currency-class">USD</div>
            </div>
        </div>
        <div class="dashboard-slot" id="card-background-alt">
            <div class="price">Marketcap</div>
            <div class="currency">{$priceData.hydroMC}
                <div class="currency-class">USD</div>
            </div>
        </div>
        <div class="dashboard-slot" id="card-background-alt">
            <div class="price">Staked</div>
            <div class="currency">{$stakedData.hydroStaked}
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

    .dashboards{
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

    .dashboards{
    margin: 1rem;
    }

    .hydro-dashboard {
    flex-direction: row ;
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