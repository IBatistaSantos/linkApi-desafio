import { Router } from "express";

import { adaptRoute } from "../adapters/express/expressRouteAdapter";
import {
  makeCreateBusinessController,
  makeListAllBusinessController,
} from "../factories/business";

const businessRouter = Router();

businessRouter.post("/", adaptRoute(makeCreateBusinessController()));
businessRouter.get("/", adaptRoute(makeListAllBusinessController()));
export { businessRouter };
