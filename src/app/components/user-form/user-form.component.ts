import { AdminService } from '../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  data: any;
  userForm: FormGroup;
  isSubmitted = false;

  constructor(public adminService: AdminService, 
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder){this.data = this.route.snapshot.paramMap.get('companyName');}
  
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.nullValidator]],
      phone: ['', [Validators.required, Validators.nullValidator]],
      password: ['', [Validators.required, Validators.nullValidator]]
    });
  }
  get formControls(){
    return this.userForm.controls;
  }

  submitUser(): void {
    this.isSubmitted = true;
    if(this.userForm.invalid){
      return;
    }
    
    const company = this.data;
    const name = this.userForm.value.name;
    const email = this.userForm.value.email;
    const phone = this.userForm.value.phone;
    const password = this.userForm.value.password;

    let user = {'company': company, 'name': name, 'email': email, 'phone': phone, 'password': password, 'insignias': []};

    this.adminService.newUser(user)
      .subscribe(() => {
        this.router.navigateByUrl('/users/'+this.data);
      });
  }
  
}
