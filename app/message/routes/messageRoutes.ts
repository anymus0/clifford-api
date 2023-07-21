import { Router } from "express";
import { createMessage } from "../controllers/createMessage";
import { getMessages } from "../controllers/getMessages";
import { getMessagesByGameInstance } from "../controllers/getMessagesByGameInstance";


// create express router
const router = Router();

router.post("/createMessage", (req, res) => {
  createMessage(req, res);
});

router.post("/getMessages", (req, res) => {
  getMessages(req, res);
});

router.post("/getMessagesByGameInstance", (req, res) => {
  getMessagesByGameInstance(req, res);
});

export default router;
