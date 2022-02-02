import { EntityRepository, Repository } from "typeorm";
import { Customer } from "../models/Customer";


@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {
    public async findByName(name: string) : Promise<Customer[]> {
        return this.find({
            where: {
                name
            }
        })
    }
}
