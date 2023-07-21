// body: title, description
import { Request, Response } from "express";
import * as GameInstanceService from "./../GameInstanceService";

export const createGameInstance = async (req: Request, res: Response) => {
  try {
    // process req
    const title = req.body.title;
    const description = req.body.description;
    if (!title || !description) {
      throw "Request body is missing!";
    }
    // call service
    const newGameInstance = await GameInstanceService.createGameInstance(
      title,
      description
    );
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
