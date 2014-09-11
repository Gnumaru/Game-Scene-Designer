Game Scene Designer
===================

A game-engine agnostic designer for game scenes!

Motivation
===================

Making a game has many hardships. Programing is just one, maybe the most easy, of the hardships encountered by novice game designers.

Tiled, the tile map maker:

http://www.mapeditor.org/

Is largely used to create tile maps for games, but it is not intended to design entire game scenes, just tiled maps for scenario building. Tiled indeed has some ways of extending everything with properties, but it is not as good for game scene design as some game making IDEs like Unity 3D, Construc2 or Game Maker Studio.

It would be awkward to use Tiled as it is today as a game scene editor for making game scenes that are not map-oriented, like single-screen games (flappy bird, tetris, bejeweled and most puzzles out there).

With "Game Scene Designer" (the name is not final) I intend to fill the gaps and do two things:
* Propose an open, standard file format (json and xml) for generic game scene representation;
* Implement a software that is capable of reading, writing and editing such files to facilitate the process of creating games without a game making IDE, using only libraries, engines and frameworks such as Phaser, LibGDX, MonoGame and alikes

Status
===================

Currently "Game Scene Designer" is at an very early stage. The software is capable of modelling a game scene composed of a hierarchy of game entitys and it's child entities, save it to a json file an load previously saved files. The hierarchy of entities, and it's characteristics, like having transforms for spatial representation and being composed of components, is largely based on the Unity aproach for modelling game scenes

Usage
===================
Download this repository as a zip file or using `git clone`, uncompress it and open index.html in firefox, or in chrome using the `--disable-web-security` command line switch (chrome does not let pages opened with "file:" protocol make cross origin xhr requests, used by my module loader to load the scripts). Or you can uncompress it in your web-servers www folder and access it in any browser.
