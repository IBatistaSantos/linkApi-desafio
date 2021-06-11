import { Router } from "express";

import { helloRouter } from "./hello.routes";

const routes = Router();
routes.use("/hello", helloRouter);
export { routes };
