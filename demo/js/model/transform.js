var transform = {
	//describes the entities displacement (in world units) relative to it's parent (or to the world center, if it has no parent
	"translation" : {
		"x" : 0,
		"y" : 0,
		"z" : 0
	},
	//describes the entities rotation (in degrees) relative to it's parent (or to the world center, if it has no parent
	"rotation" : {
		"x" : 0,
		"y" : 0,
		"z" : 0
	},
	/*
	 * describes the entities scale. 1 is the normal scale, whereas 0.5 is half
	 * and 2 is double. The scale is inherited from the parent, therefore if,
	 * for example, an image has 100px width in the x axis and itself has an
	 * scale.x === 0.7, but it's parent has an scale.x of 1.9, it will have a
	 * real width of 133px (1.9*0.7)
	 */
	"scale" : {
		"x" : 1,
		"y" : 1,
		"z" : 1
	}
};
Object.freeze(transform)
exports.transform = transform;
