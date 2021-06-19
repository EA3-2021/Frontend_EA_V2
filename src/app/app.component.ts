import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  id: string;

  constructor(private route: ActivatedRoute,
    private router: Router) {
    this.id = localStorage.getItem('workerID');
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
}
