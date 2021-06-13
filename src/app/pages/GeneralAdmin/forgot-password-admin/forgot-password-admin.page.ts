import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { AlertService } from '../../../services/alert.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password-admin',
  templateUrl: './forgot-password-admin.page.html',
  styleUrls: ['./forgot-password-admin.page.scss'],
})
export class ForgotPasswordAdminPage implements OnInit {

  passwordForm: FormGroup;
  submitted = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    public adminService: AdminService,
    private alertService: AlertService,
    private alertController: AlertController) { }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.pattern]
    ]
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
  get formControls() { return this.passwordForm.controls; }

  submitPassword() {
    this.submitted = true;

    if(this.passwordForm.invalid){
      return;
    }

    this.adminService.getPasswordAdmin(this.passwordForm.value.email)
    .subscribe(() => {
      this.router.navigateByUrl('/login-admin');
    },
    error => {
        this.alertService.error(error);
        this.presentAlert(error.error.message);
    });

  }

  goLogin(){
    this.router.navigateByUrl('/login-admin')
  }


}
