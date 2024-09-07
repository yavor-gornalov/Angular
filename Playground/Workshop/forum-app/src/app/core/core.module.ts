import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PostsListComponent } from './main/posts-list/posts-list.component';
import { ThemesListComponent } from './main/themes-list/themes-list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    PostsListComponent,
    ThemesListComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, MainComponent, FooterComponent],
})
export class CoreModule {}
