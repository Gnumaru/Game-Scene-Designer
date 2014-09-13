var component = {
	//Component's unique identifier
	"id" : 0,
	//component's name, for designer GUI use
	"name" : "",
	//component's description (meaning and/or purpose), for designer GUI use
	"description" : "",
	//component's module file path, relative to the game scene file path.
	"modulePath" : "",
	//if the programming language is javascript, keeps also the component's module exports returned by the loading of the javascript (commonjs style) module
	"moduleObject" : {},//{ model/moduleObject }
	/*
	 * component's module parameters, for designer GUI and game engine use.
	 * Every parameter name should be a variable declared, used and exported by
	 * the module. The change on the parameters value should be applyed on the
	 * module for changing the behavior of the entity according to that
	 * component objective
	 */
	"parameters" : []//{ model/parameter }
};
Object.freeze(component);
exports.component = component;
