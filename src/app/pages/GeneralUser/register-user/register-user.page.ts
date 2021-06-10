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

  registerAdminForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private adminService: UserService
  ) { }

  ngOnInit() {
    this.registerAdminForm = this.formBuilder.group({
    name: ['', Validators.required],
    cif: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    postalCode: ['', Validators.required],
    password: ['', Validators.required]
  });
  }

  ionChanger(){
   this.registerAdminForm.enable();
  }


}
