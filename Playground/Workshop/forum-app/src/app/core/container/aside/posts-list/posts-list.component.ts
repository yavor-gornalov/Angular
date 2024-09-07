import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts: Post[] | null = [];

  constructor(private api:ApiService) {}

  ngOnInit(): void {
    this.api.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }
}
