import { Request, Response } from "express";
import { GameInstance } from "../../gameInstance/models/GameInstance";
import { AppDataSource } from "./../../global/data-source";
import { Message } from "./../models/Message";

export const createMessage = async (req: Request, res: Response) => {
  try {
    // process req.body
    const content: string = req.body.content;
    const gameId: number = req.body.gameId;
    if (!content || !gameId) {
      throw "Request body is missing!";
    }
    // get gameInstance by gameId
    const gameInstanceRepository = AppDataSource.getRepository(GameInstance);
    const gameInstance = await gameInstanceRepository.findOneBy({ id: gameId });
    // create new Message
    const newMessage = new Message();
    newMessage.content = content;
    newMessage.timestamp = new Date();
    newMessage.gameInstance = gameInstance;
    const messageRepository = AppDataSource.getRepository(Message);
    await messageRepository.save(newMessage);
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
