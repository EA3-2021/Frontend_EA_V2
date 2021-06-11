import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-desk',
  templateUrl: './admin-desk.page.html',
  styleUrls: ['./admin-desk.page.scss'],
})
export class AdminDeskPage implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute,) { 
    this.data = this.route.snapshot.paramMap.get('companyName');
  }

  ngOnInit() {}
}
