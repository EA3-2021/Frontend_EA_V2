import { UserService } from '../../services/user.service';
import { TeamService } from '../../services/team.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss'],
})
export class UpdateFormComponent implements OnInit {

  data: any;
  data1: any;
  updateForm: FormGroup;
  
  constructor(public teamService: TeamService, public userService: UserService, private router: Router, 
              private formBuilder: FormBuilder, private route: ActivatedRoute)
              { this.data = this.route.snapshot.paramMap.get('compayName');
              this.data1 = this.route.snapshot.paramMap.get('id');}

  ngOnInit(): void {

    this.updateForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.nullValidator]],
      email: ['', [Validators.required, Validators.nullValidator]],
      phone: ['', [Validators.required, Validators.nullValidator]],
      password: ['', [Validators.required, Validators.nullValidator]],
    });
  }
  get formControls(){
    return this.updateForm.controls;
  }

  submitUpdate(): void {  

    const company = this.data;
    console.log(this.data);
    console.log(this.data1);
    const name = this.updateForm.value.name;
    const email = this.updateForm.value.email;
    const phone = this.updateForm.value.phone;
    const password = this.updateForm.value.password;
    const  insignias = this.updateForm.value.insignias;
    let user = {'company': company, 'name': name, 'email': email, 'phone': phone, 'password': password, 'insignias': insignias};

    this.userService.updateUser(this.data1, user).subscribe(() => { 
      this.router.navigateByUrl('/users/'+ this.data).then(() => {
      window.location.reload();
      })
    });
  }
  
}
