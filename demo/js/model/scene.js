var scene = {
	//every scene in the game must have a unique id, for game engines use
	"id" : 0,
	//scene's name, for designer GUI use
	"name" : "",
	//scene's description, for designer GUI use
	"description" : "",
	//list of game entities in the scene
	"entities" : [],//[ model/entity ]
	//object holding a tilemap. Must be a json tile map produced by "Tiled Map Editor" version "0.9.1" or later
	"tileMap" : {}//{ tiledMap/tiledMap }
};
Object.freeze(scene);
exports.scene = scene;
