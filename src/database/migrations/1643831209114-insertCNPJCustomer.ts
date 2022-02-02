import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class insertCNPJCustomer1643831209114 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("customer", new TableColumn(
            {
            name: "cnpj",
            type: "int",
            }
        ));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("customer", "cnpj");
    }
}
