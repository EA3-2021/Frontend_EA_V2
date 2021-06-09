import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-user-desk',
  templateUrl: './user-desk.page.html',
  styleUrls: ['./user-desk.page.scss'],
})
export class UserDeskPage implements OnInit {

  latitude: any = 0; //latitude
  longitude: any = 0; //longitude*/

   constructor() { }

   ngOnInit(): void {
    const coordinates = Geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
   }

}
