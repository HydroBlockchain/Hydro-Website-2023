<script lang="ts">
//Components
import Medium from "$lib/components/landing/medium.svelte";
import Introduction from "$lib/components/landing/pricewidget.svelte";
import Hero from "$lib/components/landing/hero.svelte";
import hydroDrop from "$lib/images/logo/hydro-drop-noframe.svg" 
</script>

<svelte:head>
    <title>Home</title>
    <meta name="Project Hydro" content="Project Hydro Web3 Architects" />
    </svelte:head>

    <section>
        <Hero />
        <div class="multiple-containers">
            <Introduction />
            <Medium />
        </div>

        <div class="full" id="card-background">
            <div class="seaContainer">
                <div class="statement">
                    Explore the depths of Web3 with Hydro!
                </div>
                <img src={hydroDrop} alt="hydro-drop" id="hydro-drop"> 
                <img src={hydroDrop} alt="hydro-drop" id="hydro-drop-alt"> 
                <img src={hydroDrop} alt="hydro-drop" id="hydro-drop-third"> 
                <img src={hydroDrop} alt="hydro-drop" id="hydro-drop-fourth"> 
                
                <div class="submarine__container">
                  <div class="light"></div>
                  <div class="submarine__periscope"></div>
                  <div class="submarine__periscope-glass"></div>
                  <div class="submarine__sail">
                    <div class="submarine__sail-shadow dark1">
                    </div>
                    <div class="submarine__sail-shadow light1"></div>
                    <div class="submarine__sail-shadow dark2"></div>
                  </div>
                  <div class="submarine__body">
                    
                    <div class="submarine__window two">
              
                    </div>
                    <div class="submarine__shadow-dark"></div>
                    <div class="submarine__shadow-light"></div>
                    <div class="submarine__shadow-arcLight"></div>
                  </div>
                  <div class="submarine__propeller">
                    <div class="propeller__perspective">
                    <div class="submarine__propeller-parts darkOne"></div>
                    <div class="submarine__propeller-parts lightOne"></div>
                    </div>        
                  </div>
                </div>
                <div class="bubbles__container">
                  <span class="bubbles bubble-1"></span>
                  <span class="bubbles bubble-2"></span>
                  <span class="bubbles bubble-3"></span>
                  <span class="bubbles bubble-4"></span>
                </div>
                <div class="ground__container">
                  <div class="ground ground1">
                    
                    <span class="up-1"></span>
                    <span class="up-2"></span>
                    <span class="up-3"></span>
                    <span class="up-4"></span>
                    <span class="up-5"></span>
                    <span class="up-6"></span>
                    <span class="up-7"></span>
                    <span class="up-8"></span>
                    <span class="up-9"></span>
                    <span class="up-10"></span>
                  </div>
                  <div class="ground ground2">
                    <span class="up-1"></span>
                    <span class="up-2"></span>
                    <span class="up-3"></span>
                    <span class="up-4"></span>
                    <span class="up-5"></span>
                    <span class="up-6"></span>
                    <span class="up-7"></span>
                    <span class="up-8"></span>
                    <span class="up-9"></span>
                    <span class="up-10"></span>
                    <span class="up-11"></span>
                    <span class="up-12"></span>
                    <span class="up-13"></span>
                    <span class="up-14"></span>
                    <span class="up-15"></span>
                    <span class="up-16"></span>
                    <span class="up-17"></span>
                    <span class="up-18"></span>
                    <span class="up-19"></span>
                    <span class="up-20"></span>
                  </div>
                </div>
              </div>

        </div>

    </section>

<style lang="scss">
.full {
    height: var(--ch-mini);
}

.statement{
    margin-top: 3rem;
    margin-left: 18rem;
    font-size: 22px;
}

#hydro-drop{
    margin-top: -3rem;
    margin-left: 1rem;
    height: 180px;
    animation: move-right ease-in-out 45s infinite;
}

#hydro-drop-alt{
    margin-bottom: 1rem;
    z-index: 1;
    margin-left: 2.5rem;
    height: 100px;
    animation: move-right ease-in-out 35s infinite;
}

#hydro-drop-third{
    margin-bottom: 1rem;
    margin-left: 2rem;
    height: 50px;
    animation: move-right ease-in-out 55s infinite;
}

#hydro-drop-fourth{
    margin-bottom: 1rem;
    margin-left: 2rem;
    height: 80px;
    animation: move-right ease-in-out 30s infinite;
}

//colors
$bgColor: #130560;
$subMarineColor: linear-gradient(90deg, #611dcf, #21628b);
$lightShadowColor: #9968ef;
$lightShadowColor2: #820ccb;
$lightShadowColor3: #752de9;
$darkShadowColor: #3d96c6;
$periscopeColor: #ba8bf7;
$propellerColor: #72178b;
$propellerColor2: #93369f;
$windowLightColor: #c9dce5;
$lightColor: #b9c7d1;
$seaGroundColor1:#0c0051;
$seaGroundColor2:#08003b;
//sizes

html,body {
  background:#1305607a;
  overflow:hidden;
}
.seaContainer {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: #1305606c;
  overflow:hidden;
  border-radius: var(--border-radius);
}
.submarine__container {
  position: absolute;
  top: 55%;
  left: 80%;
  width: 400px;
  height: 200px;
  transform: translate(-50%, -50%);
}
.submarine__body {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 70px;
  background: $subMarineColor;
  border-radius: 25px 50px 25px 50px;
  transform: translate(-50%, -50%);
}
.submarine__propeller {
  position: absolute;
  left: 75%;
  top: 50%;
  width: 30px;
  height: 50px;
  transform: translate(0%, -50%);
  perspective: 600px;
 
}
.propeller__perspective
{
   width: 100%;
  height: 100%;
  transition: transform 1s;
 
  transform-style: preserve-3d;
  animation:rotateInfinite 3s linear infinite;
  cursor: pointer;
}
.submarine__propeller-parts
{
  position: absolute;
  left: 0%;
  width: 100%;
  height: 100%;
  top: 0%;
  border-radius: 15px;
  perspective: 1000px;
  transform-style: preserve-3d;
}
.darkOne {
  top:0%;
  background: $propellerColor2;
  transform: rotateY(180deg)rotateX(225deg)
}
.lightOne
{
  top:0%;
   background: $propellerColor;
  transform:rotateX(45deg);
}
.submarine__sail {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 120px;
  height: 35px;
  border-radius: 15px 0px 0px 0px;
  transform: translate(-50%, -100%);
  background: $lightShadowColor2;
  clip-path: polygon(0% 0%, 70% 0%, 100% 100%, 0% 100%);
}

.submarine__sail-shadow {
  position: absolute;
  width: 100%;
  height: 10%;
  background: var(--transparent);
  border-radius: 15px;
}
.dark1 {
  left: 0%;
  top: 0%;
  transform: translate(0%, -33%);
}
.dark2
{
  left:0%;
  top:50%;
}
.light1{
  left:20%;
  top:20%;
  width:50%;
  background:$lightShadowColor;
}
.submarine__window {
  width: 40px;
  height: 20px;
  border-radius: 25px;
  background-image: linear-gradient(45deg,$windowLightColor,#fff);
  border: 8px solid $darkShadowColor;
  z-index:10;
  animation:shadow-change 2s linear infinite;
}
.one,
.two {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
.one {
  left: 40%;
}
.two {
  left: 20%;
}

.submarine__shadow-dark {
  position: absolute;
  left: 65%;
  top: 35%;
  width: 100px;
  height: 10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  background: $darkShadowColor;
}
.submarine__shadow-light {
  position: absolute;
  left: 35%;
  top: 13%;
  width: 100px;
  height: 6px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  background: $lightShadowColor;
}
.submarine__shadow-arcLight {
  position: absolute;
  top: 55%;
  left: 70%;
  width: 50px;
  height: 10px;
  border-radius: 5px;
  background: $lightShadowColor;
}
.submarine__periscope {
  position: absolute;
  top: 15%;
  left: 40%;
  width: 10px;
  height: 30px;
  border-right: 10px solid $lightShadowColor3;
  border-top: 10px solid $lightShadowColor2;
  border-left: 0px solid transparent;
  border-bottom: 0px solid transparent;
  border-top-right-radius: 10px;
}
.submarine__periscope-glass {
  position: absolute;
  left: 40%;
  top: 15%;
  width: 10px;
  border-radius: 10px;
  height: 15px;
  background: $propellerColor2;
  transform: translate(-50%, -15%);
}
.light {
  position: absolute;
  top: 15%;
  left: 0%;
  width: 500px;
  height: 100px;
  background: linear-gradient(to left, $lightColor, rgba(11, 29, 72, 0.01));
  /* The points are: centered top, left bottom, right bottom */
  clip-path: polygon(0% 0%, 50% 45%, 50% 55%, 0% 100%);
  
  transform: translate(-18%, -45%);
}
.bubbles__container
{
  position:absolute;
  top:50%;
  left:85%;
  width:100px;
  height:50px;
transform:translate(100%,-50%);
}
.bubbles
{
  position:absolute;
  width:10px;
  height:10px;
  border-radius:100%;
  left:5%;
  top:5%;
  background:#fff;
  opacity:0.8;
}
$bubble-class: bubble;

@for $i from 1 through 4{
  .#{$bubble-class}-#{$i}{
    top:15%*($i+1-1);
    left:1%;
    opacity: 0;
    animation:move-right 2s infinite linear;
    animation-delay: 0.55s*$i;
}
}
.ground__container
{
  position:absolute;
  top:75%;
  left:0%;
  width:100%;
  height:25%;
  background:$seaGroundColor2;
  margin-top:20px;
}
.ground1
{
  top:75%;
  height:100%;
   background:$seaGroundColor1;
}
.ground2
{
  position:absolute;
  top:35%;
  width:100%;
  height:100%;
  background:$seaGroundColor2;
}

.ground span
{
  position:absolute;
  width:60px;
  height:60px;
  border-radius:100%;
  
}
.ground1 span
{
   background:$seaGroundColor1;
}
.ground2 span
{
   background:$seaGroundColor2;
   width:80px;
  height:80px;
  border-radius:100%;
 transform:translateY(20%);
}

$ground-class: up;
@for $i from 1 through 20 
{
  .#{$ground-class}-#{$i}{
    left:-10%*($i+-1);
    top:-20px*($i*0.10);
    animation:moveThegroundRight $i+5s infinite linear;
}
}
//animation

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

@keyframes bounce {
   0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
   40% {transform: translateY(-10px);} 
   60% {transform: translateY(-5px);} 
} 

@keyframes shadow-change
{
  0%,100%
  {
    background-image: linear-gradient(45deg,$windowLightColor 0%,$windowLightColor 20% ,#fff 21%, #fff 39%, $windowLightColor 40%,#fff 41%,#fff 59%,$windowLightColor 60%);
  }
  20%
  {
    background-image: linear-gradient(45deg,$windowLightColor 20%,$windowLightColor 40% ,#fff 41%, #fff 59%, $windowLightColor 60%,#fff 61%,#fff 79%,$windowLightColor 80%);
  }
  40%
  {
    
    background-image: linear-gradient(45deg,$windowLightColor 40%,$windowLightColor 60% ,#fff 61%, #fff 79%, $windowLightColor 80%,#fff 81%,#fff 99%,$windowLightColor 0%);
  }
  60%
  {
    background-image: linear-gradient(45deg,$windowLightColor 60%,$windowLightColor 80% ,#fff 81%, #fff 99%, $windowLightColor 0%,#fff 1%,#fff 19%,$windowLightColor 20%);
  }
  80%
  {
    background-image: linear-gradient(45deg,$windowLightColor 80%,$windowLightColor 0% ,#fff 1%, #fff 19%, $windowLightColor 20%,#fff 21%,#fff 39%,$windowLightColor 40%);
  }
  
}

@keyframes move-right {
  0%
  {
    opacity:0;
  }
  10%
  {
    opacity:0.4;
    transform:translate(10%,10%);
  }
  50%
  {
    opacity:0.2;
    transform:translate(450%,25%);
  }
  80%
  {
    opacity:0;
     transform:translateX(555%);
  }
  100%
  {
    opacity:0;
    left:0%;
    top:0%;
  }
}
@keyframes rotateInfinite{
  0%
  {
    transform: rotateX(0deg);
  }
  50%
  {
    transform: rotateX(180deg);
  }
  100%
  {
    transform: rotateX(360deg);
  }
}
@keyframes moveThegroundRight
{
 90%
  {
    opacity:1;
   left:100%;
  }
  95%,100%
  {
    left:1050%;
    opacity:0;
  }
}

@media only screen and (max-width: 600px) {

    .full {
    display: none !important;
}

}

@media only screen and (max-width: 768px) {

    .statement{
    display: none !important;
}
#hydro-drop{
    margin-top: 1rem !important;
}

}

@media only screen and (max-width: 992px) {

.statement{
display: none !important;
}

#hydro-drop{
    margin-top: 1rem !important;
}

}




</style>
