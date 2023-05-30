noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(850, 500);
    canvas.position(600, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}    
    function draw() {
        background('#969A97');
        textSize(difference);
        text("Krishiv", noseX, noseY);
        document.getElementById("number_side").innerHTML = "Width And Height of a Square will be = " + difference + "px";
        fill('#F90093');

    }
    
    function modelLoaded() {
        console.log('PoseNet Is Initialized!');
    }
    
    function gotPoses(results) {
        if(results.length > 0) {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;  
            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);
        }
   }