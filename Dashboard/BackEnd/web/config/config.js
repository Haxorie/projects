"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config;
(function (Config) {
    var Settings = /** @class */ (function () {
        function Settings() {
            var config = require('./data.json');
            this.env = process.env.NODE_ENV;
            this.conf = config[this.env];
        }
        Settings.prototype.getEnv = function () {
            return this.env;
        };
        Settings.prototype.getConfInfo = function (config) {
            return this.conf[config];
        };
        return Settings;
    }());
    Config.Settings = Settings;
})(Config = exports.Config || (exports.Config = {}));
