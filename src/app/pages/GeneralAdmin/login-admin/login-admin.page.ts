import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../../../services/alert.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {
  loginAdminForm: FormGroup;
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
      this.loginAdminForm = this.formBuilder.group({
          name: ['', Validators.required],
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
  get formControls() { return this.loginAdminForm.controls; }

  submitLoginAdmin() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.loginAdminForm.invalid) {
          return;
      }

      this.authenticationService.loginAdmin(this.formControls.name.value, this.formControls.password.value)
          .pipe(first())
          .subscribe(() =>  {        
                 this.router.navigateByUrl('/admin-desk/'+ this.formControls.name.value);
              },
              error => {
                  this.alertService.error(error);
                  this.presentAlert(error.error.message);
              });
      
  }
  admin() {
    this.router.navigateByUrl('/admin');
  }

  goPassword(){
    this.router.navigateByUrl('/forgot-password-admin');
  }
}
