// body: gameId
import { Request, Response } from "express";
import { GameInstance } from "./../models/GameInstance";
import { AppDataSource } from "./../../global/data-source";

export const getGameInstanceById = async (req: Request, res: Response) => {
  try {
    // process req.body
    const gameId = req.body.gameId;
    if (!gameId) {
      throw "Request body is missing!";
    }
    // get gameInstance by gameId from DB
    const gameInstanceRepository = AppDataSource.getRepository(GameInstance);
    const gameInstance = await gameInstanceRepository.findOneBy({ gameId: gameId });
    // send response
    res.status(200).json({
      isSuccess: true,
      gameInstance: gameInstance,
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      gameInstance: null,
      error: error,
    });
  }
};
