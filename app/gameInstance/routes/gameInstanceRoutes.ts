import { Router } from "express";
import { createGameInstance } from "./../controllers/createGameInstanceController";
import { getGameInstances } from "../controllers/getGameInstancesController";
import { getGameInstanceById } from "../controllers/getGameInstanceByIdController";

// create express router
const router = Router();

router.post("/createGameInstance", (req, res) => {
  createGameInstance(req, res);
});

router.post("/getGameInstances", (req, res) => {
  getGameInstances(req, res);
});

router.post("/getGameInstanceById", (req, res) => {
  getGameInstanceById(req, res);
});

export default router;
