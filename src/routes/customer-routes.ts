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
    }
});

customerRouter.get("/", async (request, response) => {
    return response.json(await getRepository(Customer).find());
});

customerRouter.get('/:name', async (request, response) => {
    const repository = getCustomRepository(CustomerRepository);
    const data = await repository.findByName(request.params.name);

    return response.status(200).json(data);
});

export default customerRouter;