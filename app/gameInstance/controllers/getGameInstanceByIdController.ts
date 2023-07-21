// body: gameId
import { Request, Response } from "express";
import * as GameInstanceService from "./../GameInstanceService";

export const getGameInstanceById = async (req: Request, res: Response) => {
  try {
    // process req.body
    const gameId: number = req.body.gameId;
    if (!gameId) {
      throw "Request body is missing!";
    }
    // call service
    const gameInstance = await GameInstanceService.getGameInstanceById(gameId);
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
