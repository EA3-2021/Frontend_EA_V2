import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {

  public notification:boolean = true;
  public private:boolean = true;
  public authentication:boolean = true;
  data:any;

  constructor(private adminService: AdminService, private router: Router,private route: ActivatedRoute) { 
    this.data = this.route.snapshot.paramMap.get('companyName');}

  ngOnInit() {
  }

  myChange(){
    console.log(this.notification);
    console.log(this.private);
    console.log(this.authentication);
  }
  save(){
    /*console.log(this.notification);
    console.log(this.private);
    console.log(this.authentication);*/

    let configuration = {'notification': this.notification, 'private': this.private, 'authentication': this.authentication}

    console.log (configuration);

    /*this.adminService.updateConfiguration(configuration);*/
    this.adminService.updateConfiguration(configuration).subscribe(() => { this.router.navigateByUrl('/admin-desk');});
  }

}
