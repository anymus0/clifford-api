// body: role, content, gameId
import { Request, Response } from "express";
import { Message } from "../models/Message";

const messages: Message[] = [];

const getMessagesByGameId = async (req: Request, res: Response) => {
  try {
    
    // send response
    res.status(200).json({
      isSuccess: true,
      messages: messages
    });
  } catch (error) {
    res.status(507).json({
      isSuccess: false,
      error: error
    })
  }
};
