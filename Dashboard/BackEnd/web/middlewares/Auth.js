"use strict";
exports.__esModule = true;
var jwt = require("jsonwebtoken");
var config = require("../config/config");
var conf = new config.Config.Settings();
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.prototype.use = function (request, response, next) {
        var token = request.headers["auth"];
        var jwtPayload;
        try {
            jwtPayload = jwt.verify(token, conf.getConfInfo('secret'));
            response.locals.jwtPayload = jwtPayload;
        }
        catch (error) {
            //If token is not valid, respond with 401 (unauthorized)
            response.status(401).send();
            return;
        }
        var userId = jwtPayload.userId, username = jwtPayload.username;
        var newToken = jwt.sign({ userId: userId, username: username }, conf.getConfInfo('secret'), {
            expiresIn: "1h"
        });
        response.setHeader("token", newToken);
        next();
    };
    return Auth;
}());
exports.Auth = Auth;
