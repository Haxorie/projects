### Installation

The easiest way to get started with Project is to use the docker:

```bash
$ docker-compose up --build
```

### Migrations

After the Docker  will up you need to run the Migrations

Check Docker Containers list
```bash
$ docker ps
```

Open Web Service container
```bash
$ docker exec  -it  web-sericvice bash
```


Run The Migration
```bash
$ ts-node ./node_modules/typeorm/cli.js migration:run
```

Create new Migration
```bash
$ ts-node ./node_modules/typeorm/cli.js migration:generate -n MigrationName
```


Revert Migration
```bash
$ ts-node ./node_modules/typeorm/cli.js migration:revert
```