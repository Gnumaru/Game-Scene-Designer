var clone = require("./util/clone").clone;
var sceneModel = require("./model/scene").scene;
var entityModel = require("./model/entity").entity;
var transformModel = require("./model/transform").transform;
var componentModel = require("./model/component").component;
var moduleObjectModel = require("./model/moduleObject").moduleObject;
var parameterModel = require("./model/parameter").parameter;
var parameterTypes = require("./model/parameterTypes").parameterTypes;
var fixParentHoodWithReferences = require("./util/parenthoodUtils").fixParentHoodWithReferences;

window.scene = clone(sceneModel);

window.scene.name = "MainScene";
window.scene.id = 0;
window.scene.description = "Scene where the main loop occurs";
window.scene.entities = [ clone(entityModel), clone(entityModel), clone(entityModel) ];

window.scene.entities[0].name = "Camera";
window.scene.entities[0].id = 0;
window.scene.entities[1].name = "Enemy";
window.scene.entities[1].id = 1;
window.scene.entities[2].name = "Character";
window.scene.entities[2].id = 2;

window.scene.entities[0].childEntities = null;

window.scene.entities[1].childEntities = [ clone(entityModel), clone(entityModel) ]
window.scene.entities[1].childEntities[0].name = "body";
window.scene.entities[1].childEntities[1].name = "weapon";

window.scene.entities[2].childEntities = [ clone(entityModel), clone(entityModel) ];
window.scene.entities[2].childEntities[0].name = "body";
window.scene.entities[2].childEntities[1].name = "weapon";

window.scene.entities[2].childEntities[0].childEntities = [ clone(entityModel), clone(entityModel), clone(entityModel), ];
window.scene.entities[2].childEntities[0].childEntities[0].name = "head";
window.scene.entities[2].childEntities[0].childEntities[1].name = "torso";
window.scene.entities[2].childEntities[0].childEntities[2].name = "lowerbody";

window.scene.entities[0].transform = clone(transformModel);
window.scene.entities[0].components = [ clone(componentModel), clone(componentModel) ];

window.scene.entities[0].components[0].name = "Camera";
window.scene.entities[0].components[0].parameters = [ clone(parameterModel), clone(parameterModel), clone(parameterModel) ];
window.scene.entities[0].components[0].parameters[0].label = "Width";
window.scene.entities[0].components[0].parameters[0].variableName = "width";
window.scene.entities[0].components[0].parameters[0].currentValue = 20;
window.scene.entities[0].components[0].parameters[1].label = "Height";
window.scene.entities[0].components[0].parameters[1].variableName = "height";
window.scene.entities[0].components[0].parameters[1].currentValue = 15;
window.scene.entities[0].components[0].parameters[2].label = "View Angle";
window.scene.entities[0].components[0].parameters[2].variableName = "viewAngle";
window.scene.entities[0].components[0].parameters[2].currentValue = 90;

window.scene.entities[0].components[1].name = "ComponenteB";
window.scene.entities[0].components[1].parameters[0] = clone(parameterModel);
window.scene.entities[0].components[1].parameters[0].label = "Speed";
window.scene.entities[0].components[1].parameters[0].variableName = "spd";
window.scene.entities[0].components[1].parameters[0].currentValue = 20;


for ( var key in window.scene.entities) {
	fixParentHoodWithReferences(window.scene.entities[key]);
}