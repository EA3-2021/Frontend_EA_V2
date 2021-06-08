import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {

  public notification:boolean = true;
  public private:boolean = true;
  public authentication:boolean = true;

  constructor(private adminService: AdminService, private router: Router) { }

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
