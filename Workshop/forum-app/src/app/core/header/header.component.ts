import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get firstName(): string {
    return this.userService.getUser?.username || '';
  }

  logout() {
    this.userService.logout();
  }
}
