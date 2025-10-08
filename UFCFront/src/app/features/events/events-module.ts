import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Events } from '../../pages/events/events';
import { EventDetail } from '../../pages/event-detail/event-detail';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    Events,
    EventDetail
  ],
})
export class EventsModule { }
