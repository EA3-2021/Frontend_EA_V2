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
  teamName: string;

  constructor(
  public userService: UserService,
  private router: Router,
  private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      //this.teamName = this.route.snapshot.paramMap.get('teamName');
      this.userService.getUsers().subscribe (users => {
        this.users = users;
      });
  }

  deleteUser(name: string) {
    this.userService.deleteUser(name).subscribe (data => {
      window.location.reload();
    });
  }

  /*updateUser(_id: string) {

    localStorage.setItem("data", JSON.stringify(_id));

    this.userService.updateUser(_id, this.user).subscribe ((res: Response) => {
      this.router.navigateByUrl('/update/' + _id)
    });
  }*/

/*
  newUser() {
      if(this.teamName==null) this.router.navigateByUrl('/newUser');
      else this.router.navigateByUrl('/teams/add/'+this.teamName);
    }

  deleteUsers() {
      this.userService.deleteUsers().subscribe (data => {
        alert('Success');
      });
  }
  */

}
