import { Component, Input } from '@angular/core';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  private symbols: number = 250;
  @Input() article!: Article;
  @Input() articleDescription!: string;
  descriptionToShow: string;
  articleDescriptionLength: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  isImageShown: boolean = false;
  imageBtnTitle: string = 'Show Image';

  constructor() {
    this.articleDescriptionLength = 0;
    this.descriptionToShow = '';
  }

  readMore() {
    this.articleDescriptionLength = this.symbols;

    if (this.articleDescriptionLength >= this.articleDescription.length) {
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    } else {
      this.descriptionToShow = this.articleDescription.substring(0, this.articleDescriptionLength);
    }
  }

  toggleImage() {
    this.isImageShown = !this.isImageShown;
    this.imageBtnTitle = this.imageBtnTitle === 'Show Image' ? 'Hide Image' : 'Show Image';
  }

  hideDescription() {
    this.articleDescriptionLength = 0;
    this.descriptionToShow = '';
    this.showReadMoreBtn = true;
    this.showHideBtn = false;
  }
}
