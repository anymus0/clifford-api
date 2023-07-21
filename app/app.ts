// imports
import "reflect-metadata";
import { env } from "process";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import compression from "compression";
import defaultRoutes from "./global/routes/defaultRoutes";
import communicateRoutes from "./communicate/routes/communicateRoutes";
import gameInstanceRoutes from "./gameInstance/routes/gameInstanceRoutes";
import messageRoutes from "./message/routes/messageRoutes";
import { AppDataSource } from "./global/data-source";

// define server port
const PORT = env.PORT || "3000";
// init express app
const app = express();

// middlewares
app.use(helmet());
app.use(express.json());
app.use(compression({ level: 9 }));

// Initialize data source
AppDataSource.initialize()
  .then(() => {
    // routes
    app.use("/communicate", communicateRoutes);
    app.use("/gameInstance", gameInstanceRoutes);
    app.use("/message", messageRoutes);
    app.use("/", defaultRoutes);

    // start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
