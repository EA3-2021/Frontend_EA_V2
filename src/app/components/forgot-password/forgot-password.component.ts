import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

  passwordForm: FormGroup;
  isSubmitted = false;

  constructor(private router: Router,private formBuilder: FormBuilder,
    public userService: UserService,public adminService: AdminService){}

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.nullValidator]]
    });

  }

  goLogin(){
    this.router.navigateByUrl('/login-admin')
  }

  submitPassword(): void {
    this.isSubmitted = true;
    if(this.passwordForm.invalid){
      return;
    }
    console.log('ha entrado en el submit');
    
    this.userService.getPasswordUser(this.passwordForm.value)
    .subscribe(() => {
      this.router.navigateByUrl('/login-user');
      console.log('ha entrado en user');
    });

    this.adminService.getPasswordAdmin(this.passwordForm.value)
    .subscribe(() => {
      this.router.navigateByUrl('/login-admin');
      console.log('ha entrado en admin');
    });

  }
  

}
