import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LicenseService } from '../../../services/license.service';
import { AlertService } from '../../../services/alert.service';

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
  ) { }

  ngOnInit() {
    this.licenseForm = this.formBuilder.group({
      licenseCode: ['', Validators.required],
  });
  }

    // convenience getter for easy access to form fields
    get formControls() { return this.licenseForm.controls; }

    submitLicense(): void {
  
      this.submitted = true;
  
      if(this.licenseForm.invalid){
        return;
      }
  
      const licenseCode = this.licenseForm.value.licenseCode;
  
      this.licenseService.checkLicense(licenseCode)
        .subscribe( res => { this.router.navigateByUrl('/register-admin');
      });
    }
  
    obtainLicense() {
      this.router.navigateByUrl('/obtainLicense');
    }
  
    admin() {
      this.router.navigateByUrl('/admin');
    }
}
