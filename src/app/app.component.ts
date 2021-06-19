import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  id: string;
  company: string;

  constructor(private route: ActivatedRoute,
    private router: Router) {
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
    this.router.navigateByUrl('/profile/' + this.id);
  }

  //Que haga funcion de deslog
  logout(){
    this.router.navigateByUrl('/profile/' + this.id);
  }

  home1(){
    this.router.navigateByUrl('/admin-desk/' + this.company);
  }

  profile1(){
    this.router.navigateByUrl('/profile/' + this.company);
  }

  //Cambiar ruta
  settings1(){
    this.router.navigateByUrl('/profile/' + this.company);
  }

  //Que haga funcion de deslog
  logout1(){
    this.router.navigateByUrl('/profile/' + this.company);
  }
}
