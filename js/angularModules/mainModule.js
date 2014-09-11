(function() {
	var clone = require("../util/clone").clone;
	//angular module
	//var mainModule = angular.module('mainModule', [ 'angularTreeview' ]);
	var mainModule = angular.module('mainModule', [ 'ui.tree' ]);
	//controller
	mainModule.controller('myController', function($scope) {
		//test game scene
		$scope.gameScene = window.scene;
		//roleList1 to treeview
		//		$scope.roleList = $scope.gameScene;

		$scope.removeChildEntity = function() {
			if ($scope.mytree.currentNode.parent === null) {//if parent is null, it is a scene entity
				//				var key = $scope.gameScene.indexOf($scope.mytree.currentNode);
				//				$scope.mytree.currentNode = null;
				for (key in $scope.gameScene) {
					if ($scope.gameScene[key] === $scope.mytree.currentNode) {
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

		$scope.editEntity = function(scope) {
			$scope.entityBeingEdited = scope.$modelValue;
		}

		$scope.newChildEntity = function(scope) {
			var newEntity = clone(require("js/model/entity").entity);
			newEntity.name = "gameEntity";
			newEntity.parent = scope.$modelValue;
			if (!scope.$modelValue.childEntities) {
				scope.$modelValue.childEntities = [];
			}
			scope.$modelValue.childEntities.push(newEntity);
			//cant call apply
			//scope.$apply();
			//because "apply already in progress"
		};

		$scope.addComponent = function(scope) {
			var newComponent = clone(require("js/model/component").component);
			newComponent.name = "Empty Component";
			$scope.entityBeingEdited.components.push(newComponent);
		};

		$scope.addParameter = function(scope) {
			var newParameter = clone(require("js/model/parameter").parameter);
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

		var fixParentHoodWithIds = require("js/util/parenthoodUtils").fixParentHoodWithIds;
		var fixParentHoodWithReferences = require("js/util/parenthoodUtils").fixParentHoodWithReferences;
		var fixEmptyArrays = require("js/util/parenthoodUtils").fixEmptyArrays;
		var removeHashKeys = require("js/util/parenthoodUtils").removeHashKeys;
		$scope.sceneToJson = function() {
			var rootHashKeys = []
			for ( var key in $scope.gameScene.entities) {
				fixParentHoodWithIds($scope.gameScene.entities[key]);
				removeHashKeys($scope.gameScene.entities[key]);
				rootHashKeys.push($scope.gameScene.entities[key].$$hashKey);
				delete $scope.gameScene.entities[key].$$hashKey;
			}
			var formatedJson = JSON.stringify($scope.gameScene, null, 4);
			for ( var key in $scope.gameScene.entities) {
				fixParentHoodWithReferences($scope.gameScene.entities[key]);
				$scope.gameScene.entities[key].$$hashKey = rootHashKeys[key];
			}

			var jsonBlob = new Blob([ formatedJson ], {
				type : "text/plain;charset=utf-8"
			});
			var saveAs = require("js/libs/FileSaver_v20140829");
			saveAs(jsonBlob, $scope.gameScene.name + ".json");
		}

		$scope.jsonToScene = function() {
			var fileInput = document.getElementById('fileInput');
			if (!fileInput) {
				fileInput = document.createElement("input");
				fileInput.type = "file";
				fileInput.id = "fileInput";
				fileInput.addEventListener('change', function(e) {
					var file = fileInput.files[0];
					var textType = /text.*/;
					var reader = new FileReader();
					reader.onload = function(e) {
						var scene = JSON.parse(reader.result);
						for (var key = 0; key < scene.entities.length; key++) {
							fixParentHoodWithReferences(scene.entities[key]);
							fixEmptyArrays(scene.entities[key]);
						}
						$scope.gameScene = scene;
						$scope.$apply();
					}
					reader.readAsText(file);
				});
			}
			fileInput.click();
		}

		$scope.addRootEntity = function() {
			var newEntity = clone(require("js/model/entity").entity);
			newEntity.name = "gameEntity";
			newEntity.parent = null;
			$scope.gameScene.entities.push(newEntity);
		}

		$scope.getTypes = function(parameter) {
			var types = clone(require("js/model/parameterTypes").parameterTypes);
			if(parameter.type === null || parameter.type === undefined || parameter.type === ""){
				parameter.type = types[0];
			}
			return types;
		}
	});
})();