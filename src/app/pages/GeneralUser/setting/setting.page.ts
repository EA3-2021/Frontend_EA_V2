import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { MenuController } from '@ionic/angular';

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
    private router: Router,
    private userService: UserService,
    public menu: MenuController) { this.data = this.route.snapshot.paramMap.get('workerID');}

  ngOnInit() {
    this.menu1();
  }

  menu1() {
    this.menu.enable(true, 'menu1');
  }

  obtainID(){
    localStorage.setItem('workerID', this.data);
  }

  myChange(){
    console.log(this.notification);
    console.log(this.private);
    console.log(this.authentication);
    console.log(this.location);
  }

  save(){
    let configuration = {'workerID': this.data, 'notification': this.notification, 'private': this.private, 'authentication': this.authentication, 'location': this.location}
    this.userService.updateConfiguration(configuration).subscribe(() => { this.router.navigateByUrl('/user-desk/'+this.data);});
  }

}
