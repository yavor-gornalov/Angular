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
  isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getThemes().subscribe({
      next: (themes) => {
        this.themes = themes;

        setTimeout(() => {
          this.isLoading = false;
        }, 1000);

      },
      error: (error) => {
        this.isLoading = false;
        console.error(error);
      }
    });
    }
}
