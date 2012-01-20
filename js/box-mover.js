/*
	3 ways to get elemtns in your HTML:
	- document.getElementById()
	- document.getElementsByTagName()
	- document.getElementsByClassName()
*/

var box; // Holds our <div> to move around
var createBox = function (ev) {
	removeActiveClass();
	box = document.createElement('div'); // .createElement
	
	box.className = 'box active'; // .className allows us to manipulate the classes of a tag
	
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

document.body.addEventListener('keydown', function (ev) {
	switch(ev.keyCode) {
		case 38 :
			moveUp();
			break;
		case 40 :
			moveDown();
			break;
		case 39 :
			moveRight();
			break;
		case 37 :
			moveLeft();
			break;
		default :
			// defauklt is for when none of the other cases match
			console.log(ev.keyCode);
			break;
	}
}, false);

document.getElementById('color').addEventListener('change', function (ev) {
	// Inside an event listener 'this' referes to the element that event listener is attached to
	console.log(this.value);
	
	// 'ev.target' refers to the thing that originally fired the vent
	// not necessaryily the elemtn the listener is bound to
	console.log(ev.target.value);
	//'.value' gets what the user typed into the an input field
	box.style.backgroundColor = this.value;
}, false );

var removeActiveClass = function (){
	var divs = document.getElementsByTagName('div');
	
	var totalDivs = divs.length;
	
	for (var i = 0; i < totalDivs; i++) {
		divs[i].className = 'box';	
	}
};

document.documentElement.addEventListener('click', function (ev) {
	if (ev.target.tagName == 'DIV') {
		removeActiveClass();
		ev.target.className = 'box active';
		box = ev.target;
	}
}, false);