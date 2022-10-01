import { GameEventType } from "../enums/GameEventType.js";

export interface GameEvent {
  playerID: string;
  event: GameEventType;
  year: number;
}
