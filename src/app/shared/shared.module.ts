import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotePaperComponent } from './note-paper/note-paper.component';
import { QuoteNoteComponent } from './quote-note/quote-note.component';
import { BarGraphNoteComponent } from './bar-graph-note/bar-graph-note.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule
  ],
  declarations: [NotePaperComponent, QuoteNoteComponent, BarGraphNoteComponent],
  exports: [NotePaperComponent, QuoteNoteComponent, BarGraphNoteComponent],
  entryComponents: []
})
export class SharedModule { }
