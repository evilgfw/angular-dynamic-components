import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeprecatedStringLoaderModule } from './deprecated-string-loader/deprecated-string-loader.module';
import { ModernImportLoaderModule } from "./modern-import-loader/modern-import-loader.module";

@NgModule({
  imports: [
    CommonModule,
    DeprecatedStringLoaderModule,
    ModernImportLoaderModule
  ],
  declarations: [],
  exports: []
})
export class DemoModule {
}
