import { ChatCompletionRequestMessageRoleEnum } from "openai";
import { GameInstance } from "../gameInstance/models/GameInstance";
import * as GameInstanceService from "./../gameInstance/GameInstanceService";
import { AppDataSource } from "./../global/data-source";
import { Message } from "./models/Message";

export const createMessage = async (
  gameId: string,
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

export const deleteMessageById = async (messageId: string) => {
  try {
    // delete message
    const messageRepository = AppDataSource.getRepository(Message);
    await messageRepository.delete({ id: messageId });
  } catch (error) {
    console.error(error);
    throw new Error("Error in 'MessageService.deleteMessageById'");
  }
};

export const updateMessageById = async (
  messageId: string,
  role: ChatCompletionRequestMessageRoleEnum,
  content: string,
  timestamp: Date
) => {
  try {
    // update message
    const messageRepository = AppDataSource.getRepository(Message);
    await messageRepository.update(messageId, {
      role: role,
      content: content,
      timestamp: timestamp,
    });
    // return the updated message
    return await messageRepository.findOneBy({ id: messageId });
  } catch (error) {
    console.error(error);
    throw new Error("Error in 'MessageService.updateMessageById'");
  }
};

export const getMessagesByGameInstance = async (gameId: string) => {
  try {
    // get gameInstance by gameId
    const gameInstance = await GameInstanceService.getGameInstanceById(gameId);
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

export const getSystemMessagesByGameInstance = async (gameId: string) => {
  try {
    // get gameInstance by gameId
    const gameInstance = await GameInstanceService.getGameInstanceById(gameId);
    // get messages
    const messageRepository = AppDataSource.getRepository(Message);
    const messages = await messageRepository.find({
      where: {
        gameInstance: gameInstance,
        role: ChatCompletionRequestMessageRoleEnum.System,
      },
      order: { timestamp: "ASC" },
    });
    return messages;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Error in 'MessageService.getSystemMessagesByGameInstance'"
    );
  }
};

export const getSystemMessages = async () => {
  try {
    // get messages
    const messageRepository = AppDataSource.getRepository(Message);
    const messages = await messageRepository.find({
      where: {
        role: ChatCompletionRequestMessageRoleEnum.System,
      },
      order: { timestamp: "ASC" },
    });
    return messages;
  } catch (error) {
    console.error(error);
    throw new Error("Error in 'MessageService.getSystemMessages'");
  }
};
