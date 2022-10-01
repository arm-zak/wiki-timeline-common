import { Player } from "./Player.js";
import { EventQuestion } from "./EventQuestion.js";
import { GameStatus } from "../enums/GameStatus.js";
import { Language } from "../enums/Language.js";
import { GameEvent } from "./GameEvent.js";

export interface Game {
  id: string;
  players: Array<Player>;
  maxPlayers: number;
  activePlayer: string;
  activeEventQuestion: EventQuestion | null;
  winningCardsAmount: number;
  timeLimitPlayer: number;
  status: GameStatus;
  language: Language;
  eventLog: Array<GameEvent>;
  timer: number;
  round: number;
}
