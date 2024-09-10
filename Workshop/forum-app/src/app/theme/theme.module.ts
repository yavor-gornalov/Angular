import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { SharedModule } from "../shared/shared.module";
import { AddThemeComponent } from './add-theme/add-theme.component';
import { AllThemesComponent } from './all-themes/all-themes.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ThemeRoutingModule } from './theme-routing.module';



@NgModule({
  declarations: [
    ThemesListComponent,
    PostsListComponent,
    AddThemeComponent,
    AllThemesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemeRoutingModule
],
  exports: [
    ThemesListComponent,
  ]
})
export class ThemeModule { }
