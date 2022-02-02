import { Router } from "express";
import customerRouter from "./materia-routes";

const routes = Router();

routes.use('/customer', customerRouter);

export default routes;