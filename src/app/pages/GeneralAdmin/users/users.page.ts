import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../model/user';

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
  ) {
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
  }

  deleteUser(name: string) {
    this.userService.deleteUser(name).subscribe (data => {
      window.location.reload();
    });
  }

  updateUser(_id: string) {
    localStorage.setItem("data", JSON.stringify(_id));
    this.router.navigateByUrl('/update-form') 
  }

  addTask() {
    this.router.navigateByUrl('/tasks-by-admin/' + this.data ) 
  }
}
