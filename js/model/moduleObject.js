var moduleObject = {
	/*
	 * Every component parameter should also be a variable exported by the
	 * module and used by the start and update functions to do it's logics.
	 * Thus, if a component has a parameter whos "variableName" is "speed", the
	 * moduleObject's exports should have also a export called "speed" which
	 * should be used by some function inside the module
	 */

	//module's function called before the first update call 
	"start" : function() {
	},
	//module's function called every update call
	"update" : function() {
	}
};
Object.freeze(moduleObject);
exports.moduleObject = moduleObject;
