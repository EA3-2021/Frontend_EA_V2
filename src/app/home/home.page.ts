import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router ) { }

  ngOnInit(): void {

    if (JSON.parse(localStorage.getItem('currentUser'))) {

      if (JSON.parse(localStorage.getItem('currentUser'))['admin']) {

        this.router.navigateByUrl('/admin-desk/' + localStorage.getItem('companyName'));

      } else {

        this.router.navigateByUrl('/user-desk/' + JSON.parse(localStorage.getItem('currentUser'))["workerID"]);

      }

    }

  }

}

