import { Router } from "express";
import { createMessage } from "../controllers/createMessageController";
import { getMessages } from "../controllers/getMessagesController";
import { getMessagesByGameInstance } from "../controllers/getMessagesByGameInstanceController";


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
