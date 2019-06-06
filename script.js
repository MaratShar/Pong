/*document.querySelector("circle").onclick = function(){
    console.log("Hello, World")
    var cx = document.querySelector("circle").getAttribute("cx")
    console.log(cx)
    cx = parseInt(cx) + 10
    console.log(cx)
    
    //for(let cx = 200; cx < 1000; cx++){
       document.querySelector("circle").setAttribute("cx", cx) 
   // }
        
    
    
};
*/
var width = parseInt(document.querySelector("svg").getAttribute("width"));
var height = parseInt(document.querySelector("svg").getAttribute("height"));
var stepX = 2
var stepY = 2
var stepRacket = 0
var score = 0
var attempts = 4
var r = parseInt(document.querySelector("circle").getAttribute("r"))

function move() {
	var cx = document.querySelector("circle").getAttribute("cx");
	cx = parseInt(cx) + stepX
	if (cx + r == width || cx - r == 0) {
		stepX = -stepX
	}
	document.querySelector("circle").setAttribute("cx", cx);
	var cy = document.querySelector("circle").getAttribute("cy");
	cy = parseInt(cy) + stepY
	if (cy + r == height || cy - r== 0) {
		stepY = -stepY
	}
	var racketY = parseInt(document.querySelector("rect").getAttribute("y"))
	var racketX = parseInt(document.querySelector("rect").getAttribute("x"));
	var racketWidth = parseInt(document.querySelector("rect").getAttribute("width"));
	if (cy + r== racketY && cx >= racketX && cx <= racketX + racketWidth) {
		stepY = -stepY
		score++
		document.querySelector("#score").innerHTML = score
	}
	if (cy + r == height) {
		attempts--
		document.querySelector("#attempts").innerHTML = attempts
	}


	document.querySelector("circle").setAttribute("cy", cy);

	if (attempts == 0) {
		alert("К сожалению ты проиграл попробуй ещё раз")
		attempts = 4
		document.querySelector("#attempts").innerHTML = attempts

	}


}

function moveRacket() {
	var x = parseInt(document.querySelector("rect").getAttribute("x"));
	x = x + stepRacket
	var widthRacket = parseInt(document.querySelector("rect").getAttribute("width"))
	if (widthRacket + x > width){
		x = width - widthRacket
	}
    if (x < 0){
		x = 0
	}
	document.querySelector("rect").setAttribute("x", x)
	 
}


setInterval(moveRacket, 10)
setInterval(move, 10)

document.onkeydown = function (event) {
	var x = parseInt(document.querySelector("rect").getAttribute("x"));
	if (event.keyCode == 37) {
		//x = x-5
		//document.querySelector("rect").setAttribute("x", x)
		stepRacket = -5
	}

	if (event.keyCode == 39) {
		//x = x+5
		//document.querySelector("rect").setAttribute("x", x)
		stepRacket = 5

	}

}
document.onkeyup = function (event) {
	stepRacket = 0
}
