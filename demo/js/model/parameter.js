/**
 * Component's parameter 'struct'. Model's a generic parameter that a component
 * could expose for tweaking it's functionality.
 */
var parameter = {
	/**
	 * The parameter's name. to be used by the scene editor for labelling the
	 * parameter, useless for the game-engine.
	 * 
	 * @type {!string}
	 */
	"label" : "",
	/**
	 * The exact public variable name used in the component's implementation.
	 * 
	 * @type {!string}
	 */
	"variableName" : "",
	/**
	 * The parameter's type, for scene-designer GUI validation and use. Should
	 * be one of the possible values defined in model/parameterTypes, which are
	 * the more common types of variables ("int", "float", "character",
	 * "string", "boolean", "gameEntity", "array", "object").
	 * 
	 * @type {!'js/model/parameterTypes'}
	 */
	"type" : "",
	/**
	 * The parameter's current value, only usefull if the scene-designer some
	 * day comes to implement live-editing features like on spelljs. If someday
	 * the scene-designer comes to implement live editing, it will be much less
	 * of a generic game-scene editor and much more a javascript game making
	 * IDE, which is not the project's intent.
	 * 
	 * @type {!string}
	 */
	"currentValue" : "",
	/**
	 * The parameter's default value, attributed to the component before the
	 * start of scene execution.
	 * 
	 * @type {!string}
	 */
	"defaultValue" : ""
};

Object.freeze(parameter);
exports.parameter = parameter;
