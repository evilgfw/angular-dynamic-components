import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeprecatedStringLoaderComponent } from './demo/deprecated-string-loader/deprecated-string-loader.component';
import {ModernImportLoaderComponent} from "./demo/modern-import-loader/modern-import-loader.component";

const routes: Routes = [
  { path: '', component: ModernImportLoaderComponent },

  { path: 'deprecated-string-loader', component: DeprecatedStringLoaderComponent },
  { path: 'string', component: DeprecatedStringLoaderComponent },

  { path: 'import-loader', component: ModernImportLoaderComponent },
  { path: 'import', component: ModernImportLoaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
