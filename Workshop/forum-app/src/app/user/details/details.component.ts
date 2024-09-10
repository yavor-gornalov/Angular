import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(private userService: UserService) {}

  get username() {
    return this.userService.getUser?.username || '';
  }

  get email() {
    return this.userService.getUser?.email || '';
  }

  get phone() {
    return this.userService.getUser?.tel || '';
  }


}
