import { Request, Response } from "express";
import * as MessageService from "./../MessageService";

export const createMessage = async (req: Request, res: Response) => {
  try {
    // process req.body
    const content: string = req.body.content;
    const gameId: number = req.body.gameId;
    if (!content || !gameId) {
      throw "Request body is missing!";
    }
    // call service
    const newMessage = await MessageService.createMessage(content, gameId);
    // send response
    res.status(200).json({
      isSuccess: true,
      message: newMessage,
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      message: null,
      error: error,
    });
  }
};
