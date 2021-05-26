import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
/*
  users: User[];
  teamName: string;
*/
  constructor(
  /*
  public userService: UserService,
  private router: Router,
  private route: ActivatedRoute
  */
  ) { }

  ngOnInit(): void {
  /*
      this.teamName = this.route.snapshot.paramMap.get('teamName');
      this.userService.getUsers().subscribe (users => {
        this.users = users;
      });
      */
  }
/*
  newUser() {
      if(this.teamName==null) this.router.navigateByUrl('/newUser');
      else this.router.navigateByUrl('/teams/add/'+this.teamName);
    }

  adminDesk(){
      this.router.navigateByUrl('/adminDesk');
  }

  deleteUsers() {
      this.userService.deleteUsers().subscribe (data => {
        alert('Success');
      });
  }
  */

}
