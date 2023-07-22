import { Request, Response } from "express";
import { ChatCompletionRequestMessageRoleEnum } from "openai";
import * as MessageService from "./../MessageService";

export const updateMessageById = async (req: Request, res: Response) => {
  try {
    // process req.body
    const messageId: string = req.body.messageId;
    const role: ChatCompletionRequestMessageRoleEnum = req.body.role;
    const content: string = req.body.content;
    const timestamp: Date = req.body.timestamp;
    if (!messageId || !role || !content || !timestamp) {
      throw "Request body is missing!";
    }
    // call service
    const updatedMessage = await MessageService.updateMessageById(
      messageId,
      role,
      content,
      timestamp
    );
    // send response
    res.status(200).json({
      isSuccess: true,
      updatedMessage: updatedMessage
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      updatedMessage: null,
      error: error,
    });
  }
};
