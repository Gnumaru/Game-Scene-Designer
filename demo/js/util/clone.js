var clone = function clone(obj) {
	var copy;

	if (obj === null || obj === undefined || typeof obj != "object") {// Handles boolean, number, string, null and undefined
		copy = obj;
	} else if (obj instanceof Date) {// Handle Date
		copy = new Date();
		copy.setTime(obj.getTime());
	} else if (obj instanceof Array) {// Handle Array
		copy = [];
		for (var i = 0, len = obj.length; i < len; i++) {
			copy[i] = clone(obj[i]);
		}
	} else if (obj instanceof Object) {// Handle Object
		copy = {};
		for ( var attr in obj) {
			if (obj.hasOwnProperty(attr)) {
				copy[attr] = clone(obj[attr]);
			}
		}
	} else if (obj instanceof Function) {// Handle Functions
		copy = obj;
	} else {
		throw new Error("Unable to copy obj! Its type isn't supported.");
	}

	return copy;
};
Object.freeze(clone)
exports.clone = clone;