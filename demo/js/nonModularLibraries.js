// browserify treats full path only as "really" full paths, ones that use '/' as
// the root of the main filesystem
// require("/home/lucas/ambientesLucas/javascript/workspace/GameSceneDesigner/js/libs/angular_1.3.0-rc.0.js");

// executejs, instead, treats full paths as being relative to the scripts root
// which can be "window.location.href" or any of it's sub-folders

require("./libs/angular_1.3.0-rc.0");
require("./libs/angular-ui-tree");
require("./libs/angular-file-upload.js");