import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { mockEvents } from '../../core/services/mock-data';

@Component({
  selector: 'app-home',
  imports: [CommonModule, DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  events = mockEvents;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEvents().subscribe((data) => {
      this.events = data;
    });
  }
}
