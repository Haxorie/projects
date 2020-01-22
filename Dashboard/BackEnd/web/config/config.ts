export namespace Config {
    export class Settings {

        public env;
        public conf;

        constructor() {

            let config = require('./data.json');

            this.env = process.env.NODE_ENV;

            this.conf = config[this.env];

        }

        public getEnv(): void {
            return this.env
        }

        public getConfInfo(config): void {
            return this.conf[config]
        }


    }
}