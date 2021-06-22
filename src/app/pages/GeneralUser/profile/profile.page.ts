import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../services/alert.service';
import { UserService } from '../../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  data:any;
  users: User[];

  constructor(private userService: UserService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    public menu: MenuController) {
    this.data = this.route.snapshot.paramMap.get('workerID');}

  ngOnInit(): void {

    this.userService.getUser(this.data).subscribe (users => {
      this.users = users;
    });

    this.menu1();

  }

  menu1() {
    this.menu.enable(true, 'menu1');
  }

  obtainID(){
    localStorage.setItem('workerID', this.data);
  }

  updateUser(workerID:string){
    this.router.navigateByUrl('/update-profile/'+ workerID);
  }

}
