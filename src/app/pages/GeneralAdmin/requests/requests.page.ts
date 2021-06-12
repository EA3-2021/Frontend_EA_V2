import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

  data:any;
  constructor(private route: ActivatedRoute) {this.data = this.route.snapshot.paramMap.get('companyName'); }

  ngOnInit() {
  }

}
