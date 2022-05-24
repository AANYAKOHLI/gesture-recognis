NoseX=0;
NoseY=0;
difference=0;
leftWristX=0;
rightWristX=0;







function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#969A97');
}
function modelLoaded(){
 console.log('PoseNet Is Initialzed!');
}
function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        NoseX=results[0].pose.nose.x;
        NoseY=results[0].pose.nose.y;
        console.log("nosex="+NoseX+"nosey=" +NoseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("lefwristx="+leftWristX+"rightwristx=" +rightWristX);
    }
}
function draw(){
    background('#969A97');
    document.getElementById("square_side").innerHTML="width and height of square will be="+difference+"px";
   fill('lime');
   stroke('lime');
   square(NoseX,NoseY,difference);
}