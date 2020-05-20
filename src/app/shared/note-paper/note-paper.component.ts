import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-paper',
  template: `
    <div class="notepaper">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./note-paper.component.scss']
})
export class NotePaperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
