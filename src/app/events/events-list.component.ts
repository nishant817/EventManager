import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/index'
import { ToastrService } from '../common/index';
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/index'

@Component({
    templateUrl: './events-list.component.html',
})

export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(private eventService: EventService, 
              private toastrService: ToastrService,
              private route: ActivatedRoute) {
    // we will need this constructor even if there is no code in it for the dependency injection.
  }

  ngOnInit(): void {
    //this.events = this.eventService.getEvents();
    //this.eventService.getEvents().subscribe(data => this.events = data);
    this.events = this.route.snapshot.data['events'];
  }

  enrollForEvent(selectedEvent) {
    this.toastrService.success('Erolled for event: ' + selectedEvent.name, 'Enrollment Status');
    console.log("received: " + selectedEvent);
  }
}