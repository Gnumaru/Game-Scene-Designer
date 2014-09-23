function getStyleSheetPropertyValue(selectorText, propertyName) {
	var returnValue = null;
	// search backwards because the last match is more likely the right one
	outerLoop: for(var sheetIndex = document.styleSheets.length - 1; sheetIndex > -1; sheetIndex--) {
		var cssRules = document.styleSheets[sheetIndex].cssRules || []; // IE support
		for(var ruleIndex = 0; ruleIndex < cssRules.length; ruleIndex++) {
			if(cssRules[ruleIndex].selectorText === selectorText) {
				console.log(cssRules[ruleIndex].selectorText);
				returnValue = cssRules[ruleIndex].style[propertyName];
				break outerLoop;
			}
		}
	}
	return returnValue;
}

var draggableBehavior = function(e) {
	var followMouseMovement = function(e) {
		if(e.shiftKey) {//if shift is down, scale
			
			if(e.clientX > parseInt(element.style.left, 10) + parseInt(getStyleSheetPropertyValue("div.designArea", "left"), 10)) {
				element.entity.transform.scale.x += 0.25;
			} else {
				element.entity.transform.scale.x -= 0.25;
			}
			
			if(e.clientY < parseInt(element.style.top, 10) + parseInt(getStyleSheetPropertyValue("div.designArea", "top"), 10)) {
				element.entity.transform.scale.y += 0.25;
			} else {
				element.entity.transform.scale.y -= 0.25;
			}
			element.$scope.updateEntityRepresentationScale();
		} else if(e.ctrlKey) {//if ctrl is down, rotate 
			element.entity.transform.rotation.x = (e.clientY * 2) % 360;
			element.entity.transform.rotation.z = (e.clientX * 2) % 360;
			element.$scope.updateEntityRepresentationRotation();
		} else {//move
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
		//in case applying the scope every mousemove event call is too heavy, consider applying only after removing the listener
		element.$scope.$apply();
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
