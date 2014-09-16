/**
 * Game entity's component's 'struct'. Model's a generic component that imbues
 * the entity in which the component is attached with some kind of behavior in
 * the game scene.
 */
var component = {
	/**
	 * Integer value uniquely identifying the component in every scope, to be
	 * used by the scene editor and game-engine. A component ID should be unique
	 * amongst every component created by any user of the software worldwide, so
	 * components could be shared unmistakingly by users.
	 * 
	 * @type {!number}
	 */
	"id" : 0,
	/**
	 * The component's name. mainfully to be used by the scene editor for
	 * labelling the component, probably useless for the game engine.
	 * 
	 * @type {!string}
	 */
	"name" : "",
	/**
	 * Description of the component's meaning and purpose, for scene editor use,
	 * probably useless for the game-engine use.
	 * 
	 * @type {!string}
	 */
	"description" : "",
	/**
	 * Relative path of the source code file that implements the functionality
	 * intended for this module. Eg.: If you want to make a game in C++, your
	 * scene file resides in /home/user/game/res/scene.json and the source file
	 * that implements the component's functionality resides in
	 * /home/user/game/src/componentB.cpp, then the modulePath value of the
	 * component should be "../src/componentB.cpp"
	 * 
	 * @type {!string}
	 */
	"modulePath" : "",
	/**
	 * Attribute that holds the exported module object that implements the
	 * component's desired behavior. Used only when the game-scene is intended
	 * to be loaded and run in javascript games. When loaded by other languages,
	 * this attribute should remain null, and the loading of the object that
	 * implements the component behaviour (whose path is described in the
	 * modulePath attribute) should be implemented accordingly.
	 * 
	 * @type {'model/moduleObject'}
	 */
	"moduleObject" : {},
	/**
	 * Component's module parameters, for designer GUI and game engine use.
	 * Every parameter name should be a public variable declared, used and
	 * exported by the module. The change on the parameters value should be
	 * applyed on the module for changing the behavior of the entity according
	 * to that component objective
	 * 
	 * @type {'model/parameter'[]}
	 */
	"parameters" : []
};

Object.freeze(component);
exports.component = component;
