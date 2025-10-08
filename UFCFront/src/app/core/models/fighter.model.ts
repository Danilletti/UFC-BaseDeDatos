import { Division } from "./division.model";
import { Team } from "./team.model";

export interface Fighter {
  id: number;
  name: string;
  nickname?: string;
  division: Division;
  team?: Team;
  record: string; // "20-3-0"
  height?: string;
  weight?: number;
  reach?: number;
  stance?: string;
  dateOfBirth?: Date;
  country?: string;
  isActive: boolean;
}
