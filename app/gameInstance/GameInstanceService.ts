import { GameInstance } from "./models/GameInstance";
import { AppDataSource } from "./../global/data-source";

export const createGameInstance = async (
  title: string,
  description: string
) => {
  try {
    // create gameInsatnce obj
    const newGameInstance = new GameInstance();
    newGameInstance.title = title;
    newGameInstance.description = description;
    // save gameInsatnce to DB
    const gameInstanceRepository = AppDataSource.getRepository(GameInstance);
    return await gameInstanceRepository.save(newGameInstance);
  } catch (error) {
    console.error(error);
    throw new Error("Error in 'MessageService.createGameInstance'");
  }
};

export const getGameInstanceById = async (gameId: string) => {
  try {
    // get gameInstance by gameId from DB
    const gameInstanceRepository = AppDataSource.getRepository(GameInstance);
    const gameInstance = await gameInstanceRepository.findOneBy({ id: gameId });
    return gameInstance;
  } catch (error) {
    console.error(error);
    throw new Error("Error in 'MessageService.getGameInstanceById'");
  }
};

export const getGameInstances = async () => {
  try {
    // get all gameInstance from DB
    const gameInstanceRepository = AppDataSource.getRepository(GameInstance);
    const gameInstances = await gameInstanceRepository.find();
    return gameInstances;
  } catch (error) {
    console.error(error);
    throw new Error("Error in 'MessageService.getGameInstances'");
  }
};
