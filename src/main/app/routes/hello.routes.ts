import { Router } from "express";

const helloRouter = Router();

helloRouter.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

export { helloRouter };
