<script lang="ts">
import {
    onMount
} from 'svelte';
import moment from 'moment';
import chartjs from 'chart.js/auto';

let hydroChartDataFetch: any[] = [];
let hydroChartVolumeFetch: any[] = [];
let hydroChartMarketcapFetch: any[] = [];
let ctx;
let chartCanvas: HTMLCanvasElement;

onMount(async () => {
    await hydroChart();
    ctx = chartCanvas;
    let chart = new chartjs(chartCanvas, {
        data: {
            labels: hydroChartDataFetch.map((val) => moment(val.x).format('MMM DD')),
            datasets: [{
                type: 'line',
                label: 'HYDRO/USD',
                data: hydroChartDataFetch.map((value) => value.y),
                borderColor: 'rgba(255, 255, 255, 0.50)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 1,
                pointRadius: 0,
                fill: true,
                yAxisID: 'A',
            },{
                type: 'bar',
                label: 'VOLUME/USD',
                data: hydroChartVolumeFetch.map((value) => value.y),
                yAxisID: 'B',
                backgroundColor: '#6a53ff',
                borderWidth: 1,
                borderRadius: 1,
                barThickness: 1,
                barPercentage: 1
            }, {
                type: 'line',
                label: 'MARKETCAP/USD',
                data: hydroChartMarketcapFetch.map((value) => value.y),
                yAxisID: 'C',
                borderWidth: 2,
                borderColor: '#933db5',
                backgroundColor: '#933db5',
                pointRadius: 0,
            }
        ]
        },
        options: {
            responsive: true,
            plugins: { 
                legend: { display: true, labels: {color: '#fff', font: { family: 'Roboto Mono', size: 14}}, align: 'end'}},
            scales: {
            A: {
                type: 'linear',
                grid: {display:false},
                border: {display:false},
                position: 'left',
                ticks: {color: '#ffffff80', font: { family: 'Roboto Mono', size: 10}}
            },
            B: {
                grid: {display:false},
                border: {display:false},
                position: 'right',
                ticks: {color: '#ffffff80', font: { family: 'Roboto Mono', size: 10}},
                min: 1000,
                max: 30000,
                
            },
            C: {
                grid: {display:false},
                border: {display:false},
                position: 'right',
                ticks: {color: '#ffffff80', font: { family: 'Roboto Mono', size: 8}},
                min: 50000,
                max: 150000,
            },
            x: {
                grid: {display:false},
                border: {display:false},
                ticks: {color: '#ffffff80', font: { family: 'Roboto Mono', size: 10}}
            }
        }
        }
    });
});

// fetch data from coingecko
const hydroChart = async () => {
    const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/hydro/market_chart?vs_currency=usd&days=14&interval=hourly`
    );
    const priceData = await res.json();
    if (!res.ok) {
        console.log("error")
    } else {
        const fetchHydroChart = priceData.prices.map((value: number[]) => ({
            x: value[0],
            y: value[1].toFixed(5)
        }));
        const fetchHydroVolume = priceData.total_volumes.map((value: number[]) => ({
            x: value[0],
            y: value[1].toFixed(1)
        }));

        const fetchHydroMarketcap = priceData.market_caps.map((value: number[]) => ({
            x: value[0],
            y: value[1].toFixed(1)
        }));
        hydroChartDataFetch = fetchHydroChart;
        hydroChartVolumeFetch = fetchHydroVolume;
        hydroChartMarketcapFetch = fetchHydroMarketcap;
    }
};

hydroChart();
</script>

<div class="three-quarter" id="card-background">
    <div class="column" id="a">
        <canvas bind:this={chartCanvas} id="myChart" width="auto" height="auto" />
    </div>

</div>

<style>
    .three-quarter {
        display: flex;
        flex-direction: row;
        margin-left: 0;
        height: 25rem;
    }

    .column {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #a {
        width: 100%;
        flex-direction: row;
    }

    #myChart {
        margin: 2rem;
        width: 100%;
        height: 100%;
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {

        .three-quarter {
            display: none;
        }

    }

    @media only screen and (max-width: 768px) {

        #myChart {
            margin: 2rem;
            width: 600px !important;
            height: 300px !important;
        }

    }

    @media only screen and (max-width: 992px) {

        #myChart {
            margin: 2rem;
            width: 600px !important;
            height: 300px !important;
        }

    }

    @media only screen and (max-width: 1200px) {

        #myChart {
            margin: 2rem;
            width: 600px !important;
            height: 300px !important;
        }

    }
</style>