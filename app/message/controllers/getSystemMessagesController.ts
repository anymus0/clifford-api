import { Request, Response } from "express";
import * as MessageService from "./../MessageService";

export const getSystemMessages = async (
  req: Request,
  res: Response
) => {
  try {
    // call service
    const systemMessages = await MessageService.getSystemMessages();
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
