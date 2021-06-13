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
  data: any;

  constructor(public teamService: TeamService, public userService: UserService, private router: Router, private route: ActivatedRoute) { 
      this.data = this.route.snapshot.paramMap.get('companyName');
      this.teamName = this.route.snapshot.paramMap.get('teamName');
    }

  ngOnInit() { 
    this.userService.getUsers(this.data).subscribe (users => {
      this.users = users;
    });
  }

  newUser(user: User){

    this.teamService.addUser(this.teamName, user).subscribe((res: Response) => {
      this.router.navigateByUrl('/teams/'+ this.data).then(() => {
        window.location.reload();
    });
  });
  }

}
