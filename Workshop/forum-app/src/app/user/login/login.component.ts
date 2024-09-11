import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private userService: UserService;
  private router: Router;

  constructor(userService: UserService, router: Router) {
    this.userService = userService;
    this.router = router;
  }

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  login(form: NgForm) {
    // ev.preventDefault();


    if (form.invalid) {
      return;
    }

    this.userService.login();
    this.router.navigate(['/home']);
  }

  logout() {
    this.userService.logout();
  }
}
