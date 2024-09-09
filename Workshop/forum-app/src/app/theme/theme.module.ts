import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    ThemesListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
],
  exports: [
    ThemesListComponent,
  ]
})
export class ThemeModule { }
