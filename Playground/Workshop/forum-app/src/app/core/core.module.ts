import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { MainComponent } from './container/main/main.component';
import { AsideComponent } from './container/aside/aside.component';
import { ThemesListComponent } from './container/main/themes-list/themes-list.component';
import { ThemeItemComponent } from './container/main/theme-item/theme-item.component';
import { PostsListComponent } from './container/aside/posts-list/posts-list.component';
import { PostItemComponent } from './container/aside/post-item/post-item.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    PostsListComponent,
    AsideComponent,
    ThemesListComponent,
    FooterComponent,
    ContainerComponent,
    PostItemComponent,
    ThemeItemComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent, 
    MainComponent, 
    AsideComponent,
    FooterComponent],
})
export class CoreModule {}
