import { Router } from "express";

import { businessRouter } from "./business.routes";
import { dailyEarningsRouter } from "./dailyEarnings.routes";

const routes = Router();
routes.use("/business", businessRouter);
routes.use("/dailyEarnings", dailyEarningsRouter);
export { routes };
