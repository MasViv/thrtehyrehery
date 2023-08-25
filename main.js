noseX=0;
noseY=0;

function preload(){
    clown_nose=loadImage('https://i.postimg.cc/9QqWsvVD/R-removebg-preview.png');
}

function take_snapshot()
{
    save('Snapshot@snap.png');
}    
function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses)
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX-50, noseY-50, 100, 100);
}

function modelLoaded()
{
    console.log('Posenet has been activated, hahaha!!!');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x=" + noseX);
        console.log("nose y=" + noseY);
    }
}