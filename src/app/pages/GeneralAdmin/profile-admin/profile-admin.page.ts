import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../services/alert.service';
import { AdminService } from '../../../services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from '../../../model/admin';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.page.html',
  styleUrls: ['./profile-admin.page.scss'],
})
export class ProfileAdminPage implements OnInit {

  data:any;
  admins: Admin[];

  constructor(private adminService: AdminService, 
    private alertService: AlertService,
    private route: ActivatedRoute,  
    private router: Router,
    public menu: MenuController) {
      this.data = this.route.snapshot.paramMap.get('companyName');
     }

  ngOnInit() {
    this.adminService.getAdmin(this.data).subscribe (admins => {
      this.admins = admins;
    });

    this.menu2();
  }

  menu2() {
    this.menu.enable(true, 'menu2');
  }

  obtainCompany(){
    localStorage.setItem('companyName', this.data);
  }

  /*updateAdmin(workerID:string){
    this.router.navigateByUrl('/update-profile/'+ workerID);  
  }*/

}
