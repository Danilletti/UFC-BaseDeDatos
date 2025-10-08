import { Division } from "./division.model";
import { Fighter } from "./fighter.model";

export interface Fight {
  id: number;
  event: Event;
  fighter1: Fighter;
  fighter2: Fighter;
  division: Division;
  result?: FightResult;
  round?: number;
  method?: string;
  time?: string;
  judges: JudgeDecision[];
}

export interface FightResult {
  winnerId: number;
  method: string;
  round: number;
}

export interface JudgeDecision {
  judgeId: number;
  decision: string;
}
