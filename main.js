nosex = "" ; 
nosey = "" ;
lwx = "" ;
rwx = "" ; 
difference = "" ; 


function preload() {

}

function setup() {

     video = createCapture(VIDEO)
     video.position(165 , 150)
     video.size(300 , 300 )
     pn = ml5.poseNet(video , modelLoaded)
     pn.on("pose" , gotResults )
canvas = createCanvas(300 , 300) ; 
canvas.position(800 , 150)


}

function modelLoaded() {
    console.log("model has loaded commander") 
}

function gotResults(results){

if(results.length>0){
console.log(results)
nosex = results[0].pose.nose.x ; 
nosey = results[0].pose.nose.y ; 
lwx = results[0].pose.leftWrist.x ; 
rwx = results[0].pose.rightWrist.x ; 

difference = floor( lwx -rwx )
}

}

function draw() {
    
    background('#FFA500')
    fill('#0000FF')
    stroke('#FFFFFF')
    square(nosex , nosey , difference) ; 
    document.getElementById("wh").innerHTML = "Width and Height = "+ difference + " pixels" ; 
}