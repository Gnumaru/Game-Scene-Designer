var placeholder = function(id) {
	div = document.createElement("div");
	div.id = id;
	div.style.position = "absolute";
	div.style.width = "16px";
	div.style.height = "16px";
	div.style.background = "red";
	div.style.left = "600px";
	div.style.top = "100px";
//	console.log("created div \"" + id + "\"");
	div.addEventListener('mousedown', require("../../js/ui/behaviors/draggableBehavior").draggableBehavior, false);
	document.body.appendChild(div);
	return div;
}

Object.freeze(placeholder);
exports.placeholder = placeholder;
