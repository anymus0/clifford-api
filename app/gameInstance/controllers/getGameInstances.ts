import { Request, Response } from "express";
import { GameInstance } from "../models/GameInstance";
import { AppDataSource } from "../../global/data-source";

export const getGameInstances = async (req: Request, res: Response) => {
  try {
    // get all gameInstance from DB
    const gameInstanceRepository = AppDataSource.getRepository(GameInstance);
    const gameInstances = await gameInstanceRepository.find();
    // send response
    res.status(200).json({
      isSuccess: true,
      gameInstances: gameInstances
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      gameInstances: null,
      error: error
    })
  }
};
