/**
 * Components behavior implementation on javascript. Should be used only if the
 * scene is loaded in a javascript game. All parameter described on the
 * components parameters array should be public and writtable attributes of
 * moduleObject object, which will be used by the moduleObject functions to
 * perform it's logic
 */
var moduleObject = {
	/**
	 * Every component parameter should also be a variable exported by the
	 * module and used by the start and update functions to do it's logics.
	 * Thus, if a component has a parameter whos "variableName" is "speed", the
	 * moduleObject's exports should have also a export called "speed" which
	 * should be used by some function inside the module. For example, if the
	 * component intends to implement the behavior of a terrestrial vehicle,
	 * like a car, it could have properties as the folowing:
	 * 
	 * "width" : 32,
	 * "depth" : 64,
	 * "height" : 16,
	 * "mass" : 5.23,
	 * "maxSpeed" : 7.3,
	 * "acceleration" : 32,
	 * "handlingType" : "hard"
	 */

	/**
	 * module's function called before the first update call (before the first
	 * frame rendering). Useful for scene assets loading and preparations.
	 */
	"start" : function() {
	},

	/**
	 * module's function called every update call (every frame)
	 */
	"update" : function() {
	},

	/**
	 * module's function called after the last update call (after the last frame
	 * rendering). Usefull for assets unloading, automatic game-saving and
	 * alikes
	 */
	"finish" : function() {
	},

	/**
	 * module's function called right before the game loses focus. On mobile,
	 * it's when the foreground application changes or when the phone locks. On
	 * the desktop, if the window loses focus. On web, if the game loses focus
	 * (if the user clicks outside the game div element).
	 */
	"sleep" : function() {
	},

	/**
	 * module's function called right after the device regains focus. On mobile,
	 * it's when the game turns back to be the foreground application, or when
	 * the phone unlocks back to the game. On the desktop, if the window loses
	 * focus. On web, if the game loses focus (if the user clicks outside the
	 * game div element).
	 */
	"awake" : function() {
	},
};
Object.freeze(moduleObject);
exports.moduleObject = moduleObject;
