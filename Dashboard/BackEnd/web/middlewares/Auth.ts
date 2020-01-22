import * as jwt from "jsonwebtoken";
import * as config from "../config/config";
import {ExpressMiddlewareInterface} from "routing-controllers";

const conf = new config.Config.Settings();

export class Auth implements ExpressMiddlewareInterface { // interface implementation is optional

    use(request: any, response: any, next?: (err?: any) => any): any {
        const token = <string>request.headers["auth"];

        let jwtPayload;

        try {
            jwtPayload = <any>jwt.verify(token, conf.getConfInfo('secret'));
            response.locals.jwtPayload = jwtPayload;
        } catch (error) {
            //If token is not valid, respond with 401 (unauthorized)
            response.status(401).send();
            return;
        }

        const {userId, username} = jwtPayload;

        const newToken = jwt.sign({userId, username}, conf.getConfInfo('secret'), {
            expiresIn: "1h"
        });
        response.setHeader("token", newToken);

        next();
    }

}