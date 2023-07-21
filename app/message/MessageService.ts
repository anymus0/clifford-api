import { GameInstance } from "../gameInstance/models/GameInstance";
import { AppDataSource } from "./../global/data-source";
import { Message } from "./models/Message";

export const createMessage = async (content: string, gameId: number) => {
  try {
    // get gameInstance by gameId
    const gameInstanceRepository = AppDataSource.getRepository(GameInstance);
    const gameInstance = await gameInstanceRepository.findOneBy({ id: gameId });
    // create new Message
    const newMessage = new Message();
    newMessage.content = content;
    newMessage.timestamp = new Date();
    newMessage.gameInstance = gameInstance;
    // save newMessage
    const messageRepository = AppDataSource.getRepository(Message);
    return await messageRepository.save(newMessage);
  } catch (error) {
    console.error(error);
    throw new Error("Error in 'MessageService.createMessage'");
  }
}