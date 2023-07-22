import { Request, Response } from "express";
import { ChatCompletionRequestMessageRoleEnum } from "openai";
import * as CommunicateService from "./../CommunicateService";

export const createChatCompletion = async (req: Request, res: Response) => {
  try {
    // process req.body
    const gameId: string = req.body.gameId;
    const role: ChatCompletionRequestMessageRoleEnum = req.body.role;
    const content: string = req.body.content;
    if (!gameId || !role || !content) {
      throw "Missing request body!";
    }
    // call service
    const chatCompletionRes = await CommunicateService.createChatCompletions(
      gameId,
      role,
      content
    );
    res.status(200).json({
      isSuccess: true,
      chatCompletionRes: chatCompletionRes,
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      chatCompletionRes: null,
      error: error,
    });
  }
};
