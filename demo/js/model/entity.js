var entity = {
	//every entity on the scene must have a unique id, for game engine use
	"id" : 0,
	//entity's name, for designer GUI use
	"name" : "",
	//entity's description (meaning and/or purpose), for designer GUI use
	"description" : "",
	//entity's transform, for designer GUI and game engine rendering
	"transform" : {},//{ model/transform }
	//entity's components, for game engine behavior definition
	"components" : [],//{ model/component }
	//reference to the parent entity. If it is null, undefined, not an object, or an object that is not another entity, then the entity have in fact no parent
	"parent" : null,//{ model/entity }
	//entity's child entities. Organizing entities as children of other entities has the purpose of grouping, for things such as applying actions on a antity and all it's children, or making a child transforms relative to it's parent 
	"childEntities" : []//[ model/entity ]
};
Object.freeze(entity);
exports.entity = entity;
