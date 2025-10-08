import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Home } from './pages/home/home';
import { Fighters } from './pages/fighters/fighters';
import { FighterDetail } from './pages/fighter-detail/fighter-detail';
import { Events } from './pages/events/events';
import { EventDetail } from './pages/event-detail/event-detail';
import { Rankings } from './pages/rankings/rankings';
import { Teams } from './pages/teams/teams';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'fighters', component: Fighters },
      { path: 'fighters/:id', component: FighterDetail },
      { path: 'events', component: Events },
      { path: 'events/:id', component: EventDetail },
      { path: 'rankings', component: Rankings },
      { path: 'teams', component: Teams }
    ]
  }
];
