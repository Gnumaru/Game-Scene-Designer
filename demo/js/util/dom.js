var getStyleSheetPropertyValue = function getStyleSheetPropertyValue(selectorText, propertyName) {
	var returnValue = null;
	// search backwards because the last match is more likely the right one
	outerLoop: for(var sheetIndex = document.styleSheets.length - 1; sheetIndex > -1; sheetIndex--) {
		var cssRules = document.styleSheets[sheetIndex].cssRules || [];
		for(var ruleIndex = 0; ruleIndex < cssRules.length; ruleIndex++) {
			if(cssRules[ruleIndex].selectorText === selectorText) {
				returnValue = cssRules[ruleIndex].style[propertyName];
				break outerLoop;
			}
		}
	}
	return returnValue;
}
Object.freeze(getStyleSheetPropertyValue)
exports.getStyleSheetPropertyValue = getStyleSheetPropertyValue;
