var canvas = document.getElementById("Canvas");
var ball = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

function drawBall() {
    ball.beginPath();
    ball.arc(x, y, 10, 0, Math.PI*2);
    function randomColor() {
        ball.fillStyle= '#'+ Math.floor(Math.random()*16777215).toString(16);
        ball.fill();
    }
    ball.fillStyle=randomColor()
}

var ballRadius = 10;

function draw() {
    ball.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}

var t=10
var interval= setInterval(draw, t);

function pause(){
    clearInterval(interval);
    document.getElementById('btn4').style.display='none'
    document.getElementById('btn2').style.display='block'
    document.getElementById('btn3').style.display='none'
}
function play(){
    interval=setInterval(draw, 10);
    document.getElementById('btn2').style.display='none'
    document.getElementById('btn4').style.display='block'
    document.getElementById('btn3').style.display='block'
}
function acc(){
document.getElementById('btn1').style.display='none'
    for(let i=t;i<30;i=i+5){
        draw()
        interval=setInterval(draw,i)
    }
}

function reset(){
    location.reload();
}
