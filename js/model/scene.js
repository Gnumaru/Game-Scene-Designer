/**
 * Game Scene 'struct'. Model's a generic game scene
 */
var scene = {
	/**
	 * Integer value uniquely identifying the game-scene in the game scope, to
	 * be used by the game-engine and the scene editor to diferentiate uniquely
	 * each scene, independent of it's name or description.
	 * 
	 * @type {!number}
	 */
	"id" : 0,
	/**
	 * The game scene's name. mainfully to be used by the scene editor for
	 * labelling the scene, probably useless for the game engine.
	 * 
	 * @type {!string}
	 */
	"name" : "",
	/**
	 * Description of the game scene's meaning and purpose, for scene editor
	 * use, probably useless for the game-engine use.
	 * 
	 * @type {!string}
	 */
	"description" : "",
	/**
	 * List of "root" game entities of the scene. There exists no difference
	 * between a "root" entity and child entities besides the root entities does
	 * not have parents.
	 * 
	 * @type {!'js/model/entity'[]}
	 */
	"entities" : [],
	/**
	 * Tile map javascript object for the scene, in the format specified and
	 * used by the "Tiled Map Editor" (http://www.mapeditor.org/)
	 * 
	 * @type {!'js/model/tiledMap'[]}
	 */
	"tileMap" : {}
};

Object.freeze(scene);
exports.scene = scene;
