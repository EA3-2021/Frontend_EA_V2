import { UserService } from '../../services/user.service';
import { TeamService } from '../../services/team.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  isSubmitted = false;
  teamName;

  constructor(public teamService: TeamService, public userService: UserService, private router: Router,
              private formBuilder: FormBuilder, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.teamName = this.route.snapshot.paramMap.get('teamName');
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.nullValidator]],
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
    const name = this.userForm.value.name;
    const email = this.userForm.value.email;
    const phone = this.userForm.value.phone;
    const password = this.userForm.value.password;
    const token = this.userForm.value.token;
    let user = {'name': name, 'email': email, 'phone': phone, 'password': password, 'token': token};

    if(this.teamName==null) {
      this.userService.newUser(user)
      .subscribe(() => {
        this.router.navigateByUrl('/users');
      });
    } else {
      this.teamService.addUser(user, this.teamName)
      .subscribe(() => {
        this.router.navigateByUrl('/teams');
      })
    }
  }
}
