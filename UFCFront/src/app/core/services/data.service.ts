import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Fighter } from '../models/fighter.model';
import { Event } from '../models/event.model';
import { Division } from '../models/division.model';
import { Team } from '../models/team.model';
import { Venue } from '../models/venue.model';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    getFighters(): Observable<Fighter[]> {
        return of([]); // Replace with actual mock data
    }

    getEvents(): Observable<Event[]> {
        return of([]); // Replace with actual mock data
    }

    getDivisions(): Observable<Division[]> {
        return of([]); // Replace with actual mock data
    }

    getTeams(): Observable<Team[]> {
        return of([]); // Replace with actual mock data
    }

    getVenues(): Observable<Venue[]> {
        return of([]); // Replace with actual mock data
    }
}
