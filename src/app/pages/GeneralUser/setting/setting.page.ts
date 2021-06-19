import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  public notification:boolean = true;
  public private:boolean = true;
  public authentication:boolean = true;
  public location:boolean = true;
  data:any;
  
  constructor(private route: ActivatedRoute,
    private router: Router,private userService: UserService) { this.data = this.route.snapshot.paramMap.get('workerID');}

  ngOnInit() {
  }


  save(){

    let configuration = {'workerID': this.data, 'notification': this.notification, 'private': this.private, 'authentication': this.authentication, 'location': this.location}
    this.userService.updateConfiguration(configuration).subscribe(() => { this.router.navigateByUrl('/user-desk/'+this.data);});
  }

}
