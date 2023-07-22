import { Request, Response } from "express";
import * as MessageService from "./../MessageService";

export const getSystemMessagesByGameInstance = async (
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
    const systemMessages = await MessageService.getSystemMessagesByGameInstance(
      gameId
    );
    // send response
    res.status(200).json({
      isSuccess: true,
      systemMessages: systemMessages,
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      deletedMessage: null,
      error: error,
    });
  }
};
