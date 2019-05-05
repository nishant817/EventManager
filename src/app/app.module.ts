import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { from } from 'rxjs';

import { NavbarComponent } from './nav/index'
import { Error404Component } from './errors/index'
import { EventService } from './events/shared/index'
import { ToastrService } from './common/index'
import { AuthService } from './user/auth.service'

import { 
  EventsListComponent, 
  EventThumbnailComponent, 
  EventsListResolver, 
  CreateEventComponent 
} from './events/index';

import { 
  EventDetailsComponent, 
  EventRouteActivator 
} from './events/event-details/index'
import { 
  EventsAppComponent,
  appRoutes
} from './index'

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    EventService, // Also as { provide: EventService, useValue: EventService }
    ToastrService,
    EventRouteActivator,
    EventsListResolver,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty) {
    return window.confirm('You have unsaved form. Do you really want to cancel?');
  }
  return true;
}
