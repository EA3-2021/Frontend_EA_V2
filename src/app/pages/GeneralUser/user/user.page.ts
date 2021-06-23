import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app'
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user = null;
  temp_user = null;

  constructor(private router: Router, private userService: UserService, private authenticationService: AuthenticationService, public fireAuth: AngularFireAuth) {
    
    this.fireAuth.authState.subscribe((user) => {
      this.user = user ? user : null;

      if (user != null) {

        console.log(user["email"]);
        console.log(user);

        this.userService.checkUser(user["email"]).subscribe ( resp => {

          this.temp_user = resp[0];

          this.authenticationService.loginUserGoogle(this.temp_user.workerID, this.temp_user.password)
          .subscribe(() =>  {
                 this.router.navigateByUrl('/user-desk/'+ this.temp_user.workerID);
              },
              error => {
                console.log(this.temp_user);
                console.log(error);
                this.router.navigateByUrl('/register-user/' + this.userService.checkUser(user["email"]));
              });
            }, error => {
              console.log(this.temp_user);
              console.log(error);
              this.router.navigateByUrl('/register-user/' + this.userService.checkUser(user["email"]));
            });

      }

    });
    
  }

  ngOnInit() {
  }

  login() {
    this.fireAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }

}