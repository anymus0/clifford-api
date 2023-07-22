import { Request, Response } from "express";
import { ChatCompletionRequestMessageRoleEnum } from "openai";
import * as MessageService from "./../MessageService";

export const createMessage = async (req: Request, res: Response) => {
  try {
    // process req.body
    const gameId: string = req.body.gameId;
    const role: ChatCompletionRequestMessageRoleEnum = req.body.role;
    const content: string = req.body.content;
    if (!gameId || !role || !content) {
      throw "Request body is missing!";
    }
    // call service
    const newMessage = await MessageService.createMessage(
      gameId,
      role,
      content
    );
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
