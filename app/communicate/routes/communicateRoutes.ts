import { Router } from "express";
import { createChatCompletion } from "../controllers/createChatCompletionController";

// create express router
const router = Router();

router.post("/createChatCompletion", (req, res) => {
  createChatCompletion(req, res);
});

export default router;
