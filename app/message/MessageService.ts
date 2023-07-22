import { ChatCompletionRequestMessageRoleEnum } from "openai";
import { GameInstance } from "../gameInstance/models/GameInstance";
import { AppDataSource } from "./../global/data-source";
import { Message } from "./models/Message";

export const createMessage = async (
  gameId: number,
  role: ChatCompletionRequestMessageRoleEnum,
  content: string
) => {
  try {
    // get gameInstance by gameId
    const gameInstanceRepository = AppDataSource.getRepository(GameInstance);
    const gameInstance = await gameInstanceRepository.findOneBy({ id: gameId });
    // create new Message
    const newMessage = new Message();
    newMessage.role = role;
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
};

export const getMessagesByGameInstance = async (gameId: number) => {
  try {
    // get gameInstance by gameId
    const gameInstanceRepository = AppDataSource.getRepository(GameInstance);
    const gameInstance = await gameInstanceRepository.findOneBy({ id: gameId });
    // get messages
    const messageRepository = AppDataSource.getRepository(Message);
    const messages = await messageRepository.find({
      where: { gameInstance: gameInstance },
      order: { timestamp: "ASC" },
    });
    return messages;
  } catch (error) {
    console.error(error);
    throw new Error("Error in 'MessageService.getMessagesByGameInstance'");
  }
};

export const getMessages = async () => {
  try {
    // get messages
    const messageRepository = AppDataSource.getRepository(Message);
    const messages = await messageRepository.find();
    return messages;
  } catch (error) {
    console.error(error);
    throw new Error("Error in 'MessageService.getMessages'");
  }
};
