import { Fighter } from "./fighter.model";

export interface Team {
  id: number;
  name: string;
  headCoach: string;
  location: string;
  fighters: Fighter[];
}
