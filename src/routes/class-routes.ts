import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import { Class } from '../models/Class';
import { ClassRepository } from '../repositories/ClassRepository';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
    try {
        const repository = getRepository(Class);
        const res = await repository.save(request.body);
    
        return response.status(201).json(res);
    } catch (err) {
        console.log('error: ', err.message);
    }
});

classRouter.get("/", async (request, response) => {
    return response.json(await getRepository(Class).find());
});

classRouter.get('/:name', async (request, response) => {
    const repository = getCustomRepository(ClassRepository);
    const data = await repository.findByName(request.params.name);

    return response.status(200).json(data);
});

export default classRouter;