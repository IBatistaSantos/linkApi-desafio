import { Router } from "express";
// import { adaptRoute } from '../adapters/express/expressRouteAdapter';

export default (router: Router): void => {
  router.get("/hello", (req, res) => {
    res.send("HELLO WORLD");
  });
};
