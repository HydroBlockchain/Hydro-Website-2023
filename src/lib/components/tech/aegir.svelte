<script>
import aegir from "$lib/images/logos/Aegir-Wallet.svg";
import item from "../../json/techlinks.json"
</script>

<div class="half" id="animated-border">

    <div class="products">
        <img src={aegir} alt="aegir-logo" id="aegir-logo"/>

        <div class="button-row">
            <a href="{item[9].link}" target="_blank" rel="noopener noreferrer" >
                <div class="playstore-button" id="aegir-button-play">
                    <svg id="playstore-logo" viewBox="0 0 232 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.640001 0C0.320001 0.992 0 1.97333 0 3.28533V251.061C0 253.376 0.650667 254.688 1.96267 256L123.723 127.008L0.640001 0ZM131.936 135.552L163.413 168.032L118.475 193.632C118.475 193.632 61.3547 226.101 29.856 244.181L131.936 135.552ZM140.48 126.688L174.251 161.803C179.541 158.859 220.875 135.221 226.773 131.936C233.003 128.331 232.373 123.403 227.083 120.779C222.187 118.059 180.853 94.3787 174.603 90.5387L140.437 126.72L140.48 126.688V126.688ZM131.915 118.155L163.744 84.352L118.315 58.4213C118.315 58.4213 44.256 16.0533 19.616 1.90933L131.936 118.155H131.915Z" fill="white" class="svg-elem-1"></path>
                        </svg>  
                        <div class="download-text">Get it on
                            <div class="download-text-inner">Google Play</div>
                        </div>   
                    </div></a>
            <a href="{item[10].link}" target="_blank" rel="noopener noreferrer" >
                <div class="apple-button" id="aegir-button-ios">
                    

                        <svg id="apple-logo" viewBox="0 0 281 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M103.126 162.178L174.666 32.9661C175.646 31.1948 176.635 29.4305 177.519 27.5994C178.321 25.937 179.002 24.2582 179.446 22.4447C180.386 18.6293 180.134 14.6523 178.673 11.0101C177.224 7.38667 174.673 4.36265 171.413 2.39933C168.181 0.442768 164.377 -0.351861 160.631 0.146828C156.876 0.650245 153.448 2.4122 150.746 5.16695C149.466 6.47583 148.41 7.93106 147.431 9.48697C146.354 11.1998 145.382 12.9746 144.399 14.7459L139.875 22.9165L135.35 14.7459C134.37 12.9723 133.398 11.1986 132.321 9.48697C131.341 7.93106 130.285 6.47583 129.002 5.16695C126.304 2.4122 122.876 0.651415 119.121 0.144486C115.375 -0.352934 111.572 0.442487 108.339 2.39933C105.079 4.36265 102.527 7.38667 101.077 11.0101C99.618 14.6511 99.3663 18.6293 100.304 22.4447C100.749 24.2593 101.43 25.9382 102.233 27.5994C103.115 29.4305 104.104 31.1936 105.087 32.9661L119.697 59.358L62.7702 162.178H23.7601C21.798 162.178 19.837 162.17 17.876 162.286C16.0941 162.391 14.3591 162.618 12.6311 163.122C8.99243 164.182 5.81505 166.397 3.51924 169.537C1.2363 172.657 0 176.479 0 180.401C0 184.325 1.23747 188.141 3.51924 191.261C5.81388 194.403 8.99243 196.618 12.6299 197.677C14.3591 198.18 16.0953 198.406 17.876 198.514C19.837 198.631 21.798 198.62 23.7601 198.62H177.096C177.296 198.202 177.787 197.105 178.267 195.462C183.126 178.895 171.06 162.178 154.446 162.178H103.126ZM36.445 204.587L27.1705 222.157C26.2128 223.975 25.2458 225.786 24.3794 227.666C23.595 229.372 22.9277 231.096 22.4934 232.957C21.5743 236.875 21.819 240.958 23.2485 244.699C24.6674 248.416 27.1658 251.524 30.3549 253.536C33.5475 255.55 37.2517 256.365 40.9067 255.849C44.5817 255.334 47.937 253.524 50.5805 250.695C51.8356 249.351 52.8681 247.857 53.8258 246.261C54.8818 244.502 55.8324 242.68 56.7936 240.862L70.2442 215.379C69.1952 213.634 59.1538 198.164 36.445 204.587ZM277.454 169.399C275.196 166.34 271.99 164.114 268.334 163.069C266.606 162.571 264.868 162.348 263.086 162.244C261.121 162.128 259.161 162.137 257.197 162.137H218.319L166.934 70.6205C159.143 78.8215 155.658 88.006 154.322 96.3486C152.384 108.446 154.752 120.857 160.714 131.475L222.46 241.446C223.443 243.195 224.415 244.947 225.493 246.638C226.473 248.172 227.529 249.609 228.814 250.9C231.518 253.62 234.946 255.359 238.705 255.855C242.442 256.351 246.233 255.569 249.496 253.631C252.755 251.696 255.312 248.71 256.766 245.135C258.225 241.539 258.475 237.613 257.536 233.848C257.09 232.058 256.41 230.4 255.605 228.76C254.723 226.954 253.734 225.213 252.75 223.464L238.514 198.103H257.199C259.163 198.103 261.122 198.114 263.087 197.998C264.869 197.892 266.607 197.67 268.335 197.172C271.991 196.127 275.198 193.901 277.455 190.842C279.747 187.738 280.982 183.98 280.977 180.121C280.981 176.262 279.746 172.504 277.454 169.399V169.399Z" fill="var(--text-color)" class="svg-elem-1"></path>
                            </svg>
                            
                        
                    <div class="download-text">Download on the
                        <div class="download-text-inner">Appstore</div>
                    </div> 
                    </div></a>
        </div>

    </div>

</div>

<style>
.half {
    margin-right: 0px;
    margin-left: 15px;

}

.download-text{
    display: flex;
    flex-direction: column;
    text-align: start;
    font-size: 9px;
}

.download-text-inner{
    font-size: var(--fs-small);
}

.apple-button, .playstore-button{
    display: flex;
    flex-direction: row;
	justify-content: space-evenly;
    text-align: center;
    align-items: center;
	padding: 0.5rem;
	border-radius: var(--border-radius);
	background-color: var(--button-color);
	color: var(--text-color);
    font-size: var(--fs-xsmall);
    width: 130px;
    height: 45px;
    margin-left: 2rem;
    margin-right: 2rem;
}

.apple-button{
    font-family: 'Open Sans', sans-serif;
}

.playstore-button{
    font-family: 'Roboto', sans-serif;
}

#apple-logo, #playstore-logo{
    height: 25px;
    width: auto;
}

.products {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#aegir-logo {
	height: 35px;
	margin: 10px;
}
/***************************************************
 * Generated by SVG Artista on 12/10/2022, 9:49:29 PM
 * MIT license (https://opensource.org/licenses/MIT)
 * W. https://svgartista.net
 **************************************************/

 @-webkit-keyframes animate-svg-fill-1 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

@keyframes animate-svg-fill-1 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

.svg-elem-1 {
  -webkit-animation: animate-svg-fill-1 0.7s ease 0.8s both;
          animation: animate-svg-fill-1 0.7s ease 0.8s both;
}

@-webkit-keyframes animate-svg-fill-2 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

@keyframes animate-svg-fill-2 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

.svg-elem-2 {
  -webkit-animation: animate-svg-fill-2 0.7s ease 0.9s both;
          animation: animate-svg-fill-2 0.7s ease 0.9s both;
}

</style>
