import { Router } from "express";
import { createMessage } from "../controllers/createMessageController";
import { getMessages } from "../controllers/getMessagesController";
import { getMessagesByGameInstance } from "../controllers/getMessagesByGameInstanceController";
import { deleteMessageById } from "../controllers/deleteMessageByIdController";
import { getSystemMessagesByGameInstance } from "../controllers/getSystemMessagesByGameInstanceController";
import { getSystemMessages } from "../controllers/getSystemMessagesController";
import { updateMessageById } from "../controllers/updateMessageByIdController";

// create express router
const router = Router();

router.post("/createMessage", (req, res) => {
  createMessage(req, res);
});

router.delete("/deleteMessageById", (req, res) => {
  deleteMessageById(req, res);
});

router.put("/updateMessageById", (req, res) => {
  updateMessageById(req, res);
});

router.post("/getMessages", (req, res) => {
  getMessages(req, res);
});

router.post("/getMessagesByGameInstance", (req, res) => {
  getMessagesByGameInstance(req, res);
});

router.post("/getSystemMessagesByGameInstance", (req, res) => {
  getSystemMessagesByGameInstance(req, res);
});


router.post("/getSystemMessages", (req, res) => {
  getSystemMessages(req, res);
});

export default router;
