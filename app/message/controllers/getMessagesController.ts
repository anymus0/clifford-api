import { Request, Response } from "express";
import { AppDataSource } from "./../../global/data-source";
import { Message } from "./../models/Message";

export const getMessages = async (req: Request, res: Response) => {
  try {
    // get messages
    const messageRepository = AppDataSource.getRepository(Message);
    const messages = await messageRepository.find();
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
