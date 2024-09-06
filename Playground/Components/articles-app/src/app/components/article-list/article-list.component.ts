import { Component } from '@angular/core';
import { ArticleData } from 'src/app/data/data';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  articles: Article[] = [];

  constructor() { }

  ngOnInit() {
    this.articles = new ArticleData().getData();
  }
}
