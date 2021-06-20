import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LicenseService } from '../../../services/license.service';
import { AlertService } from '../../../services/alert.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-license',
  templateUrl: './license.page.html',
  styleUrls: ['./license.page.scss'],
})
export class LicensePage implements OnInit {

  licenseForm: FormGroup;
  submitted = false;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public licenseService: LicenseService,
    private alertService: AlertService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.licenseForm = this.formBuilder.group({
      licenseCode: ['', [Validators.required, Validators.minLength(12)]],
  });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Incorrect code, try again!',
      buttons: ['OK']
    });

    await alert.present();
  }

    // convenience getter for easy access to form fields
    get formControls() { return this.licenseForm.controls; }

    submitLicense(): void {

      this.submitted = true;
  
      if(this.licenseForm.invalid){
        return;
      }
  
      const licenseCode = this.licenseForm.value.licenseCode;
  
      this.licenseService.useLicense(licenseCode)
        .subscribe(() => {
          
          this.submitted = false;
          this.router.navigateByUrl('/register-admin')

      },
      error => {
          this.alertService.error(error);
          this.presentAlert();
      });
    }
  
    obtainLicense() {
      this.router.navigateByUrl('/obtainLicense');
    }
  
}
