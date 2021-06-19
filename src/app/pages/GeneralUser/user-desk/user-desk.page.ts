import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';
import { ToastController, MenuController } from '@ionic/angular';

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
  data:any;
  users: User[];

   constructor(private userService: UserService,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private router: Router,
    public toastController: ToastController,
    public menu: MenuController) {
      this.data = this.route.snapshot.paramMap.get('workerID');

    }

   ngOnInit(): void {

    Geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      let location = {'latitude': this.latitude, 'longitude': this.longitude}

      this.userService.saveLocation(location).subscribe(() => {});

    }).catch((error) => {
      console.log('Error getting location', error);
    });

    this.userService.getUser(this.data).subscribe (users => {
      this.users = users;

      this.displayToast(this.users[0].name);

    });

    this.menu1();

   }

   menu1() {
    this.menu.enable(true, 'menu1');
  }

   displayToast(name1: string) {
    this.toastController.create({
      header: 'Welcome '+ name1 + '!',
      position: 'top',
      //color: 'primary',
      cssClass: 'toast',
      duration: 2000,
      buttons: [
       {
          side: 'end',
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('');
          }
        }
      ]
    }).then((toast) => {
      toast.present();
    });
  }

}
