var draggableBehavior = function(e) {
	var followMouseMovement = function(e) {
		if(e.shiftKey) {//if shift is down, scale
			element.entity.transform.scale.x += (e.clientX - this.previousClientX) / 10;
			element.entity.transform.scale.y -= (e.clientY - this.previousClientY) / 10;//subtracts because the origin is in the upper left corner, not the lower left corner

			element.$scope.updateEntityRepresentationScale();
		} else if(e.ctrlKey) {//if ctrl is down, rotate 
			element.entity.transform.rotation.x = (e.clientY * 2) % 360;
			element.entity.transform.rotation.z = (e.clientX * 2) % 360;
			element.$scope.updateEntityRepresentationRotation();
		} else {//move
			console.log("move");
			var x = e.clientX + window.pageXOffset - element.innerX;
			x = Math.floor(parseInt(x, 10) / 16) * 16;
			x = x > 0 ? x : 0;
			element.entity.transform.translation.x = x;
			element.style.left = x + "px";

			var y = e.clientY + window.pageYOffset - element.innerY;
			y = Math.floor(parseInt(y, 10) / 16) * 16;
			y = y > 0 ? y : 0;
			if(!element.$scope.upperView) {
				element.entity.transform.translation.y = window.innerHeight - y;
			} else {
				element.entity.transform.translation.z = window.innerHeight - y;
			}
			element.style.top = y + "px";
		}

		this.previousClientX = e.clientX;
		this.previousClientY = e.clientY;
		//in case applying the scope every mousemove event call is too heavy, consider applying only after removing the listener
		element.$scope.$apply();
	}
	followMouseMovement.previousClientX = 0;
	followMouseMovement.previousClientY = 0;

	var e = e || window.event;
	var element = e.target || e.srcElement;

	element.$scope.entityBeingEdited = element.entity;
	element.$scope.$apply();
	console.log(element.entity.transform.scale.x);

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
