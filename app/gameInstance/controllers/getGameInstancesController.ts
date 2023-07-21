import { Request, Response } from "express";
import * as GameInstanceService from "./../GameInstanceService";

export const getGameInstances = async (req: Request, res: Response) => {
  try {
    // call service
    const gameInstances = await GameInstanceService.getGameInstances();
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
