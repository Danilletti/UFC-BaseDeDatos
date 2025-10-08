import { Fight } from "./fight.model";
import { Venue } from "./venue.model"; // Add this import if Venue is defined in venue.model.ts

export interface Event {
  id: number;
  name: string;
  date: Date;
  venue: Venue;
  fights: Fight[];
  isUpcoming: boolean;
}
