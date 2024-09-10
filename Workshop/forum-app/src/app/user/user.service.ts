import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private USER_KEY: string = '[user]';
  private user: User | null = null;

  constructor() {
    try {
      const user = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(user);
      console.log('Logged in!');
    } catch (error) {
      console.log('Not logged in!');
      this.user = null;
    }
  }

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  get getUser(): User | null {
    return this.user;
  }


  login() {
    this.user = {
      _id: '5fa64b162183ce1728ff371d',
      themes: ['5fa64b162183ce1728ff371d'],
      posts: ['5fa64b162183ce1728ff371d'],
      tel: '+359885333885',
      email: 'johny@gmail.com',
      username: 'Johny',
      password: '$2b$05$v.SdXlUSsS4K41HUbwctxeauYXUvaPhkAgFRmRBIXDH7HbYQy2mvC',
      created_at: '2020-11-07T07:21:58.255+00:00',
      updatedAt: '2020-11-07T07:23:27.029+00:00',
      __v: 0,
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    localStorage.removeItem(this.USER_KEY);
    this.user = null;
  }
}
