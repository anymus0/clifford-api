# clifford-api
## What is it?
- An experimental application to make chatGPT human-like DnD game master

## How it works
### Communicate controller flow:
- Process voice input --> get text from STT API --> send text to openAI API LLM
--> send openAI response to TTS API -->  send both text and voice in the response body