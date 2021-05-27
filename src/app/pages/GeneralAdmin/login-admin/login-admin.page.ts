import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../../../services/alert.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})

export class LoginAdminPage implements OnInit {


  loginAdminForm: FormGroup;
  submitted = false;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService
  ) { }

  ngOnInit() {}

  goPassword(){
    this.router.navigateByUrl('/forgot-password');
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
                 this.router.navigateByUrl('/adminDesk');
              },
              error => {
                  this.alertService.error(error);
              });
  }
  admin() {
    this.router.navigateByUrl('/admin');
  }
}
