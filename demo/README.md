Game Scene Designer
===================

A game-engine agnostic designer for game scenes!

Design your game scene once and run it in ANY game engine or framework (as long as it implements support for the game-scene file format).

Try the [extremely early] demo!

http://gnumaru.github.io/Game-Scene-Designer/demo/

Or view the [currently blank] project's page 

http://gnumaru.github.io/Game-Scene-Designer/


Motivation
===================

Making an electronic game (console, desktop, mobile, web, whatever) has many hardships. Programing is just one, probably not the worst, of the hardships encountered by novice game developers. Using game maker IDEs (like Unity 3D, Shiva 3D, Construct 2, Game Maker Studio, Stencyl, ClickTeam Fusion, the list goes on...) makes the entire process of assembling assets and code, designing scenes and integrating it with the game engine much more easier because it groups every task into one single toll with a simple known workflow and because the scene editing is very facilitated by the editor.

Developers that chose not to use and IDE such as Unity 3D or Construct 2, but instead use frameworks/libraries like Phaser, LibGDX or MonoGame, have extra work defining its own process of designing game scenes and integrating it to the engine.

As of now, apparently there are no choices for free software intended for game scene design that does it in a generic, engine-agnostic, way.

Tiled, the tile map maker:

http://www.mapeditor.org/

Is largely used to create tile maps for games, but it is not intended to design entire game scenes, but tiled maps for scenario building. Tiled indeed has some ways of extending everything (every xml element) with properties (generic property elements, with name and value), but it is not as good for game scene design as some game making IDEs whose editor is built intended for the design of generic game scenes (generic as in for any kind of game, from j-rpgs to fps's and single screen puzzle games).

Thus it would be not optimal to use Tiled as it is today (or any tile map editor) as a game scene editor for making game scenes that are not map-oriented, like single-screen games (flappy bird, tetris, bejeweled and most puzzles out there).

With "Game Scene Designer" (the name is not final) I intend to fill the gaps and do two things:
* Propose an open, standard file format (json and xml) for generic game scene representation, like Tiled's format is today a de-facto standard for tilemaps, and like Spriter's format is for animations;
* Implement a software that is capable of reading, writing and editing such files to facilitate the process of creating games without a game making IDE, using only libraries, engines and frameworks such as Phaser, LibGDX, MonoGame and alikes

Status
===================

Currently "Game Scene Designer" is at an very early stage. The software is capable of modeling a game scene composed of a hierarchy of game entities and it's child entities, save it to a json file an load previously saved files. The hierarchy of entities, and it's characteristics, like having transforms for spatial representation and being composed of components, is largely based on the Unity approach for modeling game scenes

Usage
===================
Download this repository as a zip file (the gray button at the right of this page labeled “Download ZIP”) or using `git clone`, uncompress it and open index.html locally in firefox, or in chrome using the `--disable-web-security` command line switch (chrome does not let pages loaded from disk make cross origin xhr requests, used by my module loader to load the scripts from the sub-folders). Or you can uncompress it in your web-servers www folder and access it in any browser (maybe I'll do a node-webkit bundle of it...).

TODOs
===================
* Allow saving and loading components separately from the game scene, for component reuse between different scenes and between different entities in the same scene.
* Create a design area intended for dragging components, which updates the component's transform data
* Implement tiled map loading beneath the game entities, such that a map could be designed on Tiled, the entities and its logic could be designed on Game Scene Designer (and animation data for entities with rendering and animation components could be designed by Spriter =D)
