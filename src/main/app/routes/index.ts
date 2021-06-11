import { Router } from "express";

import { businessRouter } from "./business.routes";

const routes = Router();
routes.use("/business", businessRouter);
export { routes };
