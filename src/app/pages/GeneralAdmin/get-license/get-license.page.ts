import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LicenseService } from '../../../services/license.service';

@Component({
  selector: 'app-license',
  templateUrl: './get-license.page.html',
  styleUrls: ['./get-license.page.scss'],
})
export class GetLicensePage implements OnInit {

  emailForm: FormGroup;
  submitted = false;
  
  constructor(
    public emailBuilder: FormBuilder,
    private router: Router,
    public licenseService: LicenseService,
  ) { }

  ngOnInit() {
    this.emailForm = this.emailBuilder.group({
      email: ['', Validators.required],
  });
  }

    // convenience getter for easy access to form fields
    get formControls() { return this.emailForm.controls; }

    submitEmail(): void {
  
      if (this.submitted == true) {
        return;
      }

      this.submitted = true;
  
      if(this.emailForm.invalid){
        return;
      }
  
      const email = this.emailForm.value.email;
  
      this.licenseService.getLicense(email)
        .subscribe(() => {
          
          this.submitted = false;
          this.router.navigateByUrl('/license')

      },
      (error: any) => {
        this.submitted = false;
          console.log(error);
      });
    }

}
