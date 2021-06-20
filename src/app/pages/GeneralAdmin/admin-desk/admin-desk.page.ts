import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-admin-desk',
  templateUrl: './admin-desk.page.html',
  styleUrls: ['./admin-desk.page.scss'],
})
export class AdminDeskPage implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute,
    public menu: MenuController) { 
    this.data = this.route.snapshot.paramMap.get('companyName');
  }

  ngOnInit() {
    this.menu2();
  }

  menu2() {
    this.menu.enable(true, 'menu2');
  }

  obtainCompany(){
    localStorage.setItem('companyName', this.data);
  }
}
