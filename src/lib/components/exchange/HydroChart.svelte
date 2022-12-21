<script lang="ts">
import {
    onMount
} from 'svelte';
import moment from 'moment';
import chartjs from 'chart.js/auto';

let hydroChartDataFetch: any[] = [];
let ctx;
let chartCanvas: HTMLCanvasElement;

onMount(async () => {
    await hydroChart();
    ctx = chartCanvas;
    let chart = new chartjs(chartCanvas, {
        type: 'line',
        data: {
            labels: hydroChartDataFetch.map((val) => moment(val.x).format('MMM DD')),
            datasets: [{
                label: 'Hydro',
                data: hydroChartDataFetch.map((value) => value.y),
                backgroundColor: 'var(--transparent)',
                borderColor: '#fff',
                borderWidth: 1,
                pointRadius: 0,
                fill: false,
            }]
        },
        options: {
            animation: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'hydro/usd',
                    position: 'top',
                    align: 'end',
                    color: '#fff',
                    font: {
                        family: 'Roboto Mono',
                        size: 16
                    }
                },
                subtitle: {
                    display: true,
                    text: '12h',
                    position: 'top',
                    align: 'end',
                    color: '#fff',
                    font: {
                        family: 'Roboto Mono',
                        size: 12
                    }
                },
            },
            responsive: true,
            scales: {

                x: {
                    grid: {
                        display: false
                    },
                    border: {
                        display: false
                    },
                    ticks: {
                        font: {
                            family: 'Roboto Mono',
                            size: 10
                        },
                        color: '#fff'
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    border: {
                        display: false
                    },
                    ticks: {
                        font: {
                            family: 'Roboto Mono',
                            size: 11
                        },
                        color: '#fff'
                    }
                }
            }
        }
    });
});

// fetch data from coingecko
const hydroChart = async () => {
    const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/hydro/market_chart?vs_currency=usd&days=30&interval=12H`
    );

    const priceData = await res.json();

    if (!res.ok) {
        console.log("error")
    } else {
        const fetchHydroChart = priceData.prices.map((value: number[]) => ({
            x: value[0],
            y: value[1].toFixed(5)
        }));

        hydroChartDataFetch = fetchHydroChart;

    }

};

hydroChart();
</script>

<div class="three-quarter"  id="card-background">
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

.three-quarter{
    display: none;
}

}
</style>
