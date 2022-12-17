function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');

	posenet=ml5.poseNet(video, modelloaded);
	posenet.on('pose', gotresults);
}

function gotresults(results){
if(results.length>0){
	console.log(results);
	noseX=results[0].pose.nose.x;
	noseY=results[0].pose.nose.y;
}
}
function modelloaded(){
console.log("model loaded");

}
function draw() {
	game()
}






