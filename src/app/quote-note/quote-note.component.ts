import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-plugin',
  templateUrl: './quote-note.component.html',
  styleUrls: ['./quote-note.component.scss'],
})
export class QuoteNoteComponent implements OnDestroy, OnChanges {

  @Input() data = {
    text: '',
    name: ''
  };
  @Output() textChange = new EventEmitter();

  updateText(text) {
    this.data.text = text;
    this.textChange.emit(text);
  }

  ngOnDestroy(): void {
    console.log('destroy')
  }

  ngOnChanges(changes) {
    console.log(changes)
  }

  ngDoCheck() {
    console.log('do check')
  }

}
