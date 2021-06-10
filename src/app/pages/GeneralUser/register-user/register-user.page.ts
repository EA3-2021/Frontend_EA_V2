import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {

  registerUserForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private userService: UserService
  ) { }

  ngOnInit() {
    this.registerUserForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', Validators.required]
  });
  }

  ionChanger(){
   this.registerUserForm.enable();
  }

  // convenience getter for easy access to form fields
  get formControls() { return this.registerUserForm.controls; }

  submitRegisterUser() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerUserForm.invalid) {
          return;
      }

      this.userService.registerUser(this.registerUserForm.value)
            .pipe(first())
            .subscribe(() => {
              //Llevarte una page anterior con tostada avisando de register exitoso
                    this.router.navigate(['/login-user']);
                });
  }

}
