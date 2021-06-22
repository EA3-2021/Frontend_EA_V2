import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../model/user';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: User[];
  usersID: User[];
  data: any;

  constructor(
  public userService: UserService,
  private router: Router,
  private route: ActivatedRoute,
  public menu: MenuController) {
    this.data = this.route.snapshot.paramMap.get('companyName');
  }

  ngOnInit(): void { 
      let companyName = this.data;
      this.userService.getUsers(companyName).subscribe (users => {
        this.users = users;
      });
      this.userService.getWorkerID(companyName).subscribe (usersID => {
        this.usersID = usersID;
      });

      this.menu2();
  }

  menu2() {
    this.menu.enable(true, 'menu2');
  }

  obtainCompany(){
    localStorage.setItem('companyName', this.data);
  }

  deleteUser(name: string) {
    this.userService.deleteUser(name).subscribe (data => {
      window.location.reload();
    });
  }

  addTask(workerID: string) {
    this.router.navigateByUrl('/tasks-by-admin/' + this.data +'/'+ workerID )
    .then(() => {
      window.location.reload();
    });
  }
}
