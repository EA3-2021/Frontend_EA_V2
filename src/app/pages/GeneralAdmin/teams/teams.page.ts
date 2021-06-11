import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../../model/team';
import { TeamService } from '../../../services/team.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  teams: Team[];
  data: any;

  @Input()
  user: User;
  users: User[];

  constructor(
  public teamService: TeamService, 
  private router: Router, 
  public userService: UserService,
  private route: ActivatedRoute,) {
    this.data = this.route.snapshot.paramMap.get('companyName');
   }

  ngOnInit() {
      this.teamService.getTeams().subscribe (teams => {
        this.teams = teams;
      });

      let companyName = this.data;

      this.userService.getUsers(companyName).subscribe (users => {
        this.users = users;
      });
  }

    addTeam() {
      this.router.navigateByUrl('/team-form');
    }

    addUser(teamName: string){
      this.router.navigateByUrl('/user-to-team/' + teamName);
    }

}
