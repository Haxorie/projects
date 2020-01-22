import {Body, Get, JsonController, Post, Req, Res, UseBefore} from "routing-controllers";
import {Auth} from "../middlewares/Auth";
import {ValidateLogin} from "../forms/ValidateLogin";

// @ts-ignore
@JsonController()
export class AuthController {

    @Post("/login")
    // @UseBefore(ValidateLogin)
    login(@Body() body: any, @Res() response: any) {

        const email = body.email;
        const password = body.password;

        if (!(email && password)) {

            response.status(400).send();

        }

        return response.send("Hello response!");
    }

    @Post("/signup")
    signup(@Body() body: any, @Res() response: any) {
        return response.send("Hello response!");
    }

    @Get("/logout")
    @UseBefore(Auth)
    logout() {
        return this;
    }
}