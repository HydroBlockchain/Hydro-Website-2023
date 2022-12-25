<script lang="ts">
// @ts-nocheck
import { onExpectedNetworkEth } from '$lib/utils/wallet-eth';
const tokenAddressEth = '0x946112efaB61C3636CBD52DE2E1392D7A75A6f01';
const tokenSymbolEth = 'Hydro';
const tokenDecimalsEth = 18;
const tokenImageEth = 'http://raw.githubusercontent.com/HydroBlockchain/Hydro-Brandkit-2023/858e2d2a56ffdf375f4edfb51219f3abd6bab749/svg/drop/Dark-blue-drop.svg';

async function addHydroEth() {
    if (typeof window.ethereum !== 'undefined')
        try {
            const wasAdded = ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: tokenAddressEth,
                        symbol: tokenSymbolEth,
                        decimals: tokenDecimalsEth,
                        image: tokenImageEth
                    },
                },
            });
            if (wasAdded) {
                console.log('Adding Hydro Token!');
            } else {
                console.log('Something went wrong!');
            }
        } catch (error) {
            console.log(error);
        }
}
</script>
    {#if $onExpectedNetworkEth}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={addHydroEth} disabled={!$onExpectedNetworkEth} class="button-add-hydro">
    <svg id="coin-ticker-logo"  viewBox="0 0 1024 1024"  fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="512" cy="512" r="512" fill="var(--drop-color-2)" filter="url(#filter0_b_1616_338)" />
        <path
            d="M512 857.08c141.38 0 256-120.15 256-268.36 0-82.9-60.063-195.197-180.19-336.89-15.367-18.127-40.637-46.403-75.81-84.83-37.06 40.54-63.62 70.343-79.68 89.41C314.773 395.943 256 506.713 256 588.72c0 148.21 114.62 268.36 256 268.36z"
            fill="url(#paint0_linear_1616_338)" />
        <path
            d="M512 855.73c106.035 0 192-90.113 192-201.27 0-62.175-45.048-146.398-135.143-252.668C557.333 388.197 538.38 366.99 512 338.17c-27.795 30.405-47.715 52.757-59.76 67.057C364.08 509.877 320 592.955 320 654.46c0 111.157 85.965 201.27 192 201.27z"
            fill="#244A93" fill-opacity=".5" />
        <path
            d="M512 855.21c70.69 0 128-60.075 128-134.18 0-41.45-30.032-97.598-90.095-168.445-7.683-9.063-20.318-23.202-37.905-42.415-18.53 20.27-31.81 35.172-39.84 44.705C413.387 624.642 384 680.027 384 721.03c0 74.105 57.31 134.18 128 134.18z"
            fill="url(#paint1_linear_1616_338)" fill-opacity=".75" />
        <defs>
            <filter id="filter0_b_1616_338" x="-100" y="-100" width="1224" height="1224" filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1616_338" />
                <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_1616_338" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_1616_338" x1="512" y1="167" x2="512" y2="857.08"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#614CB5" />
                <stop offset="1" stop-color="#3F70EE" />
            </linearGradient>
            <linearGradient id="paint1_linear_1616_338" x1="512" y1="510.17" x2="512" y2="855.17"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#8FAFFF" />
                <stop offset="1" stop-color="#3D7DDD" />
            </linearGradient>
        </defs>
    </svg>
        <div class="text-add-hydro">Add Hydro on Ethereum Network</div></div>
{/if}
<style>
</style>
