function setup(){
    video= createCapture(VIDEO);
    video.size(550, 400);

    canvas= createCanvas(550, 350);
    canvas.position(560, 150);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' ,gotPoses);
}

function modelLoaded(){
    console.log("Pose Net is Initalized");
}

function draw(){
    background("#3DB7EE");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results)
    }
}