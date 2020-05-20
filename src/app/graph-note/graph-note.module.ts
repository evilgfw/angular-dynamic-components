import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphNoteComponent } from './graph-note.component';
import { SharedModule } from '../shared/shared.module';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'

// import { createCustomElement } from '@angular/elements';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule,
    MatCardModule
  ],
  bootstrap: [],
  declarations: [
    GraphNoteComponent
  ],
  entryComponents: [GraphNoteComponent],
  providers: [
    {
      provide: 'widgets',
      useValue: [
        {
          name: 'graph-cmp',
          component: GraphNoteComponent
        }
      ],
      multi: true
    }
  ]
})
export class GraphNoteModule {
  static defaultComponent = GraphNoteComponent;
}
