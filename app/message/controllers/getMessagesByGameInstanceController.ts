import { Request, Response } from "express";
import * as MessageService from "./../MessageService";

export const getMessagesByGameInstance = async (
  req: Request,
  res: Response
) => {
  try {
    // process req.body
    const gameId: string = req.body.gameId;
    if (!gameId) {
      throw "Request body is missing!";
    }
    // call service
    const messages = await MessageService.getMessagesByGameInstance(gameId);
    // send response
    res.status(200).json({
      isSuccess: true,
      messages: messages,
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      messages: null,
      error: error,
    });
  }
};
