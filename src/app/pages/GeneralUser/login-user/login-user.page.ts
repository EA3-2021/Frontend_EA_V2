import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../../services/alert.service';
import { AuthenticationService } from '../../../services/authentication.service';

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
      private alertService: AlertService
  ) {}

  ngOnInit() {
      this.loginUserForm = this.formBuilder.group({
          name: ['', Validators.required],
          password: ['', Validators.required]
      });
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

      this.authenticationService.loginUser(this.formControls.name.value, this.formControls.password.value)
          .pipe(first())
          .subscribe(() =>  {
                 this.router.navigateByUrl('/user-desk');
              },
              error => {
                  this.alertService.error(error);
              });
  }
  user() {
    this.router.navigateByUrl('/user');
  }
}
