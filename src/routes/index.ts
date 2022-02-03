import { Router } from "express";
import customerRouter from "./customer-routes";
import productRouter from "./product-routes";

const routes = Router();

routes.use('/customer', customerRouter);
routes.use('/product', productRouter);

export default routes;