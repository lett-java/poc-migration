import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import { Product } from '../models/Product';
import { ProductRepository } from '../repositories/ProductRepository';

const productRouter = Router();

productRouter.post('/', async (request, response) => {
    try {
        const repository = getRepository(Product);
        const res = await repository.save(request.body);
    
        return response.status(201).json(res);
    } catch (err) {
        console.log('error: ', err.message);
        return response.status(400).json("error: " + err.message);
    }
});

productRouter.get("/", async (request, response) => {
    try {
        const products = await getRepository(Product).find();

        if (products.length == 0) {
            return response.status(404).json('Products not found.');
        } 
        
        return response.status(200).json(products);

    } catch (err) {
        console.log(err.message);
        return response.status(400).json('Invalid search.');
    }
});

productRouter.get('/:name', async (request, response) => {
    try {
        const repository = getCustomRepository(ProductRepository);
        const data = await repository.findByName(request.params.name);

        if (data.length == 0) {
            return response.status(404).json('Product not found.')
        }
    
        return response.status(200).json(data);

    } catch (err) {
        console.log(err.message);
        return response.status(400).json('Invalid search.');
    }
});

export default productRouter;