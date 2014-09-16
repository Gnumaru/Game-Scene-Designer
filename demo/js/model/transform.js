/**
 * Game entity's transform 'struct'. Model's a spatial representation in a 3D
 * space. The transform data should be interpreted as absolute by root entities
 * (entities that doesnt have parents) and relative to the parent by child
 * entities.
 */
var transform = {
	/**
	 * Describes the entities displacement (in world units) relative to it's
	 * parent (or to the world center, if it has no parent). A root entity with
	 * 'translation === {1, 0, 0}' should be at world coordinates x=1, y=0 and
	 * z=0. But a child of this entity with 'translation === {1, 1, 1}' should
	 * have a world position which is the sum of it's own position with every
	 * one of its parent's in the parent chain (it's parent, it's parent's
	 * parent, and so on until reaching a root entity). Thus, this child will
	 * have a world position of {x:2, y:1, z:1} which is (1+1, 0+1, 0+1);
	 * 
	 * @type {Object.<string, number>} translation
	 * @type {number} translation.x
	 * @type {number} translation.y
	 * @type {number} translation.z
	 */
	"translation" : {
		"x" : 0,
		"y" : 0,
		"z" : 0
	},
	/**
	 * Describes the entities rotation (in degrees) relative to it's parent (or
	 * to the world center, if it has no parent). A root entity with 'rotation
	 * === {0, 0, 30}' should be rotated around the z axis by 30 degrees. But a
	 * child of this entity with 'rotation === {0, 0, 15}' should have a world
	 * rotation which is the sum of it's own rotation with every one of its
	 * parent's in the parent chain (it's parent, it's parent's parent, and so
	 * on until reaching a root entity). Thus, this child will have a world
	 * rotation of {x:0, y:0, z:45}. Degree values below 0 and above 360 should
	 * be normalized to fit between 0 and 360 (eg: 390 should be normalized to
	 * 30).
	 * 
	 * @type {Object.<string, number>} rotation
	 * @type {number} rotation.x
	 * @type {number} rotation.y
	 * @type {number} rotation.z
	 */
	"rotation" : {
		"x" : 0,
		"y" : 0,
		"z" : 0
	},
	/**
	 * describes the entities scale. 1 is the normal scale, whereas 0.5 is half
	 * and 2 is double. The scale is inherited from the parent, therefore if,
	 * for example, an entity with image component that has 100px width in the x
	 * axis and the entity itself has an scale.x === 0.7, but it's parent has an
	 * scale.x of 1.9, it will have a real world width of 133px (1.9*0.7)
	 * 
	 * @type {Object.<string, number>} scale
	 * @type {number} scale.x
	 * @type {number} scale.y
	 * @type {number} scale.z
	 */
	"scale" : {
		"x" : 1,
		"y" : 1,
		"z" : 1
	}
};

Object.freeze(transform)
exports.transform = transform;
