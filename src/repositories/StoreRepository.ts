import { EntityRepository, Repository } from "typeorm";
import { Product } from "../models/Product";


@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    public async findByName(name: string) : Promise<Product[]> {
        return this.find({
            where: {
                name
            }
        })
    }
}
