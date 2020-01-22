import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Permissions1565641397821 implements MigrationInterface {

    public table = "permissions";
    public fields = [
        {
            name: "id",
            type: "int",
            isPrimary: true,
        },
        {
            name: "name",
            type: "varchar UNIQUE NOT NULL",
        },
        {
            name: "updatedAt",
            type: "int NOT NULL DEFAULT date_part('epoch',CURRENT_TIMESTAMP)::int",
        },
        {
            name: "createdAt",
            type: "int NOT NULL DEFAULT date_part('epoch',CURRENT_TIMESTAMP)::int",
        },
    ];

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.createTable(new Table({
            name: this.table,
            columns: this.fields,
        }), true);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.dropTable(this.table);

    }

}
