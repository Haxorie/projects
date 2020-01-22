import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class UsersToRoles1565641410114 implements MigrationInterface {


    public table = "users_to_roles";
    public relatedTableUsers = "users";
    public relatedTableRoles = "roles";
    public fields = [
        {
            name: "user_id",
            type: "int",
            isPrimary: true,
        },
        {
            name: "role_id",
            type: "int",
            isPrimary: true,
        },
        {
            name: "updatedAt",
            type: "int NOT NULL DEFAULT date_part('epoch',CURRENT_TIMESTAMP)::int",
        },
        {
            name: "createdAt",
            type: "int NOT NULL DEFAULT date_part('epoch',CURRENT_TIMESTAMP)::int",
        }
    ];

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.createTable(new Table({
            name: this.table,
            columns: this.fields,
        }), true);

        await queryRunner.createForeignKey(this.table, new TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: this.relatedTableUsers,
            onDelete: "NO ACTION",
        }));

        await queryRunner.createForeignKey(this.table, new TableForeignKey({
            columnNames: ["role_id"],
            referencedColumnNames: ["id"],
            referencedTableName: this.relatedTableRoles,
            onDelete: "NO ACTION",
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<any> {

        const table = await queryRunner.getTable(this.table);

        const foreignKey1 = table.foreignKeys.find(fk => fk.columnNames.indexOf("user_id") !== -1);

        await queryRunner.dropForeignKey(this.table, foreignKey1);

        const foreignKey2 = table.foreignKeys.find(fk => fk.columnNames.indexOf("role_id") !== -1);

        await queryRunner.dropForeignKey(this.table, foreignKey2);

        await queryRunner.dropTable(this.table);

    }

}
