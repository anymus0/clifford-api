import { Player } from "./../../player/models/player"

export interface GameState {
  game_master_message: string
  environment: Environment
  npc: Npc
  actions: Actions
  players: Player[]
}

interface Environment {
  city: string
  place: string
  time: string
  weather: string
}

interface Npc {
  name: string
  race: string
  description: string
  status: string
}

interface Actions {
  explore_tavern: string
  wait_for_thimble: string
  search_tavern: string
  leave_tavern: string
}
