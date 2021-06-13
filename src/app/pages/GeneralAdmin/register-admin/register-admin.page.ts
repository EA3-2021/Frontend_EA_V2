import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AdminService } from '../../../services/admin.service';

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
      private adminService: AdminService

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
                });
  }
  admin() {
    this.router.navigateByUrl('/admin');
  }
}
