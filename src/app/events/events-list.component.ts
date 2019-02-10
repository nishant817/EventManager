import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html',
})

export class EventsListComponent implements OnInit {
  events: any;

  constructor(private eventService: EventService, private toastrService: ToastrService) {
    // we will need this constructor even if there is no code in it for the dependency injection.
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  enrollForEvent(selectedEvent) {
    this.toastrService.success('Erolled for event: ' + selectedEvent.name, 'Enrollment Status');
    console.log("received: " + selectedEvent);
  }
}