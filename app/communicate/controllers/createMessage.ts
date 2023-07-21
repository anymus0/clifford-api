// body: role, content, gameId
import { Request, Response } from "express";
import { v4 as uuid4 } from "uuid";
import { Message } from "./../models/Message";

const messages: Message[] = [];

const createMessage = async (req: Request, res: Response) => {
  try {
    // process req.body
    const role: string = req.body.role;
    const content: string = req.body.content;
    let gameId: string = req.body.gameId;
    if (!role || !content) throw "req.body is missing data in 'createMessage'";
    if (!gameId) {
      // generate new gameId if not present in body
      gameId = uuid4();
    }
    // create message object
    const message: Message = {
      gameId: gameId,
      chatCompletionMessage: {
        role: role,
        content: content
      }
    }
    // save message object in DB
    messages.push(message);
    // send response
    res.status(200).json({
      isSuccess: true,
      message: message
    });
  } catch (error) {
    res.status(507).json({
      isSuccess: false,
      error: error
    })
  }
};
