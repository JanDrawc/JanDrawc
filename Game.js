
const canvas = document.getElementById("gamecanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height -30;

let rightpressed = false;
let leftpressed = false;

let dx = 2;
let dy = -2;

const ballradius = 10;
const gravity = 0.1;
const dragmultiplier = 0.997

const paddleheight =10;
const paddlewidth = 75;
let paddlex = (canvas.width - paddlewidth) /2;

function drawball () {
    ctx.beginPath();
    ctx.arc(x, y, ballradius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawpaddle () {
    ctx.beginPath();
    ctx.rect(paddlex, canvas.height-paddleheight, paddlewidth, paddleheight);
    ctx.fillStyle = "0095DD";
    ctx.fill();
    ctx.closePath;
}

function draw () {

    //clears canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draws ball
    drawball();
    drawpaddle();

    //collision
    if (x + dx > canvas.width - ballradius || x + dx < ballradius) {
        dx = -dx;
    }
    if (y + dy < ballradius) {dy = -dy;} else if (y+ dy > canvas.height - ballradius) { if (x>paddlex&& x < paddlex+paddlewidth) { dx = -dx} else {clearInterval(interval);}

    //drag and gravity
    if (y + ballradius + gravity < canvas.height) {dy = dy + gravity;} else {dy = dy * 0.9}
    dx = dx * dragmultiplier

    //updates offset
    x += dx;
    y += dy;

    if(rightpressed) {
        paddlex = Math.min(paddlex + 7, canvas.width-paddlewidth);
    } else if (leftpressed) {
        paddlex = Math.max(paddlex -7, 0)
    }
}

document.addEventListener("keydown",keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key === "Right"|| e.key === "ArrowRight") {
        rightpressed = true;
    } else if (e.key === "Left"||e.key === "ArrowLeft") {
        leftpressed = true;
    }}

function keyUpHandler(e) {
    if(e.key ===  "Right"|| e.key === "ArrowRight") {
        rightpressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftpressed = false;
    }
}


function startgame () {
    const interval = setInterval(draw, 10)
}

document.getElementById("runButton").addEventListener("click", function () {
    startgame();
    this.disabled = true
})