var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var toggle = document.getElementById("toggle");
var clear = document.getElementById("clear");

var shape = 0;

var newShape = function(e){
    if(shape == 0){
	shape = 1;
    }
    else{
	shape = 0;
    }
}

toggle.addEventListener("click", newShape);

var draw = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    if(shape == 0){
	ctx.beginPath();
	ctx.arc(x,y,15,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle = "black";
	ctx.fill();
    }
    else{
	ctx.fillRect(x-10,y-10,20,20);
    }
}
	
//canvas.addEventListener('click',draw);

var erase = function(e){
    ctx.clearRect(0,0,500,500);
    ctx.beginPath();
}

clear.addEventListener("click", erase);


var connect = function(e){
    var x = e.offsetX;
    var y = e.offsetY;

    ctx.closePath();
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x,y,15,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.moveTo(x,y);
}

canvas.addEventListener("click", connect);
