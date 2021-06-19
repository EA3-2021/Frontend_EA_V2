import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  id: string;
  company: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {
    this.id = localStorage.getItem('workerID');
    this.company = localStorage.getItem('companyName');
  }

  home(){
    this.router.navigateByUrl('/user-desk/' + this.id);
  }

  profile(){
    this.router.navigateByUrl('/profile/' + this.id);
  }

  //Cambiar ruta
  settings(){
    this.router.navigateByUrl('/setting/' + this.id);
  }

  //Que haga funcion de deslog
  logout(){
    this.authenticationService.logout().subscribe(() => { 
      this.router.navigateByUrl('/login-user');
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
      this.router.navigateByUrl('login-user');
    });
  }
}
