import { TeamService } from '../../services/team.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input()
  user: User;

  @Input()
  index: number;

  teamName: string;

  constructor(

  public teamService: TeamService,
  public userService: UserService,
  private router: Router,
  private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.teamName = this.route.snapshot.paramMap.get('teamName');
  }

  newUser(){
    this.teamService.addUser(this.user, this.teamName).subscribe((res: Response) => {
      this.router.navigateByUrl('/teams')
    });
  }

  /*deleteUser(name: string) {
    this.userService.deleteUser(name).subscribe (data => {
      window.location.reload();
    });
  }

  updateUser(_id: string) {

    localStorage.setItem("data", JSON.stringify(_id));

    this.userService.updateUser(_id, this.user).subscribe ((res: Response) => {
      this.router.navigateByUrl('/update/' + _id)
    });
  }
*/

}
