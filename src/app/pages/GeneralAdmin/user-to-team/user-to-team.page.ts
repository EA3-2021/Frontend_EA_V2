import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../model/user';
import { TeamService } from '../../../services/team.service';

@Component({
  selector: 'app-user-to-team',
  templateUrl: './user-to-team.page.html',
  styleUrls: ['./user-to-team.page.scss'],
})
export class UserToTeamPage implements OnInit {

  users: User[];
  teamName: string;
  
  user: User;

  constructor(public teamService: TeamService, public userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.teamName = this.route.snapshot.paramMap.get('teamName');
    this.userService.getUsers().subscribe (users => {
      this.users = users;
    });
  }

  /*newUser(_id: string){

    localStorage.setItem("data", JSON.stringify(_id));

    this.teamService.addUser(this.teamName, _id).subscribe((res: Response) => {
      this.router.navigateByUrl('/teams')
    });
  }*/
  /*newUser(_id: string, user: User){

    this.teamService.addUser(this.teamName, _id, user).subscribe((res: Response) => {
      this.router.navigateByUrl('/teams').then(() => {
        window.location.reload();
    });
  });
  }*/

  newUser(user: User){

    this.teamService.addUser(this.teamName, user).subscribe((res: Response) => {
      this.router.navigateByUrl('/teams').then(() => {
        window.location.reload();
    });
  });
  }

}
