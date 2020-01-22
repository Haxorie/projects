"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var routing_controllers_1 = require("routing-controllers");
var Auth_1 = require("../middlewares/Auth");
var ValidateLogin_1 = require("../forms/ValidateLogin");
// @ts-ignore
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.prototype.login = function (body, response) {
        var email = body.email;
        var password = body.password;
        if (!(email && password)) {
            response.status(400).send();
        }
        return response.send("Hello response!");
    };
    AuthController.prototype.signup = function (body, response) {
        return response.send("Hello response!");
    };
    AuthController.prototype.logout = function () {
        return this;
    };
    __decorate([
        routing_controllers_1.Post("/login"),
        routing_controllers_1.UseBefore(ValidateLogin_1.ValidateLogin),
        __param(0, routing_controllers_1.Body()), __param(1, routing_controllers_1.Res())
    ], AuthController.prototype, "login");
    __decorate([
        routing_controllers_1.Post("/signup"),
        __param(0, routing_controllers_1.Body()), __param(1, routing_controllers_1.Res())
    ], AuthController.prototype, "signup");
    __decorate([
        routing_controllers_1.Get("/logout"),
        routing_controllers_1.UseBefore(Auth_1.Auth)
    ], AuthController.prototype, "logout");
    AuthController = __decorate([
        routing_controllers_1.JsonController()
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
