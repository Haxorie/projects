"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
var config = require("./config/config");
var conf = new config.Config.Settings();
var port = conf.getConfInfo('node_port');
App_1.default.listen(port, function (err) {
    if (err) {
        return console.log(err);
    }
    return console.log("server is listening on " + port);
});
var cmd = require('node-cmd');
cmd.get('pwd', function (err, data, stderr) {
    console.log('the current working dir is : ', data);
});
var cmd = require('node-cmd');
