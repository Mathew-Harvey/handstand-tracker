let video;
let poseNet
function setup() {
  createCanvas(640, 400);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded)
}

function modelLoaded(){
  console.log('poseNet ready')
}

function draw() {
  image(video, 0, 0);
  

}

