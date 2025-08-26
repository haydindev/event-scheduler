import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  newEventTitle: string = "";
  newEventDate: string = "";
  newEventTime: string = "";
  newEventDescription: string = "";

  events: Event[] = [];


  ngOnInit(): void {
    let savedEvents = localStorage.getItem("events");
    this.events = savedEvents ? JSON.parse(savedEvents) : [];
  }

  addEvent() {
    if (this.newEventTitle.trim().length && this.newEventDate && this.newEventTime) {
      let newEvent: Event = {
        id: Date.now(),
        title: this.newEventTitle,
        date: this.newEventDate,
        time: this.newEventTime,
        description: this.newEventDescription
      }
      this.events.push(newEvent);

      this.newEventTitle = "";
      this.newEventDate = "";
      this.newEventTime = "";
      this.newEventDescription = "";

      localStorage.setItem("events", JSON.stringify(this.events));
    }
  }

  deleteEvent(index: number) {
    this.events.splice(index, 1);
    localStorage.setItem("events", JSON.stringify(this.events))
  }

}











