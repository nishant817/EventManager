import { Component, Input, EventEmitter, Output } from '@angular/core'
import { IEvent } from './shared/index'

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
        .thumbnail {min-height: 250px}
        .pad-left { margin-left:10px }
        .well div { color: #bbb }
    `]
})

export class EventThumbnailComponent {
    @Input() event: IEvent // Input declarator tell the component that event obj is coming from some other component
    @Output() handleEnrollForEvent = new EventEmitter(); // To bubble the click event to parent

    enrollForEvent() {
        // we can either handle it here or 
        // send to parent component using emit method.
        this.handleEnrollForEvent.emit(this.event); // this will bubble the event up
    }

    someProperty:any = "Show me on parent";

    logFoo() {
        console.log('fooo');
    }


}