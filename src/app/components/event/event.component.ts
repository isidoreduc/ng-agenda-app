import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() value: any;
  @Output() deleteEventItem: EventEmitter<any> = new EventEmitter<any>();
  isLogged = true;

  constructor() {}

  ngOnInit() {}

  handleDeleteClick() {
    this.deleteEventItem.emit(this.value);
  }
}
