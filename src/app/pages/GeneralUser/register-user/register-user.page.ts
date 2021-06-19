import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Admin } from '../../../model/admin';
import { AlertController } from '@ionic/angular';
import { AlertService } from '../../../services/alert.service';

import { AdminService } from '../../../services/admin.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {

  registerUserForm: FormGroup;
  submitted = false;
  company: string;
  admins: Admin[]; 

  constructor(
    private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private userService: UserService,
      private adminService: AdminService,
      private alertService: AlertService,
      private alertController: AlertController
  ) { }

  ngOnInit() {
      this.registerUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(9)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.adminService.getAdminName().subscribe(admins => {
    this.admins = admins;
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

  ionChanger($event){
   this.registerUserForm.enable();
   this.company = $event.target.value;
   //console.log($event.target.value) ;
  }

  // convenience getter for easy access to form fields
  get formControls() { return this.registerUserForm.controls; }

  submitRegisterUser() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerUserForm.invalid) {
          return;
      }

    const company = this.company;
    const name = this.registerUserForm.value.name;
    const email = this.registerUserForm.value.email;
    const phone = this.registerUserForm.value.phone;
    const password = this.registerUserForm.value.password;

    let user = {'company': company, 'name': name, 'email': email, 'phone': phone, 'password': password, 'insignias': []};
      

      this.userService.registerUser(user)
            .pipe(first())
            .subscribe(() => {
              //Llevarte una page anterior con tostada avisando de register exitoso
                    this.router.navigate(['/user']);
                },
                error => {
                  this.alertService.error(error);
                  this.presentAlert(error.error.message);    
                });

  }

}
