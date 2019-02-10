import { Component, Input, EventEmitter, Output } from '@angular/core'

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
    @Input() event:any // Input declarator tell the component that event obj is coming from some other component
    @Output() eventClick = new EventEmitter(); // To bubble the click event to parent

    handleClickMe() {
        // we can either handle it here or 
        // send to parent component using emit method.
        this.eventClick.emit(this.event.name); // this will bubble the event up
    }

    someProperty:any = "Show me on parent";

    logFoo() {
        console.log('fooo');
    }


}