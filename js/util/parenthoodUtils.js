var fixParentHoodWithReferences = function(parent) {
	for ( var key in parent.childEntities) {
		parent.childEntities[key].parent = parent;
		fixParentHoodWithReferences(parent.childEntities[key]);
	}
}
Object.freeze(fixParentHoodWithReferences)
exports.fixParentHoodWithReferences = fixParentHoodWithReferences;

var fixParentHoodWithIds = function(parent) {
	for ( var key in parent.childEntities) {
		parent.childEntities[key].parent = parent.childEntities[key].parent.id;
		fixParentHoodWithIds(parent.childEntities[key]);
	}
}
Object.freeze(fixParentHoodWithIds)
exports.fixParentHoodWithIds = fixParentHoodWithIds;

var fixEmptyArrays = function(parent) {
	if (!parent.childEntities) {
		parent.childEntities = [];
	}
	for ( var key in parent.childEntities) {
		if (!parent.childEntities[key].components) {
			parent.childEntities[key].components = [];
		}
		if (!parent.childEntities[key].childEntities) {
			parent.childEntities[key].childEntities = [];
		}
		fixParentHoodWithIds(parent.childEntities[key]);
	}
}
Object.freeze(fixEmptyArrays)
exports.fixEmptyArrays = fixEmptyArrays;

var removeHashKeys = function(parent) {
	for ( var key in parent.childEntities) {
		delete parent.childEntities[key].$$hashKey;
		removeHashKeys(parent.childEntities[key]);
	}
}
Object.freeze(removeHashKeys)
exports.removeHashKeys = removeHashKeys;