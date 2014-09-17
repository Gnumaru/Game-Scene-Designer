var fixParentHoodWithReferences = function fixParentHoodWithReferences(parent) {
	for( var key in parent.childEntities) {
		parent.childEntities[key].parent = parent;
		fixParentHoodWithReferences(parent.childEntities[key]);
	}
}
Object.freeze(fixParentHoodWithReferences)
exports.fixParentHoodWithReferences = fixParentHoodWithReferences;

var fixParentHoodWithIds = function fixParentHoodWithIds(parent) {
	for( var key in parent.childEntities) {
		parent.childEntities[key].parent = parent.childEntities[key].parent.id;
		fixParentHoodWithIds(parent.childEntities[key]);
	}
}
Object.freeze(fixParentHoodWithIds)
exports.fixParentHoodWithIds = fixParentHoodWithIds;

var fixEmptyArrays = function fixEmptyArrays(parent) {
	if(!parent.childEntities) {
		parent.childEntities = [];
	}
	for( var key in parent.childEntities) {
		if(!parent.childEntities[key].components) {
			parent.childEntities[key].components = [];
		}
		if(!parent.childEntities[key].childEntities) {
			parent.childEntities[key].childEntities = [];
		}
		fixParentHoodWithIds(parent.childEntities[key]);
	}
}
Object.freeze(fixEmptyArrays)
exports.fixEmptyArrays = fixEmptyArrays;

var removeHashKeys = function removeHashKeys(parent) {
	for( var key in parent.childEntities) {
		delete parent.childEntities[key].$$hashKey;
		removeHashKeys(parent.childEntities[key]);
	}
}
Object.freeze(removeHashKeys)
exports.removeHashKeys = removeHashKeys;

var objectFunctionAttributesToSourceString = function objectFunctionAttributesToSourceString(obj) {
	for( var key in obj) {
		if(obj.hasOwnProperty(key)) {
			if(typeof obj[key] === "function") {
				obj[key] = obj[key].toString();
			} else if(typeof obj[key] === "object") { //if object or array
				obj[key] = objectFunctionAttributesToSourceString(obj[key]);
			}
		}
	}
	return obj;
}
Object.freeze(objectFunctionAttributesToSourceString)
exports.objectFunctionAttributesToSourceString = objectFunctionAttributesToSourceString;

var objectFunctionSourceStringAttributesToFunctions = function objectFunctionSourceStringAttributesToFunctions(obj) {
	for( var key in obj) {
		if(obj.hasOwnProperty(key)) {
			if(typeof obj[key] === "string" && obj[key].indexOf("function") === 0 && obj[key].lastIndexOf("}") === obj[key].length - 1) {
				obj[key] = (new Function("return " + obj[key]))();
			} else if(typeof obj[key] === "object") { //if object or array
				obj[key] = objectFunctionSourceStringAttributesToFunctions(obj[key]);
			}
		}
	}
	return obj;
}
Object.freeze(objectFunctionSourceStringAttributesToFunctions)
exports.objectFunctionSourceStringAttributesToFunctions = objectFunctionSourceStringAttributesToFunctions;

var representEntityTreeWithDivs = function representEntityTreeWithDivs(parent, $scope) {
	var div = require("../../js/ui/placeholder").placeholder("" + Math.random());
	div.entity = parent;
	div.scope = $scope;
	div.$scope = $scope;

	div.style.left = parent.transform.translation.x + "px";

	var y;
	if(!$scope.upperView) {
		y = parent.transform.translation.y;
	} else {
		y = parent.transform.translation.z;
	}
	y = window.innerHeight - y;
	div.style.top = y + "px";

	for( var key in parent.childEntities) {
		representEntityTreeWithDivs(parent.childEntities[key]);
	}
}
Object.freeze(representEntityTreeWithDivs)
exports.representEntityTreeWithDivs = representEntityTreeWithDivs;
