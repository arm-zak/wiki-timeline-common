import { EventQuestion } from "./EventQuestion.js";

export interface Player {
  id: string;
  name: string;
  ready: boolean;
  eventQuestions: Array<EventQuestion>;
}
