import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AdminService } from '../../../services/admin.service';
import { AlertController } from '@ionic/angular';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.page.html',
  styleUrls: ['./register-admin.page.scss'],
})
export class RegisterAdminPage implements OnInit {

  registerAdminForm: FormGroup;
  submitted = false;

  constructor(

      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private adminService: AdminService,
      private alertService: AlertService,
      private alertController: AlertController
  ) { }

  ngOnInit() {
          this.registerAdminForm = this.formBuilder.group({
          name: ['', Validators.required],
          cif: ['', [Validators.required, Validators.minLength(9)]],
          email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
          phone: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(9)]],
          address: ['', Validators.required],
          postalCode: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  async presentAlert(error: string) {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Try again!',
      //subHeader: 'Alert Subtitle',
      message: error,
      buttons: ['OK']
    });

    await alert.present();
  }

  // convenience getter for easy access to form fields
  get formControls() { return this.registerAdminForm.controls; }

  submitRegisterAdmin() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerAdminForm.invalid) {
          return;
      }

      this.adminService.registerAdmin(this.registerAdminForm.value)
            .pipe(first())
            .subscribe(() => {
                    this.router.navigate(['/login-admin']);
                },
                error => {
                  this.alertService.error(error);
                  this.presentAlert(error.error.message);    
                });
  }
  admin() {
    this.router.navigateByUrl('/admin');
  }
}
