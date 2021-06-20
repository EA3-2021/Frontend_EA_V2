import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { TeamService } from '../../../services/team.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {

  data: any;
  updateForm: FormGroup;

  constructor(public teamService: TeamService, public userService: UserService, private router: Router, 
    private formBuilder: FormBuilder, private route: ActivatedRoute)
    { this.data = this.route.snapshot.paramMap.get('workerID');}

  ngOnInit() {

    this.updateForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.nullValidator]],
      email: ['', [Validators.required, Validators.nullValidator]],
      phone: ['', [Validators.required, Validators.nullValidator]],
      password: ['', [Validators.required, Validators.nullValidator]],
    });

  }

  get formControls(){ return this.updateForm.controls;}

  submitUpdate(): void {  

    const company = this.updateForm.value.company;
    const name = this.updateForm.value.name;
    const email = this.updateForm.value.email;
    const phone = this.updateForm.value.phone;
    const password = this.updateForm.value.password;
    const  insignias = this.updateForm.value.insignias;
    let user = {'company': company, 'name': name, 'email': email, 'phone': phone, 'password': password, 'insignias': insignias};

    this.userService.updateUserProfile(this.data,user).subscribe(() => { 
      this.router.navigateByUrl('/profile/'+ this.data).then(() => {
      window.location.reload();
      })
    });
  }

}







