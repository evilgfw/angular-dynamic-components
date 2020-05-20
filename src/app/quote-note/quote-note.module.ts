import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteNoteComponent } from './quote-note.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'
import {GraphNoteComponent} from "../graph-note/graph-note.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule,
    MatCardModule
  ],
  bootstrap: [],
  declarations: [
    QuoteNoteComponent
  ],
  entryComponents: [QuoteNoteComponent],
  providers: [
    {
      provide: 'widgets',
      useValue: [
        {
          name: 'quote-cmp',
          component: QuoteNoteComponent
        }
      ],
      multi: true
    }
  ]
})
export class QuoteNoteModule {
  static defaultComponent = QuoteNoteComponent;
}
