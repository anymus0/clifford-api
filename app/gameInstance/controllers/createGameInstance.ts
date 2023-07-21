// body: title, description
import { Request, Response } from "express";
import { GameInstance } from "./../models/GameInstance";
import { AppDataSource } from "./../../global/data-source";

export const createGameInstance = async (req: Request, res: Response) => {
  try {
    // process req
    const title = req.body.title;
    const description = req.body.description;
    if (!title || !description) {
      throw "Request body is missing!";
    }
    // create gameInsatnce obj
    const newGameInstance = new GameInstance();
    newGameInstance.title = title;
    newGameInstance.description = description;
    // save gameInsatnce to DB
    const gameInstanceRepository = AppDataSource.getRepository(GameInstance);
    await gameInstanceRepository.save(newGameInstance);
    // send response
    res.status(200).json({
      isSuccess: true,
      gameInstance: newGameInstance,
    });
  } catch (error) {
    res.status(507).json({
      isSuccess: false,
      gameInstance: null,
      error: error,
    });
  }
};
