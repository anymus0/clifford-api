import { Request, Response } from "express";
import * as MessageService from "./../MessageService";

export const deleteMessageById = async (req: Request, res: Response) => {
  try {
    // process req.body
    const messageId: string = req.body.messageId;
    if (!messageId) {
      throw "Request body is missing!";
    }
    // call service
    await MessageService.deleteMessageById(messageId);
    // send response
    res.status(200).json({
      isSuccess: true,
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      error: error,
    });
  }
};
