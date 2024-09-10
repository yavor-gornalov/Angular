import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private userService: UserService;

  constructor(userService: UserService) { 
    this.userService = userService;
  }

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  login(ev: Event, email: string, password: string) {
    ev.preventDefault();
    console.log(email, password);
    this.userService.login();
  }

  logout() {
    this.userService.logout();
  }
}
