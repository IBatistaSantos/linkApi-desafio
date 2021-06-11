import "dotenv/config";
import cors from "cors";
import express from "express";

import { connect } from "../../infra/database/mongodb";
import { routes } from "./routes";

connect();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

export { app };
