import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeprecatedStringLoaderComponent } from './deprecated-string-loader.component';
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
  declarations: [DeprecatedStringLoaderComponent]
})
export class DeprecatedStringLoaderModule { }
