import { Routes } from '@angular/router'
import { Error404Component } from './errors/index'

import { 
    EventsListComponent, 
    CreateEventComponent,
    EventsListResolver 
} from './events/index'

import { 
    EventDetailsComponent,
    EventRouteActivator
 } from './events/event-details/index'

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: [ 'canDeactivateCreateEvent' ] },
    { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren: './user/user.module#UserModule'}
]
