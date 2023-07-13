// imports
import { env } from "process";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import compression from "compression";
import defaultRoutes from "./global/routes/defaultRoutes";

// define server port
const PORT = env.PORT || "3000";
// init express app
const app = express();

// middlewares
app.use(helmet());
app.use(express.json())
app.use(compression({level: 9}));
// routes
app.use("/", defaultRoutes)
app.listen(PORT);