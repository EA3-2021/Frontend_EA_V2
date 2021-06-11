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

  acceptRegisterRequest(workerID:string,email:string) {
    this.userService.acceptRegisterRequest(workerID,email).subscribe (data => {
      window.location.reload();
    });
  }

  refuseRegisterRequest(workerID: string) {
    this.userService.refuseRegisterRequest(workerID).subscribe (data => {
      window.location.reload();
    });
  }

}
