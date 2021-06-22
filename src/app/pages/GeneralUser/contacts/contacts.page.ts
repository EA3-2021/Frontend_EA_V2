import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../model/user';
import { MenuController } from '@ionic/angular';
import { TeamService } from '../../../services/team.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  users: User[];
  usersID: User[];
  data: any;

  constructor(
  public userService: UserService,
  private router: Router,
  private route: ActivatedRoute,
  public menu: MenuController) {
    this.data = this.route.snapshot.paramMap.get('workerID');
  }

  ngOnInit(): void {
      this.userService.getUsersforContacts(this.data).subscribe (users => {
        this.users = users;
      });

      this.menu1();
      console.log(this.data);
  }

  menu1() {
    this.menu.enable(true, 'menu1');
  }

  addChat(workerID: string) {
    this.router.navigateByUrl('/chat/'+workerID )    //+ this.data +'/'+ workerID
    .then(() => {
      window.location.reload();
    });
  }

}
