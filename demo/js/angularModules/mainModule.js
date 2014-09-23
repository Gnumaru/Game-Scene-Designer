(function() {
	var clone = require("../util/clone").clone;
	//angular module
	//var mainModule = angular.module('mainModule', [ 'angularTreeview' ]);
	var mainModule = angular.module('mainModule', [ 'ui.tree' ]);
	//controller
	mainModule.controller('myController', function($scope) {
		//test game scene
		//		$scope.gameScene = require("../../js/mountMainScene").scene;
		//empty game scene
		$scope.gameScene = clone(require("../../js/model/scene").scene);

		$scope.globalComponent = {};
		$scope.loadedComponents = [];
		$scope.upperView = false;

		$scope.removeChildEntity = function() {
			if($scope.mytree.currentNode.parent === null) {//if parent is null, it is a scene entity
				//				var key = $scope.gameScene.indexOf($scope.mytree.currentNode);
				//				$scope.mytree.currentNode = null;
				for(key in $scope.gameScene) {
					if($scope.gameScene[key] === $scope.mytree.currentNode) {
						$scope.gameScene[key] = null;
						$scope.mytree.currentNode = null;
						break;
					}
				}
			} else {//else, is a subentity
				var i = $scope.mytree.currentNode.parent.childEntities.indexOf($scope.mytree.currentNode);
				$scope.mytree.currentNode.parent.childEntities[i] = null;
				$scope.mytree.currentNode = $scope.mytree.currentNode.parent;
			}
		};

		$scope.removeEntity = function(scope) {
			scope.remove();
		};

		$scope.collapseChilds = function(scope) {
			scope.toggle();
		};

		//Finds y value of given object
		function findPos(obj) {
			var curtop = 0;
			if(obj.offsetParent) {
				do {
					curtop += obj.offsetTop;
				} while (obj = obj.offsetParent);
				return [ curtop ];
			}
		}

		$scope.editEntity = function(scope) {
			$scope.entityBeingEdited = scope.$modelValue;
			document.getElementById("entityDivID").scrollIntoView();
		}

		$scope.newChildEntity = function(scope) {
			var newEntity = clone(require("../../js/model/entity").entity);
			newEntity.transform = clone(require("../../js/model/transform").transform);
			newEntity.name = "gameEntity";
			newEntity.parent = scope.$modelValue;
			if(!scope.$modelValue.childEntities) {
				scope.$modelValue.childEntities = [];
			}
			scope.$modelValue.childEntities.push(newEntity);

			var div = require("../../js/ui/placeholder").placeholder("" + Math.random());
			div.entity = newEntity;
			div.scope = scope;
			div.$scope = $scope;

			newEntity.div = div;

			//cant call apply
			//scope.$apply();
			//because "apply already in progress"
		};

		$scope.updateEntityRepresentationPosition = function(scope) {
			$scope.entityBeingEdited.div.style.left = $scope.entityBeingEdited.transform.translation.x + "px";
			
//			var translation = $scope.entityBeingEdited.transform.translation;
//			var style = $scope.entityBeingEdited.div.style;
//			style.translationX = translation.x;
//			style.translationY = translation.y;
//			style.translationZ = translation.z;
//			$scope.updateEntityTransform();
		}

		$scope.updateEntityRepresentationRotation = function(scope) {
			var rotation = $scope.entityBeingEdited.transform.rotation;
			var style = $scope.entityBeingEdited.div.style; 
			style.rotateX = rotation.x;
			style.rotateY = rotation.y;
			style.rotateZ = rotation.z;
			$scope.updateEntityTransform();
		}

		$scope.updateEntityRepresentationScale = function(scope) {
			var scale = $scope.entityBeingEdited.transform.scale;
			var style = $scope.entityBeingEdited.div.style;
			style.scaleX = scale.x;
			style.scaleY = scale.y;
			style.scaleZ = scale.z;
//			"style.scale" resizes proportionally on both x and y axis 
//			$scope.entityBeingEdited.div.style.scale = scale.x * scale.y * scale.z;
			
//			scaling by changing directly the div's width and height works, but may not be the best solution.
//			$scope.entityBeingEdited.div.style.width = (scale.x * 16) + "px";
//			$scope.entityBeingEdited.div.style.height = (scale.y * 16) + "px";
			
//			"style["background-size"]" is used only for images. When the placeholder gets replaced by an actual image, background-size will be used
//			$scope.entityBeingEdited.div.style["background-size"] = (scale.x * 100) +"% "+ (scale.y * 100)+"%";
			
//			$scope.entityBeingEdited.div.innerDiv.style.width = (scale.x * 100) +"%";
//			$scope.entityBeingEdited.div.innerDiv.style.height = (scale.y * 100) +"%";
			
//			$scope.entityBeingEdited.div.firstElementChild.style.width = (scale.x * 100) +"%";
			
			$scope.updateEntityTransform();
		}

		$scope.updateEntityTransform = function() {
			var style = $scope.entityBeingEdited.div.style;
			var transform = [
				"translateX(" + (style.translationX != undefined ? style.translationX : "0") + "px)",
				"translateY(" + (style.translationY != undefined ? style.translationY : "0") + "px)",
				"translateZ(" + (style.translationZ != undefined ? style.translationZ : "0") + "px)",
				"rotateX(" + (style.rotateX !== undefined ? style.rotateX : "0") + "deg)",
				"rotateY(" + (style.rotateY !== undefined ? style.rotateY : "0") + "deg)",
				"rotateZ(" + (style.rotateZ !== undefined ? style.rotateZ : "0") + "deg)",
				"scaleX(" + (style.scaleX !== undefined ? style.scaleX : "1") + ")",
				"scaleY(" + (style.scaleY !== undefined ? style.scaleY : "1") + ")",
				"scaleZ(" + (style.scaleZ !== undefined ? style.scaleZ : "1") + ")",
				"skewX(" + (style.skewX !== undefined ? style.skewX : "0") + "deg)",
				"skewY(" + (style.skewY !== undefined ? style.skewY : "0") + "deg)" ];
			transform = transform.join(" ");
//			console.log(transform);

			style["-webkit-transform"] = transform;
			style["transform"] = transform;
			style["-moz-transform"] = transform;
			style["-o-transform"] = transform;
			style["-ms-transform"] = transform;
		}

		$scope.addComponent = function(scope) {
			var newComponent = clone(require("../../js/model/component").component);
			newComponent.name = "Empty Component";
			newComponent.id = +Math.random().toString().substring(2);
			$scope.entityBeingEdited.components.push(newComponent);
		};

		$scope.addParameter = function(scope) {
			var newParameter = clone(require("../../js/model/parameter").parameter);
			newParameter.name = "Empty Parameter";
			scope.push(newParameter);
		}

		$scope.removeParameter = function(parameter, component) {
			component.parameters = component.parameters.filter(function(elt) {
				return elt !== parameter;
			});
		}

		$scope.removeComponent = function(component, entityBeingEdited) {
			entityBeingEdited.components = entityBeingEdited.components.filter(function(elt) {
				return elt !== component;
			});
		}

		var fixParentHoodWithIds = require("../../js/util/entityUtils").fixParentHoodWithIds;
		var fixParentHoodWithReferences = require("../../js/util/entityUtils").fixParentHoodWithReferences;
		var fixEmptyArrays = require("../../js/util/entityUtils").fixEmptyArrays;
		var removeHashKeys = require("../../js/util/entityUtils").removeHashKeys;
		var representEntityTreeWithDivs = require("../../js/util/entityUtils").representEntityTreeWithDivs;

		$scope.sceneToJson = function() {
			var rootHashKeys = []
			for( var key in $scope.gameScene.entities) {
				fixParentHoodWithIds($scope.gameScene.entities[key]);
				removeHashKeys($scope.gameScene.entities[key]);
				rootHashKeys.push($scope.gameScene.entities[key].$$hashKey);
				delete $scope.gameScene.entities[key].$$hashKey;
			}
			var formatedJson = JSON.stringify($scope.gameScene, null, 4);
			for( var key in $scope.gameScene.entities) {
				fixParentHoodWithReferences($scope.gameScene.entities[key]);
				$scope.gameScene.entities[key].$$hashKey = rootHashKeys[key];
			}

			var jsonBlob = new Blob([ formatedJson ], {
				type : "text/plain;charset=utf-8"
			});
			var saveAs = require("../../js/libs/FileSaver_v20140829");
			saveAs(jsonBlob, $scope.gameScene.name + ".scene.json");
		}

		$scope.jsonToScene = function() {
			var fileInput = document.getElementById('fileInput');
			if(!fileInput) {
				fileInput = document.createElement("input");
				fileInput.id = "fileInput";
				fileInput.type = "file";
				fileInput.accept = ".scene.json";
			}
			fileInput.removeAttribute("multiple");

			fileInput.addEventListener('change', function(e) {
				//				console.log(fileInput.files[0].mozFullPath);
				//				console.log(fileInput.files[0].name);
				var file = fileInput.files[0];
				var textType = /text.*/;
				var reader = new FileReader();
				reader.onload = function(e) {
					var scene = JSON.parse(reader.result);
					for(var key = 0; key < scene.entities.length; key++) {
						fixParentHoodWithReferences(scene.entities[key]);
						fixEmptyArrays(scene.entities[key]);
						representEntityTreeWithDivs(scene.entities[key], $scope);
					}
					$scope.gameScene = scene;
					$scope.$apply();
				}
				reader.readAsText(file);
			});
			fileInput.click();
		}

		$scope.addRootEntity = function() {
			var newEntity = clone(require("../../js/model/entity").entity);
			newEntity.transform = clone(require("../../js/model/transform").transform);
			newEntity.name = "gameEntity";
			newEntity.parent = null;
			$scope.gameScene.entities.push(newEntity);

			var div = require("../../js/ui/placeholder").placeholder("" + Math.random());
			div.entity = newEntity;
			div.scope = $scope;
			div.$scope = $scope;

			newEntity.div = div;
		}

		$scope.getTypes = function(parameter) {
			var types = clone(require("../../js/model/parameterTypes").parameterTypes);
			if(parameter.type === null || parameter.type === undefined || parameter.type === "") {
				parameter.type = types[0];
			}
			return types;
		}

		$scope.componentToJson = function(component) {
			var formatedJson = JSON.stringify(component, null, 4);
			var jsonBlob = new Blob([ formatedJson ], {
				type : "text/plain;charset=utf-8"
			});

			var saveAs = require("../../js/libs/FileSaver_v20140829");
			saveAs(jsonBlob, component.name + ".component.json");
		}

		$scope.jsonToComponent = function(entityBeingEdited) {
			var fileInput = document.getElementById('fileInput');
			if(!fileInput) {
				fileInput = document.createElement("input");
				fileInput.id = "fileInput";
				fileInput.type = "file";
				fileInput.accept = ".component.json";
			}
			fileInput.setAttributeNode(document.createAttribute("multiple"));

			fileInput.addEventListener('change', function(e) {
				var file = fileInput.files[0];
				var textType = /text.*/;
				var reader = new FileReader();
				reader.onload = function(e) {
					var component = JSON.parse(reader.result);
					entityBeingEdited.components.push(component);
					$scope.loadedComponents.push(component);
					$scope.$apply();
				}
				reader.readAsText(file);
			});
			fileInput.click();
		}

		$scope.reuseComponent = function(entityBeingEdited, globalComponent) {
			entityBeingEdited.components.push(require("../../js/util/clone").clone(globalComponent));
		}

		$scope.changeView = function() {
			$scope.upperView = !$scope.upperView;
			var divs = document.getElementsByTagName("div");
			for( var key in divs) {
				if(divs[key].entity) {//if this div holds a reference to any game entity
					divs[key].style.top = (window.innerHeight - ($scope.upperView ? divs[key].entity.transform.translation.z : divs[key].entity.transform.translation.y)) + "px";
				}
			}
		}
	});
})();
