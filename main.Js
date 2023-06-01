
function preload(){
    img = loadImage('scaramouche.jpg');
  }
  
  
  function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
  
    
    document.getElementById("status").innerHTML = "Estado: detectando objetos";
  }
function modelLoaded(){
    console.log("modelo cargado");
    status=true;
    objectDetector.detect(img, gotResult);
}  

function gotResult(error,results){
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
}