import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStoreProductsTable1643851356894 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: "stores_products",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "products_id",
                    type: "uuid"
                },
                {
                    name: "stores_id",
                    type: "uuid"
                }
            ],
            foreignKeys: [
                {
                  name: "FK_store",
                  referencedTableName: "store",
                  referencedColumnNames: ["id"],
                  columnNames: ["stores_id"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
                {
                  name: "FK_product",
                  referencedTableName: "product",
                  referencedColumnNames: ["id"],
                  columnNames: ["products_id"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("stores_products");
    }
}
