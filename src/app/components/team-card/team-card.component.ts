import { Router } from '@angular/router';
import { Team } from '../model/team';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
})
export class TeamCardComponent implements OnInit {

  @Input()
  team: Team;

  @Input()
  teamIndex: number;

  @Input()
  users: User;


  constructor(private router: Router) { }

  ngOnInit() {}

/*
  addUser(teamName: string){
    this.router.navigateByUrl('/newUser/' + teamName);
  }
*/

}
