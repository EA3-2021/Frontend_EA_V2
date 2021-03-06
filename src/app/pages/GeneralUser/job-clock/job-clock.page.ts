import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';
import { first } from 'rxjs/operators';
import { format } from "date-fns";
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-job-clock',
  templateUrl: './job-clock.page.html',
  styleUrls: ['./job-clock.page.scss'],
})
export class JobClockPage implements OnInit {

  codeForm: FormGroup;
  submitted = false;
  data: any;
  latitude: any = 0; //latitude
  longitude: any = 0; //longitude*/

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private alertController: AlertController,
    public menu: MenuController,
    public formBuilder: FormBuilder) {
       this.data = this.route.snapshot.paramMap.get('workerID');

    }

  ngOnInit() {
    this.codeForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.minLength(12)]]
    });

    this.menu1();

    Geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      let location = {'latitude': this.latitude, 'longitude': this.longitude}

      console.log(location);

      this.userService.saveLocation(location).subscribe(() => {});

    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  menu1() {
    this.menu.enable(true, 'menu1');
  }

  obtainID(){
    localStorage.setItem('workerID', this.data);
  }

  /*clockIn(){
        this.userService.clockIn(this.data).pipe(first()).subscribe(() => {
                  this.router.navigate(['/user-desk/'+ this.data]);
              });
  }*/
  clockOut(){
        this.userService.clockOut(this.data).pipe(first()).subscribe(() => {
                  this.router.navigate(['/user-desk/'+ this.data]);
              });
  }

  async presentAlert(error: string) {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Try again!',
      message: error,
      buttons: ['OK']
    });

    await alert.present();
  }

  // convenience getter for easy access to form fields
  get formControls() { return this.codeForm.controls; }

  submitCode(): void {

    this.submitted = true;

    if(this.codeForm.invalid){
      return;
    }

    let code = this.codeForm.value.code;

    this.userService.clockIn(this.data, code).pipe(first()).subscribe(() => {
      this.router.navigate(['/user-desk/'+ this.data]);
  },
  error => {
      this.alertService.error(error);
      this.presentAlert(error.error.message);
  });

    /*this.userService.useLicense(code)
      .subscribe(() => {
        
        this.submitted = false;
        this.router.navigateByUrl('/user-desk/' + this.data)

    },
    error => {
        this.alertService.error(error);
        this.presentAlert();
    });*/
  }


}
