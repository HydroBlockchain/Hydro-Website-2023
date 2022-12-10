<script>
import item from "../../json/techlinks.json"
import { priceData } from "$lib/stores/store";
</script>

<div class="one-quarter" id="animated-border">
    <svg id="hydroswap-logo" viewBox="0 0 2080 216" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M147.6 3H186.6V213H147.6V3ZM39 213H0V3H39V213ZM150.6 123H35.7V89.7H150.6V123Z" fill="var(--logo-color)"/>
        <path d="M294.471 213V129.9L303.171 153.9L211.971 3H253.671L326.871 124.5H303.471L377.271 3H415.671L324.471 153.9L333.471 129.9V213H294.471Z" fill="var(--logo-color)"/>
        <path d="M438.574 213V3H530.374C553.174 3 573.174 7.4 590.374 16.2C607.574 25 620.974 37.2 630.574 52.8C640.174 68.4 644.974 86.8 644.974 108C644.974 129 640.174 147.4 630.574 163.2C620.974 178.8 607.574 191 590.374 199.8C573.174 208.6 553.174 213 530.374 213H438.574ZM477.574 180H528.574C544.374 180 557.974 177 569.374 171C580.974 165 589.874 156.6 596.074 145.8C602.474 135 605.674 122.4 605.674 108C605.674 93.4 602.474 80.8 596.074 70.2C589.874 59.4 580.974 51 569.374 45C557.974 39 544.374 36 528.574 36H477.574V180Z" fill="var(--logo-color)"/>
        <path d="M686.426 213V3H772.826C791.426 3 807.326 6 820.526 12C833.926 18 844.226 26.6 851.426 37.8C858.626 49 862.226 62.3 862.226 77.7C862.226 93.1 858.626 106.4 851.426 117.6C844.226 128.6 833.926 137.1 820.526 143.1C807.326 148.9 791.426 151.8 772.826 151.8H708.026L725.426 134.1V213H686.426ZM823.826 213L770.726 136.8H812.426L865.826 213H823.826ZM725.426 138.3L708.026 119.7H771.026C788.226 119.7 801.126 116 809.726 108.6C818.526 101.2 822.926 90.9 822.926 77.7C822.926 64.3 818.526 54 809.726 46.8C801.126 39.6 788.226 36 771.026 36H708.026L725.426 16.8V138.3Z" fill="var(--logo-color)"/>
        <path d="M1004.26 216C987.859 216 972.759 213.3 958.959 207.9C945.159 202.5 933.159 195 922.959 185.4C912.759 175.6 904.859 164.2 899.259 151.2C893.659 138 890.859 123.6 890.859 108C890.859 92.4 893.659 78.1 899.259 65.1C904.859 51.9 912.759 40.5 922.959 30.9C933.159 21.1 945.159 13.5 958.959 8.1C972.759 2.7 987.759 0 1003.96 0C1020.36 0 1035.36 2.7 1048.96 8.1C1062.76 13.5 1074.76 21.1 1084.96 30.9C1095.16 40.5 1103.06 51.9 1108.66 65.1C1114.26 78.1 1117.06 92.4 1117.06 108C1117.06 123.6 1114.26 138 1108.66 151.2C1103.06 164.4 1095.16 175.8 1084.96 185.4C1074.76 195 1062.76 202.5 1048.96 207.9C1035.36 213.3 1020.46 216 1004.26 216ZM1003.96 181.8C1014.56 181.8 1024.36 180 1033.36 176.4C1042.36 172.8 1050.16 167.7 1056.76 161.1C1063.36 154.3 1068.46 146.5 1072.06 137.7C1075.86 128.7 1077.76 118.8 1077.76 108C1077.76 97.2 1075.86 87.4 1072.06 78.6C1068.46 69.6 1063.36 61.8 1056.76 55.2C1050.16 48.4 1042.36 43.2 1033.36 39.6C1024.36 36 1014.56 34.2 1003.96 34.2C993.359 34.2 983.559 36 974.559 39.6C965.759 43.2 957.959 48.4 951.159 55.2C944.559 61.8 939.359 69.6 935.559 78.6C931.959 87.4 930.159 97.2 930.159 108C930.159 118.6 931.959 128.4 935.559 137.4C939.359 146.4 944.559 154.3 951.159 161.1C957.759 167.7 965.559 172.8 974.559 176.4C983.559 180 993.359 181.8 1003.96 181.8Z" fill="var(--logo-color)"/>
        <path d="M1223.5 216C1207.1 216 1191.4 213.7 1176.4 209.1C1161.4 204.3 1149.5 198.2 1140.7 190.8L1154.2 160.5C1162.6 167.1 1173 172.6 1185.4 177C1197.8 181.4 1210.5 183.6 1223.5 183.6C1234.5 183.6 1243.4 182.4 1250.2 180C1257 177.6 1262 174.4 1265.2 170.4C1268.4 166.2 1270 161.5 1270 156.3C1270 149.9 1267.7 144.8 1263.1 141C1258.5 137 1252.5 133.9 1245.1 131.7C1237.9 129.3 1229.8 127.1 1220.8 125.1C1212 123.1 1203.1 120.8 1194.1 118.2C1185.3 115.4 1177.2 111.9 1169.8 107.7C1162.6 103.3 1156.7 97.5 1152.1 90.3C1147.5 83.1 1145.2 73.9 1145.2 62.7C1145.2 51.3 1148.2 40.9 1154.2 31.5C1160.4 21.9 1169.7 14.3 1182.1 8.7C1194.7 2.9 1210.6 0 1229.8 0C1242.4 0 1254.9 1.6 1267.3 4.80001C1279.7 8 1290.5 12.6 1299.7 18.6L1287.4 48.9C1278 43.3 1268.3 39.2 1258.3 36.6C1248.3 33.8 1238.7 32.4 1229.5 32.4C1218.7 32.4 1209.9 33.7 1203.1 36.3C1196.5 38.9 1191.6 42.3 1188.4 46.5C1185.4 50.7 1183.9 55.5 1183.9 60.9C1183.9 67.3 1186.1 72.5 1190.5 76.5C1195.1 80.3 1201 83.3 1208.2 85.5C1215.6 87.7 1223.8 89.9 1232.8 92.1C1241.8 94.1 1250.7 96.4 1259.5 99C1268.5 101.6 1276.6 105 1283.8 109.2C1291.2 113.4 1297.1 119.1 1301.5 126.3C1306.1 133.5 1308.4 142.6 1308.4 153.6C1308.4 164.8 1305.3 175.2 1299.1 184.8C1293.1 194.2 1283.8 201.8 1271.2 207.6C1258.6 213.2 1242.7 216 1223.5 216Z" fill="var(--logo-color)"/>
        <path d="M1396.57 213L1326.97 3H1367.47L1429.57 192.9H1409.47L1473.97 3H1509.97L1572.67 192.9H1553.17L1616.77 3H1653.97L1584.37 213H1542.97L1485.67 41.7H1496.47L1438.27 213H1396.57Z" fill="var(--logo-color)"/>
        <path d="M1649.3 213L1743.8 3H1782.2L1877 213H1836.2L1754.9 23.7H1770.5L1689.5 213H1649.3ZM1692.8 164.4L1703.3 133.8H1816.7L1827.2 164.4H1692.8Z" fill="var(--logo-color)"/>
        <path d="M1903.71 213V3H1990.11C2008.71 3 2024.61 6 2037.81 12C2051.21 18 2061.51 26.6 2068.71 37.8C2075.91 49 2079.51 62.3 2079.51 77.7C2079.51 93.1 2075.91 106.4 2068.71 117.6C2061.51 128.8 2051.21 137.4 2037.81 143.4C2024.61 149.4 2008.71 152.4 1990.11 152.4H1925.31L1942.71 134.1V213H1903.71ZM1942.71 138.3L1925.31 119.4H1988.31C2005.51 119.4 2018.41 115.8 2027.01 108.6C2035.81 101.2 2040.21 90.9 2040.21 77.7C2040.21 64.3 2035.81 54 2027.01 46.8C2018.41 39.6 2005.51 36 1988.31 36H1925.31L1942.71 16.8V138.3Z" fill="var(--logo-color)"/>
        </svg>
        
    <div class="hydroswap">
        <div class="hydro-dashboard">

            <div class="dashboard-slot" id="price">
                <div class="price">Price</div>
                <div class="currency">{$priceData.hydroPrice}
                    <div class="currency-class">USD</div>
                </div>
            </div>

            <div class="dashboard-slot" id="marketcap">
                <div class="price">Marketcap</div>
                <div class="currency">{$priceData.hydroMC}
                    <div class="currency-class">USD</div>
                </div>
            </div>

            <div class="dashboard-slot" id="volume">
                <div class="price">Vol 24/7</div>
                <div class="currency">{$priceData.hydroVolume}
                    <div class="currency-class">USD</div>
                </div>
            </div>

            <div class="dashboard-slot" id="staked">
                <div class="price">Staked</div>
                <div class="currency">{$priceData.hydroStaked}
                    <div class="currency-class">HYDRO</div>
                </div>
            </div>

            <div class="dashboard-slot" id="supply">
                <div class="price">Circulating Supply</div>
                <div class="currency">{$priceData.hydroSupply}
                    <div class="currency-class">HYDRO</div>
                </div>
            </div>

        </div>
        <div class="button-row">
            <a href="{item[1].link}" target="_blank" rel="noopener noreferrer">
                <div class="button" id="hydroswap-buttons">Swap</div></a>
            <a href="{item[2].link}" target="_blank" rel="noopener noreferrer">
                <div class="button" id="hydroswap-buttons">Stake</div></a>
            <a href="{item[3].link}" target="_blank" rel="noopener noreferrer">
                <div class="button" id="hydroswap-buttons">Bridge</div></a>
        </div>
    </div>
    <div class="cg-credit"><a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">Data from Coingecko & Bscscan</a></div>
</div>

<style>
/* Hydroswap */

.currency-class {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--fs-xsmall);
    margin-left: 0.3rem;
    color: var(--text-color-alt);
}

#staked {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--text-color);
}

.hydro-dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    width: 450px;
    color: var(--text-color);
}

.dashboard-slot {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0.5rem;
    justify-content: space-between;
}

.cg-credit {
    display: flex !important;
    width: 100%;
    justify-content: flex-end;
    margin-right: 1rem !important;
    margin-bottom: 0.5rem;
    font-size: var(--fs-mini);
}

.price {
    display: flex;
    justify-content: flex-start;
}

.currency {
    display: flex;
    justify-content: flex-end;
}

.one-quarter {
    margin-right: 0px;
    margin-left: 15px;
    flex-direction: column;
    justify-content: space-between;
}

.hydroswap {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#hydroswap-logo {
    margin-top: 5rem;
    margin-bottom: 0rem;
    height: 35px;
}

.button-row {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
}

#hydroswap-buttons {
    width: 100px;
    margin: 1rem;
}
</style>
