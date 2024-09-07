import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] | null= [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getThemes().subscribe((themes) => {
      this.themes = themes;
    });
    }
}
