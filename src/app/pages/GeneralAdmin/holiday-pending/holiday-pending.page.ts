import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../../../model/request';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-holiday-pending',
  templateUrl: './holiday-pending.page.html',
  styleUrls: ['./holiday-pending.page.scss'],
})
export class HolidayPendingPage implements OnInit {

  requests: Request[];
  data:any;
  constructor(public userService: UserService,private route: ActivatedRoute) {this.data = this.route.snapshot.paramMap.get('companyName');  }

  ngOnInit() {

    this.userService.getHolidayPending(this.data).subscribe (requests => {
      this.requests = requests;
    });
  }


  acceptHoliday(id: string) {
    this.userService.acceptHoliday(id).subscribe (data => {
      window.location.reload();
    });
  }

  refuseHoliday(id: string) {
    this.userService.refuseHoliday(id).subscribe (data => {
      window.location.reload();
    });
  }
  

}
