import * as express from 'express'
import * as bodyParser from "body-parser";
import {useExpressServer} from "routing-controllers";
import *  as helmet from 'helmet';
import "reflect-metadata";
import {createConnection} from "typeorm";

class App {

    public express;

    constructor() {
        this.express = express();
        this.mountRoutes()
    }

    private mountRoutes(): void {

        createConnection()
            .then(async connection => {

                this.express.use(helmet());
                this.express.use(bodyParser.json());
                this.express.use(bodyParser.urlencoded({extended: true}));

                useExpressServer(this.express, {
                    controllers: [__dirname + "/controllers/*.ts"],
                    middlewares: [__dirname + "/middlewares/*.ts"],
                });

            })
            .catch(error => console.log(error));
    }
}

export default new App().express