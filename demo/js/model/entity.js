/**
 * Game entity 'struct'. Model's a generic game entity
 */
var entity = {
	/**
	 * Integer value uniquely identifying the game entity in the scene scope, to
	 * be used by the game-engine and the scene editor to diferentiate uniquely
	 * each entity, independent of it's name or description.
	 * 
	 * @type {!number}
	 */
	"id" : 0,
	/**
	 * The game entity's name. mainfully to be used by the scene editor for
	 * labelling the entity, probably useless for the game engine.
	 * 
	 * @type {!string}
	 */
	"name" : "",
	/**
	 * Description of the game entitys's meaning and purpose, for scene editor
	 * use, probably useless for the game-engine. use.
	 * 
	 * @type {!string}
	 */
	"description" : "",
	/**
	 * Entity's transform object, for scene-editor and game-engine use. The
	 * transform holds value for spatial representation, like position, rotation
	 * and scale, in a three dimensional axis. If in a 2D game, just ignore the
	 * axis not used
	 * 
	 * @type {!'js/model/transform'}
	 */
	"transform" : {},
	/**
	 * Entity's list of components, for scene-editor and game-engine use. The
	 * components hold information about entities behavior in the game scene. An
	 * entity without components should do nothing, be nothing and and should
	 * interact with nothing in the game scene. Entitys with no components
	 * should be used just for child grouping, and for easing the process of
	 * making transform changes on groups of child entities
	 * 
	 * @type {!'js/model/transform'[]}
	 */
	"components" : [],
	/**
	 * Reference to this entity's parent object, for scene-editor and
	 * game-engine use. Should be replaced by the parents ID before saving to
	 * json and converted back to references after json loading. Only root
	 * entities should have null parent. Preferably avoid undefined since a null
	 * value only can occur in javascript if it is purposefully placed there,
	 * thus meaning that a null value was meant to be null.
	 * 
	 * @type {'js/model/entity'}
	 */
	"parent" : null,
	/**
	 * Entity's list of child entities, for scene-editor and game-engine use.
	 * The nesting/grouping of entities in parents is meant to: 1) easying the
	 * process of organizing the game-scene in the scene-editor interface; 2)
	 * easying the process of making group changes in entities, like making
	 * transform changes, or destroying groups of entities.
	 * 
	 * @type {!'js/model/entity'[]}
	 */
	"childEntities" : []
};

Object.freeze(entity);
exports.entity = entity;
