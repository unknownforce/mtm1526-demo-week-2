/*
	3 ways to get elemtns in your HTML:
	- document.getElementById()
	- document.getElementsByTagName()
	- document.getElementsByClassName()
*/

var box; // Holds our <div> to move around
var createBox = function (ev) {
	box = document.createElement('div'); // .createElement
	
	box.className = 'box'; // .className allows us to manipulate the classes of a tag
	
	document.body.appendChild(box); // .appendChild() will add an element to the HTML file just like Actionscript addChild()
	
	/*
		document.documentElement.clientWidth - the browser width
		element.offsetWidth - element's width 
	*/
	var randomLeft = Math.round(Math.random() * (document.documentElement.clientWidth - box.offsetWidth));
	box.style.left = randomLeft + 'px';
	
	var randomTop = Math.round(Math.random() * (document.documentElement.clientHeight - box.offsetHeight));
	box.style.top = randomTop + 'px';
}

var moveDown = function (ev) {
	var newTop = box.offsetTop + 10;
	box.style.top = newTop + 'px';	
}

var moveUp = function (ev) {
	var newBottom = box.offsetTop - 10;
	box.style.top = newBottom + 'px';
}

var moveRight = function (ev) {
	var newRight = box.offsetLeft + 10;
	box.style.left = newRight + 'px';	
}

var moveLeft = function (ev) {
	var newLeft = box.offsetLeft - 10;
	box.style.left = newLeft + 'px';	
}

document.getElementById('create').addEventListener('click', createBox, false);
document.getElementById('down').addEventListener('click', moveDown, false);
document.getElementById('up').addEventListener('click', moveUp, false);
document.getElementById('right').addEventListener('click', moveRight, false);
document.getElementById('left').addEventListener('click', moveLeft, false);