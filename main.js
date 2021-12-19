x = 0;
y = 0;

screen_width = "";
screen_height = "";
to_number = "";
speak_data = "";

draw_apple = "";
apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();


function preload(){
  apple = loadImage("apple.png");
}


function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number = Number(content);

    if(Number.isInteger(to_number)){
      draw_apple = "set";
      
      for(i=1; i<=to_number;i++){
        x = Math.floor(Math.random()*1750);
        y = Math.floor(Math.random()*1300);
        image(apple,x,y,50,50);
        
      }
      
      document.getElementById("status").innerHTML = "Started drawing apple";
    }
else{
  document.getElementById("status").innerHTML = "The speech has not recognized a number";
}






}

function setup() {
 canvas = createCanvas(1900 , 1500);

}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    
   

}
    draw_apple = "";
    
  }


function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = to_number + "apples have been drawn";
}
