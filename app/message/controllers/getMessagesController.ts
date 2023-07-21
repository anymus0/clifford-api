import { Request, Response } from "express";
import * as MessageService from "./../MessageService";

export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await MessageService.getMessages();
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
