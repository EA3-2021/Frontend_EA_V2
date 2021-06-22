import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../../../model/request';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-holiday-pending',
  templateUrl: './holiday-pending.page.html',
  styleUrls: ['./holiday-pending.page.scss'],
})
export class HolidayPendingPage implements OnInit {

  requests: Request[];
  data:any;
  constructor(public adminService: AdminService,private route: ActivatedRoute) {this.data = this.route.snapshot.paramMap.get('companyName');  }

  ngOnInit() {

    this.adminService.getHolidayPending(this.data).subscribe (requests => {
      this.requests = requests;
    });
  }


  acceptHoliday(id: string) {
    this.adminService.acceptHoliday(id).subscribe (data => {
      window.location.reload();
    });
  }

  refuseHoliday(id: string) {
    this.adminService.refuseHoliday(id).subscribe (data => {
      window.location.reload();
    });
  }
  

}
