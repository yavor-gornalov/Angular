import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Post } from './types/post';
import { Theme } from './types/theme';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts(limit?: number) {
    const { apiUrl } = environment;
    let url = apiUrl + '/posts';
    if (limit) {
      url += `?limit=${limit}`;
    }
    return this.http.get<Post[]>(url);
  }

  getThemes() {
    const { apiUrl } = environment;
    let url = apiUrl + '/themes';
    return this.http.get<Theme[]>(url);
  }
}