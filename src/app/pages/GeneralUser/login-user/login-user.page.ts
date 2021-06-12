import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../../services/alert.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.page.html',
  styleUrls: ['./login-user.page.scss'],
})

export class LoginUserPage implements OnInit {
  
  loginUserForm: FormGroup;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService,
      private alertController: AlertController
  ) {}

  ngOnInit() {
      this.loginUserForm = this.formBuilder.group({
          workerID: ['', [Validators.required, Validators.minLength(6)]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
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

  // convenience getter for easy access to form fields
  get formControls() { return this.loginUserForm.controls; }

  submitLoginUser() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.loginUserForm.invalid) {
          return;
      }

      this.authenticationService.loginUser(this.formControls.workerID.value, this.formControls.password.value)
          .pipe(first())
          .subscribe(() =>  {
                 this.router.navigateByUrl('/user-desk/'+ this.formControls.workerID.value);
              },
              error => {
                  this.alertService.error(error);
                  this.presentAlert(error.error.message);
              });
  }
  user() {
    this.router.navigateByUrl('/user');
  }

  goPassword(){
    this.router.navigateByUrl('/forgot-password');
  }
}
