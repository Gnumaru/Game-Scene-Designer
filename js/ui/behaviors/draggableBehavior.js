var draggableBehavior = function(e) {
	var followMouseMovement = function(e) {
		var x = e.clientX + window.pageXOffset - element.innerX;
		x = Math.floor(parseInt(x, 10) / 16) * 16;
		element.entity.transform.translation.x = x;
		element.style.left = x + "px";

		var y = e.clientY + window.pageYOffset - element.innerY;
		y = Math.floor(parseInt(y, 10) / 16) * 16;
		element.entity.transform.translation.y = window.innerHeight - y;
		element.style.top = y + "px";

		//in case applying the scope every mousemove event call is too heavy, consider applying only after removing the listener
		element.scope.$apply();
	}

	var e = e || window.event;
	var element = e.target || e.srcElement;
	
	element.$scope.entityBeingEdited = element.entity;
	element.$scope.$apply();

	//takes the element node to hold the coordinates where the click occurs inside the element
	element.innerX = e.clientX + window.pageXOffset - element.offsetLeft;
	element.innerY = e.clientY + window.pageYOffset - element.offsetTop;

	window.addEventListener('mousemove', followMouseMovement, false);
	window.addEventListener('mouseup', function() {
		window.removeEventListener('mousemove', followMouseMovement, false);
		//in case applying the scope every mousemove event call is too heavy, consider applying only after removing the listener
		//element.scope.$apply();
	}, true);
};

Object.freeze(draggableBehavior);
exports.draggableBehavior = draggableBehavior;
