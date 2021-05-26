import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

//   teams: Team[];
  constructor(
  /*

  public teamService: TeamService, private router: Router

  */
  ) { }

  ngOnInit() {
  /*
      this.teamService.getTeams().subscribe (teams => {
        this.teams = teams;
      })
  */
  }

  /*

    addTeam() {
      this.router.navigateByUrl('/newTeam');
    }

    adminDesk(){
      this.router.navigateByUrl('/adminDesk');
    }

  */

}
