import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-registration-request',
  templateUrl: './registration-request.page.html',
  styleUrls: ['./registration-request.page.scss'],
})
export class RegistrationRequestPage implements OnInit {

  users: User[];

  constructor(public userService: UserService) { }

  ngOnInit() {

    this.userService.getRegisterRequest().subscribe (users => {
      this.users = users;
    });

  }

  /*denyUser(name: string) {
    this.userService.deleteUser(name).subscribe (data => {
      window.location.reload();
    });
  }

  acceptUser(_id: string) {
    this.userService.deleteUser(name).subscribe (data => {
      window.location.reload();
    });
  }*/

}
