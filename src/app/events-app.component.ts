import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  // templateUrl: './app.component.html',
  template:
  `
  <h1>Hello World!</h1>
  <img src='/assets/images/basic-shield.png' />
  `
})
export class EventsAppComponent {
  title = 'EventManager';
}
