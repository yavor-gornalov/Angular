import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesListComponent } from './themes-list/themes-list.component';



@NgModule({
  declarations: [
    ThemesListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThemesListComponent,
  ]
})
export class ThemeModule { }
