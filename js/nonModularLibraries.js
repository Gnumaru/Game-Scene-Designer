/*
 * Browserify treats full path only as "really" full paths, ones that use '/' as
 * the root of the main filesystem like in
 * require("/home/user/src/javascript/workspace/GameSceneDesigner/js/libs/angular_1.3.0-rc.0")
 * 
 * executejs, instead, treats full paths as being relative to the scripts root
 * which can be "window.location.href" or any of it's sub-folders if a root path
 * was given to executejs
 * 
 * It is advisable to use always relative paths, like in
 * require("./libs/angular_1.3.0-rc.0"). However, due to a problem related to
 * javascript not having a built-in functionality for a script knowing the path
 * in which it resides, it is even more advisable to use relative paths with a
 * parent chain that leads to the root script path, like in
 * require("../../../../../../js/some/deep/module/package/folder/hereIsTheModule");
 */
require("./libs/angular_1.3.0-rc.0");
require("./libs/angular-ui-tree");