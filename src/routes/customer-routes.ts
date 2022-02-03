import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import { Customer } from '../models/Customer';
import { CustomerRepository } from '../repositories/CustomerRepository';

const customerRouter = Router();

customerRouter.post('/', async (request, response) => {
    try {
        const repository = getRepository(Customer);
        const res = await repository.save(request.body);
    
        return response.status(201).json(res);
    } catch (err) {
        console.log('error: ', err.message);
        return response.status(400).json('message: ' + err.message);
    }
});

customerRouter.get("/", async (request, response) => {
    try {
        const customers = await getRepository(Customer).find();

        if (customers.length == 0) {
            return response.status(404).json('Customers not found.');
        } 
        
        return response.status(200).json(customers);

    } catch (err) {
        console.log(err.message);
        return response.status(400).json('message: ' + err.message);
    }
});

customerRouter.get('/:name', async (request, response) => {
    try {
        const repository = getCustomRepository(CustomerRepository);
        const data = await repository.findByName(request.params.name);

        if (data.length == 0) {
            return response.status(404).json('Customer not found.')
        }
    
        return response.status(200).json(data);

    } catch (err) {
        console.log(err.message);
        return response.status(400).json('message: ' + err.message);
    }
});

export default customerRouter;