import { Router } from "express";

import { adaptRoute } from "../adapters/express/expressRouteAdapter";
import { makeListAllDailyEarningsController } from "../factories/dailyEarnings";

const dailyEarningsRouter = Router();

dailyEarningsRouter.get("/", adaptRoute(makeListAllDailyEarningsController()));

export { dailyEarningsRouter };
