import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModernImportLoaderComponent } from './modern-import-loader.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [ModernImportLoaderComponent]
})
export class ModernImportLoaderModule { }
