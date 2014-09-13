var clone = require("./util/clone").clone;
var sceneModel = require("./model/scene").scene;
var entityModel = require("./model/entity").entity;
var transformModel = require("./model/transform").transform;
var componentModel = require("./model/component").component;
var moduleObjectModel = require("./model/moduleObject").moduleObject;
var parameterModel = require("./model/parameter").parameter;
var parameterTypes = require("./model/parameterTypes").parameterTypes;
var fixParentHoodWithReferences = require("./util/parenthoodUtils").fixParentHoodWithReferences;

var scene = clone(sceneModel);

scene.name = "MainScene";
scene.id = +Math.random().toString().substring(2);
scene.description = "Scene where the main loop occurs";
scene.entities = [ clone(entityModel), clone(entityModel), clone(entityModel) ];

scene.entities[0].name = "Camera";
scene.entities[0].id = +Math.random().toString().substring(2);
scene.entities[1].name = "Enemy";
scene.entities[1].id = +Math.random().toString().substring(2);
scene.entities[2].name = "Character";
scene.entities[2].id = +Math.random().toString().substring(2);

scene.entities[0].childEntities = null;

scene.entities[1].childEntities = [ clone(entityModel), clone(entityModel) ];
scene.entities[1].childEntities[0].name = "body";
scene.entities[1].childEntities[0].id = +Math.random().toString().substring(2);
scene.entities[1].childEntities[1].name = "weapon";
scene.entities[1].childEntities[1].id = +Math.random().toString().substring(2);

scene.entities[2].childEntities = [ clone(entityModel), clone(entityModel) ];
scene.entities[2].childEntities[0].name = "body";
scene.entities[2].childEntities[0].id = +Math.random().toString().substring(2);
scene.entities[2].childEntities[1].name = "weapon";
scene.entities[2].childEntities[1].id = +Math.random().toString().substring(2);

scene.entities[2].childEntities[0].childEntities = [ clone(entityModel), clone(entityModel), clone(entityModel)];
scene.entities[2].childEntities[0].childEntities[0].name = "head";
scene.entities[2].childEntities[0].childEntities[0].id = +Math.random().toString().substring(2);
scene.entities[2].childEntities[0].childEntities[1].name = "torso";
scene.entities[2].childEntities[0].childEntities[1].id = +Math.random().toString().substring(2);
scene.entities[2].childEntities[0].childEntities[2].name = "lowerbody";
scene.entities[2].childEntities[0].childEntities[2].id = +Math.random().toString().substring(2);

scene.entities[0].transform = clone(transformModel);
scene.entities[0].components = [ clone(componentModel), clone(componentModel) ];

scene.entities[0].components[0].name = "Camera";
scene.entities[0].components[0].parameters = [ clone(parameterModel), clone(parameterModel), clone(parameterModel) ];
scene.entities[0].components[0].parameters[0].label = "Width";
scene.entities[0].components[0].parameters[0].variableName = "width";
scene.entities[0].components[0].parameters[0].currentValue = 20;
scene.entities[0].components[0].parameters[1].label = "Height";
scene.entities[0].components[0].parameters[1].variableName = "height";
scene.entities[0].components[0].parameters[1].currentValue = 15;
scene.entities[0].components[0].parameters[2].label = "View Angle";
scene.entities[0].components[0].parameters[2].variableName = "viewAngle";
scene.entities[0].components[0].parameters[2].currentValue = 90;

scene.entities[0].components[1].name = "ComponenteB";
scene.entities[0].components[1].parameters[0] = clone(parameterModel);
scene.entities[0].components[1].parameters[0].label = "Speed";
scene.entities[0].components[1].parameters[0].variableName = "spd";
scene.entities[0].components[1].parameters[0].currentValue = 20;

for ( var key in scene.entities) {
	fixParentHoodWithReferences(scene.entities[key]);
}

exports.scene = scene;