import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../../model/team';
import { TeamService } from '../../../services/team.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';
import { UserService } from '../../../services/user.service';
import { MenuController } from '@ionic/angular';

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
  private route: ActivatedRoute,
  public menu: MenuController) {
    this.data = this.route.snapshot.paramMap.get('companyName');
   }

  ngOnInit() {
      this.teamService.getTeams(this.data).subscribe (teams => {
        this.teams = teams;
      });

      let companyName = this.data;

      this.userService.getUsers(companyName).subscribe (users => {
        this.users = users;
      });

      this.menu2();
  }

  menu2() {
    this.menu.enable(true, 'menu2');
  }

  obtainCompany(){
    localStorage.setItem('companyName', this.data);
  }

    addTeam() {
      this.router.navigateByUrl('/team-form/'+ this.data);
    }

    addUser(teamName: string){
      this.router.navigateByUrl('/user-to-team/' + this.data + '/' + teamName);
    }

    deleteTeam(name: string) {
      this.teamService.deleteTeam(name,this.data).subscribe (data => {
        window.location.reload();
      });
    }

    deleteUser(name:string,id:string){
      this.teamService.deleteUser(name,id,this.data).subscribe (data => {
        window.location.reload();
      });
    }

}
