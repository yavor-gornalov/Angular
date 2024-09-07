import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts: any[] = [];

  constructor(private api:ApiService) {}

  ngOnInit(): void {
    this.api.getPosts().subscribe(posts => {console.log(posts);});
  }
}
