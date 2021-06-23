import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';
import { ToastController, MenuController } from '@ionic/angular';
import { Configuration } from '../../../model/configuration';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-desk',
  templateUrl: './user-desk.page.html',
  styleUrls: ['./user-desk.page.scss'],
})
export class UserDeskPage implements OnInit {

  name: String;
  workerID: String;
  data:any;
  users: User[];
  configurations: Configuration[];

   constructor(private userService: UserService,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private router: Router,
    public toastController: ToastController,
    public menu: MenuController,
    private alertController: AlertController) {
      this.data = this.route.snapshot.paramMap.get('workerID');
    }

   ngOnInit(): void {

    this.userService.getUser(this.data).subscribe (users => {
      this.users = users;
    this.displayToast(this.users[0].name);
    });
    this.menu1();
   }

   async presentAlert(error: string) {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Caution!',
      //subHeader: 'Alert Subtitle',
      message: error,
      buttons: ['OK']
    });

    await alert.present();
  }

   menu1() {
    this.menu.enable(true, 'menu1');
  }

  obtainID(){
    localStorage.setItem('workerID', this.data);
  }

  goClock(){
    this.userService.getlocationConfig(this.data).subscribe(() =>  {
      this.router.navigateByUrl('/job-clock/'+ this.data);
   },
   error => {
       this.alertService.error(error);
       this.presentAlert(error.error.message);
   });
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
