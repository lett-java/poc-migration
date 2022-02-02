import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class InsertDesriptionClass1643809278454 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("class", new TableColumn({
            name: "year",
            type: "int",
            default: 2022
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("class", "year");
    }

}
