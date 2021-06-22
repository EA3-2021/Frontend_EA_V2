import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { MenuController } from '@ionic/angular';
import { Configuration } from 'src/app/model/configuration';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  public notification:boolean = false;
  public private:boolean = false;
  public authentication:boolean = false;
  public location:boolean = false;
  
  data:any;
  configurations: Configuration[];
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    public menu: MenuController) { 
      this.data = this.route.snapshot.paramMap.get('workerID');}

  ngOnInit() {
    this.menu1();

    this.userService.getCurrentConfiguration(this.data).subscribe (configurations => {
      this.configurations = configurations;
      this.notification = this.configurations[0].notification;
      this.private = this.configurations[0].private;
      this.authentication = this.configurations[0].authentication;
      this.location = this.configurations[0].location;
    });
  }

  menu1() {
    this.menu.enable(true, 'menu1');
  }

  obtainID(){
    localStorage.setItem('workerID', this.data);
  }

  myChange(){}

  save(){
    let configuration = {'notification': this.notification, 'private': this.private, 'authentication': this.authentication, 'location': this.location}
    this.userService.updateConfiguration(this.data, configuration).subscribe(() => { this.router.navigateByUrl('/user-desk/'+this.data);});
  }

}
