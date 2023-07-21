import { Request, Response } from "express";
import { GameInstance } from "../../gameInstance/models/GameInstance";
import { AppDataSource } from "./../../global/data-source";
import { Message } from "./../models/Message";

export const getMessagesByGameInstance = async (req: Request, res: Response) => {
  try {
    // process req.body
    const gameId: number = req.body.gameId;
    if (!gameId) {
      throw "Request body is missing!";
    }
    // get gameInstance by gameId
    const gameInstanceRepository = AppDataSource.getRepository(GameInstance);
    const gameInstance = await gameInstanceRepository.findOneBy({ id: gameId });
    // get messages
    const messageRepository = AppDataSource.getRepository(Message);
    const messages = await messageRepository.find({
      where: { gameInstance: gameInstance },
      order: { timestamp: 'ASC' }
    });
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
