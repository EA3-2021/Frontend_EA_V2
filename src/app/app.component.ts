import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { Configuration } from 'src/app/model/configuration';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  id: string;
  company: string;
  public notification:boolean = false;
  public private:boolean = false;
  public authentication:boolean = false;
  public location:boolean = false;
  configurations: Configuration[];

  constructor(private route: ActivatedRoute, 
    public fireAuth: AngularFireAuth,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService) {

  if (JSON.parse(localStorage.getItem('currentUser')) != null) {
    this.id = JSON.parse(localStorage.getItem('currentUser'))["workerID"];
  }
    this.company = localStorage.getItem('companyName');
  }

  home(){
    this.router.navigateByUrl('/user-desk/' + this.id);
  }

  profile(){
    this.router.navigateByUrl('/profile/' + this.id);
    console.log(this.id);
  }

  //Cambiar ruta
  settings(){
    this.userService.getCurrentConfiguration(this.id).subscribe (configurations => {
      this.configurations = configurations;
      if (this.configurations.length === 0){
        let configuration = {'workerID': this.id, 'notification': this.notification, 'private': this.private, 'authentication': this.authentication, 'location': this.location}
        this.userService.createConfiguration(configuration).subscribe(() => {this.router.navigateByUrl('/setting/' + this.id);});
      }else{
      this.notification = this.configurations[0].notification;
      this.private = this.configurations[0].private;
      this.authentication = this.configurations[0].authentication;
      this.location = this.configurations[0].location;
      this.router.navigateByUrl('/setting/' + this.id);
      }   
    });
  }

  //Que haga funcion de deslog
  logout(){
    this.authenticationService.logout().subscribe(() => { 
      this.router.navigateByUrl('/home');
    });
  }

  home1(){
    this.router.navigateByUrl('/admin-desk/' + this.company);
  }

  profile1(){
    this.router.navigateByUrl('/profile-admin/' + this.company);
  }

  settings1(){
    this.router.navigateByUrl('/configuration/' + this.company);
  }

  //Que haga funcion de deslog
  logout1(){
    this.authenticationService.logout().subscribe(() => { 
      this.router.navigateByUrl('/home');
      this.fireAuth.signOut();
    });
    localStorage.removeItem('companyName');
  }
}
