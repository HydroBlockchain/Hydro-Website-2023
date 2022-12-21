<script>
    import hydroDrop from "$lib/images/logo/hydro-drop-noframe.svg" 
</script>

<div class="full" id="card-background">
    <div class="seaContainer">
      <div class="statement">
        Explore the depths of Web3 with Hydro!
      </div>
      <img src={hydroDrop} alt="hydro-drop" class="hydro-drop" id="hydro-drop">
      <img src={hydroDrop} alt="hydro-drop" class="hydro-drop" id="hydro-drop-alt">
      <img src={hydroDrop} alt="hydro-drop" class="hydro-drop" id="hydro-drop-fourth">
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

<style lang="scss">

.full {
    height: var(--ch-mini);
}

.statement{
    margin-top: 2rem;
    margin-left: 2rem;
    font-size: 22px;
    z-index: 100;
}

#hydro-drop{
  z-index: 1000;
  margin-top: 1rem;
    height: 130px;
    animation: moveDrop 38s infinite ease-in-out;
}

#hydro-drop-alt{
  z-index: 1000;
  margin-top: 1rem;
    height: 100px;
    animation: moveDrop 31s infinite ease-in-out;
}

#hydro-drop-fourth{
  z-index: 1000;
  margin-top: 1rem;
    height: 80px;
    animation: moveDrop 22s infinite ease-in-out;
}

//Submarine
$subMarineColor: var(--submarine-color) ;
$lightShadowColor: var(--tophatch-1);
$lightShadowColor2: var(--tophatch-2);
$lightShadowColor3: var(--tophatch-3);
$darkShadowColor: var(--shadow);
$periscopeColor: var(--periscope);
$propellerColor: var(--propeller-1);
$propellerColor2: var(--propeller-2);
$windowLightColor: var(--window);
$lightColor: var(--flashlight);
$seaGroundColor1: var(--sea-ground-1);
$seaGroundColor2: var(--sea-ground-2);

.seaContainer {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: var(--ocean-bg);
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

.propeller__perspective {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  animation:rotateInfinite 3s linear infinite;
  cursor: pointer;
}

.submarine__propeller-parts {
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

.lightOne{
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

.dark2 {
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

.one, .two {
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
  clip-path: polygon(0% 0%, 50% 45%, 50% 55%, 0% 100%);
  transform: translate(-18%, -45%);
}

.bubbles__container {
  position:absolute;
  top:50%;
  left:85%;
  width:100px;
  height:50px;
  transform:translate(100%,-50%);
}

.bubbles {
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

.ground__container {
  position:absolute;
  top:75%;
  left:0%;
  width:100%;
  height:25%;
  background:$seaGroundColor2;
  margin-top:20px;
}

.ground1 {
  top:75%;
  height:100%;
   background:$seaGroundColor1;
}

.ground2 {
  position:absolute;
  top:35%;
  width:100%;
  height:100%;
  background:$seaGroundColor2;
}

.ground span {
  position:absolute;
  width:60px;
  height:60px;
  border-radius:100%;
}

.ground1 span {
   background:$seaGroundColor1;
}

.ground2 span {
  background:$seaGroundColor2;
  width:80px;
  height:80px;
  border-radius:100%;
 transform:translateY(25%);
}

$ground-class: up;
@for $i from 1 through 20 {
  .#{$ground-class}-#{$i}{
    left:-10%*($i+-1);
    top:-20px*($i*0.10);
    animation:moveThegroundRight $i+5s infinite linear;
  }
}

//animations
@keyframes moveDrop {
  0% {opacity:0;}
  10%{opacity:0.5;transform:translate(15%);}
  20%{opacity: 0.8;}
  30%{opacity: 1;}
  40%{opacity: 1;transform:translate(355%);}
  50%{opacity: 0.9;}
  60%{opacity:0.6;transform:translate(555%);}
  70%{opacity: 0.4;}
  80%{opacity: 0.1;}
  90%{opacity:0;transform:translateX(955%);}
  100%{opacity:0;left:0%;top:0%;}
}

@keyframes shadow-change{
  0%, 100% {background-image: linear-gradient(45deg,$windowLightColor 0%,$windowLightColor 20% ,#fff 21%, #fff 39%, $windowLightColor 40%,#fff 41%,#fff 59%,$windowLightColor 60%);}
  20% {background-image: linear-gradient(45deg,$windowLightColor 20%,$windowLightColor 40% ,#fff 41%, #fff 59%, $windowLightColor 60%,#fff 61%,#fff 79%,$windowLightColor 80%);}
  40% {background-image: linear-gradient(45deg,$windowLightColor 40%,$windowLightColor 60% ,#fff 61%, #fff 79%, $windowLightColor 80%,#fff 81%,#fff 99%,$windowLightColor 0%);}
  60% {background-image: linear-gradient(45deg,$windowLightColor 60%,$windowLightColor 80% ,#fff 81%, #fff 99%, $windowLightColor 0%,#fff 1%,#fff 19%,$windowLightColor 20%);}
  80% {background-image: linear-gradient(45deg,$windowLightColor 80%,$windowLightColor 0% ,#fff 1%, #fff 19%, $windowLightColor 20%,#fff 21%,#fff 39%,$windowLightColor 40%);}  
}

@keyframes move-right {
  0% {opacity:0;}
  10% {opacity:0.4;transform:translate(10%,10%);}
  50% {opacity:0.2;transform:translate(450%,25%);}
  80% {opacity:0;transform:translateX(555%);}
  100%{opacity:0;left:0%;top:0%;}
}

@keyframes rotateInfinite {
  0% {transform: rotateX(0deg);}
  50% {transform: rotateX(180deg);}
  100% {transform: rotateX(360deg);}
}

@keyframes moveThegroundRight {
 90% {opacity:1;left:100%;}
 95%, 100% {left:1050%;opacity:0;}
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