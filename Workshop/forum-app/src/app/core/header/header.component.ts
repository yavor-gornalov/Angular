import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public isLoggedIn = false;
  public loginBntText = 'Login';
  
  switchLoggedIn() {
    this.isLoggedIn = !this.isLoggedIn;
    this.loginBntText = this.isLoggedIn? 'Logout' : 'Login';
  }

}
