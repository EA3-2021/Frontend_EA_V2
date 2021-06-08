import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Team } from '../../model/team'
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss'],
})
export class TeamFormComponent implements OnInit {

  teamForm: FormGroup;
  isSubmitted = false;

  constructor(
  public teamService: TeamService,
  private router: Router,
  private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.teamForm = this.formBuilder.group({
      name:['', [Validators.required, Validators.nullValidator]]
    });

  }

  get formControls(){
    return this.teamForm.controls;
  }

  submitTeam(): void {
    this.isSubmitted = true;
    if(this.teamForm.invalid){
      return;
    }
    this.teamService.newTeam(this.teamForm.value)
    .subscribe((team: Team) => {
      this.router.navigateByUrl('/teams');
    });
  }
}
