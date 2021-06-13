import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  users: User[];
  data:any;
  constructor(
  public userService: UserService,
  private router: Router,
  private route: ActivatedRoute,
  ) {this.data = this.route.snapshot.paramMap.get('workerID');}

  ngOnInit(): void { 
      /*this.userService.getUsers().subscribe (users => {
        this.users = users;
      });*/
  }
}
