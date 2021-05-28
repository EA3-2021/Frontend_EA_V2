import { Component, OnInit } from '@angular/core';
import { Team } from '../../../model/team';
import { TeamService } from '../../../services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  teams: Team[];
  constructor(

  public teamService: TeamService, private router: Router) { }

  ngOnInit() {
      this.teamService.getTeams().subscribe (teams => {
        this.teams = teams;
      })
  }

    addTeam() {
      this.router.navigateByUrl('/team-form');
    }

}
