import { Router } from "express";
import { createGameInstance } from "./../controllers/createGameInstance";
import { getGameInstances } from "../controllers/getGameInstances";
import { getGameInstanceById } from "../controllers/getGameInstanceById";

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
