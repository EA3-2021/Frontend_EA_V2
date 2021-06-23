import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-update-profile-admin',
  templateUrl: './update-profile-admin.page.html',
  styleUrls: ['./update-profile-admin.page.scss'],
})
export class UpdateProfileAdminPage implements OnInit {

  data: any;
  updateForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, public adminService: AdminService,
    private route: ActivatedRoute) { this.data = this.route.snapshot.paramMap.get('companyName');}

  ngOnInit() {

    this.updateForm = this.formBuilder.group({
      cif: ['', [Validators.required, Validators.nullValidator]],
      email: ['', [Validators.required, Validators.nullValidator]],
      phone: ['', [Validators.required, Validators.nullValidator]],
      address: ['', [Validators.required, Validators.nullValidator]],
      postalCode: ['', [Validators.required, Validators.nullValidator]],
      password: ['', [Validators.required, Validators.nullValidator]]

    });

  }

  get formControls(){ return this.updateForm.controls;}

  submitUpdate(): void {  

    const name = this.updateForm.value.name;
    const cif = this.updateForm.value.cif;
    const email = this.updateForm.value.email;
    const phone = this.updateForm.value.phone;
    const address = this.updateForm.value.address;
    const postalCode = this.updateForm.value.postalCode;
    const password = this.updateForm.value.password;
    const token = this.updateForm.value.token;


    let admin = {'name':name, 'cif': cif, 'mail': email, 'phone': phone, 'password': password, 'address':address, 'postalCode': postalCode, 'token':token};

    this.adminService.updateAdminProfile(this.data,admin).subscribe(() => { 
    this.router.navigateByUrl('/profile-admin/'+ this.data).then(() => {
    window.location.reload(); })
    });

  }



}
