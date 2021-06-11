import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../services/alert.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  name: string;
  workerID: string;
  email: string;
  phone: string;
  insignias: Array<String>;

  constructor(
    private userService: UserService,
    private alertService: AlertService,
  ) {
  }

  ngOnInit(): void {
    this.loadProfile()
  }

  loadProfile() {

    this.userService.getUser(JSON.parse(localStorage.getItem('currentUser'))["_id"])
      .subscribe(data => {
        this.name = data[0]["name"]
        this.email = data[0]["email"]
        this.phone = data[0]["phone"]
        this.workerID = data[0]["workerID"]
        this.insignias = data[0]["insignias"];
      },
        error => {
          this.alertService.error(error);
        });
  }


}
