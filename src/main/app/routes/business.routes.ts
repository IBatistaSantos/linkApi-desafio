import { Router } from "express";

import { adaptRoute } from "../adapters/express/expressRouteAdapter";
import { makeCreateBusinessController } from "../factories/business";

const businessRouter = Router();

businessRouter.post("/", adaptRoute(makeCreateBusinessController()));

export { businessRouter };
