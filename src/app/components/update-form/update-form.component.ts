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

  updateForm: FormGroup;
  _id;
  
  constructor(public teamService: TeamService, public userService: UserService, private router: Router, 
              private formBuilder: FormBuilder, private route: ActivatedRoute){ }

  ngOnInit(): void {
    
    this._id = this.route.snapshot.paramMap.get('_id');
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

    var id = JSON.parse(localStorage.getItem("data"));

    const name = this.updateForm.value.name;
    const email = this.updateForm.value.email;
    const phone = this.updateForm.value.phone;
    const password = this.updateForm.value.password;
    const token = this.updateForm.value.token;
    let user = {'name': name, 'email': email, 'phone': phone, 'password': password, 'token': token};

    this.userService.updateUser(id, user).subscribe(() => { this.router.navigateByUrl('/users');});
  }

}
