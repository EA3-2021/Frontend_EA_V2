import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-desk',
  templateUrl: './user-desk.page.html',
  styleUrls: ['./user-desk.page.scss'],
})
export class UserDeskPage implements OnInit {

  latitude: any = 0; //latitude
  longitude: any = 0; //longitude*/

   constructor(private userService: UserService) { }

   ngOnInit(): void {
    Geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      let location = {'latitude': this.latitude, 'longitude': this.longitude}

      this.userService.saveLocation(location).subscribe(() => {});

    }).catch((error) => {
      console.log('Error getting location', error);
    });

   }
}
