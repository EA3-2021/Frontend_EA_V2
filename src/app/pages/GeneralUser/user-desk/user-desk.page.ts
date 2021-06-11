import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-user-desk',
  templateUrl: './user-desk.page.html',
  styleUrls: ['./user-desk.page.scss'],
})
export class UserDeskPage implements OnInit {

  latitude: any = 0; //latitude
  longitude: any = 0; //longitude*/
  name: String;
  workerID: String;

   constructor(
     private userService: UserService, 
     private alertService: AlertService,
    ) 
    { }

   ngOnInit(): void {
    Geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      let location = {'latitude': this.latitude, 'longitude': this.longitude}

      this.userService.saveLocation(location).subscribe(() => {});

    }).catch((error) => {
      console.log('Error getting location', error);
    });

    this.loadUserData();

   }

  loadUserData() {

    this.userService.getUser(JSON.parse(localStorage.getItem('currentUser'))["_id"])
      .subscribe(data => {
        this.name = data[0]["name"]
        this.workerID = data[0]["workerID"]
      },
        error => {
          this.alertService.error(error);
        });
  }

}
