//To See Result go to https://stanford.edu/~cpiech/karel/ide.html *5x5*


function main(){
    putBeeper();
    chess();
    chess();
    condition();
    corner();
     corner();
     turnLeft();
     center();
     turnLeft();
     move();
     move();
     putBeeper();
     turnLeft();
     skip();
     middle(); 
 }
 function chess() { 
    
    move(); 
    move();
    putBeeper();
    
    
    } 
    
 function condition() {
    if (leftIsClear())
    turnLeft(); 
    chess();
    if (RightIsClear)
    turnRight();
    move();
 } 
 
 function corner() {
    move();
    putBeeper();
    condition();}
    
 function center() { 
    move();
    putBeeper();
    move();
    move();
    putBeeper();
   
    
 }
 function skip(){ 
    move();
    move();
    putBeeper();}
 
 function middle () {
    
    turnLeft();
    move();
    turnLeft();
    move();
    putBeeper();} //final Beeper}