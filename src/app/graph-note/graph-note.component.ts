import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-plugin',
  templateUrl: './graph-note.component.html',
  styleUrls: ['./graph-note.component.scss']
})
export class GraphNoteComponent {
  @Input() data = [
    { value: 70, color: 'red' },
    { value: 70, color: 'green' },
    { value: 30, color: 'blue' },
  ];

  @Output() change = new EventEmitter();

  update(item, value) {
    console.log(item, value, this.data)
    item.value = +value;
    this.change.emit([...this.data]);
  }
}
