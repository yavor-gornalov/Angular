import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PostsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PostsListComponent
  ]
})
export class PostModule { }
