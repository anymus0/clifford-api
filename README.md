# clifford-api
## What is it?
- An experimental application to make chatGPT human-like DnD game master

## How it works
### GameStateManager
- Manages the game state, the output is JSON which will be sent to GPT
- Game state can be modified by both player and GPT
- Contains text messages between players and GPT

### Communicate controller flow:
- Process voice input --> get text from STT API --> send text to openAI API LLM
--> send openAI response to TTS API -->  send both text and voice in the response body

## Multiplayer
- Players could connect to an instance with websocket
- GameStateManager would get every player's character sheet into a Players[] structure
- Every Player would have the same GameState (websockets)