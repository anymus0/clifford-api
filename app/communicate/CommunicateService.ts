import { env } from "process";
import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from "openai";
import * as MessageService from "./../message/MessageService";

export const createChatCompletions = async (
  gameId: string,
  role: ChatCompletionRequestMessageRoleEnum,
  content: string
) => {
  try {
    // initialize openAI api object
    const configuration = new Configuration({
      apiKey: env.OPENAI_API_KEY,
      organization: env.OPENAI_ORG_ID,
    });
    const openai = new OpenAIApi(configuration);

    // get messages by gameId and build chatCompletion messages
    const chatCompletionMessages: ChatCompletionRequestMessage[] = [];
    const messages = await MessageService.getMessagesByGameInstance(gameId);
    messages.forEach((message) => {
      const chatCompletionMessage: ChatCompletionRequestMessage = {
        role: message.role,
        content: message.content,
      };
      chatCompletionMessages.push(chatCompletionMessage);
    });
    // save message from request
    await MessageService.createMessage(gameId, role, content);

    // add latest message from request
    const newChatCompletionMessage: ChatCompletionRequestMessage = {
      role: role,
      content: content,
    };
    chatCompletionMessages.push(newChatCompletionMessage);

    // create GPT request
    const chatCompletion = await openai.createChatCompletion({
      model: env.MODEL || "gpt-3.5-turbo",
      messages: chatCompletionMessages,
    });
    const chatCompletionMsg = chatCompletion.data.choices[0].message;
    if (chatCompletionMsg?.content === undefined) {
      throw "GPT response content is undefined!";
    }

    // save GPT response message
    await MessageService.createMessage(
      gameId,
      chatCompletionMsg.role,
      chatCompletionMsg.content
    );
    // should return a combination of messages + completionResMessage
    // in future: only return completionResMessage, in interface will add to others
    chatCompletionMessages.push({
      role: chatCompletionMsg.role,
      content: chatCompletionMsg.content,
    });
    return chatCompletionMessages;
  } catch (error) {
    console.error(error);
    throw new Error("Error in 'MessageService.createChatCompletions'");
  }
};
