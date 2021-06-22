import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { AdminService } from '../../../services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration-request',
  templateUrl: './registration-request.page.html',
  styleUrls: ['./registration-request.page.scss'],
})
export class RegistrationRequestPage implements OnInit {

  users: User[];
  data:any;

  constructor(private route: ActivatedRoute,
    public adminService: AdminService,) {this.data = this.route.snapshot.paramMap.get('companyName'); }

  ngOnInit() {

    this.adminService.getRegisterRequest().subscribe (users => {
      this.users = users;
    });

  }

  acceptRequest(workerID:string,email:string) {
    this.adminService.acceptRegisterRequest(workerID,email).subscribe (data => {
      window.location.reload();
    });
  }

  refuseRequest(workerID: string, email:string) {
    this.adminService.refuseRegisterRequest(workerID, email).subscribe (data => {
      window.location.reload();
    });
  }

}
