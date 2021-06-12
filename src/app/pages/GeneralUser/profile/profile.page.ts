import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../services/alert.service';
import { UserService } from '../../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';

@Component({
  selector: 'profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

 
  data:any;
  users: User[];

  constructor(private userService: UserService, private alertService: AlertService,
    private route: ActivatedRoute,  private router: Router) {
    this.data = this.route.snapshot.paramMap.get('workerID');}

  ngOnInit(): void {

    this.userService.getUser(this.data).subscribe (users => {
      this.users = users;
    });

    console.log(this.users);

  }

  updateUser(workerID:string){
    this.router.navigateByUrl('/update-profile/'+ workerID);  
  } 

}
