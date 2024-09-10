import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts: Post[] | null = [];
  isLoading: boolean = true;
  temp:number=0;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;

        setTimeout(() => {
          this.isLoading = false;
        }, 1500);

      },
      error: (error) => {
        this.isLoading = false;
        console.error(error);
      },
    });
  }
}
