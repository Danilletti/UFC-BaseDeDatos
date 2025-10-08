import { Fighter } from '../models/fighter.model';
import { Event } from '../models/event.model';
import { Division } from '../models/division.model';
import { Team } from '../models/team.model';
import { Venue } from '../models/venue.model';

export const mockFighters: Fighter[] = [
    {
        id: 1,
        name: 'John Doe',
        nickname: 'The Phantom',
        division: { id: 1, name: 'Lightweight', weightLimit: 155 },
        record: '10-2-0',
        isActive: true,
    },
];

export const mockEvents: Event[] = [
    {
        id: 1,
        name: 'UFC 300',
        date: new Date('2025-12-01'),
        venue: { id: 1, name: 'Madison Square Garden', location: 'New York, NY' },
        fights: [],
        isUpcoming: true,
    },
];

export const mockDivisions: Division[] = [
    { id: 1, name: 'Lightweight', weightLimit: 155 },
];

export const mockTeams: Team[] = [
    {
        id: 1,
        name: 'Team Alpha',
        headCoach: 'Coach Smith',
        location: 'California, USA',
        fighters: [],
    },
];

export const mockVenues: Venue[] = [
    { id: 1, name: 'Madison Square Garden', location: 'New York, NY' },
];
