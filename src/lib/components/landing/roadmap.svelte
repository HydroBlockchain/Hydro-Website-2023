<script>

</script>

<div class="full" id="animated-border">
    <div class="information">

        <div class="roadmap">
            <div class="roadmap-card-half" id="animated-border">
                <div class="half-card-structure">
                    <div class="card-row" id="quarter">Q1</div>
                    <div class="card-row" id="what">Roadmap Entry</div>
                    <div class="card-row" id="progress">
                        <div class="container">    
                            <div class="progress1 progress-moved">
                              <div class="progress-bar1" >
                              </div>                       
                            </div> 
                          </div>
                    </div>
                </div>
            </div>
            
            <div class="roadmap-card-half" id="animated-border">
                <div class="half-card-structure">
                    <div class="card-row" id="quarter">Q1</div>
                    <div class="card-row" id="what">Roadmap Entry</div>
                    <div class="card-row" id="progress">
                        <div class="container">    
                            <div class="progress2 progress-moved">
                              <div class="progress-bar2" >
                              </div>                       
                            </div> 
                          </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="roadmap-card-one" id="animated-border">
                    <div class="one-card-structure">
                        <div class="card-row-small" id="quarter">Q1</div>
                        <div class="card-row-small" id="what-small">Roadmap Entry</div>
                        <div class="card-row-small" id="progress">
                            <div class="container">    
                                <div class="progress3 progress-moved">
                                  <div class="progress-bar3" >
                                  </div>                       
                                </div> 
                              </div>
                        </div>
                    </div>
                </div>
                <div class="roadmap-card-one" id="animated-border">
                    <div class="one-card-structure">
                        <div class="card-row-small" id="quarter">Q1</div>
                        <div class="card-row-small" id="what-small">Roadmap Entry</div>
                        <div class="card-row-small" id="progress">
                            <div class="container">    
                                <div class="progress4 progress-moved">
                                  <div class="progress-bar4" >
                                  </div>                       
                                </div> 
                              </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="roadmap">
            <div class="row">
                <div class="roadmap-card-one" id="animated-border">
                    <div class="one-card-structure">
                        <div class="card-row-small" id="quarter">Q1</div>
                        <div class="card-row-small" id="what-small">Roadmap Entry</div>
                        <div class="card-row-small" id="progress">
                            <div class="container">    
                                <div class="progress5 progress-moved">
                                  <div class="progress-bar5" >
                                  </div>                       
                                </div> 
                              </div>
                        </div>
                    </div>
                </div>
                <div class="roadmap-card-one" id="animated-border">
                    <div class="one-card-structure">
                        <div class="card-row-small" id="quarter">Q1</div>
                        <div class="card-row-small" id="what-small">Roadmap Entry</div>
                        <div class="card-row-small" id="progress">
                            <div class="container">    
                                <div class="progress6 progress-moved">
                                  <div class="progress-bar6" >
                                  </div>                       
                                </div> 
                              </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="roadmap-card-half" id="animated-border">
                <div class="half-card-structure">
                    <div class="card-row" id="quarter">Q1</div>
                    <div class="card-row" id="what">Roadmap Entry</div>
                    <div class="card-row" id="progress">
                        <div class="container">    
                            <div class="progress7 progress-moved">
                              <div class="progress-bar7" >
                              </div>                       
                            </div> 
                          </div>
                    </div>
                </div>
            </div>

            <div class="roadmap-card-half" id="animated-border">
                <div class="half-card-structure">
                    <div class="card-row" id="quarter">Q1</div>
                    <div class="card-row" id="what">Roadmap Entry</div>
                    <div class="card-row" id="progress">
                        <div class="container">    
                            <div class="progress8 progress-moved">
                              <div class="progress-bar8" >
                              </div>                       
                            </div> 
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
#progress {
    justify-content: flex-end;
    align-items: end;
    text-align: end;
    margin-bottom: -10px;
    font-size: 10px;
}

#what,
#what-small {
    justify-content: center;
    align-items: center;
    text-align: center;

    margin-bottom: 10px;
}

#quarter {
    justify-content: flex-start;
    align-self: start;
    text-align: start;
    margin-top: 10px;
    font-size: 10px;
}

.card-row {
    width: 450px;
    display: flex;
    flex-direction: row;
}

.card-row-small {
    width: 200px;
    display: flex;
    flex-direction: row;
}

.half-card-structure {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.one-card-structure {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.row {
    display: flex;
    flex-direction: row;
}

.full {
    height: var(--ch-large);
}

.information {
    display: flex;
    flex-direction: row;
}

.roadmap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.roadmap-card-one {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 230px;
    height: 120px;
}

.roadmap-card-half {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 500px;
    height: 150px;
}

.container {
  width: 500px;
  text-align: center;
  justify-content: space-between;
}

//Progress Bar 1
.progress1 {
  padding: 3px;
  border-radius: 7px;
}

.progress-bar1 {
  height: 10px;
  border-radius: 7px;
  transition: 0.4s linear;  
  transition-property: width, background-color;    
}

.progress-moved .progress-bar1 {
  width: 85%; 
  background-color:rgba(255, 255, 255, 0.65);  
  animation: progressAnimation1 3s;
}

@keyframes progressAnimation1 {
  0%   { width: 5%; background-color: rgba(255, 255, 255, 0.40);}
  100% { width: 85%; background-color: rgba(255, 255, 255, 0.60); }
}

//Progress bar 2
.progress2 {
  padding: 3px;
  border-radius: 7px;
}

.progress-bar2 {
  height: 10px;
  border-radius: 7px;
  transition: 0.4s linear;  
  transition-property: width, background-color;    
}

.progress-moved .progress-bar2 {
  width: 45%; 
  background-color:rgba(255, 255, 255, 0.65);  
  animation: progressAnimation2 3s;
}

@keyframes progressAnimation2 {
  0%   { width: 5%; background-color: rgba(255, 255, 255, 0.40);}
  100% { width: 45%; background-color: rgba(255, 255, 255, 0.60); }
}

//Progress bar 3
.progress3 {
  padding: 3px;
  border-radius: 7px;
}

.progress-bar3 {
  height: 10px;
  border-radius: 7px;
  transition: 0.4s linear;  
  transition-property: width, background-color;    
}

.progress-moved .progress-bar3 {
  width: 16%; 
  background-color:rgba(255, 255, 255, 0.65);  
  animation: progressAnimation3 3s;
}

@keyframes progressAnimation3 {
  0%   { width: 5%; background-color: rgba(255, 255, 255, 0.40);}
  100% { width: 16%; background-color: rgba(255, 255, 255, 0.60); }
}

//Progress bar 4
.progress4 {
  padding: 3px;
  border-radius: 7px;
}

.progress-bar4 {
  height: 10px;
  border-radius: 7px;
  transition: 0.4s linear;  
  transition-property: width, background-color;    
}

.progress-moved .progress-bar4 {
  width: 32%; 
  background-color:rgba(255, 255, 255, 0.65);  
  animation: progressAnimation4 3s;
}

@keyframes progressAnimation4 {
  0%   { width: 5%; background-color: rgba(255, 255, 255, 0.40);}
  100% { width: 32%; background-color: rgba(255, 255, 255, 0.60); }
}

//Progress bar 5
.progress5 {
  padding: 3px;
  border-radius: 7px;
}

.progress-bar5 {
  height: 10px;
  border-radius: 7px;
  transition: 0.4s linear;  
  transition-property: width, background-color;    
}

.progress-moved .progress-bar5 {
  width: 41%; 
  background-color:rgba(255, 255, 255, 0.65);  
  animation: progressAnimation5 3s;
}

@keyframes progressAnimation5 {
  0%   { width: 5%; background-color: rgba(255, 255, 255, 0.40);}
  100% { width: 41%; background-color: rgba(255, 255, 255, 0.60); }
}

//Progress bar 6
.progress6 {
  padding: 3px;
  border-radius: 7px;
}

.progress-bar6 {
  height: 10px;
  border-radius: 7px;
  transition: 0.4s linear;  
  transition-property: width, background-color;    
}

.progress-moved .progress-bar6 {
  width: 24%; 
  background-color:rgba(255, 255, 255, 0.65);  
  animation: progressAnimation6 3s;
}

@keyframes progressAnimation6 {
  0%   { width: 5%; background-color: rgba(255, 255, 255, 0.40);}
  100% { width: 24%; background-color: rgba(255, 255, 255, 0.60); }
}

//Progress bar 7
.progress7 {
  padding: 3px;
  border-radius: 7px;
}

.progress-bar7 {
  height: 10px;
  border-radius: 7px;
  transition: 0.4s linear;  
  transition-property: width, background-color;    
}

.progress-moved .progress-bar7 {
  width: 16%; 
  background-color:rgba(255, 255, 255, 0.65);  
  animation: progressAnimation7 3s;
}

@keyframes progressAnimation7 {
  0%   { width: 5%; background-color: rgba(255, 255, 255, 0.40);}
  100% { width: 11%; background-color: rgba(255, 255, 255, 0.60); }
}

//Progress bar 8
.progress8 {
  padding: 3px;
  border-radius: 7px;
}

.progress-bar8 {
  height: 10px;
  border-radius: 7px;
  transition: 0.4s linear;  
  transition-property: width, background-color;    
}

.progress-moved .progress-bar8 {
  width: 9%; 
  background-color:rgba(255, 255, 255, 0.65);  
  animation: progressAnimation8 3s;
}

@keyframes progressAnimation8 {
  0%   { width: 5%; background-color: rgba(255, 255, 255, 0.40);}
  100% { width: 9%; background-color: rgba(255, 255, 255, 0.60); }
}

</style>
