import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  // templateUrl: './app.component.html',
  template:
  `
    <nav-bar></nav-bar>
    <h1>Hello World!</h1>
    <router-outlet></router-outlet>
    <img src='/assets/images/basic-shield.png' />
  `
})
export class EventsAppComponent {
  title = 'EventManager';
}
